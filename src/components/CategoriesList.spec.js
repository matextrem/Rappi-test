import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from './CategoriesList';

const setup = props => {
  const actions = {
    onCategoryClicked: jest.fn(),
  };
  const component = shallow(
    <CategoriesList {...props} {...actions} />
  )
  return {
    component: component,
  }
}

describe('CategoriesList component', () => {
  it('should render dropdown with categories text', () => {
    const { component } = setup({ categories: {}, categoryText: 'Categories' });
    expect(component.props().children.props.text).toBe('Categories');
  })
}) 