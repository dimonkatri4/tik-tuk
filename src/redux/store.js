import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./users-reducer";
import trendingReducer from "./trending-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    users: usersReducer,
    trending: trendingReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store