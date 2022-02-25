import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import resturantReducer from './reducers/resturantReducer';

const rootReducer = combineReducers({
  resturantReducer: resturantReducer,
});

let composeEnhancer = compose;

if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const configStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
