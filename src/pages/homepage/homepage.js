import React from "react";
import "./style/homepage.scss";
import ListGame from "../../components/listgame/listgame";
import Footer from "../../components/footer/footer";
import playstation from "./style/playstation.svg";
import pcGame from "./style/pc.svg";
import Xbox from "./style/xbox3.svg";
import Android from "./style/android2.svg";
import { getGenres } from "./genres";

const Homepage = () => {
    console.log(getGenres);
    return (
        <div className="homepage-container">
            <h1>Home Page</h1>;
            <div className="content-filter-container">
                <div className="leftSide">
                    <div className="platforms-container">
                        <p className="platforms-title">Platforms</p>
                        <div className="platforms-box">
                            <div className="platforms-logo-box" id="abcd">
                                <img src={playstation} alt="playstation" />
                            </div>
                            <p className="platforms-name">PlayStation 4</p>
                        </div>
                        <div className="platforms-box">
                            <div className="platforms-logo-box" id="abcd">
                                <img src={pcGame} alt="playstation" />
                            </div>
                            <p className="platforms-name">PC</p>
                        </div>
                        <div className="platforms-box">
                            <div className="platforms-logo-box" id="abcd">
                                <img src={Xbox} alt="playstation" />
                            </div>
                            <p className="platforms-name">Xbox One</p>
                        </div>
                        <div className="platforms-box">
                            <div className="platforms-logo-box" id="abcd">
                                <img src={Android} alt="playstation" />
                            </div>
                            <p className="platforms-name">Android</p>
                        </div>
                    </div>

                    <div className="genres-container">
                        <p className="genres-title">Genres</p>
                        {getGenres.map((genre) => (
                            <div key={genre.id} className="genres-box">
                                <div className="genres-logo-box" id="abcd">
                                    <img src={genre.img} alt="playstation" />
                                </div>
                                <p className="genres-name">{genre.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rightSide">
                    <ListGame />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
