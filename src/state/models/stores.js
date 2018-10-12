import request from '../../helpers/request';
import Auth from './auth';

class Stores {
  static authEtsy = async () => {
    const response = await request('/auth/etsy/loginUrl');
    return response.data.loginUrl;
  };

  static getProductsEtsy = async () => {
    const response = await request('/etsy/findAllListingActive');
    return response.data;
  };

  static getUnlinkedProductsEtsy = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/products/${shop_id}/allUnlinked`);
    return response.data.data;
  };

  static getPurchasesEtsy = async () => {
    const response = await request('/etsy/findAllPurchases');
    return response.data;
  };
};

export default Stores;
