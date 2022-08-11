import useFetchUrl from "./useFetchUrl";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

const useMovies = () => {
  const res = useFetchUrl(API_URL);
  console.log(res);
  return res[0] !== null ? res[0].results : res;
};

export default useMovies;
