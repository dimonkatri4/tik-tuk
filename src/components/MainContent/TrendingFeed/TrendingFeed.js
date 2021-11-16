import React from "react";
import style from "./trendingFeed.module.css";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import {Link} from "react-router-dom";

const TrendingFeed = ({trending}) => {
    if (!trending) {
        return <div><CircularProgress/></div>
    }
    return <div className={style.trendingPage}>
        {
            trending.map(t => <Post
                avatar={t.authorMeta.avatar}
                authorName={t.authorMeta.name}
                nickName={t.authorMeta.nickName}
                postText={t.text}
                musicName={t.musicMeta.musicName}
                musicAuthor={t.musicMeta.musicAuthor}
                videoUrl={t.videoUrl}
                userId={t.authorMeta.id}
            />)
        }
    </div>
}


const Post = ({avatar, authorName, nickName, postText, musicName, musicAuthor, videoUrl, userId}) => {
    return (
        <div className={style.post}>
            <div className={style.postInfo}>
                <div className={style.authorPhoto}>
                    <Link to={"/profile/" + userId}>
                        <Avatar
                            src={avatar}
                            sx={{width: 75, height: 75}}
                        />
                    </Link>
                </div>
                <div>
                    <div>
                        <Link to={"/profile/" + userId} className={style.authorName}>
                            <span >{authorName} </span>
                        </Link>
                        <span className={style.authorNickName}>{nickName}</span>
                    </div>
                    <div className={style.postText}>{postText}</div>
                    <div className={style.musicInfo}>
                        <span>{musicName} - </span>
                        <span>{musicAuthor}</span>
                    </div>
                </div>
            </div>
            <div className={style.video}>
                <video width="400" controls preload="auto">
                    <source src={videoUrl}/>
                </video>
            </div>
        </div>
    )
}

export default TrendingFeed