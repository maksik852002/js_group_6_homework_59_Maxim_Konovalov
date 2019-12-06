import React from 'react';
import './Joke.css';

const Joke = props => {
  return (
    <div className="jokeBody">  
      <div className="d-flex justify-content-between align-items-center mb-3">
       <span>Created by: <img src={props.ava} alt="Chuck"/></span> 
       <span>at {props.date}</span>
      </div>
      <p className="jokeText">{props.text}</p>
    </div>
  )
};

export default Joke;