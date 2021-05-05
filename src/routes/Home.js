import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }
  
  async getMovies() {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=download_count");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className = "main">
        {isLoading ? (
          <section>
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          </section>
          ) : (
            <div className="movies">
              {movies.map(movie => {
              return <Movie 
              key = {movie.id} 
              id = {movie.id} 
              title = {movie.title} 
              year = {movie.year} 
              genres = {movie.genres} 
              summary = {movie.summary} 
              poster = {movie.medium_cover_image} />
              })}
            </div>
            )
        }
      </section>
    );
  };
}


export default Home;
