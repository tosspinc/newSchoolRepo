import React, {useState, useEffect} from 'react';
// import { Route, Routes } from 'react-router-dom'; 
import axios from 'axios';
import Movie from './components/Movie';
import './App.css'


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        {/* <Routes> */}
          { movies.map(movie => <Movie {...movie} key={movie.title}/>)}
          {/* { movies.map(movie => <p>{movie.title}</p>)} */}
        {/* </Routes> */}
      </div>
    </>
  )
}

export default App
