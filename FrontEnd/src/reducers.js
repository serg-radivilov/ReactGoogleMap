import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import data from './Moduls/reducers/data';
import selectAddress from './Moduls/reducers/selectAddress';

export default combineReducers({
  routing: routerReducer,
  data,
  selectAddress
})