import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./style/homepage.scss";
import ListGame from "../../components/listgame/listgame";
import Footer from "../../components/footer/footer";
import playstation from "./style/playstation.svg";
import pcGame from "./style/pc.svg";
import Xbox from "./style/xbox3.svg";
import Android from "./style/android2.svg";
import { getGenres } from "./genres";
import Wishlist from "./img/wishlist.png";
import FilterGenre from "../../components/filter-genre/filterGenre";

const Homepage = () => {
    let [genrePass, setGenrePass] = useState("");
    const selectGenre = (value) => {
        console.log(value, "genre");
        setGenrePass(value);
    };
    const setHome = () => {
        setGenrePass("");
    };

    return (
        <React.Fragment>
            <div className="homepage-container">
                <h1 onClick={setHome}>Home Page</h1>;
                <div className="content-filter-container">
                    <div className="leftSide">
                        <p className="platforms-title" onClick={setHome}>
                            Home
                        </p>
                        <div className="platforms-container">
                            <div className="wishlist-container">
                                <div className="wishlist-logo-box">
                                    <img src={Wishlist} alt="wishlist" />
                                </div>
                                <p className="wishlist-title">Wishlist</p>
                            </div>
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
                                <div
                                    style={
                                        genrePass === genre.name
                                            ? {
                                                  borderRight: "4px solid #dad6d6",
                                              }
                                            : { borderRight: "none" }
                                    }
                                    key={genre.id}
                                    className="genres-box"
                                    onClick={() => selectGenre(genre.name)}>
                                    <div className="genres-logo-box" id="abcd">
                                        <img src={genre.img} alt="playstation" />
                                    </div>
                                    <p className="genres-name">{genre.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rightSide">
                        {genrePass !== "" ? <FilterGenre genre={genrePass} /> : <ListGame />}
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Homepage;
