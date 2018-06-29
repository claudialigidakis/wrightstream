import request from '../helpers/request';

export const GET_LENGTH = 'GET_LENGTH';
export const GET_MASS = 'GET_MASS';
export const GET_VOLUME = 'GET_VOLUME';
export const ESTIMATOR = 'ESTIMATOR';

export const getLength = () => (
  dispatch => {
    request('/helper/length')
    .then(response => {
      dispatch({
        type: GET_LENGTH,
        payload: response.data.lengthMeasures
      });
    });
  }
);

export const getMass = () => (
  dispatch => {
    request('/helper/mass')
    .then(response => {
      dispatch({
        type: GET_MASS,
        payload: response.data.massMeasures
      });
    });
  }
);

export const getVolume = () => (
  dispatch => {
    request('/helper/volume')
    .then(response => {
      dispatch({
        type: GET_VOLUME,
        payload: response.data.volumeMeasures
      });
    });
  }
);

export const estimator = (items, bundles) => (
  dispatch => {
    console.log({items})
    request('/helper/orderPredictor', 'post', {items, bundles})
    .then(response => {
      dispatch({
        type: ESTIMATOR,
        payload: response.data.data
      });
    });
  }
);
