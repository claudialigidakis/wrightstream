import Products from '../models/products';

export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_BUNDLES = 'GET_BUNDLES';
export const ADD_BUNDLE = 'ADD_BUNDLE';
export const EDIT_BUNDLE = 'EDIT_BUNDLE';
export const DELETE_BUNDLE = 'DELETE_BUNDLE';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_UNLINKED_PRODUCTS = 'GET_UNLINKED_PRODUCTS';
export const GET_RECENT_PRODUCTS = 'GET_RECENT_PRODUCTS';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const GET_SUPPLIES = 'GET_SUPPLIES';
export const ADD_SUPPLY = 'ADD_SUPPLY';
export const EDIT_SUPPLY = 'EDIT_SUPPLY';
export const DELETE_SUPPLY = 'DELETE_SUPPLY';
export const GET_KINDS = 'GET_KINDS';
export const ADD_KIND = 'ADD_KIND';
export const EDIT_KIND = 'DELETE_KIND';
export const DELETE_KIND = 'DELETE_KIND';
export const GET_SUPPLIES_BY_KIND = 'GET_SUPPLIES_BY_KIND';
export const GET_SOURCES = 'GET_SOURCES';
export const ADD_SOURCE = 'ADD_SOURCE';
export const EDIT_SOURCE = 'EDIT_SOURCE';
export const DELETE_SOURCE = 'DELETE_SOURCE';
export const GET_TYPES = 'GET_TYPES';
export const ADD_TYPE = 'ADD_TYPE';
export const EDIT_TYPE = 'EDIT_TYPE';
export const DELETE_TYPE = 'DELETE_TYPE';
export const GET_SOURCES_BY_TYPE = 'GET_SOURCES_BY_TYPE';

export const getItems = () => {
  return async dispatch => {
    const payload = await Products.getItems();
    dispatch({type: GET_ITEMS, payload});
  };
};

export const addItem = (name, productId, categoryId, photo, stock, supplies, steps) => {
  return async dispatch => {
    const payload = await Products.addItem(name, productId, categoryId, photo, stock, supplies, steps);
    dispatch({type: ADD_ITEM, payload});
    const recent = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload: recent});
    const unlinked = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinked});
  };
};

export const editItem = (id, name, productId, categoryId, photo, stock, supplies, steps) => {
  return async dispatch => {
    const payload = await Products.editItem(id, name, productId, categoryId, photo, stock, supplies, steps);
    dispatch({type: EDIT_ITEM, payload});
    const recent = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload: recent});
    const unlinked = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinked});
  };
};

export const deleteItem = id => {
  return async dispatch => {
    const payload = await Products.deleteItem(id);
    dispatch({type: DELETE_ITEM, payload});
    const recent = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload: recent});
    const unlinked = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinked});
  };
};

export const getBundles = () => {
  return async dispatch => {
    const payload = await Products.getBundles();
    dispatch({type: GET_BUNDLES, payload});
  };
};

export const addBundle = (name, productId, categoryId, photo, stock, items, steps) => {
  return async dispatch => {
    const payload = await Products.addBundle(name, productId, categoryId, photo, stock, items, steps);
    dispatch({type: ADD_BUNDLE, payload});
    const recent = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload: recent});
    const unlinked = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinked});
  };
};

export const editBundle = (id, name, productId, categoryId, photo, stock, items, steps) => {
  return async dispatch => {
    const payload = await Products.editBundle(id, name, productId, categoryId, photo, stock, items, steps);
    dispatch({type: EDIT_BUNDLE, payload});
    const recent = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload: recent});
    const unlinked = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinked});
  };
};

export const deleteBundle = id => {
  return async dispatch => {
    const payload = await Products.deleteBundle(id);
    dispatch({type: DELETE_BUNDLE, payload});
    const recent = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload: recent});
    const unlinked = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload: unlinked});
  };
};

export const getCategories = () => {
  return async dispatch => {
    const payload = await Products.getCategories();
    dispatch({type: GET_CATEGORIES, payload});
  };
};

export const addCategory = name => {
  return async dispatch => {
    const payload = await Products.addCategory(name);
    dispatch({type: ADD_CATEGORY, payload});
  };
};

