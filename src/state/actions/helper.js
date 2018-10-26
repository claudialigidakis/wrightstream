import Helper from '../models/helper';

export const GET_LENGTH = 'GET_LENGTH';
export const GET_MASS = 'GET_MASS';
export const GET_VOLUME = 'GET_VOLUME';
export const ESTIMATOR = 'ESTIMATOR';

export const getLength = () => {
  return async dispatch => {
    const payload = await Helper.getLength();
    dispatch({type: GET_LENGTH, payload});
  };
};

export const getMass = () => {
  return async dispatch => {
    const payload = await Helper.getMass();
    dispatch({type: GET_MASS, payload});
  };
};

export const getVolume = () => {
  return async dispatch => {
    const payload = await Helper.getVolume();
    dispatch({type: GET_VOLUME, payload});
  };
};

export const estimator = (items, bundles) => {
  return async dispatch => {
    const payload = await Helper.estimator(items, bundles);
    dispatch({type: ESTIMATOR, payload});
  };
};
