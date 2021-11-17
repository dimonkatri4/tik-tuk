import './App.css';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Container from "@mui/material/Container";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {

    return (
        <div className="appWrapper">
            <Router>
                <Container maxWidth="lg">
                    <Header/>
                    <MainContent/>
                </Container>
            </Router>
        </div>
    );
}

export default App;
