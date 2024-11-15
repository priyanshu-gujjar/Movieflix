import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../Redux/moiveSlice";
import { useEffect } from "react";

const useMovieId = async (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieId = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        });
        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovieId();
  }, []);
};

export default useMovieId;
