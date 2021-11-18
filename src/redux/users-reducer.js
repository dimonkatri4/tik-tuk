import {userAPI} from "../api/api";
import userFeedData from "../user-feed.json"

const SET_USERS_FEED = '/users/SET_USERS_FEED';
const SET_USERS_INFO = '/users/SET_USERS_INFO';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const SET_REQUEST_ERROR = '/users/SET_REQUEST_ERROR';

let initialState ={
    userFeed: null,
    userInfo: null,
    isFetching: false,
    requestError: null
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
                ...state,isFetching: action.error
            }
        case SET_REQUEST_ERROR:
            return {
                ...state,requestError: action.error
            }
        default:
            return state
    }
}

export const setUsersFeed = (userFeed) => ({type:SET_USERS_FEED, userFeed});
export const setUsersInfo = (userInfo) => ({type:SET_USERS_INFO, userInfo});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setRequestError = (error) => ({type:SET_REQUEST_ERROR, error});

// In case the data came from the server correctly
/*export const requestUsersFeed = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUserFeed(id);
    dispatch(toggleIsFetching(false));
    dispatch(setUsersFeed(data));
}*/

// Take data from a file user-feed.json
export const requestUsersFeed = () => (dispatch) => {
    const data =  userFeedData;
    dispatch(setUsersFeed(data));
}

export const requestUsersInfo = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try{
    const data = await userAPI.getUserInfo(id);
    if (!Object.keys(data).length) { dispatch(setRequestError("Empty object in userInfo"))}
    dispatch(toggleIsFetching(false));
    dispatch(setUsersInfo(data));}
    catch (error) {
        dispatch(setRequestError(error.response.data.message))
    }
}



export default usersReducer