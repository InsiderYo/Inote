import { combineReducers } from 'redux';
import todos from './todos/reducer';

const reducers = combineReducers({
  todos,
});

export default reducers;
