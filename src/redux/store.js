import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './users-reducer';
import trendingReducer from './trending-reducer';

const reducers = combineReducers({
    users: usersReducer,
    trending: trendingReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
