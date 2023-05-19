import "./Movie.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { store } from "../../redux/store";
import LikeButton from "../../components/likebutton/LikeButton";
import {
  addLikedMovies,
  removeLikedMovies,
} from "../../redux/stores/likedMovies";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

const Movie = ({ movie, isLikeShown }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const onUpdateLikedMovie = (liked, movie) => {
    setIsLiked(liked);
    liked
      ? dispatch(addLikedMovies(movie))
      : dispatch(removeLikedMovies(movie));
  };
  useEffect(() => {
    const likedMovies = store.getState().likedMovies;
    const isMovieLiked =
      likedMovies.find((m) => m.id === movie.id) !== undefined;
    setIsLiked(isMovieLiked);
  }, [movie]);

  return (
    <div className="movie" key={movie.id}>
      <img
        className="img"
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      {isLikeShown && (
        <LikeButton
          isLiked={isLiked}
          onClick={(liked) => onUpdateLikedMovie(liked, movie)}
        />
      )}
    </div>
  );
};

export default Movie;
