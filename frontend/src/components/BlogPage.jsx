import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowRecentBlog from "./ShowRecentBlog";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { fetchItems } from "../utils/postSlice";
import NewsLetter from "./NewsLetter";

// eslint-disable-next-line
const BlogPage = () => {
  const { id } = useParams();
  const postData = useSelector((store) => store.post.posts);
  console.log(postData);
  const finalData =  postData.find((post) => post._id === id);
  console.log(finalData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!finalData) { // Check if the post data is already in the Redux store
      // Fetch specific post data by id and dispatch to the store
      fetch(`http://localhost:3000/post/${id}`)
        .then(response => response.json())
        .then(data => {
          dispatch(fetchItems(data));
        })
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id, finalData, dispatch]);

  if(!finalData) {
    return <>
      <h1>Loading Items.......</h1>
    </>
  }

  return (
    <>
    <div>
      <Helmet>
        <title>{finalData.title}</title>
        <meta name="description" content={finalData.description} />
        <meta property="og:title" content={finalData.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={"https://localhost/blog/finalData._id"} />
        <meta property="og:image" content={finalData.imageUrl} />

        <meta name="twitter:title" content={finalData.title} />
        <meta name="twitter:description" content={finalData.description} />
        <meta name="twitter:image" content={finalData.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex justify-between">
        <div className="w-1/4 mr-[50px]">
          <ShowRecentBlog />
        </div>
        <div className="w-3/4">
          {finalData && (
            <div className="m-auto">
              <h1 className="font-Inter text-[40px] my-[40px]">
                {finalData?.title}
              </h1>
              <img src={finalData?.imageUrl} alt={finalData?.title} />
              <p className="font-Inter text-[18px] my-[40px]">
                {finalData?.description}
              </p>
            </div>
          )}

          <NewsLetter />

        </div>
      </div>
      </div>
    </>
  );
};

export default BlogPage;
