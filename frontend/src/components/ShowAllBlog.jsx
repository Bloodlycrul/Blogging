import { useSelector } from "react-redux";
import CardView from "./CardView";
import { Link } from "react-router-dom";
import { useState } from "react";

const ShowAllBlog = () => {
  // eslint-disable-next-line
  const [blogLength, setBlogLength] = useState(8)
  const allBlog1 = useSelector((store) => store.post.posts);
  const allBlog = [...allBlog1].reverse().slice(0, blogLength);


  const handlePaginations = ()=>{
    let totalLength = allBlog1.length
    console.log(totalLength)
    setBlogLength(blogLength + 8)
    console.log(blogLength)
  }

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

      <button onClick={handlePaginations} className={`border px-[20px] py-[10px] rounded-lg text-center m-auto flex justify-center my-[100px] ${allBlog1.length === allBlog.length ? 'hidden' : ''} `}>Load More</button>
    </div>
  );
};

export default ShowAllBlog;
