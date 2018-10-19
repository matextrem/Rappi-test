import React from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import {
  FILTER_ASC_QUANTITY,
  FILTER_DESC_QUANTITY,
  FILTER_AVAILABILITY,
} from '../constants/ActionTypes';

const options = [
  { key: 1, text: 'Mayor - Cantidad', value: FILTER_DESC_QUANTITY },
  { key: 2, text: 'Menor - Cantidad', value: FILTER_ASC_QUANTITY },
  { key: 3, text: 'Disponibilidad', value: FILTER_AVAILABILITY },
];

const FilterContainer = () => <Filter options={options} />;

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(FilterContainer);
