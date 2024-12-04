import { useState, useEffect } from "react";
import MindfulHer from "../assets/video-images/MindfulMe-Her.mp4";
import MindfulHim from "../assets/video-images/MindfulMe-Him.mp4";

const AppVideos = () => {
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    const randomNumber = Math.random() < 0.5 ? 0 : 1;
    setCurrentVideo(randomNumber === 0 ? MindfulHer : MindfulHim);
  }, []);

  return (
    <>
      <div className="hero pt-8 pb-8 w-full">
        <video
          src={currentVideo}
          type="video/mp4"
          playsInline
          loop
          controls={false}
          autoPlay
          muted
          className="w-36 h-36 rounded-full"
        ></video>
      </div>
    </>
  );
};

export default AppVideos;
