import { Link } from "react-router-dom";
import AppVideos from "./AppVideos";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div>
        <AppVideos />
        <div className="divider"></div>

        <div className="hero-overlay bg-transparent flex flex-col gap-0 w-full p-2">
          <h1 className="hero-title text-2xl md:text-3xl font-semibold">
            MindfulMe: Your Daily Reflection
          </h1>
          <p className="hero-subtitle text-sm md:text-md mx-10">
            <em>
              &quot;Track your moods, journal your thoughts, and nurture your
              mind.&quot;
            </em>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
          <button className="btn btn-md px-10 mx-10 btn-warning">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn btn-md px-8 mx-10 btn-error">
            <Link to="/register">Register</Link>
          </button>
        </div>

        <div className="divider"></div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
