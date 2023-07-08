
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { generalReducer } from './generalReducer'
import { alertReducer } from './alertReducer'

const reducer = combineReducers({ generalReducer, alertReducer });
const store = createStore(reducer, composeWithDevTools(applyMiddleware()));
export default store;
