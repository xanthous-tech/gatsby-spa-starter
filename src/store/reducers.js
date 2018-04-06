import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default (state, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
      return { test: 'passed' }

  }
}
