import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout, removeFromCart } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import { Card } from 'semantic-ui-react';
import Cart from '../components/Cart';

const CartContainer = ({ products, total, checkout, removeFromCart }) => (
  <Card>
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
      onRemoveClicked={id => removeFromCart(id)}
    />
  </Card>
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(
  mapStateToProps,
  { checkout, removeFromCart },
)(CartContainer);
