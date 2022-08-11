import React from 'react'
import './LikeButton.css'

const LikeButton = ({ isLiked, onClick }) => {
    const handleClick = () => {
        onClick(!isLiked);
    }
    return (
        <div className='like-btn'>
            <i className={`fa-solid fa-heart like-icon ${isLiked && 'red'}`} onClick={handleClick} />
        </div>
    )
}

export default LikeButton