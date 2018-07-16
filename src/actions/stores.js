import request from '../helpers/request';

export const AUTH_ETSY = 'AUTH_ETSY';
export const GET_PRODUCTS_ETSY = 'GET_PRODUCTS_ETSY';
export const GET_UNLINKED_PRODUCTS_ETSY = 'GET_UNLINKED_PRODUCTS_ETSY';
export const GET_PURCHASES_ETSY = 'GET_PURCHASES_ETSY';

export const authEtsy = () => (
  dispatch => {
    request('/auth/etsy/loginUrl')
    .then(response => {
      dispatch({
        type: AUTH_ETSY,
        payload: response.data.loginUrl
      });
    });
  }
);

export const getProductsEtsy = () => (
  dispatch => {
    request('/etsy/findAllListingActive')
    .then(response => {
      dispatch({
        type: GET_PRODUCTS_ETSY,
        payload: response.data
      });
    });
  }
);

export const getUnlinkedProductsEtsy = () => (
  dispatch => {
    request('/etsy/findAllListingActive')
    .then(response => {
      dispatch({
        type: GET_UNLINKED_PRODUCTS_ETSY,
        payload: response.data
      });
    });
  }
);

export const getPurchasesEtsy = () => (
  dispatch => {
    request('/etsy/findAllPurchases')
    .then(response => {
      dispatch({
        type: GET_PURCHASES_ETSY,
        payload: response.data
      });
    });
  }
);
