import Stores from '../models/stores';
import WorkStream from '../models/workstream';

export const AUTH_ETSY = 'AUTH_ETSY';
export const GET_PRODUCTS_ETSY = 'GET_PRODUCTS_ETSY';
export const GET_UNLINKED_PRODUCTS = 'GET_UNLINKED_PRODUCTS';
export const GET_PURCHASES_ETSY = 'GET_PURCHASES_ETSY';
export const GET_PURCHASES = 'GET_PURCHASES';

export const authEtsy = () => {
  return async dispatch => {
    const payload = await Stores.authEtsy();
    dispatch({type: AUTH_ETSY, payload});
  };
};

export const getProductsEtsy = () => {
  return async dispatch => {
    const payload = await Stores.getProductsEtsy();
    dispatch({type: GET_PRODUCTS_ETSY, payload});
    const unlinkedProducts = await Stores.getUnlinkedProductsEtsy();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinkedProducts});
  };
};

export const getPurchasesEtsy = () => {
  return async dispatch => {
    const payload = await Stores.getPurchasesEtsy();
    dispatch({type: GET_PURCHASES_ETSY, payload});
    const purchases = await WorkStream.getPurchases();
    dispatch({type: GET_PURCHASES, payload: purchases});
  };
};
