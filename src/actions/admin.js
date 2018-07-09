import request from '../helpers/request';

export const GET_CURRENT_STAFF = 'GET_CURRENT_STAFF';
export const GET_NEW_PURCHASES = 'GET_NEW_PURCHASES'
export const GET_TOTAL_PRODUCTS_SOLD = 'GET_TOTAL_PRODUCTS_SOLD'
export const GET_CURRENT_PURCHASE_STATUS = 'GET_CURRENT_PURCHASE_STATUS'
export const GET_CURRENT_STAFF_ACTIVITY = 'GET_CURRENT_STAFF_ACTIVITY'
export const GET_TOTAL_STAFF = 'GET_TOTAL_STAFF'
export const GET_COMPLETED_STAFF = 'GET_COMPLETED_STAFF'
export const GET_TOTAL_BUNDLES_SOLD = 'GET_TOTAL_BUNDLES_SOLD'
export const GET_TOTAL_ITEMS_SOLD = 'GET_TOTAL_ITEMS_SOLD'
export const GET_COMPLETED_PURCHASES = 'GET_COMPLETED_PURCHASES'
export const GET_IN_PRODUCTION_PURCHASES = 'GET_IN_PRODUCTION_PURCHASES'
export const GET_TOTAL_ITEMS_SOLD_CHART = 'GET_TOTAL_ITEMS_SOLD_CHART'
export const GET_TOTAL_BUNDLES_SOLD_CHART = 'GET_TOTAL_BUNDLES_SOLD_CHART'
export const GET_MOST_ORDERED_SUPPLIES = 'GET_MOST_ORDERED_SUPPLIES'
export const GET_MOST_USED_SUPPLIES = 'GET_MOST_USED_SUPPLIES'
export const GET_PURCHASE_HISTORY = 'GET_PURCHASE_HISTORY'

export const getMostUsedSupplies = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminSupplies/mostUsed/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_MOST_USED_SUPPLIES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getPurchaseHistory = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminPurchases/purchaseHistory/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_PURCHASE_HISTORY,
          payload: response.data.data
        });
      });
    });
  }
);

export const getMostOrderedSupplies = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminSupplies/mostOrdered/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_MOST_ORDERED_SUPPLIES,
          payload: response.data.data
        });
      });
    });
  }
);


export const getCurrentStaff = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminStaff/currentWorkingStaff/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_CURRENT_STAFF,
          payload: response.data.data
        });
      });
    });
  }
);

export const purchaseStatuses = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminPurchases/purchasesStatus/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_CURRENT_PURCHASE_STATUS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getCurrentStaffActivity = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminStaff/currentStaff/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_CURRENT_STAFF_ACTIVITY,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTotalProductsSold = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminProducts/totalProductSold/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_TOTAL_PRODUCTS_SOLD,
          payload: response.data.data
        });
      });
    });
  }
);

export const getNewPurchases = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminPurchases/newPurchases/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_NEW_PURCHASES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTotalStaff = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminStaff/totalStaff/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_TOTAL_STAFF,
          payload: response.data.data
        });
      });
    });
  }
);

export const getCompletedStaff = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminStaff/pastStaff/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_COMPLETED_STAFF,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTotalBundlesSold = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminProducts/totalBundleSold/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_TOTAL_BUNDLES_SOLD,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTotalItemsSold = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminProducts/totalItemSold/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_TOTAL_ITEMS_SOLD,
          payload: response.data.data
        });
      });
    });
  }
);

export const getCompletedPurchases = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminPurchases/completedPurchases/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_COMPLETED_PURCHASES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getInProductionPurchases = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminPurchases/productionPurchases/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_IN_PRODUCTION_PURCHASES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTotalItemsSoldChart = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminProducts/itemQTY/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_TOTAL_ITEMS_SOLD_CHART,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTotalBundlesSoldChart = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/adminProducts/bundleQTY/${shop_id}`)
      .then(response => {
        dispatch({
          type: GET_TOTAL_BUNDLES_SOLD_CHART,
          payload: response.data.data
        });
      });
    });
  }
);
