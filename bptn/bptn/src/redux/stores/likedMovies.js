import { createSlice, current } from '@reduxjs/toolkit';

const likedMoviesStore = createSlice({
    name: 'likedMovies',
    initialState: [],
    reducers: {
        addLikedMovies(state, action) {
            let likedMovies = current(state);
            likedMovies = [...likedMovies, action.payload];
            return likedMovies
        },
        removeLikedMovies(state, action) {
            let likedMovies = current(state);
            likedMovies = likedMovies.filter(movie => movie.id !== action.payload.id);
            return likedMovies
        },
    },
});

export default likedMoviesStore.reducer;

export const { addLikedMovies, removeLikedMovies } = likedMoviesStore.actions;