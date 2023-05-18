import React from 'react';
import './LikedMovies.css';
import { store } from '../../redux/store';
import Movie from '../../components/movie/Movie';

const LikedMovies = () => {
    const likedMovies = store.getState().likedMovies;
    return (
        <div className='liked-movies'>
            {likedMovies.length > 0 ? likedMovies.map((movie) => {
                return <Movie movie={movie} key={movie.id} />
            }) : <h4>No liked movies.</h4>}
        </div>
    )
}

export default LikedMovies;