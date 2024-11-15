export const API_END_POINT = `http://localhost:8080/api/v1/user`;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2E4YmZjMWE1ODVmMGUwMjQ2OTA3MjU5YTE2MmU1NCIsIm5iZiI6MTcyNTQ2NDQyMS4wNjgwOTcsInN1YiI6IjY2ZDg3YTI4MTIzMTIxMzA3ZTZjZWFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tWpGbfRg4nO3lnjK1IdhKkuPrj8pwm08FvSdCsvjvk",
  },
};

export const Now_Play_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const SEARCH_MOIVE_URL = "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
