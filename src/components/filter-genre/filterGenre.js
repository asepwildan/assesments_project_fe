import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterGameAsync } from "../../redux/action";
import Pagination from "@mui/material/Pagination";

import { Link } from "react-router-dom";
const FilterGenre = (props) => {
    const dispatch = useDispatch();
    const { full, listgame, nextPage, loading } = useSelector(
        (state) => state.getFilterGameReducer
    );
    let [page, setPage] = useState(1);
    let setCurrentPage = nextPage?.split("page=")[1] - 1;

    useEffect(() => {
        dispatch(getFilterGameAsync(props?.genre?.toLowerCase(), page));
    }, [dispatch, props.genre, page]);

    const handleChange = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        setPage(1);
    }, [props.genre]);
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
            {loading ? (
                <div></div>
            ) : (
                <div className="pagination-container">
                    <Pagination
                        count={100}
                        page={setCurrentPage}
                        variant="outlined"
                        shape="rounded"
                        size="large"
                        onChange={handleChange}
                    />
                </div>
            )}
        </div>
    );
};

export default FilterGenre;
