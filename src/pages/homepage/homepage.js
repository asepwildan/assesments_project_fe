import React from "react";
import "./style/homepage.scss";
import ListGame from "../../components/listgame/listgame";
const Homepage = () => {
    return (
        <div className="homepage-container">
            <h1>Home Page</h1>;
            <div className="content-filter-container">
                <div className="leftSide"></div>
                <div className="rightSide">
                    <ListGame />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
