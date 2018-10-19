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

const maxPrice = products => ({
  type: types.MAX_PRODUCT_PRICE,
  products,
});

const applyFilter = filter => ({
  type: types.FILTER_PRODUCTS,
  filter,
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

export const getMaxPrice = () => dispatch => {
  shop.getProducts(products => {
    dispatch(dispatch(maxPrice(products)));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

const removeItemFromCart = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

const updateProductQuantity = cartData => ({
  type: types.UPDATE_PRODUCT_FROM_CART,
  productId: cartData.productId,
  quantity: cartData.quantityProduct,
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].quantity > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const doFilter = selection => (dispatch, getState) => {
  dispatch(applyFilter(selection));
};

export const removeFromCart = productId => (dispatch, getState) => {
  const quantityProduct = getState().cart.quantityById[productId];
  dispatch(removeItemFromCart(productId));
  dispatch(updateProductQuantity({productId, quantityProduct}));

}

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
