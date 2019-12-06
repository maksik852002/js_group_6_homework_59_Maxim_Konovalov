import React from 'react';
import MovieTracking from "./containers/MovieTracking/MovieTracking";
import JokeApp from "./containers/JokeApp/JokeApp";
import './bootstrap.min.css';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <MovieTracking/>
      </div>
      <div className="col-md-6">
        <JokeApp/>
      </div>
    </div>
  </div>
);

export default App;
