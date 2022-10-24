import './App.css';
import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

/* 6a1753a5 */
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6a1753a5';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  
  useEffect(() => {
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className = 'search'>
        <input 
        placeHolder='Search for Movies'
        value = {searchTerm}
        onChange= {(e) => setSearchTerm(e.target.value)}
        />
        <img src= {SearchIcon}
        alt = "search"
        onClick= {() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 ?
        (
          <div className = 'container'>
            {
              movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
          </div>
        ) :
        (
          <div className='empty'>
              <h2>No movies found!</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
