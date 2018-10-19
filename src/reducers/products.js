import { combineReducers } from 'redux';
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  FILTER_PRODUCTS,
  FILTER_ASC_QUANTITY,
  FILTER_DESC_QUANTITY,
  FILTER_AVAILABILITY,
  MAX_PRODUCT_PRICE,
  UPDATE_PRODUCT_FROM_CART,
  FILTER_BY_PRICE_PRODUCT,
  FILTER_BY_DROPDOWN_PRODUCT,
  FILTER_BY_CATEGORY,
} from '../constants/ActionTypes';

const initialState = {
  priceFilter: 10000,
  categoryFilter: null,
  dropDownFilter: '',
  maxPrice: 999999,
  searchCategoryFilter: null,
  categoryText: 'Categories',
};

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    case UPDATE_PRODUCT_FROM_CART:
      return {
        ...state,
        ...state[action.productId].quantity = state[action.productId].quantity + action.quantity,
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
};
const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
};

const currentFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
    if (action.format === FILTER_BY_PRICE_PRODUCT) {
        return {
          ...state,
          priceFilter: action.filter,
        };
      } else if(action.format === FILTER_BY_DROPDOWN_PRODUCT) {
        return {
          ...state,
          dropDownFilter: action.filter,
        };
      } else if(action.format === FILTER_BY_CATEGORY){
        return {
          ...state,
          categoryFilter: action.filter,
          categoryText: action.text || state.categoryText
        };
      }else{
        return {
          ...state,
          searchCategoryFilter: action.filter,
        };
      }
    case MAX_PRODUCT_PRICE:
      const maxPrice = Math.max.apply(
        Math,
        action.products.map(product => product.price.replace(/[^\d.]/g, '')),
      );
      return {
        ...state,
        maxPrice,
        priceFilter: maxPrice,
      };
    default:
      return state;
  }
};

export const getProduct = (state, id) => state.byId[id];

const filterPrice = (product,state) => (
  product.price.replace(/[^\d.]/g, '') <= state.currentFilter.priceFilter
);

const filterCategory = (product,state) => (
  product.sublevel_id === state.currentFilter.categoryFilter || !state.currentFilter.categoryFilter
);

const searchByCategory = (product,state) => (
  product.name.includes(state.currentFilter.searchCategoryFilter) || !state.currentFilter.searchCategoryFilter
);

export const getVisibleProducts = state => {
  const products = state.visibleIds
    .map(id => getProduct(state, id))
    .filter(
      product =>
        filterPrice(product,state) && filterCategory(product,state) && searchByCategory(product,state),
    );
  switch (state.currentFilter.dropDownFilter) {
    case FILTER_ASC_QUANTITY:
      return products.sort((a, b) => a.quantity - b.quantity);
    case FILTER_DESC_QUANTITY:
      return products.sort((a, b) => b.quantity - a.quantity);
    case FILTER_AVAILABILITY:
      return products.sort((a, b) => b.available - a.available);
    default:
      return products;
  }
};

export default combineReducers({
  byId,
  visibleIds,
  currentFilter,
});
