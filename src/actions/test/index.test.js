import * as actions from '../index';

describe('All actions', () => {
  it('has a type of FETCH_MOVIES', () => {
    const moviesArray = [{ title: 'Jaws' }];
    const expected = {
      type: 'FETCH_MOVIES',
      moviesArray
    };

    expect(actions.fetchMovies(moviesArray)).toEqual(expected);
  });

  it('has a type of CREATE_ACCOUNT', () => {
    const id = { 
      username: 'Julie',
      email: 'jmdursema@gmail.com', 
      password: 'guest' };
    const expected = {
      type: 'CREATE_ACCOUNT',
      id
    };

    expect(actions.createAccount(id)).toEqual(expected);
  });

  it('has a type of LOGIN', () => {
    const userObj = { 
      username: 'Julie',
      email: 'jmdursema@gmail.com', 
      password: 'guest' };
    const expected = {
      type: 'LOGIN',
      userObj
    };

    expect(actions.logIn(userObj)).toEqual(expected);
  });

  it('has a type of ACCOUNT_ERROR', () => {
    const expected = {
      type: 'ACCOUNT_ERROR',
      errorMsg: 'An account already exists with that email'
    };

    expect(actions.newAccountError()).toEqual(expected);
  });

  it('has a type of LOGIN_ERROR', () => {
    const expected = {
      type: 'LOGIN_ERROR',
      errorMsg: 'Email and/or password do not match an existing account'
    };

    expect(actions.logInError()).toEqual(expected);
  });

  it('has a type of LOGOUT', () => {
    const expected = {
      type: 'LOGOUT'
    };

    expect(actions.logOut()).toEqual(expected);
  });


  it('has a type of ADD_FAV', () => {
    const userId = { 
      username: 'Julie',
      email: 'jmdursema@gmail.com', 
      password: 'guest' };
    const movieObj ={
      title: 'The Thing'
    };
    const expected = {
      type: 'ADD_FAV',
      userId,
      movieObj
    };
    expect(actions.addFavorite(userId, movieObj)).toEqual(expected);
  });

  it.skip('runs the function postUserLogin when logInUser has been called', async () => {
    const userObj = { 
      username: 'Julie',
      email: 'jmdursema@gmail.com', 
      password: 'guest' };
    const postUserLogin= jest.fn();
    
    await actions.logInUser(userObj);
    
    expect(postUserLogin).toHaveBeenCalled();
  });
  
  //mockpostUserLogIn= jest.fn()
  //expect when loginUser is called expect mock postUserLogin to have been called. 
});
