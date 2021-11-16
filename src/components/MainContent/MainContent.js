import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import TrendingFeedContainer from "./TrendingFeed/TrendingFeedContainer";

const MainContent = () => {
    return <div className="mainContent">
        <Routes>
            <Route path="/" element={<TrendingFeedContainer/>}/>
            <Route path="/profile/" element={<ProfileContainer/>} />
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
        </Routes>
        </div>
}

export default MainContent