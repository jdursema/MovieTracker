import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { postAddFavorite, deleteUserFavorite } from '../../actions';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = props => {
  const arrayType = props.location.pathname === '/favorites' 
    ? props.favorites
    : props.movies;
  
  const mappedCards = arrayType.map((movie, index) => {
    const newMovieId = movie.movie_id ? movie.movie_id : movie.id;

    const favMovie = props.favorites.find(favMovie =>
      favMovie.title === movie.title);

    const isFav = favMovie ? true : false;   
    const voteAvg = parseInt(movie.vote_average, 10);

    return ( 
      <Card 
        key={`movie-${index}`}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        posterPath={movie.poster_path}
        handleAddFav={props.handleAddFav}
        handleRemoveFav={props.handleRemoveFav}
        id={newMovieId}
        releaseDate={movie.release_date}
        voteAvg={voteAvg}
        overview={movie.overview}
        user={props.user} 
        history={props.history}
        isFav={isFav} />
    );
  });

  return (
    <div className="CardContainer">
      {mappedCards}
    </div>
  );
};

const mapStateToProps = state => ({ 
  movies: state.movies,
  user: state.user,
  favorites: state.favorites});

const mapDispatchToProps = (dispatch) => ({
  handleAddFav: (userID, movieObj) => 
    dispatch(postAddFavorite(userID, movieObj)),
  handleRemoveFav: (userId, movieId) =>
    dispatch(deleteUserFavorite(userId, movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

CardContainer.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
  favorites: PropTypes.array,
  handleAddFav: PropTypes.func,
  handleRemoveFav: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
};