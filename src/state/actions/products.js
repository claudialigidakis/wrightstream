import request from '../../helpers/request';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_UNLINKED_PRODUCTS = 'GET_UNLINKED_PRODUCTS';
export const GET_RECENT_PRODUCTS = 'GET_RECENT_PRODUCTS';
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

export const getProducts = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/products/${shop_id}/allProducts`)
      .then(response => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getUnlinkedProducts = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/products/${shop_id}/allUnlinked`)
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getRecentProducts = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${shop_id}/allItems`)
      // .then(resItems => {
      //   return request(`/bundles/${shop_id}/allBundles`)
      //   .then(resBundles => {
      //     return resItems.data.data.concat(resBundles.data.data);
      //   });
      // })
      // .then(response => {
      //   return response.slice(response.length-6, response.length).reverse();
      // })
      .then(response => {
        return response.data.data.slice(response.data.data.length-6, response.data.data.length).reverse();
      })
      .then(response => {
        dispatch({
          type: GET_RECENT_PRODUCTS,
          payload: response
        });
      });
    });
  }
);

export const getItems = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_ITEMS,
          payload: response
        });
      });
    });
  }
);

export const addItem = (name, productId, categoryId, photo, stock, supplies, steps) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${shop_id}`, 'post', {name, productId, categoryId, photo, stock, supplies, steps})
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_ITEM,
          payload: response
        });
      })
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        return response.data.data.slice(response.data.data.length-6, response.data.data.length).reverse();
      })
      .then(response => {
        dispatch({
          type: GET_RECENT_PRODUCTS,
          payload: response
        });
      })
      .then(response => {
        return request(`/products/${shop_id}/allUnlinked`);
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const editItem = (id, name, productId, categoryId, photo, stock, supplies, steps) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${id}`, 'put', {name, productId, categoryId, photo, stock, supplies, steps})
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_ITEM,
          payload: response
        });
      })
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        return response.data.data.slice(response.data.data.length-6, response.data.data.length).reverse();
      })
      .then(response => {
        dispatch({
          type: GET_RECENT_PRODUCTS,
          payload: response
        });
      })
      .then(response => {
        return request(`/products/${shop_id}/allUnlinked`)
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const deleteItem = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${id}`, 'put', {archived: true})
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_ITEM,
          payload: response
        });
      })
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        return response.data.data.slice(response.data.data.length-6, response.data.data.length).reverse();
      })
      .then(response => {
        dispatch({
          type: GET_RECENT_PRODUCTS,
          payload: response
        });
      })
      .then(response => {
        return request(`/products/${shop_id}/allUnlinked`);
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getBundles = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/bundles/${shop_id}/allBundles`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_BUNDLES,
          payload: response
        });
      });
    });
  }
);

export const addBundle = (name, productId, categoryId, photo, stock, items, steps) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/bundles/${shop_id}`, 'post', {name, productId, categoryId, photo, stock, items, steps})
      .then(response => {
        return request(`/bundles/${shop_id}/allBundles`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_BUNDLE,
          payload: response
        });
      })
      .then(response => {
        return request(`/products/${shop_id}/allUnlinked`);
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const editBundle = (id, name, productId, categoryId, photo, stock, items, steps) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/bundles/${id}`, 'put', {name, productId, categoryId, photo, stock, items, steps})
      .then(response => {
        return request(`/bundles/${shop_id}/allBundles`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_BUNDLE,
          payload: response
        });
      })
      .then(response => {
        return request(`/products/${shop_id}/allUnlinked`);
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const deleteBundle = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/bundles/${id}`, 'put', {archived: true})
      .then(response => {
        return request(`/bundles/${shop_id}/allBundles`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_BUNDLE,
          payload: response
        });
      })
      .then(response => {
        return request(`/products/${shop_id}/allUnlinked`);
      })
      .then(response => {
        dispatch({
          type: GET_UNLINKED_PRODUCTS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getCategories = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/categories/${shop_id}/allCategories`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_CATEGORIES,
          payload: response
        });
      });
    });
  }
);

export const addCategory = name => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/categories/${shop_id}`, 'post', {name})
      .then(response => {
        return request(`/categories/${shop_id}/allCategories`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_CATEGORY,
          payload: response
        });
      });
    });
  }
);

export const editCategory = (id, name) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/categories/${id}`, 'put', {name})
      .then(response => {
        return request(`/categories/${shop_id}/allCategories`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_CATEGORY,
          payload: response
        });
      });
    });
  }
);

export const deleteCategory = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/categories/${id}`, 'delete')
      .then(response => {
        return request(`/categories/${shop_id}/allCategories`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: response
        });
      });
    });
  }
);

