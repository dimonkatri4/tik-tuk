import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {requestUsersFeed, requestUsersInfo} from "../../../redux/users-reducer";
import {compose} from "redux";
import {useParams} from "react-router-dom";
import {requestTrendingFeed} from "../../../redux/trending-reducer";


const ProfileContainer = (props) => {

    let {userId} = useParams();

    useEffect(()=> {
        userId ? props.requestUsersInfo(userId) : props.requestUsersInfo()
    },[userId,props.errorUser])

    useEffect(()=> {
        props.requestTrendingFeed()
    },[props.errorTrend])

/*    useEffect(()=> {
        userId ? props.requestUsersFeed(userId) : props.requestUsersFeed()
    },[])*/

    return <Profile {...props} />
}

const mapStateToProps = (state) => ({
    profile: state.users.userInfo,
    userFeed: state.users.userFeed,
    isFetching: state.users.isFetching,
    trending: state.trending.trendingFeed,
    errorTrend: state.trending.error,
    errorUser: state.users.requestError
})

export default compose(
    connect(mapStateToProps,{requestUsersInfo,requestUsersFeed,requestTrendingFeed}),
)(ProfileContainer)