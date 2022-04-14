import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import loggerReducer from './loggerReducer';

export default combineReducers({
  commonReducer,
  logger: loggerReducer
});
