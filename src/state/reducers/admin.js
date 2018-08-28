import {
  GET_CURRENT_STAFF,
  GET_CURRENT_PURCHASE_STATUS,
  GET_CURRENT_STAFF_ACTIVITY,
  GET_NEW_PURCHASES,
  GET_TOTAL_PRODUCTS_SOLD,
  GET_TOTAL_STAFF,
  GET_COMPLETED_STAFF,
  GET_TOTAL_ITEMS_SOLD,
  GET_TOTAL_BUNDLES_SOLD,
  GET_COMPLETED_PURCHASES,
  GET_IN_PRODUCTION_PURCHASES,
  GET_TOTAL_ITEMS_SOLD_CHART,
  GET_TOTAL_BUNDLES_SOLD_CHART,
  GET_MOST_ORDERED_SUPPLIES,
  GET_MOST_USED_SUPPLIES,
  GET_PURCHASE_HISTORY
} from '../actions/admin';

let initialState = {
  currentStaff: [],
  purchaseStatus: [],
  currentStaffActivity: [],
  newPurchases: [],
  totalProductsSold: [],
  totalStaff: [],
  completedStaff: [],
  totalItemsSold: [],
  totalBundlesSold: [],
  completedPurchases: [],
  InProductionPurchases: [],
  totalItemsSoldChart: [],
  totalBundlesSoldChart: [],
  MostOrderedSupplies: [],
  MostUsedSupplies: [],
  purchaseHistory: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASE_HISTORY:
      return {...state, purchaseHistory: action.payload};
    case GET_TOTAL_BUNDLES_SOLD_CHART:
      return {...state, totalBundlesSoldChart: action.payload};
    case GET_MOST_ORDERED_SUPPLIES:
      return {...state, MostOrderedSupplies: action.payload};
    case GET_MOST_USED_SUPPLIES:
      return {...state, MostUsedSupplies: action.payload};
    case GET_IN_PRODUCTION_PURCHASES:
      return {...state, InProductionPurchases: action.payload};
    case GET_TOTAL_ITEMS_SOLD_CHART:
      return {...state, totalItemsSoldChart: action.payload};
    case GET_COMPLETED_PURCHASES:
      return {...state, completedPurchases: action.payload};
    case GET_CURRENT_STAFF:
      return {...state, currentStaff: action.payload};
    case GET_CURRENT_PURCHASE_STATUS:
      return {...state, purchaseStatus: action.payload};
    case GET_CURRENT_STAFF_ACTIVITY:
      return {...state, currentStaffActivity: action.payload};
    case GET_NEW_PURCHASES:
      return {...state, newPurchases: action.payload};
    case GET_TOTAL_PRODUCTS_SOLD:
      return {...state, totalProductsSold: action.payload};
    case GET_TOTAL_STAFF:
      return {...state, totalStaff: action.payload};
    case GET_COMPLETED_STAFF:
      return {...state, completedStaff: action.payload};
    case GET_TOTAL_ITEMS_SOLD:
      return {...state, totalItemsSold: action.payload};
    case GET_TOTAL_BUNDLES_SOLD:
      return {...state, totalBundlesSold: action.payload};
    default:
      return state;
  }
};
