import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doFilter} from '../actions';
import CategoriesList from '../components/CategoriesList';
import { FILTER_BY_CATEGORY, SEARCH_BY_CATEGORY } from '../constants/ActionTypes';
import { Input } from 'semantic-ui-react';

const CategoriesContainer = ({ categories, categoryFilter, categoryText, doFilter }) => {
  const handleKeyUp = (e) => doFilter(e.target.value,SEARCH_BY_CATEGORY);
  return (<div className="category-filter">
    <CategoriesList
      categories={categories}
      onCategoryClicked={(id,text) => doFilter(id, FILTER_BY_CATEGORY,text)}
      categoryText={categoryText}
    />
    <span>
      {categoryFilter && <Input icon="search" onKeyUp={handleKeyUp} placeholder={`Search by ${categoryText}`} />}
    </span>
  </div>);
};

CategoriesList.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sublevels: PropTypes.array,
  }).isRequired,
  categoryFilter: PropTypes.number,
  doFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  categories: state.categories.total,
  categoryFilter: state.products.currentFilter.categoryFilter,
  categoryText: state.products.currentFilter.categoryText
});

export default connect(
  mapStateToProps,
  { doFilter },
  )(CategoriesContainer);
