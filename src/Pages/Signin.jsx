import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Signin = ({ setIsLandingPage, setUserInfo, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast.error("Fill all the fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
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
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/signin",
        { email, password },
        config
      );
      toast.success("Signin Success", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      console.log(data);
      navigate("/");
      localStorage.setItem("userInfo", JSON.stringify(data));
      setIsLandingPage(false);
      setUserInfo(data);
      setIsLoggedIn(true);
    } catch (error) {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full    h-full">
      <section className="min-h-screen  flex flex-col select-none ">
        <div className="flex flex-1 mb-28 items-center justify-center">
          <div className="rounded-lg  px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Sign in
              </h1>
              <div className="py-2 text-left">
                <label className="text-left text-gray-600 ml-3 mb-2 font-bold">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-2 text-left">
                <label className="text-left text-gray-600 ml-3 mb-2 font-bold">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  className=" border-2 border-gray-300 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="py-2">
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700"
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>
            <div className="text-center">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-12">
              <span className="mr-3">Don't have an account?</span>
              <Link
                to="/signup"
                className=" text-md text-blue-600 underline font-semibold hover:text-indigo-800"
              >
                Create One
              </Link>
              <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                limit={2}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
