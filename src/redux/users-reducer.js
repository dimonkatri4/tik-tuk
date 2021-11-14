import {userAPI} from "../app/api";

const SET_USERS_FEED = '/users/SET_USERS_FEED';
const SET_USERS_INFO = '/users/SET_USERS_INFO';

let initialState ={
    userFeed: null,
    userInfo: null
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
        default:
            return state
    }
}

export const setUsersFeed = (userFeed) => ({type:SET_USERS_FEED, userFeed});
export const setUsersInfo = (userInfo) => ({type:SET_USERS_INFO, userInfo});

export const requestUsersFeed = () => async (dispatch) => {
    const data = await userAPI.getUserFeed();
    dispatch(setUsersFeed(data));
}

export const requestUsersInfo = () => async (dispatch) => {
    const data = await userAPI.getUserInfo();
    dispatch(setUsersInfo(data));
}



export default usersReducer