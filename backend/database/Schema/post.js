const { Schema, model, default: mongoose } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },

  tags: {
    type: String,
    required: false,
  },

  date: { type: Date, default: Date.now },
});

const newsSchema = new Schema({
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const userSchema = new Schema({
  name : { type: String, required: true},
  email : { type: String, required: true, unique : true },
  password : { type: String, required: true}
})

const postModel = new model("post", postSchema);
const newsSubscription = new model("newsSubscription", newsSchema);
const user = new model("user", userSchema);

module.exports = { postModel, newsSubscription, user };
