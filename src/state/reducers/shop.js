import {
  GET_SHOP
} from '../actions/shop';

let initialState = {
  shop: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOP:
      return {...state, shop: action.payload};
    default:
      return state;
  }
};
