import request from '../../helpers/request';
import Auth from './auth';

class Products {
  static getItems = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/items/${shop_id}/allItems`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addItem = async (name, productId, categoryId, photo, stock, supplies, steps) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/items/${shop_id}`, 'post', {name, productId, categoryId, photo, stock, supplies, steps});
    return Products.getItems();
  };

  static editItem = async (id, name, productId, categoryId, photo, stock, supplies, steps) => {
    await request(`/items/${id}`, 'put', {name, productId, categoryId, photo, stock, supplies, steps});
    return Products.getItems();
  };

  static deleteItem = async id => {
    await request(`/items/${id}`, 'put', {archived: true});
    return Products.getItems();
  };

  static getBundles = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/bundles/${shop_id}/allBundles`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addBundle = async (name, productId, categoryId, photo, stock, items, steps) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/bundles/${shop_id}`, 'post', {name, productId, categoryId, photo, stock, items, steps});
    return Products.getBundles();
  };

  static editBundle = async (id, name, productId, categoryId, photo, stock, items, steps) => {
    await request(`/bundles/${id}`, 'put', {name, productId, categoryId, photo, stock, items, steps});
    return Products.getBundles();
  };

  static deleteBundle = async id => {
    await request(`/bundles/${id}`, 'put', {archived: true});
    return Products.getBundles();
  };

  static getCategories = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/categories/${shop_id}/allCategories`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addCategory = async name => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/categories/${shop_id}`, 'post', {name});
    return Products.getCategories();
  };

  static editCategory = async (id, name) => {
    await request(`/categories/${id}`, 'put', {name});
    return Products.getCategories();
  };

  static deleteCategory = async id => {
    await request(`/categories/${id}`, 'delete');
    return Products.getCategories();
  };

  static getProducts = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/products/${shop_id}/allProducts`);
    return response.data.data;
  };

  static getUnlinkedProducts = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/products/${shop_id}/allUnlinked`);
    return response.data.data;
  };

  static getRecentProducts = async () => {
    const response = await Products.getItems();
    return response.slice(response.length-6, response.length).reverse();
  };

  static getProductsByCategory = async id => {
    const items = await Products.getItems();
    const filteredItems = items.filter(item => item.category_id === parseInt(id, 10));
    const bundles = await Products.getBundles();
    const products = filteredItems.concat(bundles.filter(bundle => bundle.category_id === parseInt(id, 10)));
    return products.sort((a, b) => a.name.localeCompare(b.name));
  };

  static getSupplies = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/supplies/${shop_id}/allSupplies`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addSupply = async (name, stock, measure_type, source_id, kind_id) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/supplies/${shop_id}`, 'post', {name, stock, measure_type, source_id, kind_id});
    return Products.getSupplies();
  };

  static editSupply = async (id, name, stock, measure_type, source_id, kind_id) => {
    await request(`/supplies/${id}`, 'put', {name, stock, measure_type, source_id, kind_id});
    return Products.getSupplies();
  };

  static deleteSupply = async id => {
    await request(`/supplies/${id}`, 'delete');
    return Products.getSupplies();
  };

  static getKinds = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/kinds/${shop_id}/allKinds`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addKind = async name => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/kinds/${shop_id}`, 'post', {name});
    return Products.getKinds();
  };

  static editKind = async (id, name) => {
    await request(`/kinds/${id}`, 'put', {name});
    return Products.getKinds();
  };

  static deleteKind = async id => {
    await request(`/kinds/${id}`, 'delete');
    return Products.getKinds();
  };

  static getSuppliesByKind = async id => {
    const supplies = await Products.getSupplies();
    const filteredSupplies = supplies.filter(supply => supply.kind_id === parseInt(id, 10));
    return filteredSupplies.sort((a, b) => a.name.localeCompare(b.name));
  };

  static getSources = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/sources/${shop_id}/allSources`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addSource = async (name, type_id, link) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/sources/${shop_id}`, 'post', {name, type_id, link});
    return Products.getSources();
  };

  static editSource = async (id, name, link, type_id) => {
    await request(`/sources/${id}`, 'put', {name, link, type_id});
    return Products.getSources();
  };

  static deleteSource = async id => {
    await request(`/sources/${id}`, 'delete');
    return Products.getSources();
  };

  static getTypes = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/types/${shop_id}/allTypes`);
    return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
  };

  static addType = async name => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/types/${shop_id}`, 'post', {name});
    return Products.getTypes();
  };

  static editType = async (id, name) => {
    await request(`/types/${id}`, 'put', {name});
    return Products.getTypes();
  };

  static deleteType = async id => {
    await request(`/types/${id}`, 'delete');
    return Products.getTypes();
  };

  static getSourcesByType = async id => {
    const sources = await Products.getSources();
    const filteredSources = sources.filter(source => source.type_id === parseInt(id, 10));
    return filteredSources.sort((a, b) => a.name.localeCompare(b.name));
  };
};

export default Products;
