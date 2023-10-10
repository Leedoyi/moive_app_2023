import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="moive">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="moive_title">{title}</h3>
        <h5 className="moive_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
        <ul className="genres">
          {genres && genres.map(genre => (
            <li className="genres_genre">{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};

export default Movie;
