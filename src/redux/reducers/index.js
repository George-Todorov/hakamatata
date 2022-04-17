import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import loggerReducer from './loggerReducer';
import testReducer from './testReduser';

export default combineReducers({
  commonReducer,
  logger: loggerReducer, 
  testReducer
});
