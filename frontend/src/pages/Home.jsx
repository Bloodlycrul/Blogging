import RecentPost from "../components/RecentPost";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Blog</title>
        <meta
          name="description"
          content="THis is a blog website which help to getting the news knowledge about tech"
        />
      </Helmet>
      <div>
        {/* Heading Div */}
        <div className="m-auto mt-[50px] loadin font-Inter text-[243.8px] text-center font-[700] border-y-2 border-white">
        <h1 className="delay" >THE BLOG</h1>
        </div>
        <RecentPost />
      </div>
    </>
  );
};

export default Home;
