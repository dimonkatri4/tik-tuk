import React, { useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMusic,
    faHeart,
    faComment,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from './trendingFeed.module.css';

const Post = function ({
    avatar,
    authorName,
    nickName,
    postText,
    musicName,
    musicAuthor,
    videoUrl,
    userId,
    cover,
    shareCount,
    commentCount,
    diggCount,
}) {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: [0.25, 0.75],
        };
        const handlePlay = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, [videoRef]);

    return (
        <div className={style.post}>
            <div className={style.postInfo}>
                <div className={style.authorPhoto}>
                    <Link to={`/profile/${userId}`}>
                        <Avatar
                            src={avatar}
                            sx={{ width: '5vw', height: '5vw' }}
                        />
                    </Link>
                </div>
                <div>
                    <div>
                        <Link
                            to={`/profile/${userId}`}
                            className={style.authorName}
                        >
                            <span>{authorName} </span>
                        </Link>
                        <span className={style.authorNickName}>{nickName}</span>
                    </div>
                    <div className={style.postText}>{postText}</div>
                    <div className={style.musicInfo}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span> {musicName} - </span>
                        <span>{musicAuthor}</span>
                    </div>
                </div>
            </div>
            <div className={style.video}>
                <video controls ref={videoRef} poster={cover} loop>
                    <source src={videoUrl} />
                    <track kind="captions" />
                </video>
            </div>
            <div className={style.actionBar}>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faHeart} /> {diggCount}
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faComment} /> {commentCount}
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faShare} /> {shareCount}
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    avatar: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    musicName: PropTypes.string.isRequired,
    musicAuthor: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    shareCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    diggCount: PropTypes.number.isRequired,
};

export default Post;
