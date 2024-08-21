import { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

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
      <div className="hero bg-ghost h-screen w-screen">
        <div className="hero-content">
          <div className="card bg-base-100 shadow-xl">
            <form className="card-body max-h-[84vh] overflow-y-auto">
              <div className="text-center text-stone-300 mb-3">
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
              </div>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.firstName}
                      onChange={handleChange}
                    >
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input input-bordered text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.lastName}
                      onChange={handleChange}
                    >
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input input-bordered text-white"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.birthday}
                      onChange={handleChange}
                    >
                      Date of Birth
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter birthday"
                    className="input input-bordered text-white"
                    required
                  />
                </div>

                <br />

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.email}
                      onChange={handleChange}
                    >
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="input input-bordered text-white"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.username}
                      onChange={handleChange}
                    >
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="input input-bordered text-white"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.password}
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
                </div>

                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-orange-100"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    >
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered text-white"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-warning btn-md text-md font-semibold mb-4"
                  onSubmit={handleSubmit}
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

              <div className="form-control mt-3 items-center">
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
        <Footer />
      </div>
    </>
  );
};

export default Registration;
