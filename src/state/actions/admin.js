import Admin from '../models/admin';

export const GET_CURRENT_STAFF = 'GET_CURRENT_STAFF';
export const GET_NEW_PURCHASES = 'GET_NEW_PURCHASES';
export const GET_TOTAL_PRODUCTS_SOLD = 'GET_TOTAL_PRODUCTS_SOLD';
export const GET_CURRENT_PURCHASE_STATUS = 'GET_CURRENT_PURCHASE_STATUS';
export const GET_CURRENT_STAFF_ACTIVITY = 'GET_CURRENT_STAFF_ACTIVITY';
export const GET_TOTAL_STAFF = 'GET_TOTAL_STAFF';
export const GET_COMPLETED_STAFF = 'GET_COMPLETED_STAFF';
export const GET_TOTAL_BUNDLES_SOLD = 'GET_TOTAL_BUNDLES_SOLD';
export const GET_TOTAL_ITEMS_SOLD = 'GET_TOTAL_ITEMS_SOLD';
export const GET_COMPLETED_PURCHASES = 'GET_COMPLETED_PURCHASES';
export const GET_IN_PRODUCTION_PURCHASES = 'GET_IN_PRODUCTION_PURCHASES';
export const GET_TOTAL_ITEMS_SOLD_CHART = 'GET_TOTAL_ITEMS_SOLD_CHART';
export const GET_TOTAL_BUNDLES_SOLD_CHART = 'GET_TOTAL_BUNDLES_SOLD_CHART';
export const GET_MOST_ORDERED_SUPPLIES = 'GET_MOST_ORDERED_SUPPLIES';
export const GET_MOST_USED_SUPPLIES = 'GET_MOST_USED_SUPPLIES';
export const GET_PURCHASE_HISTORY = 'GET_PURCHASE_HISTORY';

export const getMostUsedSupplies = () => {
  return async dispatch => {
    const payload = await Admin.getMostUsedSupplies();
    dispatch({type: GET_MOST_USED_SUPPLIES, payload});
  };
};

export const getPurchaseHistory = () => {
  return async dispatch => {
    const payload = await Admin.getPurchaseHistory();
    dispatch({type: GET_PURCHASE_HISTORY, payload});
  };
};

export const getMostOrderedSupplies = () => {
  return async dispatch => {
    const payload = await Admin.getMostOrderedSupplies();
    dispatch({type: GET_MOST_ORDERED_SUPPLIES, payload});
  };
};

export const getCurrentStaff = () => {
  return async dispatch => {
    const payload = await Admin.getCurrentStaff();
    dispatch({type: GET_CURRENT_STAFF, payload});
  };
};

export const getPurchaseStatuses = () => {
  return async dispatch => {
    const payload = await Admin.getPurchaseStatuses();
    dispatch({type: GET_CURRENT_PURCHASE_STATUS, payload});
  };
};

export const getCurrentStaffActivity = () => {
  return async dispatch => {
    const payload = await Admin.getCurrentStaffActivity();
    dispatch({type: GET_CURRENT_STAFF_ACTIVITY, payload});
  };
};

export const getTotalProductsSold = () => {
  return async dispatch => {
    const payload = await Admin.getTotalProductsSold();
    dispatch({type: GET_TOTAL_PRODUCTS_SOLD, payload});
  };
};

export const getNewPurchases = () => {
  return async dispatch => {
    const payload = await Admin.getNewPurchases();
    dispatch({type: GET_NEW_PURCHASES, payload});
  };
};

export const getTotalStaff = () => {
  return async dispatch => {
    const payload = await Admin.getTotalStaff();
    dispatch({type: GET_TOTAL_STAFF, payload});
  };
};

export const getCompletedStaff = () => {
  return async dispatch => {
    const payload = await Admin.getCompletedStaff();
    dispatch({type: GET_COMPLETED_STAFF, payload});
  };
};

export const getTotalBundlesSold = () => {
  return async dispatch => {
    const payload = await Admin.getTotalBundlesSold();
    dispatch({type: GET_TOTAL_BUNDLES_SOLD, payload});
  };
};

export const getTotalItemsSold = () => {
  return async dispatch => {
    const payload = await Admin.getTotalItemsSold();
    dispatch({type: GET_TOTAL_ITEMS_SOLD, payload});
  };
};

export const getCompletedPurchases = () => {
  return async dispatch => {
    const payload = await Admin.getCompletedPurchases();
    dispatch({type: GET_COMPLETED_PURCHASES, payload});
  };
};

export const getInProductionPurchases = () => {
  return async dispatch => {
    const payload = await Admin.getInProductionPurchases();
    dispatch({type: GET_IN_PRODUCTION_PURCHASES, payload});
  };
};

export const getTotalItemsSoldChart = () => {
  return async dispatch => {
    const payload = await Admin.getTotalItemsSoldChart();
    dispatch({type: GET_TOTAL_ITEMS_SOLD_CHART, payload});
  };
};

export const getTotalBundlesSoldChart = () => {
  return async dispatch => {
    const payload = await Admin.getTotalBundlesSoldChart();
    dispatch({type: GET_TOTAL_BUNDLES_SOLD_CHART, payload});
  };
};
