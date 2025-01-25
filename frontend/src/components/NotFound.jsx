import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF1E6] p-4 text-center">
      <div className="w-24 h-24 bg-[#C5B3E6] rounded-full flex items-center justify-center mb-8">
        <svg
          className="w-12 h-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.12 6.88a3 3 0 0 0-4.24-4.24l-5.89 5.89-5.88-5.89a3 3 0 0 0-4.24 4.24l5.89 5.89-5.89 5.88a3 3 0 0 0 4.24 4.24l5.89-5.89 5.88 5.89a3 3 0 0 0 4.24-4.24l-5.89-5.89 5.89-5.88z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4">Take a Deep Breath</h1>
      <p className="text-lg mb-8 max-w-md">
        The page you&apos;re looking for seems to have wandered off to meditate.
        <br />
        Our app is still under construction, finding its inner peace.
      </p>
      <Link to="/">
        <button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-medium px-8 py-2 rounded-md">
          Return Home
        </button>
      </Link>
      <footer className="fixed bottom-0 w-full p-4 text-center text-sm bg-[#2D3339] text-white">
        MindfulMe © 2024 - All rights reserved
      </footer>
    </div>
  );
};

export default NotFound;
