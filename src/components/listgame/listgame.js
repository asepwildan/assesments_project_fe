import React, { useState, useEffect } from "react";
import "./style/listgame.scss";
import { useDispatch, useSelector } from "react-redux";
import { getListGameAsync } from "../../redux/action";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import nextIcon from "./style/next.png";

const ListGame = () => {
    const dispatch = useDispatch();
    const { listgame, loading } = useSelector((state) => state.getListGameReducer);
    let [page, setPage] = useState(1);

    const handleChange = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch(getListGameAsync(page));
    }, [dispatch, page]);

    return (
        <div className="list-game-container">
            {loading ? (
                <h1>LOADING</h1>
            ) : (
                <div className="list-game">
                    {listgame.map((games) => (
                        <Link
                            key={games.id}
                            to={`gamedetail/${games.slug}`}
                            style={{ textDecoration: "none" }}
                            className="list-game-box">
                            <div className="game-img">
                                <img src={games.background_image} alt="background-img" />
                            </div>
                            <div className="game-title-container">
                                <p className="game-title">{games.name}</p>
                            </div>

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
                        </Link>
                    ))}
                    <div className="list-game-box"></div>
                </div>
            )}
            <div className="pagination-container">
                <Stack spacing={2}>
                    <Pagination
                        count={100}
                        variant="outlined"
                        shape="rounded"
                        size="large"
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </div>
    );
};

export default ListGame;
