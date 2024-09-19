import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../Redux/moiveSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout `);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="absolute  flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-61"
        src="https://raw.githubusercontent.com/cdara/movie-box/gh-pages/_images/flix-logo.png"
        alt="MOVIEFLIX-LOGO"
      />

      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdownCircle size="24px" color="white" />
          <h1 className="text-lg font text-white">{user.fullname} </h1>
          <div className="ml-5">
            <button
              onClick={logoutHandler}
              className="bg-red-800 text-white px-4 py-3"
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className="bg-red-800 text-white px-4 py-3 ml-2"
            >
              {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
