import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../Redux/moiveSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div className="w-48 pr-3 " onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
    </div>
  );
};

export default MovieCard;
