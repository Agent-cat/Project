import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [phno, setPhno] = useState("");

  const upload = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast.error("Please Upload a Picture", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "midland");
      data.append("cloud_name", "vishnu2005");
      fetch("https://api.cloudinary.com/v1_1/vishnu2005/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProfilePicture(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.error("Please Upload a Picture", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please Fill All The Fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("passwords do not match", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:4000/api/auth/signup",
        {
          username,
          email,
          password,
          phno,
          profilePicture,
        },
        config
      );
      toast.success("User Created Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error("User already exists with that email", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="select-none ">
        <section className="min-h-screen  flex flex-col">
          <div className="flex flex-1  items-center justify-center">
            <div className="rounded-lg  mb-40 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
              <form className="text-center " onSubmit={handleSubmit}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  Sign up
                </h1>
                <div className="py-1 text-left">
                  <label className="text-left text-gray-600 ml-3  font-bold">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="py-1 text-left">
                  <label className="text-left text-gray-600 ml-3  font-bold">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="py-1 text-left">
                  <label className="text-left text-gray-600 ml-3 mb-2 font-bold">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Phone Number"
                    onChange={(e) => setPhno(e.target.value)}
                  />
                </div>
                <div className="py-1 text-left">
                  <label className="text-left text-gray-600 ml-3  font-bold">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="py-1 text-left">
                  <label className="text-left text-gray-600 ml-3 mb-2 font-bold">
                    Confirm Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="py-1 text-left">
                  <label className="text-left text-gray-600 ml-3 mb-2 font-bold">
                    Upload Your Picture <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="file"
                    accept=""
                    className="   focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    onChange={(e) => upload(e.target.files[0])}
                  />
                </div>
                <div className="py-1">
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="border-2 border-gray-300 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700"
                  >
                    {loading ? "Loading..." : "Sign Up"}
                  </button>
                </div>
              </form>

              <div className="text-center mt-2">
                <span className="mr-3"> Have an account?</span>
                <Link
                  to="/signin"
                  className=" text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
                >
                  Signin
                </Link>
                <ToastContainer
                  position="bottom-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition:Bounce
                />
                ;
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
