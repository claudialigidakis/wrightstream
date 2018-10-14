import request from '../../helpers/request';
import Auth from './auth';

class Shop {
  static getShop = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/shops/${shop_id}`);
    return response.data.data;
  };
  
  static getStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const staff = await request(`/shops/${shop_id}/staff`);
    return staff.data.data;
  };
};

export default Shop;
