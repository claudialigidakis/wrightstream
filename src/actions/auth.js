import request from '../helpers/request';

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

//const BASE_URL = 'http://localhost:8082';

export const userLogin = ({email, password}, history) => (
  dispatch => {
    dispatch({type: USER_LOGIN_PENDING});
    request('/auth/token', 'post', {email, password})
    .then(response => {
      localStorage.setItem('token', response.data.token);
      return request('/auth/token');
    })
    .then(response => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response
      });
      history.push('/settings');
    })
    .catch(error => {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: error
      });
      history.push('/login');
    });
  }
);

export const userSignup = (newShop, newUser, history) => (
  dispatch => {
    console.log({newShop});
    dispatch({type: USER_SIGNUP_PENDING});
    request('/shops', 'post', newShop)
    .then(response => {
      const shop_id = response.data.data[0].id
      console.log(shop_id);
      console.log({newUser});
      request(`/shops/${shop_id}/staff`, 'post', newUser)
      .then(response => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response
        });
        history.push('/login');
      })
      .catch(error => {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: error
        });
        // request(`/shops/${response.data.shop_id}`, 'delete');
        // delete the shop that was made (does not work yet)
      });
    });
  }
);

export const userLogout = () => (
  dispatch => {
    dispatch({type: USER_LOGOUT});
  }
);
