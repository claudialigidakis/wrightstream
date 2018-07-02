import {
  EDIT_SUPPLY,
  EDIT_ITEM,
  GET_LISTS,
  ADD_LIST
} from '../actions/inventory';

let initialState = {
  supplies: [],
  items: [],
  lists: []
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
    default:
      return state;
  }
};
