const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT': 
      return {...state, ...action.userObj};
    default: 
      return state;
  }
};

export default userReducer;