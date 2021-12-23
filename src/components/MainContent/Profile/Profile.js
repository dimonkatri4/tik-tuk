import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import style from './profile.module.css';
import Error from '../../Error/Error';
import UserPosts from './UserPosts';

const Profile = function ({
    profile,
    isFetching,
    trending,
    errorTrend,
    errorUser,
}) {
    if (errorTrend || errorUser) {
        return <Error errors={[errorTrend, errorUser]} />;
    }

    if (!profile || isFetching) {
        return (
            <div className={style.profileUserInfo}>
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className={style.profilePage}>
            <div className={style.profileUserInfo}>
                <div className={style.profileAvatar}>
                    <Avatar
                        src={profile.user.avatarMedium}
                        sx={{ width: '12vw', height: '12vw' }}
                    />
                </div>
                <div className={style.userInfo}>
                    <div className={style.nickname}>
                        {profile.user.nickname}
                    </div>
                    <div className={style.signature}>
                        {profile.user.signature}
                    </div>
                    <div className={style.status}>
                        <div>
                            <span>{profile.stats.followingCount} </span>
                            Following
                        </div>
                        <div>
                            <span>{profile.stats.followerCount} </span>
                            Followers
                        </div>
                        <div>
                            <span>{profile.stats.heartCount} </span>
                            Likes
                        </div>
                    </div>
                </div>
            </div>
            {!trending ? (
                <CircularProgress />
            ) : (
                <UserPosts trending={trending} />
            )}
        </div>
    );
};

Profile.propTypes = {
    profile: PropTypes.object,
    isFetching: PropTypes.bool,
    trending: PropTypes.array,
    errorTrend: PropTypes.string,
    errorUser: PropTypes.string,
};

Profile.defaultProps = {
    profile: {},
    isFetching: null,
    trending: [],
    errorTrend: '',
    errorUser: '',
};

export default Profile;
