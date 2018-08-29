import {
  AUTH_ETSY,
  GET_PRODUCTS_ETSY,
  GET_UNLINKED_PRODUCTS,
  GET_PURCHASES_ETSY,
  GET_PURCHASES
} from '../actions/stores';

let initialState = {
  etsyLogin: '',
  etsyProducts: [],
  unlinkedProducts: [],
  etsyPurchases: [],
  purchases: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ETSY:
      return {...state, etsyLogin: action.payload};
    case GET_PRODUCTS_ETSY:
      return {...state, etsyProducts: action.payload};
    case GET_UNLINKED_PRODUCTS:
      return {...state, unlinkedProducts: action.payload};
    case GET_PURCHASES_ETSY:
      return {...state, etsyPurchases: action.payload};
    case GET_PURCHASES:
      return {...state, purchases: action.payload};
    default:
      return state;
  }
};
