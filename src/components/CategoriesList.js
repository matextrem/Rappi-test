import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import './CategoriesList.scss';

const CategoriesList = ({ categories, onCategoryClicked, categoryText }) => {
  const dropDownCategories = (categories, name) => (
    <Dropdown text={name} pointing className="category-dropdown link item">
      <Dropdown.Menu>
        {categories.map(category => {
          if (category.sublevels)
            return (
              <Dropdown.Item key={category.id}>
                {dropDownCategories(category.sublevels, category.name)}
              </Dropdown.Item>
            );
          return (
            <Dropdown.Item
              className="leave"
              onClick={() => onCategoryClicked(category.id, category.name)}
              key={category.id}
            >
              {category.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
  return (
    <div className="categories-list">
      {dropDownCategories(Object.values(categories), categoryText)}
    </div>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sublevels: PropTypes.array,
  }).isRequired,
  onCategoryClicked: PropTypes.func,
  categoryText: PropTypes.string.isRequired,
};

export default CategoriesList;
