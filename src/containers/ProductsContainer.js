import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import { Card } from 'semantic-ui-react';

const ProductsContainer = ({ products, addToCart }) => (
  <Card.Group>
    <ProductsList name="Products">
      {products.length === 0 ? (
        <em>There are no products.</em>
      ) : (
        products.map(product => (
          <Card key={`card-${product.id}`}>
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => addToCart(product.id)}
            />
          </Card>
        ))
      )}
    </ProductsList>
  </Card.Group>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
});

export default connect(
  mapStateToProps,
  { addToCart },
)(ProductsContainer);
