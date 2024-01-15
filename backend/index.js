const express = require("express");
const app = express();
const port = 3000;
const connection = require("./database/connection");
const { postModel, user } = require("./database/Schema/post");
const cors = require("cors");
const { newsSubscription } = require("./database/Schema/post");

app.use(express.json());
app.use(cors());
connection;

app.post("/post", async (req, res) => {
  try {
    let { title, description, imageUrl } = req.body;
    if (title && description && imageUrl) {
      const postDetails = await new postModel({
        title,
        description,
        imageUrl,
      });
      await postDetails.save();
      res.status(200).json({
        postDetails: "success",
      });
    } else {
      res.status(400).send("Please enter all the required parameters");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/newsSubscribe", async (req, res) => {
  try {
    const email = req.body.email;
    if (email) {
      const subscription = await new newsSubscription({ email });
      await subscription.save();
      res.status(200).json({
        message: "Success",
      });
    } else {
      res.status(500).json({
        message: "Error",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/post", async (req, res) => {
  try {
    const detail = await postModel.find({});
    res.status(200).json({ detail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/signUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const userFinal = await user.create({
        email,
        password,
        name,
      });

      userFinal.save();
      res.status(200).json({
        message: "User created successfully",
        details : userFinal
      })

    } else {
      res.status(401).json({
        message: "Please fill all the requried fields",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.use(function (err, req, res) {
  console.log(err.message);
  res?.status(500).json({ error: err.message });
  res.end();
});

app.listen(port, () => {
  console.log("listening on " + port);
});
