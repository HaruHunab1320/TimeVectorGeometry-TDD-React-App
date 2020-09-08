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

const loading = (state = true, action) => {
  switch(action.type) {
    case STORE_ICOSAHEDRONS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  records,
  loading,
})