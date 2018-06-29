import request from '../helpers/request';

export const GET_PURCHASES = 'GET_PURCHASES';
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const COMPLETE_BUNDLE = 'COMPLETE_BUNDLE';

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

export const changeStatus = (purchase_id, status_id, completed) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases_statuses/${purchase_id}/${status_id}`, 'put', {completed})
      .then(response => {
        return request(`/purchases/${shop_id}/allPurchases`);
      })
      .then(response => {
        dispatch({
          type: CHANGE_STATUS,
          payload: response.data.data
        });
      });
    });
  }
);

export const completeItem = (purchase_id, item_id, completed) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases_items/${purchase_id}/${item_id}`, 'put', {completed})
      .then(response => {
        return request(`/purchases/${shop_id}/allPurchases`);
      })
      .then(response => {
        dispatch({
          type: COMPLETE_ITEM,
          payload: response.data.data
        });
      });
    });
  }
);

export const completeBundle = (purchase_id, bundle_id, completed) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases_bundles/${purchase_id}/${bundle_id}`, 'put', {completed})
      .then(response => {
        return request(`/purchases/${shop_id}/allPurchases`);
      })
      .then(response => {
        dispatch({
          type: COMPLETE_BUNDLE,
          payload: response.data.data
        });
      });
    });
  }
);
