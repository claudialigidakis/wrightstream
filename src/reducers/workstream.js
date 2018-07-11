import {
  GET_PURCHASES,
  CHANGE_STATUS,
  COMPLETE_ITEM,
  COMPLETE_BUNDLE,
  QUALITY_CHECK,
  SCHEDULE,
  ADD_NOTES,
  GET_STAFF,
  ASSIGN_STAFF,
  ARCHIVE
} from '../actions/workstream';

let initialState = {
  purchases: [],
  staff: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASES:
      return {...state, purchases: action.payload};
    case CHANGE_STATUS:
      return {...state, purchases: action.payload};
    case COMPLETE_ITEM:
      return {...state, purchases: action.payload};
    case COMPLETE_BUNDLE:
      return {...state, purchases: action.payload};
    case QUALITY_CHECK:
      return {...state, purchases: action.payload};
    case SCHEDULE:
      return {...state, purchases: action.payload};
    case ADD_NOTES:
      return {...state, purchases: action.payload};
    case GET_STAFF:
      return {...state, staff: action.payload};
    case ASSIGN_STAFF:
      return {...state, purchases: action.payload};
    case ARCHIVE:
      return {...state, purchases: action.payload};
    default:
      return state;
  }
};
