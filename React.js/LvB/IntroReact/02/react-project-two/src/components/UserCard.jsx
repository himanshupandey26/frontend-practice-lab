import React from 'react'
import './UserCard.css'

import userImage from '../assets/user_profile.jpeg'

const UserCard = (props) => {
  return (
    <div id='card-container' style={props.style}>
        <div id="img-container">
            <img id='user-img' src={userImage} alt="user profile picture" />
        </div>
        <div id="info-container">
            <h4 id="user-name">
                {props.name}
            </h4>
            <p id="user-description">{props.desc}.</p>
        </div>
    </div>
  )
}

export default UserCard
