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

  static allKinds = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/kinds/${shop_id}/allKinds`)
    return response.data.data
  }

  static allSources = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/sources/${shop_id}/allSources`)
    return response.data.data
  }

  static allTypes = async () => {
    const shop_id = await Products._authenticatedRequest()
    const response = await request(`/types/${shop_id}/allTypes`)
    return response.data.data
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

  static addSupply = async (name, stock, measure_type, source_id, kind_id) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/supplies/${shop_id}`, 'post', {name, stock, measure_type, source_id, kind_id})
    return Products.allSupplies()
  }

  static addKind = async (name) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/kinds/${shop_id}`, 'post', {name})
    return Products.allKinds()
  }

  static addSource = async (name, type_id, link) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/sources/${shop_id}`, 'post', {name, type_id, link})
    return Products.allSources()
  }

  static addType = async (name) => {
    const shop_id = await Products._authenticatedRequest()
    await request(`/types/${shop_id}`, 'post', {name})
    return Products.allTypes()
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

  static editSupply = async (id, name, stock, measure_type, source_id, kind_id) => {
    await request(`/supplies/${id}`, 'put', {name, stock, measure_type, source_id, kind_id})
    return Products.allSupplies()
  }

  static editKind = async (id, name) => {
    await request(`/kinds/${id}`, 'put', {name})
    return Products.allKinds()
  }

  static editSource = async (id, name, link, type_id) => {
    await request(`/sources/${id}`, 'put', {name, link, type_id})
    return Products.allSources()
  }

  static editType = async (id, name) => {
    await request(`/types/${id}`, 'put', {name})
    return Products.allTypes()
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

  static deleteSupply = async (id) => {
    await request(`/supplies/${id}`, 'delete')
    return Products.allSupplies()
  }

  static deleteKind = async (id) => {
    await request(`/kinds/${id}`, 'delete')
    return Products.allKinds()
  }

  static deleteSource = async (id) => {
    await request(`/sources/${id}`, 'delete')
    return Products.allSources()
  }

  static deleteType = async (id) => {
    await request(`/types/${id}`, 'delete')
    return Products.allTypes()
  }

  static productsByCategory = async (id) => {
    const items = await Products.allItems()
    const filterItems = items.filter(item => item.category_id === parseInt(id, 10));
    const bundles = await Products.allBundles()
    const concated = filterItems.concat(bundles.filter(bundle => bundle.category_id === parseInt(id, 10)));
    return concated.sort((a, b) => a.name.localeCompare(b.name));
  }

  static suppliesByKind = async (id) => {
    const supplies = await Products.allSupplies()
    const filterSupplies = supplies.filter(supply => supply.kind_id === parseInt(id, 10));
    return filterSupplies.sort((a, b) => a.name.localeCompare(b.name));
  }

  static sourcesByType = async (id) => {
    const sources = await Products.allSources()
    const filterSources = sources.filter(source => source.kind_id === parseInt(id, 10));
    return filterSources.sort((a, b) => a.name.localeCompare(b.name));
  }

}

export default Products
