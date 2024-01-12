import CardView from "./CardView";
import CardViewFlex from "./CardViewFlex";
import { Link } from "react-router-dom";
import AllBlog from "./AllBlog";
import { useSelector } from "react-redux";

const RecentPost = () => {
  const postsItems = useSelector((store) => store.post.posts);

  return (
    <div className="w-full p-[32] mt-[60px]">
      <h1 className="text-[24px] font-Inter font-[600] mb-[32px] ">
        Recent blog posts
      </h1>
      <div className="flex">
        <div className="recent-blog w-3/6  mr-[32px]">
          {postsItems.length > 0 ? (
            <Link to={`/blog/${postsItems[postsItems.length - 1]?._id}`}>
              <CardView
                key={postsItems[postsItems.length - 1]?._id}
                title={postsItems[postsItems.length - 1]?.title}
                description={postsItems[postsItems.length - 1]?.description}
                imageUrl={postsItems[postsItems.length - 1]?.imageUrl}
                className={"w-[1300px] h-[450px] object-cover"}
              />
            </Link>
          ) : (
            <h2>Loading</h2>
          )}
        </div>

        <div className="flex-view-container w-3/6">
          {postsItems.length > 0 && (
            <>
              <Link to={`/blog/${postsItems[postsItems.length - 2]?._id}`}>
                <CardViewFlex
                  key={postsItems[postsItems.length - 2]?._id}
                  title={postsItems[postsItems.length - 2]?.title}
                  description={postsItems[postsItems.length - 2]?.description}
                  imageUrl={postsItems[postsItems.length - 2]?.imageUrl}
                />
              </Link>

              <Link to={`/blog/${postsItems[postsItems.length - 3]?._id}`}>
                <CardViewFlex
                  className="mt-[20px]"
                  key={postsItems[postsItems.length - 3]?._id}
                  title={postsItems[postsItems.length - 3]?.title}
                  description={postsItems[postsItems.length - 3]?.description}
                  imageUrl={postsItems[postsItems.length - 3]?.imageUrl}
                />
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="w-full my-[200px] m-auto flex items-center justify-between">
        <Link to={`/blog/${postsItems[postsItems.length - 4]?._id}`}>
          <CardViewFlex
            contentClass={"w-full"}
            key={postsItems[postsItems.length - 4]?._id}
            title={postsItems[postsItems.length - 4]?.title}
            description={postsItems[postsItems.length - 4]?.description}
            imageUrl={postsItems[postsItems.length - 4]?.imageUrl}
            className={"w-full h-[450px] object-cover justify-between"}
            imageClass={"w-[1300px]"}
            contentLength={800}
          />
        </Link>
      </div>

      <div>
        <AllBlog />
      </div>
    </div>
  );
};

export default RecentPost;
