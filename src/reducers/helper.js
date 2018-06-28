import {
  GET_LENGTH,
  GET_MASS,
  GET_VOLUME
} from '../actions/helper';

let initialState = {
  lengthMeasures: [],
  massMeasures: [],
  volumeMeasures: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LENGTH:
      return {...state, lengthMeasures: action.payload};
    case GET_MASS:
      return {...state, massMeasures: action.payload};
    case GET_VOLUME:
      return {...state, volumeMeasures: action.payload};
    default:
      return state;
  }
};
