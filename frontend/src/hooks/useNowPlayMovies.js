import axios from "axios";
import { getNowPlayMovies } from "../Redux/moiveSlice";
import { Now_Play_Movie, options } from "../utils/constant";
import {useDispatch} from "react-redux"

const useNowPlayMovies = async () => {
    const dispatch = useDispatch()
  try {
    const res = await axios.get(Now_Play_Movie, options);
    dispatch(getNowPlayMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useNowPlayMovies;
