import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART, FILTER_PRODUCTS, FILTER_ASC_QUANTITY, FILTER_DESC_QUANTITY, FILTER_AVAILABILITY } from '../constants/ActionTypes';

const initialState = {
  currentFilter: null,
}

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

const currentFilter = (state = initialState.currentFilter, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return action.filter
    default:
      return state
  }
}

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state => {
  const products = state.visibleIds.map(id => getProduct(state, id))
  if(state.currentFilter){
    switch (state.currentFilter) {
      case FILTER_ASC_QUANTITY:
        return products.sort((a, b) => a.quantity - b.quantity );
      case FILTER_DESC_QUANTITY:
        return products.sort((a, b) => b.quantity - a.quantity );
      case FILTER_AVAILABILITY:
        return products.sort((a, b) => b.available - a.available );
      default:
        return products;
    }
  }
  return products;
}

  export default combineReducers({
    byId,
    visibleIds,
    currentFilter
  });