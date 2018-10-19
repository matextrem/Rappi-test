import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

const Product = ({ price, quantity, name }) => (
  <div className="product-text">
    <p>{name}</p>
    <span> {price}{quantity ? ` x ${quantity}` : null} </span>
  </div>
);

Product.propTypes = {
  price: PropTypes.string,
  quantity: PropTypes.number,
  name: PropTypes.string,
};

export default Product;
