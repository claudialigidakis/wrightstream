import Inventory from '../models/inventory'


export const EDIT_SUPPLY = 'EDIT_SUPPLY';
export const EDIT_ITEM = 'EDIT_ITEM';
export const GET_LISTS = 'GET_LISTS';
export const GET_WORKSTREAM_LIST = 'GET_WORKSTREAM_LIST';
export const ADD_LIST = 'ADD_LIST';
export const GET_ORDERS = 'GET_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';
export const EDIT_ORDER_SUPPLY = 'EDIT_ORDER_SUPPLY';


export const editSupply = (id, stock_qty) => {
  return async (dispatch) => {
    const payload = await Inventory.editSupply(id, stock_qty)
    dispatch({ type: EDIT_SUPPLY, payload });
  };
};

export const editItem = (id, stock) => {
  return async (dispatch) => {
    const payload = await Inventory.editItem(id, stock)
    dispatch({ type: EDIT_ITEM, payload });
  };
};

export const getLists = () => {
  return async (dispatch) => {
    const payload = await Inventory.Lists()
    dispatch({ type: GET_LISTS, payload });
  };
};

export const getWorkstreamList = () => {
  return async (dispatch) => {
    const payload = await Inventory.workStreamList()
    dispatch({ type: GET_WORKSTREAM_LIST, payload });
  };
};

export const addList = (name, items, bundles) => {
  return async (dispatch) => {
    const payload = await Inventory.workStreamList()
    dispatch({ type: ADD_LIST, payload });
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    const payload = await Inventory.Orders()
    dispatch({ type: GET_ORDERS, payload });
  };
}

export const addOrder = (order) => {
  return async (dispatch) => {
    const payload = await Inventory.AddOrder(order)
    dispatch({ type: ADD_ORDER, payload });
  };
};


export const editOrderSupply = (order_id, supply_id, supply_status, supply_qty) => {
  return async (dispatch) => {
    const payload = await Inventory.EditOrderSupply(order_id, supply_id, supply_status, supply_qty)
    dispatch({ type: EDIT_ORDER_SUPPLY, payload });
  };
};
