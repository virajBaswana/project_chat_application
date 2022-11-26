import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application<span role="img" aria-label="emoji">💬</span></h1>
      <h2>With multi-room and group chats</h2>
      <h2>Created with React, Express, Node and Socket.IO.</h2>
      <h3>Crafted with <span role="img" aria-label="emoji"> ❤️ </span> by Viraj Baswana</h3>
      <h3>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h3>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;