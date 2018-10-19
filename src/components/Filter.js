import React from 'react';
import PropTypes from 'prop-types';
import { doFilter } from '../actions';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
const Filters = ({
  options,
  priceFilter,
  dropDownfilter,
  doFilter,
  maxPrice,
}) => {
  return (
    <div>
      <div data-role="rangeslider">
        <input
          onChange={e => doFilter(parseInt(e.target.value))}
          type="range"
          name="price"
          value={priceFilter.toString()}
          min="0"
          max={maxPrice.toString()}
        />
        <input
          onChange={e => {
            isNaN(parseInt(e.target.value))
              ? doFilter(0)
              : doFilter(parseInt(e.target.value));
          }}
          type="text"
          value={priceFilter.toString()}
        />
      </div>
      <Dropdown
        icon="filter"
        placeholder="Choose an option"
        floating
        labeled
        button
        className="icon"
        onChange={(e, selection) => doFilter(selection.value)}
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
