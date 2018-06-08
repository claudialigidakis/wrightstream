import request from '../helpers/request';

export const GET_PURCHASES = 'GET_PURCHASES';

export const getPurchases = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases/${shop_id}/allPurchases`)
      .then(response => {
        dispatch({
          type: GET_PURCHASES,
          payload: response.data.data
        });
      });
    });
  }
);
