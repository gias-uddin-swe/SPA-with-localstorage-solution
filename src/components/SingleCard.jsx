import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  return (
    <div className="movie col-md-6 card">
      <div className="img-container ">
        <img className="w-50" src={movie.poster} alt="" />
      </div>
      <h2>Dark night</h2>
      <p>{movie.description}</p>
      <div className="timeAndRating ">
        <p>watch time: {movie.watchTime} m</p>
        <p>IMDB: {movie.imdbRating}/10</p>
      </div>
      <button
        onClick={() => handleWatchTime(movie.watchTime)}
        className="btn btn-primary"
      >
        Book Now
      </button>
    </div>
  );
};

export default SingleCard;
