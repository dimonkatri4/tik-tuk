import React, {useEffect} from "react";
import TrendingFeed from "./TrendingFeed";
import {connect} from "react-redux";
import {requestTrendingFeed} from "../../../redux/trending-reducer";

const TrendingFeedContainer = (props) => {

    useEffect(() => {
        props.requestTrendingFeed();
    }, [])

    return <TrendingFeed {...props} />
}

const mapStateToProps = (state) => ({
    trending: state.trending.trendingFeed
})

export default connect(mapStateToProps,{requestTrendingFeed})(TrendingFeedContainer)