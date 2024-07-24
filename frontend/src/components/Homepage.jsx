import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MindfulHer from "../assets/video-images/MindfulMe-Her.mp4";
import MindfulHim from "../assets/video-images/MindfulMe-Him.mp4";

const Homepage = () => {
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    const randomNumber = Math.random() < 0.5 ? 0 : 1;
    setCurrentVideo(randomNumber === 0 ? MindfulHer : MindfulHim);
  }, []);

  return (
    <>
      <div>
        <div className="hero py-6">
          <video
            src={currentVideo}
            type="video/mp4"
            playsInline
            loop
            controls={false}
            autoPlay
            muted
            className="w-32 h-32 md:w-40 md:h-40 rounded-full"
          ></video>
        </div>

        <div className="hero-content text-center flex-col gap-0 w-full">
          <h1 className="text-xl font-semibold">
            MindfulMe: Your Daily Reflection
          </h1>
          <p className="text-sm">
            <em>
              &quot;Track your moods, journal your thoughts, and nurture your
              mind.&quot;
            </em>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="btn btn-sm px-5 btn-warning">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-sm btn-error">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </>
  );
};

export default Homepage;
