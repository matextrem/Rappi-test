import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import Product from './Product';
import { Button } from 'semantic-ui-react'
const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn(),
  };
  const component = shallow(
    <Cart products={products} total={total} {...actions} />,
  );
  return {
    component: component,
    actions: actions,
    button: component.find(Button),
    products: component.find(Product),
    em: component.find('em'),
    p: component.find('p'),
  };
};
describe('Cart component', () => {
  
  it('should display total', () => {
    const { p } = setup('76');
    expect(p.text()).toMatch(/^Total: \$76/);
  });
  it('should display add some products message', () => {
    const { em } = setup();
    expect(em.text()).toMatch(/^Please add some products to cart/);
  });
  it('should disable button', () => {
    const { button } = setup();
    expect(button.prop('disabled')).toEqual(true);
  });
  describe('when given product', () => {
    const product = [
      {
        id: 1,
        name: 'Product 1',
        price: '$9,99',
        quantity: 1,
      },
    ];
    it('should render products', () => {
      const { products } = setup('$9,99', product);
      const props = {
        name: product[0].name,
        price: product[0].price,
        quantity: product[0].quantity,
      };
      expect(products.at(0).props()).toEqual(props);
    });
    it('should not disable button', () => {
      const { button } = setup('$9,99', product);
      expect(button.at(1).prop('disabled')).toEqual(false);
    });
    it('should call action on button click', () => {
      const { button, actions } = setup('$9,99', product);
      button.at(1).simulate('click');
      expect(actions.onCheckoutClicked).toBeCalled();
    });
  });
});