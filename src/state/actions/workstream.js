import WorkStream from '../models/workstream'

export const GET_PURCHASES = 'GET_PURCHASES';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const COMPLETE_BUNDLE = 'COMPLETE_BUNDLE';
export const QUALITY_CHECK = 'QUALITY_CHECK';
export const SCHEDULE = 'SCHEDULE';
export const ADD_NOTES = 'ADD_NOTES';
export const GET_STAFF = 'GET_STAFF';
export const ASSIGN_STAFF = 'ASSIGN_STAFF';
export const ARCHIVE = 'ARCHIVE';


export const getPurchases = () => {
  return async (dispatch) => {
    const payload = await WorkStream.getPurchases()
    dispatch({type: GET_PURCHASES, payload});
  };
};

export const changeStatus = (purchase_id, status_id, completed, staff_id) => {
  return async (dispatch) => {
    const payload = await WorkStream.changeStatus(purchase_id, status_id, completed, staff_id)
    dispatch({type: CHANGE_STATUS, payload});
  };
};

export const completeItem = (purchase_id, item_id, staff_id, completed) => {
  return async (dispatch) => {
    const payload = await WorkStream.completeItem(purchase_id, item_id, staff_id, completed)
    dispatch({type: COMPLETE_ITEM, payload});
  };
};

export const completeBundle = (purchase_id, bundle_id, staff_id, completed) => {
  return async (dispatch) => {
    const payload = await WorkStream.completeBundle(purchase_id, bundle_id, staff_id, completed)
    dispatch({type: COMPLETE_BUNDLE, payload});
  };
};

export const qualityCheck = (purchase_id, quality_check) => {
  return async (dispatch) => {
    const payload = await WorkStream.qualityCheck(purchase_id, quality_check)
    dispatch({type: QUALITY_CHECK, payload});
  };
};

export const schedule = (purchase_id, pick_up, delivery_date, service, tracking) => {
  return async (dispatch) => {
    const payload = await WorkStream.schedule(purchase_id, pick_up, delivery_date, service, tracking)
    dispatch({type: SCHEDULE, payload});
  };
};

export const addNotes = (purchase_id, notes) => {
  return async (dispatch) => {
    const payload = await WorkStream.addNotes(purchase_id, notes)
    dispatch({type: ADD_NOTES, payload});
  };
};

export const getStaff = () => {
  return async (dispatch) => {
    const payload = await WorkStream.getStaff()
    dispatch({type: GET_STAFF, payload});
  };
};

export const assignStaff = (purchase_id, staff_id) => {
  return async (dispatch) => {
    const payload = await WorkStream.assignStaff(purchase_id, staff_id)
    dispatch({type: ASSIGN_STAFF, payload});
  };
};

export const archive = (purchase_id, archived) => {
  return async (dispatch) => {
    const payload = await WorkStream.archive(purchase_id, archived)
    dispatch({type: ARCHIVE, payload});
  };
};
