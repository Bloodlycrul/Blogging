import { Link } from "react-router-dom";
import Home from "../pages/Home";
import UseFetch from "../utils/UseFetch";

const Header = () => {
  let loading = UseFetch();

  if (!loading) {
    return <h1>Loading.. </h1>;
  }

  return (
    <div className="m-auto py-[30px] font-Inter ">
      {/* Top Header Section */}
      <div className="flex justify-between ">
        <Link to={"/"}>
          <h1 className="font-[600] text-[20px]">Gaurav Rana</h1>
        </Link>

        <div className="font-[400] text-[20px]">
          <Link to={"/blogs"} className="px-[15px]">
            Blog
          </Link>
          <Link to={Home} className="px-[15px]">
            Projects
          </Link>

          <Link to={"/about"} className="px-[15px]">
            About
          </Link>
          <Link to={"/newsletter"} className="px-[15px]">
            Newsletter
          </Link>

          <Link to={"/uploadPost"}>
            <button className="bg-white text-black p-2 rounded-2xl">
              Upload Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
