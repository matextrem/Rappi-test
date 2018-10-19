import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Button, Icon, Card } from 'semantic-ui-react';
import './ProductItem.scss';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-detail" style={{ marginBottom: 20 }}>
    <Card.Content>
      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
      />
      <Button
        animated="vertical"
        onClick={onAddToCartClicked}
        disabled={!(product.quantity > 0)}
      >
        <Button.Content hidden>
          {' '}
          {product.quantity > 0 ? 'Add' : 'Sold Out'}
        </Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    </Card.Content>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
