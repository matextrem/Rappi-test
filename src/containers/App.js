import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import FilterContainer from './FilterContainer';
import CategoriesContainer from './CategoriesContainer';
import { Header, Icon } from 'semantic-ui-react';
import './App.scss';

const App = () => (
  <div className="main-container">
    <Header as="h2">
      <Icon name="shopping bag" />
      <Header.Content>E-commerce App</Header.Content>
    </Header>
    <div className="filter-container">
      <FilterContainer />
      <div className="cart-container">
        <CartContainer />
      </div>
    </div>
    <hr />
    <div className="categories-container">
      <CategoriesContainer />
    </div>
    <ProductsContainer />
  </div>
);

export default App;
