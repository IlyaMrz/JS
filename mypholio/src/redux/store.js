import { createStore } from 'redux';
import mathReducer from './reducers'

export const store = createStore(mathReducer);