import React from 'react';
import PropTypes from 'prop-types';
import { doFilter } from '../actions';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
const Filters = ({ options, filter, doFilter }) => {
  return (
    <div>
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
        value={filter}
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
  filter: PropTypes.string,
};
const mapStateToProps = state => ({
  filter: state.currentFilter,
});
export default connect(
  mapStateToProps,
  { doFilter },
)(Filters);
