import { trendingAPI } from '../api/api';

const SET_TRENDING_FEED = '/trending/SET_TRENDING_FEED';
const SET_ERROR = '/trending/SET_ERROR';

const initialState = {
    trendingFeed: null,
    error: null,
};

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_FEED:
            return {
                ...state,
                trendingFeed: action.trendingFeed,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export const setTrendingFeed = (trendingFeed) => ({
    type: SET_TRENDING_FEED,
    trendingFeed,
});
export const setError = (error) => ({ type: SET_ERROR, error });

export const requestTrendingFeed = () => async (dispatch) => {
    try {
        const data = await trendingAPI.getTrendingFeed();
        if (data.length === 0) {
            dispatch(setError('Empty array trending feed'));
        }
        dispatch(setTrendingFeed(data));
    } catch (err) {
        dispatch(setError(err.response.data.message));
    }
};

export default trendingReducer;
