import { useEffect, useState } from 'react'
import './App.css'
import { findMovie, getMovie } from './api';




function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then((result) => {
      setMovies(result)
    });
  }, [])

  // const getMovies = async () => {
  //   const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=649df09a1814bf6cf352af606c2923b2`);
  //   console.log(response.data.results);
  //   setMovies(response.data.results);
  // }


  const GetMovies = () => {
    return movies.map((movie) => {
      return (
        <div className='border-black rounded-sm text-center border-2 bg-slate-900 p-2 text-white' key={movie.id}>
          <p className='text-3xl py-2 font-semibold'>{movie.title}</p>
          <img className='mx-auto justify-center' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
          <p className='text-xl'>Rate : <span className='text-yellow-500'>{movie.vote_average}</span></p>
          <p className='text-xl'>{movie.release_date}</p>
        </div>
      )
    })
  }




  const Search = async (q) => {
    if (q.length > 1) {
      const query = await findMovie(q);
      setMovies(query)
      console.log(query);
    }
  }





  return (
    <div>
      <div className='text-5xl font-bold mx-auto text-center p-10 text-white ' >Movie Reference</div>
      <div className='mx-auto md:w-1/3 w-1/2'>
        <input type="text"
          className='mx-auto p-3 items-center rounded-md w-full' placeholder='Search Movie..'
          onChange={({ target }) => Search(target.value)} />
      </div>
      <div className='grid grid-cols-1 justify-around  sm:grid-cols-2 xl:grid-cols-3 gap-5 p-5'>
        <GetMovies />
      </div>
    </div>
  )
}

export default App
