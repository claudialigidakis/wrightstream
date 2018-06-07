import {
  GET_PRODUCTS,
  GET_ITEMS,
  GET_BUNDLES,
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SUPPLIES,
  GET_KINDS,
  GET_SUPPLIES_BY_KIND,
  GET_SOURCES,
  ADD_SOURCE,
  EDIT_SOURCE,
  DELETE_SOURCE,
  GET_TYPES,
  ADD_TYPE,
  EDIT_TYPE,
  DELETE_TYPE,
  GET_SOURCES_BY_TYPE
} from '../actions/products';

let initialState = {
  products: [],
  items: [],
  bundles: [],
  categories: [],
  productsByCategory: [],
  supplies: [],
  kinds: [],
  suppliesByKind: [],
  sources: [],
  types: [],
  sourcesByType: []
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
    case GET_SUPPLIES_BY_KIND:
      return {...state, suppliesByKind: action.payload};
    case GET_SOURCES:
      return {...state, sources: action.payload};
    case ADD_SOURCE:
      return {...state, sources: action.payload};
    case EDIT_SOURCE:
      return {...state, sources: action.payload};
    case DELETE_SOURCE:
      return {...state, sources: action.payload};
    case GET_TYPES:
      return {...state, types: action.payload};
    case ADD_TYPE:
      return {...state, types: action.payload};
    case EDIT_TYPE:
      return {...state, types: action.payload};
    case DELETE_TYPE:
      return {...state, types: action.payload};
    case GET_SOURCES_BY_TYPE:
      return {...state, sourcesByType: action.payload};
    default:
      return state;
  }
};
