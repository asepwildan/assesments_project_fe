import React, { useState, useEffect } from "react";
import "./style/listgame.scss";
import axios from "axios";

const ListGame = () => {
    const key = "?key=f84a54a5936545fa9851e96eb542ac6f";
    let [gameList, setGameList] = useState([]);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games${key}`).then((response) => {
            console.log(response.data.results, "game");

            setGameList(response.data.results);
        });
    }, []);

    return (
        <div className="list-game-container">
            <h1>List Game</h1>;
            <div className="list-game">
                {gameList.map((games) => (
                    <div key={games.id} className="list-game-box">
                        <div className="game-img">
                            <img src={games.background_image} alt="background-img" />
                        </div>
                        <p className="game-title">{games.name}</p>

                        <div className="info-game">
                            <div className="release-date">
                                <p className="release-date-text">Genres:</p>

                                <p className="release-date-content">
                                    {" "}
                                    {games.genres.map((genre) => `${genre.name},`)}
                                </p>
                            </div>
                            <div className="release-date">
                                <p className="release-date-text">Release date:</p>
                                <p className="release-date-content">{games.released}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListGame;
