import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

// hooking up with redux devtools
let composeEnhancers = (_) => _;

try {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} catch(e) { /**/ }

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))(createStore);

export default function configureStore(initial_state) {
  return createStoreWithMiddleware(rootReducer, initial_state);
}
