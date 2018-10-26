import request from '../../helpers/request';
import Auth from './auth';
import Products from './products';

class Inventory {
  static editSupply = async (id, stock_qty) => {
    await request(`/supplies/${id}`, 'put', {stock_qty});
    return Products.getSupplies();
  };

  static editItem = async (id, stock) => {
    await request(`/items/${id}`, 'put', {stock});
    return Products.getItems();
  };

  static getLists = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/lists/${shop_id}/all_lists`);
    return response.data.data;
  };

  static getWorkstreamList = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/helper/wright_stream/${shop_id}`);
    return response.data.data;
  };

  static addList = async (name, items, bundles) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/lists/${shop_id}`, 'post', {name, items, bundles});
    return Inventory.getLists();
  };

  static getOrders = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/orders/${shop_id}/all_orders`);
    return response.data.data;
  };

  static addOrder = async (order) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/orders/${shop_id}`, 'post', {order});
    return Inventory.getOrders();
  };

  static editOrderSupply = async (order_id, supply_id, supply_status, supply_qty) => {
    await request(`/orders/order_supply/${order_id}`, 'put', {supply_id, supply_status, supply_qty});
    return Inventory.getOrders();
  };
};

export default Inventory;
