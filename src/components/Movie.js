import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, title, year, genres, summary, poster}) {
    return (
        <div className="boxContainer">
            <Link to={{
                pathname:`movie/${id}`,
                state: {
                    title, year, genres, summary, poster
                }
            }}>
                <div className = "movie">
                    <div className="movie__posterContainer">
                        <img className="movie__poster" alt ={title} src = {poster} title = {title} />
                    </div>
                    <div className = "movie__data">
                        <h4 className="movie__title">{title}</h4>
                        <h5 className="movie__year">{year}</h5>
                        <h5 className="movie__genres">{genres.join(', ')}</h5>
                        <p className="movie__summary">{summary.slice(0, 180)
                        }...</p>    
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;