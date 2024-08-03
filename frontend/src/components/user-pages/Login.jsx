import { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/sign_in",
        loginFormData
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero bg-ghost min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-nowrap mb-2">Login now!</h1>
            <h3 className="hero-title text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              <a className="link" href="/">
                MindfulMe: Your Daily Reflection
              </a>
            </h3>
            <p className="hero-subtitle text-xs md:text-sm">
              <em>
                &quot;Track your moods, journal your thoughts, and nurture your
                mind.&quot;
              </em>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-blue-100"
                    value={loginFormData.email}
                    onChange={handleChange}
                  >
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-blue-100"
                    value={loginFormData.password}
                    onChange={handleChange}
                  >
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered text-white"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  {/* to add link for forget pw page */}
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-warning btn-md text-md font-semibold mb-4"
                  onSubmit={handleSubmit}
                >
                  Login
                </button>

                <div className="divider text-white text-sm">or</div>
                <div className="flex justify-center gap-2 mb-0">
                  {/* to add feature to use fb and google to login */}
                  <a href="/">
                    <img
                      alt="google"
                      src="https://img.icons8.com/?size=100&id=118562&format=png&color=000000"
                      className="w-10 h-10"
                    />
                  </a>
                  <a href="/">
                    <img
                      alt="facebook"
                      src="https://img.icons8.com/?size=100&id=110580&format=png&color=000000"
                      className="w-10 h-10"
                    />
                  </a>
                  <a href="/">
                    <img
                      alt="x"
                      // src="https://img.icons8.com/?size=100&id=ZNMifeqJbPRv&format=png&color=000000"
                      src="https://img.icons8.com/?size=100&id=B1gnsg_baw0Y&format=png&color=000000"
                      className="w-10 h-10"
                    />
                  </a>
                </div>
              </div>

              <div className="form-control mt-3 items-center">
                <label className="label">
                  <a
                    href="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don&apos;t have an account yet?{" "}
                    <span className="text-yellow-200">Sign Up!</span>
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
