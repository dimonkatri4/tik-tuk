import React, {useState} from "react";
import style from "./profile.module.css"
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Error from "../../Error/Error";


const Profile = ({profile, userFeed, isFetching, trending, errorTrend, errorUser}) => {

    if (errorTrend || errorUser ) { return <Error errors={[errorTrend,errorUser]} /> }

    if (!profile || isFetching) {
        return <div className={style.profileUserInfo}><CircularProgress/></div>
    }
    return (
        <div className={style.profilePage}>
            <div className={style.profileUserInfo}>
                <div className={style.profileAvatar}>
                    <Avatar
                        src={profile.user.avatarMedium}
                        sx={{width: "12vw", height: "12vw"}}

                    />
                </div>
                <div className={style.userInfo}>
                    <div className={style.nickname}>{profile.user.nickname}</div>
                    <div className={style.signature}>{profile.user.signature}</div>
                    <div className={style.status}>
                        <div><span>{profile.stats.followingCount} </span>Following</div>
                        <div><span>{profile.stats.followerCount} </span>Followers</div>
                        <div><span>{profile.stats.heartCount} </span>Likes</div>
                    </div>
                </div>
            </div>
            {!trending ? <CircularProgress/> :
                <UserPosts trending={trending}/>
            }

        </div>
    )
}


const UserPosts = ({trending}) => {

    let pageSize = 6;
    let subarray = []; //array with broken subarrays
    let pageCount = Math.ceil(trending.length / pageSize);
    for (let i = 0; i < Math.ceil(trending.length / pageSize); i++) {
        subarray[i] = trending.slice((i * pageSize), (i * pageSize) + pageSize);
    }
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    }

    return (
        <div>
            <div className={style.profilePosts}>
                {subarray[page - 1].map(p => (
                    <div className={style.postItem} key={p.id}>
                        <span><FontAwesomeIcon icon={faPlay}/> {p.playCount}</span>
                    <video controls loop poster={p.covers.default} className={style.video} key={p.id}>
                        <source src={p.videoUrl}/>
                    </video>
                    </div>
                ))}
            </div>
            <Pagination count={pageCount} page={page} onChange={handleChange} className={style.pagination}/>
        </div>

    )
}

export default Profile