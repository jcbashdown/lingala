import { combineReducers } from 'redux';
import routes from './reducers/routes';
import mainReducer from './reducers/mainReducer';

export default combineReducers({
  routes,
  mainReducer 
});
