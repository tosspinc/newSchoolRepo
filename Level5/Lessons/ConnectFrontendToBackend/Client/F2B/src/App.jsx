import React, {useState, useEffect} from 'react';
// import { Route, Routes } from 'react-router-dom'; 
import axios from 'axios';
import Movie from './components/Movie';
import AdMovieForm from './components/AdMovieForm.jsx';
import './App.css'

export default function App() {
  const [movies, setMovies] = useState([])

  function getMovies(){ 
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }

  function addMovie(newMovie){
    axios.post("/api/movies", newMovie)
    .then(res => {
      setMovies(prevMovies => [...prevMovies, res.data])
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <div className='movie-container'>
        {/* <Routes> */}
          <div className='add-movie'>
            <AdMovieForm addMovie={addMovie} />
          </div>
          { movies.map(movie => <Movie {...movie} key={movie._id}/>)}
          {/* { movies.map(movie => <p>{movie.title}</p>)} */}
        {/* </Routes> */}
      </div>
    </>
  )
}
