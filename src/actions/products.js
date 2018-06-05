import request from '../helpers/request';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_BUNDLES = 'GET_BUNDLES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';

export const getProducts = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        return response.data.data.slice(response.data.data.length-6, response.data.data.length)
      })
      .then(response => {
        dispatch({
          type: GET_PRODUCTS,
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
      const shop_id = response.data.shops_id
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        dispatch({
          type: GET_ITEMS,
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
      const shop_id = response.data.shops_id
      request(`/bundles/${shop_id}/allBundles`)
      .then(response => {
        dispatch({
          type: GET_BUNDLES,
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
      const shop_id = response.data.shops_id
      request(`/categories/${shop_id}/allCategories`)
      .then(response => {
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getProductsByCategory = (id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        return response.data.data.filter(product => product.category_id === parseInt(id, 10))
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
