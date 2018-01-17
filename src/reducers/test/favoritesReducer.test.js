import * as actions from '../../actions/index';
import favoritesReducer from '../favorites-reducer';

describe('favoritesReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(favoritesReducer(undefined, {})).toEqual(expected);
  });

  it('should return new state with movie data added to favorites', () => {
    const movie = { title: 'Air Bud' };
    const expected = [movie];
    const action = actions.addFavorite(1, movie);

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  });

  it('should return new state with movie data removed from favorites', () => {
    const expected = [];
    const action = actions.removeFavorite(1, 432567);

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  });

  it('should return new state with a users favs added to favorites', () => {
    const expected = [{title: 'Coco'}];
    const action = actions.fetchFavorites([{title: 'Coco'}]);

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  });

  it('should return new state and clear favs when a user logs out', () => {
    const expected = [];
    const action = actions.logOut();

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  });
});
