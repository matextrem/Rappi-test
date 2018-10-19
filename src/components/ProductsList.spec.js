import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

const setup = props => {
  const component = shallow(
    <ProductsList name={props.name}>{props.children}</ProductsList>
  )
  return {
    component: component,
    children: component.children().at(1),
    h1: component.find('h1'),
  }
}

describe('ProductsList component', () => {
  it('should render title', () => {
    const { h1 } = setup({ name: 'Test Products' })
    expect(h1.text()).toMatch(/^Test Products$/)
  });
  
  it('should render children', () => {
    const { children } = setup({ name: 'Test Products', children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  });
});