import React, {useState} from "react";
import style from "./profile.module.css"
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";


const Profile = ({profile, userFeed, isFetching, trending}) => {


    let pageSize = 6; //размер подмассива
    let pageCount = Math.ceil((trending.length+1) / pageSize);
    let subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i <Math.ceil(trending.length/pageSize); i++){
        subarray[i] = trending.slice((i*pageSize), (i*pageSize) + pageSize);
    }
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    }



    if (!profile || isFetching) {
        return <div className={style.profileUserInfo}><CircularProgress/></div>
    }
    return (
        <div className={style.profilePage}>
            <div className={style.profileUserInfo}>
                <div className={style.profileAvatar}>
                    <Avatar
                        src={profile.user.avatarMedium}
                        sx={{width: 150, height: 150}}
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
                <div>
                <div className={style.profilePosts}>
                    {subarray[page-1].map(t => <ProfilePost
                        videoUrl={t.videoUrl}
                        cover={t.covers.default}
                    />)}
                </div>
                    <Pagination count={pageCount} page={page} onChange={handleChange} />
                </div>
            }

        </div>
    )
}

const ProfilePost = ({videoUrl, cover,trending}) => {
    return (

            <video controls loop poster={cover} className={style.video}>
                <source src={videoUrl}/>
            </video>
    )
}

export default Profile