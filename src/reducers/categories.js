import { RECEIVE_CATEGORIES } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const total = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        ...action.categories,
      };
    default:
      return state;
  }
};

export default combineReducers({
  total,
});
