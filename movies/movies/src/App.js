import React from 'react';
import "./App.css";
// ** Router Components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home/Home';
import LikedMovies from './pages/LikedMovies/LikedMovies';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/likedmovies" exact element={<LikedMovies />} />
      </Routes>
    </Router>
  )
}

export default App;
