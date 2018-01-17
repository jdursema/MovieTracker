/*eslint-disable camelcase*/

import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  
  const buttonClass = !props.isFav ? 'card-fav' : 'card-fav selected';
  
  const movieObj = {
    title: props.title,
    movie_id: props.id,
    overview: props.overview,
    vote_average: props.voteAvg,
    poster_path: props.posterPath,
    release_date: props.releaseDate
  };

  const backdrop = props.backdropPath 
    ? `https://image.tmdb.org/t/p/w500${props.backdropPath}` 
    : null;

  const handleCardClick = () => {
    if (!props.user.id) {
      props.history.push('/login');
    } else if (props.user.id && !props.isFav) {
      props.handleAddFav(props.user.id, movieObj);
    } else if (props.user.id && props.isFav){
      props.handleRemoveFav(props.user.id, movieObj.movie_id);
    }
  };
  

  return (
    <div className="Card">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        alt={`Poster for ${props.title}`}
      />
      <div className="overlay">
        <img
          className="backdrop"
          src={backdrop}
          alt={`Back drop for ${props.title}`}
        />
        <button 
          className={buttonClass}
          onClick={handleCardClick}>
        </button>
        <h3>{props.title}</h3>
        <h4>Released: {props.releaseDate}</h4>
        <h4>Rating: {props.voteAvg}</h4>
        <h4>{props.overview}</h4>
      </div>
    </div>
  );
};

export default Card;


Card.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  handleAddFav: PropTypes.func,
  handleRemoveFav: PropTypes.func,
  id: PropTypes.number,
  releaseDate: PropTypes.string,
  voteAvg: PropTypes.number,
  overview: PropTypes.string,
  history: PropTypes.object,
  isFav: PropTypes.bool,
  backdropPath: PropTypes.string
};