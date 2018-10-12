import request from '../../helpers/request';

class Helper {
  static getLength = async () => {
    const response = await request('/helper/length');
    return response.data.lengthMeasures;
  };

  static getVolume = async () => {
    const response = await request('/helper/volume');
    return response.data.volumeMeasures;
  };

  static getMass = async () => {
    const response = await request('/helper/mass');
    return response.data.massMeasures;
  };

  static estimator = async (items, bundles) => {
    const response = await request('/helper/orderPredictor', 'post', {items, bundles});
    return response.data.data;
  };
};

export default Helper;
