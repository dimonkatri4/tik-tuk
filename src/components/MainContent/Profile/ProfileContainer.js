import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {requestUsersFeed, requestUsersInfo} from "../../../redux/users-reducer";


const ProfileContainer = (props) => {

    useEffect(()=> {
        props.requestUsersInfo()
    },[])

    useEffect(()=> {
        props.requestUsersFeed()
    },[])

    return <Profile {...props} />
}

const mapStateToProps = (state) => ({
    profile: state.users.userInfo,
    userFeed: state.users.userFeed
})

export default connect(mapStateToProps,{requestUsersInfo,requestUsersFeed})(ProfileContainer)