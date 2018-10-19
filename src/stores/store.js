import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { getAllProducts, getAllCategories, getMaxPrice } from '../actions';
import { loadState, saveState } from '../localStorage';
import _ from 'lodash';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware),
);

store.subscribe(
  _.throttle(() => {
    saveState(store.getState());
  }, 1000),
);

store.dispatch(getAllProducts());
store.dispatch(getAllCategories());
store.dispatch(getMaxPrice());


export default store;
