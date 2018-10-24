import request from '../../helpers/request';
import Auth from './auth';

class WorkStream {
  static getPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/purchases/${shop_id}/all_purchases`);
    return response.data.data.filter(purchase => purchase.archived === false);
  };

  static changeStatus = async (purchase_id, status_id, completed, staff_id) => {
    await request(`/purchases_statuses/${purchase_id}/${status_id}`, 'put', {completed, staff_id});
    return WorkStream.getPurchases();
  };

  static completeItem = async (purchase_id, item_id, staff_id, completed) => {
    await request(`/purchases_items/${purchase_id}/${item_id}`, 'put', {staff_id, completed});
    return WorkStream.getPurchases();
  };

  static completeBundle = async (purchase_id, bundle_id, staff_id, completed) => {
    await request(`/purchases_bundles/${purchase_id}/${bundle_id}`, 'put', {staff_id, completed});
    return WorkStream.getPurchases();
  };

  static qualityCheck = async (purchase_id, quality_check) => {
    await request(`/purchases/${purchase_id}`, 'put', {quality_check});
    return WorkStream.getPurchases();
  };

  static schedule = async (purchase_id, pick_up, delivery_date, service, tracking) => {
    await request(`/purchases/${purchase_id}`, 'put', {pick_up, delivery_date, service, tracking});
    return WorkStream.getPurchases();
  };

  static addNotes = async (purchase_id, notes) => {
    await request(`/purchases/${purchase_id}`, 'put', {notes});
    return WorkStream.getPurchases();
  };

  static assignStaff = async (purchase_id, staff_id) => {
    await request(`/purchases/${purchase_id}`, 'put', {staff_id});
    return WorkStream.getPurchases();
  };

  static archive = async (purchase_id, archived) => {
    await request(`/purchases/${purchase_id}`, 'put', {archived});
    return WorkStream.getPurchases();
  };
};

export default WorkStream;
