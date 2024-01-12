import { useSelector } from "react-redux";
import CardView from "./CardView";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllBlog = () => {
  // eslint-disable-next-line
  const [blogLength, setBlogLength] = useState(8)
  const allBlog1 = useSelector((store) => store.post.posts);
  const allBlog = [...allBlog1].reverse().slice(0, blogLength);

  return (
    <div className="font-Inter w-full">
      <h1 className="my-[30px] text-[40px] font-bold">All Blog Post</h1>

      <div className="grid grid-cols-4 gap-7 ">
        {allBlog &&
          allBlog.map((blog) => {
            return (
              <Link key={blog._id} to={`/blog/${blog._id}`}>
                <CardView
                  className={" h-[300px]"}
                  title={blog.title}
                  description={blog.description}
                  imageUrl={blog.imageUrl}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default AllBlog;
