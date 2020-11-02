import React from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <div className="App">
          <h1>Redux</h1>
          <div className="cointainer">
            {/* <MovieDetails /> */}
            <MovieList />
            <MovieDetails />
          </div>
        </div>
      </div>
    )
  }
}