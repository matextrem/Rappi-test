import React from 'react';
import PropTypes from 'prop-types';
const Product = ({ price, quantity, name }) => (
  <div>
    {name} - {price}
    {quantity ? ` x ${quantity}` : null}
  </div>
);
Product.propTypes = {
  price: PropTypes.string,
  quantity: PropTypes.number,
  name: PropTypes.string,
};
export default Product;
