import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import FilterContainer from './FilterContainer';

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);
export default App;
