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
} from '../constants/ActionTypes';

const initialState = {
  priceFilter: 10000,
  dropDownFilter: '',
  maxPrice: 999999,
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
      if (typeof action.filter === 'number') {
        return {
          ...state,
          priceFilter: action.filter,
        };
      } else {
        return {
          ...state,
          dropDownFilter: action.filter,
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

export const getVisibleProducts = state => {
  const products = state.visibleIds
    .map(id => getProduct(state, id))
    .filter(
      product =>
        product.price.replace(/[^\d.]/g, '') <= state.currentFilter.priceFilter,
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
