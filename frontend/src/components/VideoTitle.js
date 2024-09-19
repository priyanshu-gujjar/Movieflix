import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ( {title,overview}) => {
  

  return (
    <div className="w-[vw] absolute text-white pt-[18%] p-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-1/3 mt-4">{overview}</p>
      <div className=" flex mt-7">
        <button className="flex items-center  px-7 py-3 bg-white text-black text-2xl rounded-md  hover:bg-opacity-75">
        <IoIosPlay />
        <span className="ml-2">  play </span>
         </button>
        <button className=" flex mx-3 items-center px-6 py-3 bg-white text-black text-2xl  rounded-md hover:bg-opacity-75">
        <IoInformationCircleOutline />
         <span className="ml-1">Watch more</span>
          
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
