import {
  GET_LINKED_PRODUCTS,
  GET_PRODUCTS,
  GET_ITEMS,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  GET_BUNDLES,
  ADD_BUNDLE,
  EDIT_BUNDLE,
  DELETE_BUNDLE,
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SUPPLIES,
  ADD_SUPPLY,
  EDIT_SUPPLY,
  DELETE_SUPPLY,
  GET_KINDS,
  ADD_KIND,
  EDIT_KIND,
  DELETE_KIND,
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
  linkedProducts: [],
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
    case GET_LINKED_PRODUCTS:
      return {...state, linkedProducts: action.payload};
    case GET_PRODUCTS:
      return {...state, products: action.payload};
    case GET_ITEMS:
      return {...state, items: action.payload};
    case ADD_ITEM:
      return {...state, items: action.payload};
    case EDIT_ITEM:
      return {...state, items: action.payload};
    case DELETE_ITEM:
      return {...state, items: action.payload};
    case GET_BUNDLES:
      return {...state, bundles: action.payload};
    case ADD_BUNDLE:
      return {...state, bundles: action.payload};
    case EDIT_BUNDLE:
      return {...state, bundles: action.payload};
    case DELETE_BUNDLE:
      return {...state, bundles: action.payload};
    case GET_CATEGORIES:
      return {...state, categories: action.payload};
    case ADD_CATEGORY:
      return {...state, categories: action.payload};
    case EDIT_CATEGORY:
      return {...state, categories: action.payload};
    case DELETE_CATEGORY:
      return {...state, categories: action.payload};
    case GET_PRODUCTS_BY_CATEGORY:
      return {...state, productsByCategory: action.payload};
    case GET_SUPPLIES:
      return {...state, supplies: action.payload};
    case ADD_SUPPLY:
      return {...state, supplies: action.payload};
    case EDIT_SUPPLY:
      return {...state, supplies: action.payload};
    case DELETE_SUPPLY:
      return {...state, supplies: action.payload};
    case GET_KINDS:
      return {...state, kinds: action.payload};
    case ADD_KIND:
      return {...state, kinds: action.payload};
    case EDIT_KIND:
      return {...state, kinds: action.payload};
    case DELETE_KIND:
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
