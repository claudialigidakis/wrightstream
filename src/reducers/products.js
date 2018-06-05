import {
  GET_PRODUCTS,
  GET_ITEMS,
  GET_BUNDLES,
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SUPPLIES,
  GET_KINDS,
  GET_SOURCES,
  GET_TYPES
} from '../actions/products';

let initialState = {
  products: [],
  items: [],
  bundles: [],
  categories: [],
  productsByCategory: [],
  supplies: [],
  kinds: [],
  sources: [],
  types: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload};
    case GET_ITEMS:
      return {...state, items: action.payload};
    case GET_BUNDLES:
      return {...state, bundles: action.payload};
    case GET_CATEGORIES:
      return {...state, categories: action.payload};
    case GET_PRODUCTS_BY_CATEGORY:
      return {...state, productsByCategory: action.payload};
    case GET_SUPPLIES:
      return {...state, supplies: action.payload};
    case GET_KINDS:
      return {...state, kinds: action.payload};
    case GET_SOURCES:
      return {...state, sources: action.payload};
    case GET_TYPES:
      return {...state, types: action.payload};
    default:
      return state;
  }
};
