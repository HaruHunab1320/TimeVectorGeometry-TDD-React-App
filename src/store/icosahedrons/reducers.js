import {combineReducers} from 'redux';
import {STORE_ICOSAHEDRONS} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_ICOSAHEDRONS:
      return action.records;
    default:
      return state;  
  }
};

export default combineReducers({
  records,
})