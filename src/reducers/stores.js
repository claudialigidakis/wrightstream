import {
  AUTH_ETSY,
  GET_PRODUCTS_ETSY,
  GET_UNLINKED_PRODUCTS_ETSY,
  GET_PURCHASES_ETSY
} from '../actions/stores';

let initialState = {
  etsyLogin: '',
  etsyProducts: [],
  etsyUnlinkedProducts: [],
  etsyPurchases: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ETSY:
      return {...state, etsyLogin: action.payload};
    case GET_PRODUCTS_ETSY:
      return {...state, etsyProducts: action.payload};
    case GET_UNLINKED_PRODUCTS_ETSY:
      return {...state, etsyUnlinkedProducts: action.payload};
    case GET_PURCHASES_ETSY:
      return {...state, etsyPurchases: action.payload};
    default:
      return state;
  }
};
