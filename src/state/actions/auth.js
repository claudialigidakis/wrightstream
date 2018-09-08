import Auth from '../models/auth'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';
export const GET_USER = 'GET_USER';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = ({email, password}, history) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING});
      const payload = await Auth.userLogin({email,password}, history)
      dispatch({type: USER_LOGIN_SUCCESS, payload})
      history.push('/settings');
    } catch (err) {
      dispatch({type: USER_LOGIN_FAILED, payload: err});
      history.push('/login');
    }
  }
}

export const userSignup = (newShop, newUser, history) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_SIGNUP_PENDING});
      const payload = await Auth.userSignUp(newShop, newUser, history)
      dispatch({type: USER_SIGNUP_SUCCESS, payload});
      history.push('/');
    } catch (err) {
      dispatch({type: USER_SIGNUP_FAILED, payload: err});
      // request(`/shops/${response.data.shop_id}`, 'delete');
      // delete the shop that was made (does not work yet)
    }
  }
}

export const getUser = () => {
  return async (dispatch) => {
    try {
      const token = await Auth.getUser()
      dispatch({type: GET_USER, payload: token});
    }
    catch (err) {
      dispatch({type: NOT_LOGGED_IN, payload: err});
    }
  }
}

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({type: USER_LOGOUT});
  }
};
