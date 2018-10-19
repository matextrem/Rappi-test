import React from 'react';
import PropTypes from 'prop-types';
import { doFilter } from '../actions';
import { connect } from 'react-redux';
import { Dropdown, Input, Label } from 'semantic-ui-react';
import { FILTER_BY_PRICE_PRODUCT, FILTER_BY_DROPDOWN_PRODUCT } from '../constants/ActionTypes';
import './Filter.scss';

const Filters = ({options, priceFilter, dropDownfilter, doFilter, maxPrice}) => {
  return (
    <div>
      <div className="price-filter">
        <input
          onChange={e => doFilter(parseInt(e.target.value), FILTER_BY_PRICE_PRODUCT)}
          className="range-slider"
          type="range"
          name="price"
          value={priceFilter.toString()}
          min="0"
          max={maxPrice.toString()}
        />
        <Input
          labelPosition="right"
          type="text"
          placeholder="Amount"
          onChange={e => {
            isNaN(parseInt(e.target.value))
              ? doFilter(0, FILTER_BY_PRICE_PRODUCT)
              : doFilter(parseInt(e.target.value), FILTER_BY_PRICE_PRODUCT);
          }}
          value={priceFilter.toString()}
        >
          <Label basic>$</Label>
          <input />
          <Label>.00</Label>
        </Input>
      </div>
      <Dropdown
        icon="filter"
        placeholder="Choose an option"
        floating
        labeled
        button
        className="icon"
        onChange={(e, selection) => doFilter(selection.value, FILTER_BY_DROPDOWN_PRODUCT)}
        options={options}
        selection
      />
    </div>
  );
};

Filters.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  doFilter: PropTypes.func.isRequired,
  priceFilter: PropTypes.number,
  dropDownfilter: PropTypes.string,
  maxPrice: PropTypes.number,
};

const mapStateToProps = state => ({
  priceFilter: state.products.currentFilter.priceFilter,
  dropDownfilter: state.products.currentFilter.dropDownfilter,
  maxPrice: state.products.currentFilter.maxPrice,
});

export default connect(
  mapStateToProps,
  { doFilter },
)(Filters);
