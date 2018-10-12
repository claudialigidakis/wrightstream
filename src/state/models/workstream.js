import request from '../../helpers/request';

class WorkStream {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static getPurchases = async () => {
    const shop_id = await WorkStream._authenticatedRequest()
    const response = await request(`/purchases/${shop_id}/allPurchases`)
    return response.data.data.filter(purchase => purchase.archived === false)
  }

  static getStaff = async () => {
    const shop_id = await WorkStream._authenticatedRequest()
    const staff = await request(`/shops/${shop_id}/staff`)
    return staff.data.data
  }

  static changeStatus = async (purchase_id, status_id, completed, staff_id) => {
    await request(`/purchases_statuses/${purchase_id}/${status_id}`, 'put', {completed, staff_id})
    return WorkStream.purchases()
  }

  static completeItem = async (purchase_id, item_id, staff_id, completed) => {
    await request(`/purchases_items/${purchase_id}/${item_id}`, 'put', {staff_id, completed})
    return WorkStream.purchases()
  }

  static completeBundle = async (purchase_id, bundle_id, staff_id, completed) => {
    await request(`/purchases_bundles/${purchase_id}/${bundle_id}`, 'put', {staff_id, completed})
    return WorkStream.purchases()
  }

  static qualityCheck = async (purchase_id, quality_check) => {
    await request(`/purchases/${purchase_id}`, 'put', {quality_check})
    return WorkStream.purchases()
  }

  static schedule = async (purchase_id, pick_up, delivery_date, service, tracking) => {
    await request(`/purchases/${purchase_id}`, 'put', {pick_up, delivery_date, service, tracking})
    return WorkStream.purchases()
  }

  static addNotes = async (purchase_id, notes) => {
    await request(`/purchases/${purchase_id}`, 'put', {notes})
    return WorkStream.purchases()
  }

  static assignStaff = async (purchase_id, staff_id) => {
    await request(`/purchases/${purchase_id}`, 'put', {staff_id})
    return WorkStream.purchases()
  }

  static archive = async (purchase_id, archived) => {
    await request(`/purchases/${purchase_id}`, 'put', {archived})
    return WorkStream.purchases()
  }

}

export default WorkStream
