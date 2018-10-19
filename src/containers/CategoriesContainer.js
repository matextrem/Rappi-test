import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesList from '../components/CategoriesList';

const CategoriesContainer = ({ categories }) => (
  <CategoriesList categories={categories} />
);

const mapStateToProps = state => ({
  categories: state.categories,
});

CategoriesList.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sublevels: PropTypes.array,
  }),
};

export default connect(mapStateToProps)(CategoriesContainer);
