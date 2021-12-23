import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TrendingFeed from './TrendingFeed';
import { requestTrendingFeed } from '../../../redux/trending-reducer';

const TrendingFeedContainer = function ({
    requestTrendingFeed,
    trending,
    error,
}) {
    useEffect(() => {
        requestTrendingFeed();
    }, []);

    return (
        <TrendingFeed
            requestTrendingFeed={requestTrendingFeed}
            trending={trending}
            error={error}
        />
    );
};

const mapStateToProps = (state) => ({
    trending: state.trending.trendingFeed,
    error: state.trending.error,
});

TrendingFeedContainer.propTypes = {
    requestTrendingFeed: PropTypes.func.isRequired,
    trending: PropTypes.array,
    error: PropTypes.string,
};

TrendingFeedContainer.defaultProps = {
    trending: [],
    error: '',
};

export default connect(mapStateToProps, { requestTrendingFeed })(
    TrendingFeedContainer
);
