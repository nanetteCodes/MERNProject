import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';


// object of any reducers we create
export default combineReducers({
  alert,
  auth
});