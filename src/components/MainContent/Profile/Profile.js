import React from "react";
import style from "./profile.module.css"
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";


const Profile = (props) => {
    if (!props.profile || !props.userFeed){ return <div className={style.profilePage}><CircularProgress/></div> }
    return(
    <div className={style.profilePage}>
        <div className={style.profileAvatar}>
            <Avatar
                src={props.profile.user.avatarMedium}
                sx={{ width: 150, height: 150 }}
            />
        </div>
        <div className={style.profileInfo}>
            <div className={style.nickname}>{props.profile.user.nickname}</div>
            <div className={style.signature}>{props.profile.user.signature}</div>
            <div className={style.status}>
                <div><span>{props.profile.stats.followingCount} </span>Following </div>
                <div><span>{props.profile.stats.followerCount} </span>Followers </div>
                <div><span>{props.profile.stats.heartCount} </span>Likes </div>
            </div>
        </div>
    </div>
    )}

export default Profile