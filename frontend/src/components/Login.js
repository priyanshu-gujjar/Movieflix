import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../Redux/userSlice";

const Login = () => {
  const [isLogin, setisLogin] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setisLogin(!isLogin);
  };

  const getInputData = async (e) => {
    dispatch(setLoading(true));
    e.preventDefault();
    if (isLogin) {
      // login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Contant-type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));

        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // register
      dispatch(setLoading(true));
      const user = { fullname, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Contant-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setisLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div >
        <img
          className="w-[100vw] h-[100vh]  bg-cover "
          src="https://davidumer.github.io/clone-netflix/img/background.jpg"
          alt="cover page"
        />
      </div >
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 p-16 my-28 left-0 right-0 mx-auto top-28 items-center justify-center rounded-lg absolute bg-black  opacity-65  "
      >
        <h1 className="text-3xl text-white mb-4 ">
          {isLogin ? "Login" : "Sign up"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Fullname"
              type="text"
              className="outline-none p-3 m-3 rounded-md bg-gray-600 text-white"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="outline-none p-3 m-3 rounded-md bg-gray-600 text-white"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="outline-none  p-3 m-3 rounded-md bg-gray-600 text-white"
          />

          <button
            type="submit"
            className="bg-blue-700 m-6 mt-6 p-2 text-white rounded-lg"
          >
            {`${isLoading ? "Loading....." : isLogin ? "Login" : "Signup"}`}
          </button>

          <p className="text-white">
            {isLogin ? "New to Moviefilx? " : "Already have an account?  "}
            <span
              onClick={loginHandler}
              className="ml-3  text-sky-400 font-medium cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
