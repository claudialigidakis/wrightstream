import request from '../helpers/request';

export const GET_PURCHASES = 'GET_PURCHASES';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const COMPLETE_BUNDLE = 'COMPLETE_BUNDLE';
export const QUALITY_CHECK = 'QUALITY_CHECK';
export const SCHEDULE = 'SCHEDULE';
export const ADD_NOTES = 'ADD_NOTES';

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

export const qualityCheck = (purchase_id, quality_check) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases/${purchase_id}`, 'put', {quality_check})
      .then(response => {
        return request(`/purchases/${shop_id}/allPurchases`);
      })
      .then(response => {
        dispatch({
          type: QUALITY_CHECK,
          payload: response.data.data
        });
      });
    });
  }
);

export const schedule = (purchase_id, pick_up, delivery_date, service, tracking) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases/${purchase_id}`, 'put', {pick_up, delivery_date, service, tracking})
      .then(response => {
        return request(`/purchases/${shop_id}/allPurchases`);
      })
      .then(response => {
        dispatch({
          type: SCHEDULE,
          payload: response.data.data
        });
      });
    });
  }
);

export const addNotes = (purchase_id, notes) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/purchases/${purchase_id}`, 'put', {notes})
      .then(response => {
        return request(`/purchases/${shop_id}/allPurchases`);
      })
      .then(response => {
        dispatch({
          type: ADD_NOTES,
          payload: response.data.data
        });
      });
    });
  }
);
