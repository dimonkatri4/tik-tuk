import {userAPI} from "../api/api";

const SET_USERS_FEED = '/users/SET_USERS_FEED';
const SET_USERS_INFO = '/users/SET_USERS_INFO';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'

let initialState ={
    userFeed: null,
    userInfo: null,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_FEED:
            return {
                ...state,userFeed: action.userFeed
            }
        case SET_USERS_INFO:
            return {
                ...state,userInfo: action.userInfo
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setUsersFeed = (userFeed) => ({type:SET_USERS_FEED, userFeed});
export const setUsersInfo = (userInfo) => ({type:SET_USERS_INFO, userInfo});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestUsersFeed = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUserFeed(id);
    dispatch(toggleIsFetching(false));
    dispatch(setUsersFeed(data));
}

export const requestUsersInfo = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUserInfo(id);
    dispatch(toggleIsFetching(false));
    dispatch(setUsersInfo(data));
}



export default usersReducer