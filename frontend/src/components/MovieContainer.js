import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
        <MovieList title={"Now Play Movies"} movies={movie.nowPlayMovies} />
        <MovieList title={"Top Rated Movies"} movies={movie.topratedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
