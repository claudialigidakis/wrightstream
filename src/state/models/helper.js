import request from '../../helpers/request';

class Helper {

  static lengthHelper = async () => {
    const response = await request('/helper/length')
    return response.data.lengthMeasures
  }

  static volume = async () => {
    const response = await request('/helper/volume')
    return response.data.volumeMeasures
  }

  static mass = async () => {
    const response = await request('/helper/mass')
    return response.data.massMeasures
  }

  static estimator = async (items, bundles) => {
    const response = await request('/helper/orderPredictor', 'post', {items, bundles})
    return response.data.data
  }

}

export default Helper
