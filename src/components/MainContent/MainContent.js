import React from "react";
import TrendingFeed from "./TrendingFeed/TrendingFeed";
import { Routes, Route, Link } from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";

const MainContent = () => {
    return <div className="mainContent">
        <Routes>
            <Route path="/trending" element={<TrendingFeed/>}/>
            <Route path="/" element={<ProfileContainer/>} />
        </Routes>
        </div>
}

export default MainContent