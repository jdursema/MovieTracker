import * as helper from '../helper/apiHelper';

export const fetchMovies = (moviesArray) => ({
  type: 'FETCH_MOVIES',
  moviesArray
});
  

export const storeMovies = () => async (dispatch) => {
  try {
    const moviesArray = await helper.apiFetch(); 
    dispatch(fetchMovies(moviesArray));
  } catch (error) {
    console.log(error);
  }
};




export const createAccount = (id) => ({
  type: 'CREATE_ACCOUNT',
  id
});

export const createNewUser = (userObj) => async (dispatch) => {
  const userData = await helper.postNewAccount(userObj);
  if (userData === null) {
    dispatch(newAccountError());
  } else {
    dispatch(createAccount(userData.id));
    dispatch(logInUser({email: userObj.email, password: userObj.password}));
  }
};

export const newAccountError = () => ({
  type: 'ACCOUNT_ERROR',
  errorMsg: 'An account already exists with that email'
});





export const logIn = (userObj) => ({
  type: 'LOGIN',
  userObj
});

export const logInUser = (userObj) => async (dispatch) => {
  const userData = await helper.postUserLogin(userObj);
  if (userData === null) {
    dispatch(logInError());
    console.log('error');
  } else {
    dispatch(logIn(userData.data));
  }
};

export const logInError = () => ({
  type: 'LOGIN_ERROR',
  errorMsg: 'Email and/or password do not match an existing account'
});


export const logOut = () => ({
  type: 'LOGOUT'
});



export const addFavorite = (userId, movieObj) => ({
  type: 'ADD_FAV',
  userId,
  movieObj
});

export const postAddFavorite = (userId, movieObj) => async (dispatch) => {
  await helper.postFav(userId, movieObj);
  // console.log('insideReducer', favData);
  dispatch(addFavorite(userId, movieObj));
};


export const removeFavorite = (userId, movieId) => ({
  type: 'REMOVE_FAV',
  userId,
  movieId
});

export const deleteUserFavorite = (userId, movieId) => async (dispatch) => {
  const removedFavorite = await helper.deleteFavorite(userId, movieId);
  console.log(removedFavorite)
  dispatch(removeFavorite(userId, movieId))
};

export const fetchFavorites = (moviesArray) => ({
  type: 'FETCH_FAVS',
  moviesArray
});

export const getFavorites = (userId) => async (dispatch) => {
  const responseArray = await helper.getUserFavs(userId);
  dispatch(fetchFavorites(responseArray));
};