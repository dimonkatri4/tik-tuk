import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {requestUsersFeed, requestUsersInfo} from "../../../redux/users-reducer";
import {compose} from "redux";
import {useParams} from "react-router-dom";


const ProfileContainer = (props) => {

    let {userId} = useParams();

    useEffect(()=> {
        userId ? props.requestUsersInfo(userId) : props.requestUsersInfo()
    },[])

    useEffect(()=> {
        userId ? props.requestUsersFeed(userId) : props.requestUsersFeed()
    },[])

    return <Profile {...props} />
}

const mapStateToProps = (state) => ({
    profile: state.users.userInfo,
    userFeed: state.users.userFeed,
    isFetching: state.users.isFetching
})

export default compose(
    connect(mapStateToProps,{requestUsersInfo,requestUsersFeed}),
)(ProfileContainer)