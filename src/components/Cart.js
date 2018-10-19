import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Button } from 'semantic-ui-react';
import './Cart.scss';

const Cart = ({ products, total, onCheckoutClicked, onRemoveClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <div key={`container-${product.id}`} className="checkout-product">
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />,
        <Button negative onClick={() => onRemoveClicked(product.id)} key={`button-${product.id}`}>Remove</Button>
      </div>
    )
  ) : (
    <em>Please add some products to cart.</em>
  );
  return (
    <div>
      <h2>Your Cart</h2>
      <div>{nodes}</div>
      <div className="total-checkout">
        <p>Total: {total}</p>
        <Button positive onClick={onCheckoutClicked}
          disabled={hasProducts === false}>
          Checkout
        </Button>
      </div>
    </div>
  );
};
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};
export default Cart;
