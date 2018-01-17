/*eslint-disable max-len*/
/*eslint-disable camelcase*/

import { apiKey } from './.apiKey';

export const apiFetch = async () => {
  try {
    const initialFetch = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    const parsedData = await initialFetch.json();
    const movieArray = parsedData.results;
    return movieArray;
  } catch (error) {
    return null;
  }
};

export const postNewAccount = async (userObj) => {
  const newUserPost = await fetch('/api/users/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  });

  if (newUserPost.status >= 400) {
    return null;
  }

  return await newUserPost.json();
};

export const postUserLogin = async (userObj) => {
  const userLogIn = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  });

  if (userLogIn.status >= 400) {
    return null;
  }

  return await userLogIn.json();
};


export const postFav = async (userId, movieObj) => {
  const userIdObj= {user_id: userId};
  const favData = await fetch(`/api/users/favorites/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...userIdObj, ...movieObj})
  });

  if (favData.status >= 400) {
    return null;
  }

  return await favData.json();
};


export const deleteFavorite = async (userId, movieId) => {
  const payloadObj = {user_id: userId, movie_id: movieId};
  const favData = await fetch(`/api/users/${userId}/favorites/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payloadObj)
  });

  if (favData.status >= 400) {
    return null;
  }
  
  return await favData.json();
};

export const getUserFavs = async (userId) => {
  const favArray = await fetch(`/api/users/${userId}/favorites`);

  if (favArray.status >= 400) {
    return null;
  }

  const jsonFavArray = await favArray.json();

  return jsonFavArray.data;
};
