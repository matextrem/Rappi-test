import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      name={product.name}
      price={product.price}
      quantity={product.quantity}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.quantity > 0 ? '' : 'disabled'}>
      {product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
);
ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};
export default ProductItem;
