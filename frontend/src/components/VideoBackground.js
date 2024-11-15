import React from "react";
import useMovieId from "../hooks/useMovieId";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId,bool }) => {
  const trailerMovie = useSelector((store)=>store.movie.trailerMovie);
  useMovieId(movieId);

  return (
    <div className="w-[vw] overflow-hidden ">
      <iframe
        className={`${bool?" w-[100%]":"w-screen aspect-video"} `}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=XzB2VihDCAmRERF4&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
