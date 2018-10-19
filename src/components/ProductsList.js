import React from 'react';
import PropTypes from 'prop-types';
import './ProductsList.scss';

const ProductsList = ({ name, children }) => (
  <div className="products-list">
    <h1>{name}</h1>
    <div className="card-container">{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
};

export default ProductsList;