export const getProductsByCategory = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        return response.data.data.filter(item => item.category_id === parseInt(id, 10));
      })
      .then(resItems => {
        return request(`/bundles/${shop_id}/allBundles`)
        .then(resBundles => {
          return resItems.concat(resBundles.data.data.filter(bundle => bundle.category_id === parseInt(id, 10)));
        });
      })
      .then(response => {
        return response.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_PRODUCTS_BY_CATEGORY,
          payload: response
        });
      });
    });
  }
);

export const getSupplies = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/supplies/${shop_id}/allSupplies`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_SUPPLIES,
          payload: response
        });
      });
    });
  }
);

export const addSupply = (name, stock, measure_type, source_id, kind_id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/supplies/${shop_id}`, 'post', {name, stock, measure_type, source_id, kind_id})
      .then(response => {
        return request(`/supplies/${shop_id}/allSupplies`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_SUPPLY,
          payload: response
        });
      });
    });
  }
);

export const editSupply = (id, name, stock, measure_type, source_id, kind_id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/supplies/${id}`, 'put', {name, stock, measure_type, source_id, kind_id})
      .then(response => {
        return request(`/supplies/${shop_id}/allSupplies`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_SUPPLY,
          payload: response
        });
      });
    });
  }
);

export const deleteSupply = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/supplies/${id}`, 'delete')
      .then(response => {
        return request(`/supplies/${shop_id}/allSupplies`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_SUPPLY,
          payload: response
        });
      });
    });
  }
);

export const getKinds = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/kinds/${shop_id}/allKinds`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_KINDS,
          payload: response
        });
      });
    });
  }
);

export const addKind = name => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/kinds/${shop_id}`, 'post', {name})
      .then(response => {
        return request(`/kinds/${shop_id}/allKinds`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_KIND,
          payload: response
        });
      });
    });
  }
);

export const editKind = (id, name) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/kinds/${id}`, 'put', {name})
      .then(response => {
        return request(`/kinds/${shop_id}/allKinds`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_KIND,
          payload: response
        });
      });
    });
  }
);

export const deleteKind = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/kinds/${id}`, 'delete')
      .then(response => {
        return request(`/kinds/${shop_id}/allKinds`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_KIND,
          payload: response
        });
      });
    });
  }
);

export const getSuppliesByKind = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/supplies/${shop_id}/allSupplies`)
      .then(response => {
        return response.data.data.filter(supply => supply.kind_id === parseInt(id, 10));
      })
      .then(response => {
        return response.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_SUPPLIES_BY_KIND,
          payload: response
        });
      });
    });
  }
);

export const getSources = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/sources/${shop_id}/allSources`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_SOURCES,
          payload: response
        });
      });
    });
  }
);

export const addSource = (name, type_id, link) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/sources/${shop_id}`, 'post', {name, type_id, link})
      .then(response => {
        return request(`/sources/${shop_id}/allSources`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_SOURCE,
          payload: response
        });
      });
    });
  }
);

export const editSource = (id, name, link, type_id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/sources/${id}`, 'put', {name, link, type_id})
      .then(response => {
        return request(`/sources/${shop_id}/allSources`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_SOURCE,
          payload: response
        });
      });
    });
  }
);

export const deleteSource = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/sources/${id}`, 'delete')
      .then(response => {
        return request(`/sources/${shop_id}/allSources`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_SOURCE,
          payload: response
        });
      });
    });
  }
);

export const getTypes = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/types/${shop_id}/allTypes`)
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_TYPES,
          payload: response
        });
      });
    });
  }
);

export const addType = name => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/types/${shop_id}`, 'post', {name})
      .then(response => {
        return request(`/types/${shop_id}/allTypes`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: ADD_TYPE,
          payload: response
        });
      });
    });
  }
);

export const editType = (id, name) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/types/${id}`, 'put', {name})
      .then(response => {
        return request(`/types/${shop_id}/allTypes`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: EDIT_TYPE,
          payload: response
        });
      });
    });
  }
);

export const deleteType = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/types/${id}`, 'delete')
      .then(response => {
        return request(`/types/${shop_id}/allTypes`);
      })
      .then(response => {
        return response.data.data.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: DELETE_TYPE,
          payload: response
        });
      });
    });
  }
);

export const getSourcesByType = id => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/sources/${shop_id}/allSources`)
      .then(response => {
        return response.data.data.filter(source => source.type_id === parseInt(id, 10));
      })
      .then(response => {
        return response.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(response => {
        dispatch({
          type: GET_SOURCES_BY_TYPE,
          payload: response
        });
      });
    });
  }
);
