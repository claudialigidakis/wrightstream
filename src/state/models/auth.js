import request from '../../helpers/request';

class Auth {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static userLogin = async ({email,password}, history) => {
    const userLogin = await request('/auth/token', 'post', {email, password})
    await localStorage.setItem('token', userLogin.data.token);
    const token = await request('/auth/token')
    return token.data
  }

  static userSignUp = async (newShop, newUser, history) => {
    const addShop = await request('/shops', 'post', newShop)
    const shop_id = addShop.data.data[0].id
    const newStaff = await request(`/shops/${shop_id}/staff`, 'post', newUser)
    return newStaff.data
  }

  static getUser = async () => {
    const token = await request('/auth/token')
    return token.data
  }

}

export default Auth
