import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostArticle = () => {
  const title = useRef(null);
  const description = useRef(null);
  const imageUrl = useRef(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const uploadArticle = async () => {
    try {
      let userTitle = title.current.value;
      let userDescription = description.current.value;
      let userImageUrl = imageUrl.current.value;

      if (userTitle && userDescription && userImageUrl) {
        const uploadArticle = await fetch("http://localhost:3000/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: userTitle,
            description: userDescription,
            imageUrl: userImageUrl,
          }),
        });
        if (!uploadArticle) {
          throw new Error(`HTTPS error ! Status: ${uploadArticle.status}`);
        }
        navigate('/')
        setSuccess(true);
        return uploadArticle.json();
      } else {
        setSuccess(false);
      }

    } catch (error) {
      console.log(error);
      resizeBy.status(500).json({
        message: "Please fill out all the required fields",
      });
    }
  };

  return (
    <>
      <div className="w-1/3 flex flex-col m-auto items-center text-black">
        <h1 className="font-Inter text-[20px] my-[30px] text-white ">
          Upload Your Article{" "}
        </h1>
        <input
          ref={title}
          className="border-black border m-[10px] w-[330px] h-[30px] rounded-lg p-[10px] "
          type="text"
          placeholder="Enter the Title"
        />
        <textarea
          rows={4}
          cols={40}
          ref={description}
          className="border-black border m-[10px] w-[330px] h-[30px] rounded-lg p-[10px] "
          type="text"
          placeholder="Enter Description"
        />
        <input
          ref={imageUrl}
          className="border-black border m-[10px] w-[330px] h-[30px] rounded-lg p-[10px] "
          type="text"
          placeholder="Enter the Image Url"
        />
        <button className="text-white" onClick={uploadArticle}>
          Submit
        </button>
        <div className="mt-[30px] text-white">
          {success ? (
            <h1>Uploaded Sucessfull</h1>
          ) : (
            <h1>Please Fill All the required field</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default PostArticle;





/*



*/