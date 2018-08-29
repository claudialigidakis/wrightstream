import request from '../../helpers/request';

class Admin {

  static mostUsedSupplies = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id

    const response = await request(`/adminSupplies/mostUsed/${shop_id}`)
    const supplies = response.data.data

    return supplies
  }

  static purchaseHistory = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id

    const response = await request(`/adminPurchases/purchaseHistory/${shop_id}`)
    console.log(response)
    const purchases = response.data.data
    return purchases
  }

  static mostOrderedSupplies = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static currentStaff = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static purchaseStatuses = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static currentStaffActivity = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static totalProductsSold = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static newPurchases = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static totalStaff = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static completedStaff = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static totalBundlesSold = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static totalItemsSold = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static completedPurchases = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static inProductionPurchases = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static totalItemsSoldChart = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

  static totalBundlesSoldChart = async () => {
    const authToken = await request('/auth/token')
    const shop_id = authToken.data.shops_id
  }

}

export default Admin
