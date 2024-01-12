import { useSelector } from "react-redux";
import CardView from "./CardView";
import { Link } from "react-router-dom";

const ShowRecentBlog = () => {
  const fetchPost = useSelector((store) => store.post.posts);
  const recentPost = fetchPost.slice(-8).reverse();

  return (
    <div className="">
      <h1 className="my-[50px] font_Inter text-[30px] font-extrabold">Recent blog posts</h1>

      <div>
        {fetchPost &&
          recentPost.map((post) => {
            return (
              <Link key={post._id} to={`/blog/${post._id}`}>
              <div >
                  <CardView className={'w-[300px]'}
                  widthCheck ={'w-[300px]'}
                    imageUrl={post.imageUrl}
                    title={post.title}
                    description={post.description.substring(0, 140)}
                  />
              </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ShowRecentBlog;
