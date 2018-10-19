import React from 'react';
import PropTypes from 'prop-types';

const CategoriesList = ({ categories }) => (
  <div className="categories-list"> {console.log(categories)}</div>
);

CategoriesList.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sublevels: PropTypes.array,
  }),
};

export default CategoriesList;
