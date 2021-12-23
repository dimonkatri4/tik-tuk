import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import style from './trendingFeed.module.css';
import Error from '../../Error/Error';
import Post from './Post';

const TrendingFeed = function ({ trending, error }) {
    if (error) {
        return <Error errors={error} />;
    }

    if (!trending) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className={style.trendingPage}>
            {trending.map((t) => (
                <Post
                    key={t.id}
                    avatar={t.authorMeta.avatar}
                    authorName={t.authorMeta.name}
                    nickName={t.authorMeta.nickName}
                    postText={t.text}
                    musicName={t.musicMeta.musicName}
                    musicAuthor={t.musicMeta.musicAuthor}
                    videoUrl={t.videoUrl}
                    userId={t.authorMeta.id}
                    cover={t.covers.default}
                    shareCount={t.shareCount}
                    commentCount={t.commentCount}
                    diggCount={t.diggCount}
                />
            ))}
        </div>
    );
};

TrendingFeed.propTypes = {
    trending: PropTypes.array,
    error: PropTypes.string,
};

TrendingFeed.defaultProps = {
    trending: [],
    error: '',
};

export default TrendingFeed;
