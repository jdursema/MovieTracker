/*eslint-disable camelcase*/
/*eslint-disable id-blacklist*/

import { 
  apiFetch, 
  postNewAccount, 
  postUserLogin, 
  postFav,
  deleteFavorite,
  getUserFavs
} from './apiHelper';

describe('apiFetch', () => {
  it('should return a fetched moviesArray', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          results: [{ title: 'The Thing' }]
        })
      })
    );

    const fetch = await apiFetch();
    const mockMoviesArray = [{ title: 'The Thing' }];

    expect(typeof fetch).toEqual('object');
    expect(fetch).toEqual(mockMoviesArray);
  });

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject()
    );

    const fetch = await apiFetch();

    expect(fetch).toEqual(null);
  });
});

describe('postNewAccount', () => {
  it('should return the userObj', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          id: 87,
          message: "New user created",
          status: "success"
        })
      })
    );

    const mockUserObj= { username: 'Julie' };
    const expected = {
      id: 87,
      message: "New user created",
      status: "success"
    };
    const fetch = await postNewAccount(mockUserObj);

    expect(typeof fetch).toEqual('object');
    expect(fetch).toEqual(expected);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockUserObj= { username: 'Julie' };
    const fetch = await postNewAccount(mockUserObj);

    expect(fetch).toEqual(null);
  });
});

describe('postUserLogin', () => {
  it('should return the userObj', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          data: {id: 8, name: "123", password: "123", email: "123"},
          message: "Retrieved ONE User",
          status: "success"
        })
      })
    );

    const mockUserObj = { username: '123' };
    const expected = {
      data: {id: 8, name: "123", password: "123", email: "123"},
      message: "Retrieved ONE User",
      status: "success"
    };

    const fetch = await postUserLogin(mockUserObj);
  
    expect(typeof fetch).toEqual('object');  
    expect(fetch).toEqual(expected);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockUserObj= { username: '123' };
    const fetch = await postUserLogin(mockUserObj);
    
    expect(fetch).toEqual(null);
  });
});

describe('postFav', () => {
  it('should return the favData', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          status: "success", 
          message: "Movie was added to favorites", id: 2
        })
      })
    );

    const mockData = {
      userId: 3,
      title: 'Jaws 3'
    };

    const expected = {
      status: "success", 
      message: "Movie was added to favorites", id: 2
    };

    const fetch = await postFav(mockData);
    expect(fetch).toEqual(expected);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockData = {
      userId: 3,
      title: 'Jaws 3'
    };
    const fetch = await postFav(mockData);
    
    expect(fetch).toEqual(null);
  });
});

describe('deleteFavorite', () => {
  it('should return the favData', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          status: "success", 
          message: "1 row was deleted."
        })
      })
    );

    const mockPayLoad = {
      user_id: 3,
      movie_id: 432766
    };

    const expected = {
      status: "success", 
      message: "1 row was deleted."
    };

    const fetch = await deleteFavorite(mockPayLoad);
    expect(fetch).toEqual(expected);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockData = {
      userId: 3,
      title: 'Jaws 3'
    };
    const fetch = await deleteFavorite(mockData);
    
    expect(fetch).toEqual(null);
  });
});

describe('getUserFavs', () => {
  it('should return the favsArray', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          data: [{
            userId: 3,
            title: 'Jaws 3'
          }]
        })
      })
    );

    const mockUserId = 3;
    const expected = [{
      userId: 3,
      title: 'Jaws 3'
    }];

    const fetch = await getUserFavs(mockUserId);
    
    expect(fetch).toEqual(expected);
  });

  it('should return and error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404
      })
    );

    const mockUserId = { userId: 3 };
    const fetch = await getUserFavs(mockUserId);
    
    expect(fetch).toEqual(null);
  });
});


