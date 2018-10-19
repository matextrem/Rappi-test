import React from 'react';
import PropTypes from 'prop-types';
import './ProductsList.scss';

const ProductsList = ({ name, children }) => (
  <div className="products-list">
    <h3>{name}</h3>
    <div className="card-container">{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
};

export default ProductsList;
