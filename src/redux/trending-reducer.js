import {trendingAPI} from "../api/api";

const SET_TRENDING_FEED = '/trending/SET_TRENDING_FEED'

let initialState = {
    trendingFeed: null
}

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_FEED:
            return {
                ...state, trendingFeed: action.trendingFeed
            }
        default:
            return state
    }
}

export const setTrendingFeed = (trendingFeed) => ({type: SET_TRENDING_FEED, trendingFeed})


export const requestTrendingFeed = () => async (dispatch) => {
    const data = await trendingAPI.getTrendingFeed();
    if (data.length === 0) {console.error("Empty array")}
    dispatch(setTrendingFeed(data));
}

export default trendingReducer