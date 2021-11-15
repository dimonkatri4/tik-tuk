import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Container from "@mui/material/Container";

const App = () => {

    return (
        <div className="appWrapper">
            <Container maxWidth="lg">
                <Header/>
                <MainContent/>
            </Container>
        </div>
    );
}

export default App;
