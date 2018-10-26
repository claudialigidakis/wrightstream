import request from '../../helpers/request';
import Auth from './auth';

class Admin {
  static getMostUsedSupplies = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminSupplies/mostUsed/${shop_id}`);
    return response.data.data;
  };

  static getPurchaseHistory = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminPurchases/purchaseHistory/${shop_id}`);
    return response.data.data;
  };

  static getMostOrderedSupplies = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminSupplies/mostOrdered/${shop_id}`);
    return response.data.data;
  };

  static getCurrentStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminStaff/currentWorkingStaff/${shop_id}`);
    return response.data.data;
  };

  static getPurchaseStatuses = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminPurchases/purchasesStatus/${shop_id}`);
    return response.data.data;
  };

  static getCurrentStaffActivity = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminStaff/currentStaff/${shop_id}`);
    return response.data.data;
  };

  static getTotalProductsSold = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminProducts/totalProductSold/${shop_id}`);
    return response.data.data;
  };

  static getNewPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminPurchases/newPurchases/${shop_id}`);
    return response.data.data;
  };

  static getTotalStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminStaff/totalStaff/${shop_id}`);
    return response.data.data;
  };

  static getCompletedStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminStaff/pastStaff/${shop_id}`);
    return response.data.data;
  };

  static getTotalBundlesSold = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminProducts/totalBundleSold/${shop_id}`);
    return response.data.data;
  };

  static getTotalItemsSold = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminProducts/totalItemSold/${shop_id}`);
    return response.data.data;
  };

  static getCompletedPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminPurchases/completedPurchases/${shop_id}`);
    return response.data.data;
  };

  static getInProductionPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminPurchases/productionPurchases/${shop_id}`);
    return response.data.data;
  };

  static getTotalItemsSoldChart = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminProducts/itemQTY/${shop_id}`);
    return response.data.data;
  };

  static getTotalBundlesSoldChart = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminProducts/bundleQTY/${shop_id}`);
    return response.data.data;
  };
};

export default Admin;
