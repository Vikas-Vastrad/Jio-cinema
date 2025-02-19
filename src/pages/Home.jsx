import React, { useEffect, useState } from 'react'
import Header from '../components/navigation/Header';
import Tags from '../components/Tags/tags';
import Channel from '../components/channels/Channel';
import Banner from '../components/banner/Banner';
import Feature from '../components/feature/Feature';
import Shows from '../components/shows/Shows';
import Footer from '../components/footer/Footer';
import Language from '../components/language/Language';

const Home = () => {

  let [movies,setMovies] = useState([]);
  let [featuredMovies, setFeaturedMovies] = useState([]);
  let [dramaMovies, setDramaMovies] = useState([]);
  let [hindiMovies, setHindiMovies] = useState([]);
  let [topMovies, setTopMovies] = useState([]);

  useEffect(async () => {
    try {
      let movieResponse = await fetch("http://localhost:3000/movies");
      let moviesData = await movieResponse.json();
      setMovies(moviesData);

      let featMovies = moviesData.filter((movie) => {
        return movie.featured === true
      });
      setFeaturedMovies(featMovies.slice(0,4));

      let draMovies = moviesData.filter((movie) => {
        return movie.genre.includes("Drama")
      });
      setDramaMovies(draMovies.slice(0,6));

      let hindiMovies = moviesData.filter((movie) => {
        return movie.language === "Hindi"
      });
      setHindiMovies(hindiMovies.slice(0,6));

      let topRatedMovies = moviesData.filter((movie) => {
        return movie.imdb >= 8.5
      });
      setTopMovies(topRatedMovies.slice(0,6));
    }
    catch (e) {
      console.log(e)
    }
  }, []);

  return (
    <div>
      <Header movies={movies}/>
      <Tags />
      <Banner />
      <Channel />
      <Feature movies={featuredMovies}/>
      <Shows title="Drama Movies" movies={dramaMovies}/>
      <Language/>
      <Shows title="Hindi Movies" movies={hindiMovies}/>
      <Shows title="English Movies" movies={topMovies}/>
      <Footer />
    </div>
  )
}

export default Home;
