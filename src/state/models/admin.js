import request from '../../helpers/request';

class Admin {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static mostUsedSupplies = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminSupplies/mostUsed/${shop_id}`)
    return response.data.data
  }

  static purchaseHistory = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminPurchases/purchaseHistory/${shop_id}`)
    return response.data.data
  }

  static mostOrderedSupplies = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminSupplies/mostOrdered/${shop_id}`)
    return response.data.data
  }

  static currentStaff = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminStaff/currentWorkingStaff/${shop_id}`)
    return response.data.data
  }

  static purchaseStatuses = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminPurchases/purchasesStatus/${shop_id}`)
    return response.data.data
  }

  static currentStaffActivity = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminStaff/currentStaff/${shop_id}`)
    return response.data.data
  }

  static totalProductsSold = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminProducts/totalProductSold/${shop_id}`)
    return response.data.data
  }

  static newPurchases = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminPurchases/newPurchases/${shop_id}`)
    return response.data.data
  }

  static totalStaff = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminStaff/totalStaff/${shop_id}`)
    return response.data.data
  }

  static completedStaff = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminStaff/pastStaff/${shop_id}`)
    return response.data.data
  }

  static totalBundlesSold = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminProducts/totalBundleSold/${shop_id}`)
    return response.data.data
  }

  static totalItemsSold = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminProducts/totalItemSold/${shop_id}`)
    return response.data.data
  }

  static completedPurchases = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminPurchases/completedPurchases/${shop_id}`)
    return response.data.data
  }

  static inProductionPurchases = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminPurchases/productionPurchases/${shop_id}`)
    return response.data.data
  }

  static totalItemsSoldChart = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminProducts/itemQTY/${shop_id}`)
    return response.data.data
  }

  static totalBundlesSoldChart = async () => {
    const shop_id = await Admin._authenticatedRequest()

    const response = await request(`/adminProducts/bundleQTY/${shop_id}`)
    return response.data.data
  }

}

export default Admin
