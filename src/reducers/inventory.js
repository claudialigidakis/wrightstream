import {
  EDIT_SUPPLY,
  EDIT_ITEM,
  GET_LISTS,
  ADD_LIST,
  GET_ORDERS,
  ADD_ORDER,
  EDIT_ORDER_SUPPLY
} from '../actions/inventory';

let initialState = {
  supplies: [],
  items: [],
  lists: [],
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SUPPLY:
      return {...state, supplies: action.payload};
    case EDIT_ITEM:
      return {...state, items: action.payload};
    case GET_LISTS:
      return {...state, lists: action.payload};
    case ADD_LIST:
      return {...state, lists: action.payload};
    case GET_ORDERS:
      return {...state, orders: action.payload};
    case ADD_ORDER:
      return {...state, orders: action.payload};
    case EDIT_ORDER_SUPPLY:
      return {...state, orders: action.payload};
    default:
      return state;
  }
};
