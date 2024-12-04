import { useState } from "react";
import axios from "axios";
import AppVideos from "../AppVideos";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.password !== formData.confirmPassword ||
      formData.password < 8
    ) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:3000/users", formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero bg-ghost h-screen flex flex-col">
        <div className="hero-content flex-grow flex-col md:flex-row-reverse">
          <div className="text-center md:text-left text-nowrap">
            <h1 className="text-3xl font-bold mb-2">Register now!</h1>
            <h3 className="hero-title text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              <a className="link" href="/">
                MindfulMe: Your Daily Reflection
              </a>
            </h3>

            <p className="hero-subtitle text-xs md:text-sm text-wrap">
              <em>
                &quot;Track your moods, journal your thoughts, and nurture your
                mind.&quot;
              </em>
            </p>
            <AppVideos />
          </div>
          <div className="card bg-base-100 w-96 max-h-[fit-content] shrink-0 shadow-xl flex-grow">
            <form className="card-body p-5">
              {/* <div className="text-center text-stone-300 mb-3">
                <h1 className="hero-title text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-white">
                  <a className="link" href="/">
                    MindfulMe: Your Daily Reflection
                  </a>
                </h1>
                <p className="hero-subtitle text-xs md:text-sm mb-4">
                  <em>
                    &quot;Track your moods, journal your thoughts, and nurture
                    your mind.&quot;
                  </em>
                </p>
                <h3 className="text-lg font-semibold text-nowrap text-yellow-300">
                  Complete the information below
                </h3>
              </div> */}
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.firstName}
                      onChange={handleChange}
                    >
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.lastName}
                      onChange={handleChange}
                    >
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.birthday}
                      onChange={handleChange}
                    >
                      Date of Birth
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter birthday"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.email}
                      onChange={handleChange}
                    >
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>

                <div className="form-control center">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.username}
                      onChange={handleChange}
                    >
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>

                <br />

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.password}
                      onChange={handleChange}
                    >
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-blue-100 text-sm"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    >
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered text-white text-xs"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-5">
                <button
                  className="btn btn-warning btn-sm text-sm font-semibold mb-2.5"
                  onClick={handleSubmit}
                >
                  Register
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

              <div className="form-control mt-2 items-center">
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">
                    Already have an account?{" "}
                    <span className="text-yellow-200">Login!</span>
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
