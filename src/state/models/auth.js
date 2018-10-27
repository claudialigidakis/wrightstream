import request from '../../helpers/request';

class Auth {
  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token');
    return authToken.data.shop_id;
  };

  static userLogin = async ({shop_username, email, password}) => {
    const userLogin = await request('/auth/token', 'post', {shop_username, email, password});
    await localStorage.setItem('token', userLogin.data.token);
    const token = await request('/auth/token');
    return token.data;
  };

  static userSignup = async (newShop, newUser) => {
    const addShop = await request('/shops', 'post', newShop);
    const shop_id = addShop.data.data[0].id;
    const newStaff = await request(`/shops/${shop_id}/staff`, 'post', newUser);
    return newStaff.data;
  };

  static getUser = async () => {
    const token = await request('/auth/token');
    return token.data;
  };
};

export default Auth;
