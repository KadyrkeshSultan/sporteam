export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const initState = {
    authError: ''
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case LOGIN_ERROR:
        console.log('login error');
        return {
          ...state,
          authError: 'Login failed'
        }
  
      case LOGIN_SUCCESS:
        console.log('login success');
        return {
          ...state,
          authError: null
        }
  
      case SIGNOUT_SUCCESS:
        console.log('signout success');
        return state;
  
      case SIGNUP_SUCCESS:
        console.log('signup success')
        return {
          ...state,
          authError: null
        }
  
      case SIGNUP_ERROR:
        console.log('signup error')
        return {
          ...state,
          authError: action.err.message
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;