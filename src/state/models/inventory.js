import request from '../../helpers/request';

class Inventory {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static Lists = async () => {
    const shop_id = await Inventory._authenticatedRequest()
    const response = await request(`/lists/${shop_id}/allLists`);
    return response.data.data
  }

  static Orders = async () => {
    const shop_id = await Inventory._authenticatedRequest()
    const response = await request(`/orders/${shop_id}/allOrders`)
    return response.data.data
  }

  static editSupply = async (id, stock_qty) => {
    const shop_id = await Inventory._authenticatedRequest()
    await request(`/supplies/${id}`, 'put', {stock_qty})

    const allSupplies = await request(`/supplies/${shop_id}/allSupplies`);
    return allSupplies.data.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  static editItem = async (id, stock) => {
    const shop_id = await Inventory._authenticatedRequest()
    await request(`/items/${id}`, 'put', {stock})

    const allItems = await request(`/items/${shop_id}/allItems`);
    return allItems.data.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  static workStreamList = async () => {
    const shop_id = await Inventory._authenticatedRequest()
    const response = await request(`/helper/wrightStream/${shop_id}`)
    return response.data.data
  }

  static addList = async (name, items, bundles) => {
    const shop_id = await Inventory._authenticatedRequest()
    await request(`/lists/${shop_id}`, 'post', {name, items, bundles})
    return Inventory.Lists()
  }

  static AddOrder = async (order) => {
    const shop_id = await Inventory._authenticatedRequest()
    await request(`/orders/${shop_id}`, 'post', {order})
    return Inventory.Orders()
  }

  static EditOrderSupply = async (order_id, supply_id, supply_status, supply_qty) => {
    await request(`/orders/orderSupply/${order_id}`, 'put', {supply_id, supply_status, supply_qty})
    const orders = await Inventory.Orders()
    return orders.sort((a, b) => a.name.localeCompare(b.name));
  }

}
export default Inventory
