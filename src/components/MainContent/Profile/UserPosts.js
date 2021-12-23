import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from './profile.module.css';

const UserPosts = function ({ trending }) {
    const pageSize = 6;
    const subarray = [];
    const pageCount = Math.ceil(trending.length / pageSize);
    for (let i = 0; i < Math.ceil(trending.length / pageSize); i += 1) {
        subarray[i] = trending.slice(i * pageSize, i * pageSize + pageSize);
    }
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <div className={style.profilePosts}>
                {subarray[page - 1].map((p) => (
                    <div className={style.postItem} key={p.id}>
                        <span>
                            <FontAwesomeIcon icon={faPlay} /> {p.playCount}
                        </span>
                        <video
                            controls
                            loop
                            poster={p.covers.default}
                            className={style.video}
                            key={p.id}
                        >
                            <source src={p.videoUrl} />
                            <track kind="captions" />
                        </video>
                    </div>
                ))}
            </div>
            <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                className={style.pagination}
            />
        </div>
    );
};

UserPosts.propTypes = {
    trending: PropTypes.array,
};

UserPosts.defaultProps = {
    trending: [],
};

export default UserPosts;
