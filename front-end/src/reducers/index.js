import {combineReducers} from 'redux';
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  ajaxCallsInProgress
});

export default rootReducer;
