const errorReducer = (state = {isError: false, errorMsg: ''}, action) => {
  switch (action.type) {
  case 'ACCOUNT_ERROR':
    return {...state, isError: true, errorMsg: action.errorMsg};
  case 'LOGIN_ERROR':
    return {...state, isError: true, errorMsg: action.errorMsg};
  default: 
    return state;
  }
};

export default errorReducer;