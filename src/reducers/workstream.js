import {
  GET_PURCHASES
} from '../actions/workstream';

let initialState = {
  purchases: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASES:
      return {...state, purchases: action.payload};
    default:
      return state;
  }
};
