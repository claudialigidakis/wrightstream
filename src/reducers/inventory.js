import {
  EDIT_SUPPLY,
  EDIT_ITEM
} from '../actions/inventory';

let initialState = {
  supplies: [],
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SUPPLY:
      return {...state, supplies: action.payload};
    case EDIT_ITEM:
      return {...state, items: action.payload};
    default:
      return state;
  }
};
