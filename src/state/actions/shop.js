import Shop from '../models/shop';

export const GET_SHOP = 'GET_SHOP';

export const getShop = () => {
  return async dispatch => {
    const payload = await Shop.getShop();
    dispatch({type: GET_SHOP, payload});
  };
};
