import {
  GET_PURCHASES,
  COMPLETE_ITEM,
  COMPLETE_BUNDLE
} from '../actions/workstream';

let initialState = {
  purchases: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASES:
      return {...state, purchases: action.payload};
    case COMPLETE_ITEM:
      return {...state, purchases: action.payload};
    case COMPLETE_BUNDLE:
      return {...state, purchases: action.payload};
    default:
      return state;
  }
};
