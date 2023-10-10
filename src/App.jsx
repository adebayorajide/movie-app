import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header';
import MovieCard from './MovieCard';
import "bootstrap/dist/css/bootstrap.min.css";
import img5 from './images/Chevron right.png';
import Footer from './Footer';

const url = "https://api.themoviedb.org/3/movie/popular?api_key=4ca2164a1c63c6b60627b538dee88945";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
       const fetchMovie = async () => {
        try {
      const response = await fetch(url);
      const data  = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      setIsLoading(true)
    }
   
    }

    fetchMovie();
  },[])

  return (
    <div className="container">
      <header className='header'>
        <Header />
      </header>
      <section className='section'>
        <h4>Featured Movie</h4>
        <p>see more <img src={img5} alt="" /></p>
      </section>
      
      <div className="grid">
        {isLoading?"There is an error, try gain later..." : movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App
