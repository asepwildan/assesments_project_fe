import React, { useState, useEffect } from "react";
import "./style/listgame.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getListGameAsync } from "../../redux/action";
const ListGame = () => {
    const dispatch = useDispatch();
    const { listgame, loading } = useSelector((state) => state.getListGameReducer);
    let [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(page + 1);
    };
    console.log(page, "page");

    useEffect(() => {
        dispatch(getListGameAsync(page));
    }, [dispatch, page]);

    return (
        <div className="list-game-container">
            <h1>List Game</h1>;<button onClick={nextPage}>next</button>
            {loading ? (
                <h1>LOADING</h1>
            ) : (
                <div className="list-game">
                    {listgame.map((games) => (
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
            )}
        </div>
    );
};

export default ListGame;