export const editCategory = (id, name) => {
  return async dispatch => {
    const payload = await Products.editCategory(id, name);
    dispatch({type: EDIT_CATEGORY, payload});
  };
};

export const deleteCategory = id => {
  return async dispatch => {
    const payload = await Products.deleteCategory(id);
    dispatch({type: DELETE_CATEGORY, payload});
  };
};

export const getProducts = () => {
  return async dispatch => {
    const payload = await Products.getProducts();
    dispatch({type: GET_PRODUCTS, payload});
  };
};

export const getUnlinkedProducts = () => {
  return async dispatch => {
    const payload = await Products.getUnlinkedProducts();
    dispatch({type: GET_UNLINKED_PRODUCTS, payload});
  };
};

export const getRecentProducts = () => {
  return async dispatch => {
    const payload = await Products.getRecentProducts();
    dispatch({type: GET_RECENT_PRODUCTS, payload});
  };
};

export const getProductsByCategory = id => {
  return async dispatch => {
    const payload = await Products.getProductsByCategory(id);
    dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload});
  };
};

export const getSupplies = () => {
  return async dispatch => {
    const payload = await Products.getSupplies();
    dispatch({type: GET_SUPPLIES, payload});
  };
};

export const addSupply = (name, stock, measure_type, source_id, kind_id) => {
  return async dispatch => {
    const payload = await Products.addSupply(name, stock, measure_type, source_id, kind_id);
    dispatch({type: ADD_SUPPLY, payload});
  };
};

export const editSupply = (id, name, stock, measure_type, source_id, kind_id) => {
  return async dispatch => {
    const payload = await Products.editSupply(id, name, stock, measure_type, source_id, kind_id);
    dispatch({type: EDIT_SUPPLY, payload});
  };
};

export const deleteSupply = id => {
  return async dispatch => {
    const payload = await Products.deleteSupply(id);
    dispatch({type: DELETE_SUPPLY, payload});
  };
};

export const getKinds = () => {
  return async dispatch => {
    const payload = await Products.getKinds();
    dispatch({type: GET_KINDS, payload});
  };
};

export const addKind = name => {
  return async dispatch => {
    const payload = await Products.addKind(name);
    dispatch({type: ADD_KIND, payload});
  };
};

export const editKind = (id, name) => {
  return async dispatch => {
    const payload = await Products.editKind(id, name);
    dispatch({type: EDIT_KIND, payload});
  };
};

export const deleteKind = id => {
  return async dispatch => {
    const payload = await Products.deleteKind(id);
    dispatch({type: DELETE_KIND, payload});
  };
};

export const getSuppliesByKind = id => {
  return async dispatch => {
    const payload = await Products.getSuppliesByKind(id);
    dispatch({type: GET_SUPPLIES_BY_KIND, payload});
  };
};

export const getSources = () => {
  return async dispatch => {
    const payload = await Products.getSources();
    dispatch({type: GET_SOURCES, payload});
  };
};

export const addSource = (name, type_id, link) => {
  return async dispatch => {
    const payload = await Products.addSource(name, type_id, link);
    dispatch({type: ADD_SOURCE, payload});
  };
};

export const editSource = (id, name, link, type_id) => {
  return async dispatch => {
    const payload = await Products.editSource(id, name, link, type_id);
    dispatch({type: EDIT_SOURCE, payload});
  };
};

export const deleteSource = id => {
  return async dispatch => {
    const payload = await Products.deleteSource(id);
    dispatch({type: DELETE_SOURCE, payload});
  };
};

export const getTypes = () => {
  return async dispatch => {
    const payload = await Products.getTypes();
    dispatch({type: GET_TYPES, payload});
  };
};

export const addType = name => {
  return async dispatch => {
    const payload = await Products.addType();
    dispatch({type: ADD_TYPE, payload});
  };
};

export const editType = (id, name) => {
  return async dispatch => {
    const payload = await Products.editType(id, name);
    dispatch({type: EDIT_TYPE, payload});
  };
};

export const deleteType = id => {
  return async dispatch => {
    const payload = await Products.deleteType(id);
    dispatch({type: DELETE_TYPE, payload});
  };
};

export const getSourcesByType = id => {
  return async dispatch => {
    const payload = await Products.getSourcesByType(id);
    dispatch({type: GET_SOURCES_BY_TYPE, payload});
  };
};
