import request from '../../helpers/request';

class Products {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.shops_id
  }

  static allProducts = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/products/${shop_id}/allProducts`)
    return response.data.data
  }

  static allItems = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/items/${shop_id}/allItems`)
    return response.data.data
  }

  static allBundles = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/bundles/${shop_id}/allBundles`)
    return response.data.data
  }

  static allCategories = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/categories/${shop_id}/allCategories`)
    return response.data.data
  }

  static allSupplies = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/supplies/${shop_id}/allSupplies`)
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  static UnLinkedProducts = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/products/${shop_id}/allUnlinked`)
    return response.data.data
  }

  static recentProducts = async () => {
    const response = await Products.allItems()
    return response.slice(response.length-6, response.length).reverse();
  }

  static addItem = async (name, productId, categoryId, photo, stock, supplies, steps) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/items/${shop_id}`, 'post', {name, productId, categoryId, photo, stock, supplies, steps})
    return Products.allItems()
  }

  static addCategory = async (name) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/categories/${shop_id}`, 'post', {name})
    return Products.allCategories()
  }

  static addBundle = async (name, productId, categoryId, photo, stock, items, steps) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/bundles/${shop_id}`, 'post', {name, productId, categoryId, photo, stock, items, steps})
    return Products.allBundles()
  }

  static editItem = async (id, name, productId, categoryId, photo, stock, supplies, steps) => {
    await request(`/items/${id}`, 'put', {name, productId, categoryId, photo, stock, supplies, steps})
    return Products.allItems()
  }

  static editBundle = async (id, name, productId, categoryId, photo, stock, items, steps) => {
    await request(`/bundles/${id}`, 'put', {name, productId, categoryId, photo, stock, items, steps})
    return Products.allBundles()
  }

  static editCategory = async (id, name) => {
    await request(`/categories/${id}`, 'put', {name})
    return Products.allCategories()
  }

  static deleteItem = async (id) => {
    await request(`/items/${id}`, 'put', {archived: true})
    return Products.allItems()
  }

  static deleteBundle = async (id) => {
    await request(`/bundles/${id}`, 'put', {archived: true})
    return Products.allBundles()
  }

  static deleteCategory = async (id) => {
    await request(`/categories/${id}`, 'delete')
    return Products.allCategories()
  }

  static productsByCategory = async (id) => {
    const items = await Products.allItems()
    const filterItems = items.filter(item => item.category_id === parseInt(id, 10));
    const bundles = await Products.allBundles()
    const concated = filterItems.concat(bundles.filter(bundle => bundle.category_id === parseInt(id, 10)));
    return concated.sort((a, b) => a.name.localeCompare(b.name));
  }

}

export default Products
