import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories,
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

export const getAllCategories = () => dispatch => {
  shop.getCategories(categories => {
    dispatch(receiveCategories(categories));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].quantity > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();
  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
  });
};
