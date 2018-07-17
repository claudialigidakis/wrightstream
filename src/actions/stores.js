import request from '../helpers/request';

export const AUTH_ETSY = 'AUTH_ETSY';
export const GET_PRODUCTS_ETSY = 'GET_PRODUCTS_ETSY';
export const GET_UNLINKED_PRODUCTS = 'GET_UNLINKED_PRODUCTS';
export const GET_PURCHASES_ETSY = 'GET_PURCHASES_ETSY';
export const GET_PURCHASES = 'GET_PURCHASES';

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
    })
    .then(response => {
      return request('/auth/token')
      .then(response => {
        const shop_id = response.data.shops_id;
        return request(`/products/${shop_id}/allUnlinked`);
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
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
    })
    .then(response => {
      return request('/auth/token')
      .then(response => {
        const shop_id = response.data.shops_id;
        request(`/purchases/${shop_id}/allPurchases`)
        .then(response => {
          return response.data.data.filter(purchase => purchase.archived === false);
        })
        .then(response => {
          dispatch({
            type: GET_PURCHASES,
            payload: response
          });
        });
      });
    });
  }
);
