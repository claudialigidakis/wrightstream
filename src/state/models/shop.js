import request from '../../helpers/request';

class Shop {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static getShop = async () => {
    const shop_id = await Shop._authenticatedRequest()
    const response = await request(`/shops/${shop_id}`)
    return response.data.data
  }

}

export default Shop
