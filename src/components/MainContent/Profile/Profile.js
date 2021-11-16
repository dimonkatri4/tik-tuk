import React from "react";
import style from "./profile.module.css"
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import {useParams} from "react-router-dom";


const Profile = ({profile,userFeed}) => {
    if (!profile){ return <div className={style.profilePage}><CircularProgress/></div> }
    return(
    <div className={style.profilePage}>
        <div className={style.profileAvatar}>
            <Avatar
                src={profile.user.avatarMedium}
                sx={{ width: 150, height: 150 }}
            />
        </div>
        <div className={style.profileInfo}>
            <div className={style.nickname}>{profile.user.nickname}</div>
            <div className={style.signature}>{profile.user.signature}</div>
            <div className={style.status}>
                <div><span>{profile.stats.followingCount} </span>Following </div>
                <div><span>{profile.stats.followerCount} </span>Followers </div>
                <div><span>{profile.stats.heartCount} </span>Likes </div>
            </div>
        </div>
        <div>
            {/*{userFeed &&
            <video controls>
                <source src={props.userFeed[0].video.downloadAddr}/>
            </video> }*/}
        </div>


    </div>
    )}

export default Profile