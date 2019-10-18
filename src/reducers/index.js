import { combineReducers } from 'redux'
import movie from './movieReducer';

const compareApp = combineReducers({
  movie
});

export default compareApp;