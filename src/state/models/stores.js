import request from '../../helpers/request';

class Stores {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static authEtsy = async () => {
    const response = await request('/auth/etsy/loginUrl')
    return response.data.loginUrl
  }

  static ProductsEtsy = async () => {
    const response = await request('/etsy/findAllListingActive')
    return response.data
  }

  static UnlinkedProductsEtsy = async () => {
    const shop_id = await Stores._authenticatedRequest()
    const response = await request(`/products/${shop_id}/allUnlinked`)
    return response.data.data
  }

  static purchaseEtsy = async () => {
    const response = await request('/etsy/findAllPurchases')
    return response.data
  }

  static shopPurchases = async () => {
    const shop_id = await Stores._authenticatedRequest()
    const response = await request(`/purchases/${shop_id}/allPurchases`)
    return response.data.data.filter(purchase => purchase.archived === false);
  }


}
export default Stores
