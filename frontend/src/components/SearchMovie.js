import axios from "axios";
import React, { useState } from "react";
import { options, SEARCH_MOIVE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovieDetails } from "../Redux/searchSlice";
import { setLoading } from "../Redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );

  const sumbitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOIVE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(setSearchedMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
      <div className="flex justify-center pt-[20%]  w-[100%] ">
        <form onSubmit={sumbitHandler} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-300 rounded-lg w-[100%] ">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg "
              type="text"
              placeholder="Search Movies.. "
            />
            <button className="bg-red-700 text-white rounded-md px-5 py-3 ">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <MovieList title={movieName} searchMovie={true} movies={searchedMovie} />
    </>
  );
};

export default SearchMovie;
