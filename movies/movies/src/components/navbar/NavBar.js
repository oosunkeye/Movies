import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
// import {bptn} from "./public/images/bptn.jpeg"
// import bptn from "../public/assets/images/bptn.jpeg"

function NavBar() {
  return (
    <nav className="navbar">
      <div className='nav-logo'>
        <Link to="/">
          <i class="fa-solid fa-house" />
        </Link>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/likedmovies" className="nav-link">
            Liked Movies
          </Link>
        </li>
      </ul>
    </nav >
  )
}

export default NavBar