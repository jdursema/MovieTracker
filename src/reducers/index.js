import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import userReducer from './user-reducer';
import errorReducer from './error-reducer';
import favoritesReducer from './favorites-reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  errorStatus: errorReducer,
  favorites: favoritesReducer
});

export default rootReducer;