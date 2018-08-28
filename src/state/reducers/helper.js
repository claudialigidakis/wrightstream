import {
  GET_LENGTH,
  GET_MASS,
  GET_VOLUME,
  ESTIMATOR
} from '../actions/helper';

let initialState = {
  lengthMeasures: [],
  massMeasures: [],
  volumeMeasures: [],
  supplies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LENGTH:
      return {...state, lengthMeasures: action.payload};
    case GET_MASS:
      return {...state, massMeasures: action.payload};
    case GET_VOLUME:
      return {...state, volumeMeasures: action.payload};
    case ESTIMATOR:
      return {...state, supplies: action.payload};
    default:
      return state;
  }
};
