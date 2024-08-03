import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MindfulHer from "../assets/video-images/MindfulMe-Her.mp4";
import MindfulHim from "../assets/video-images/MindfulMe-Him.mp4";
import Footer from "./Footer";

const Homepage = () => {
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    const randomNumber = Math.random() < 0.5 ? 0 : 1;
    setCurrentVideo(randomNumber === 0 ? MindfulHer : MindfulHim);
  }, []);

  return (
    <>
      <div>
        <div className="hero pt-12 pb-8 w-full">
          <video
            src={currentVideo}
            type="video/mp4"
            playsInline
            loop
            controls={false}
            autoPlay
            muted
            className="w-40 h-40 md:w-52 md:h-52 rounded-full"
          ></video>
        </div>

        <div className="divider"></div>

        <div className="hero-overlay bg-transparent flex flex-col gap-0 w-full p-2">
          <h1 className="hero-title text-lg md:text-xl lg:text-2xl font-semibold">
            MindfulMe: Your Daily Reflection
          </h1>
          <p className="hero-subtitle text-xs md:text-sm">
            <em>
              &quot;Track your moods, journal your thoughts, and nurture your
              mind.&quot;
            </em>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
        <button className="btn btn-sm px-10 mx-10 btn-warning">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-sm px-8 mx-10 btn-error">
          <Link to="/register">Register</Link>
        </button>
      </div>

      <div className="divider"></div>

      <Footer />
    </>
  );
};

export default Homepage;
