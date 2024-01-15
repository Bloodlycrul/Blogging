import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
const BlogPage = lazy(() => import("./components/BlogPage"));
const AboutUS = lazy(() => import("./pages/AboutUs"));
const PostArticle = lazy(() => import("./pages/PostArticle"));
const NewsLetterPage = lazy(() => import("./pages/NewsLetterPage"));
const SignLogin = lazy(() => import("./pages/SignLogin"));
import ShowAllBlog from "./components/ShowAllBlog";

function App() {

  return (
    <>
      <div className="text-white overflow-hidden">
        <div className="w-[80.833vw] h-auto m-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} errorElement={<Error />} />
                <Route
                  path="/blog/:id"
                  element={<BlogPage />}
                  errorElement={<Error />}
                />
                <Route path="/*" element={<Error />} />
                <Route
                  path="/uploadPost"
                  element={<PostArticle />}
                  errorElement={<Error />}
                />
                <Route
                  path="/signIn"
                  element={<SignLogin />}
                  errorElement={<Error />}
                />
                <Route
                  path="/newsletter"
                  element={<NewsLetterPage />}
                  errorElement={<Error />}
                />
                <Route path="/blogs" element={<ShowAllBlog />} />
                <Route
                  path="/about"
                  element={<AboutUS />}
                  errorElement={<Error />}
                />
              </Routes>
            </Router>
          </Suspense>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
