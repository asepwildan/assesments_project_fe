import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterGameAsync } from "../../redux/action";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
const FilterGenre = (props) => {
    const dispatch = useDispatch();
    const { full, listgame, nextPage, loading } = useSelector(
        (state) => state.getFilterGameReducer
    );
    let [page, setPage] = useState(1);
    let setCurrentPage = nextPage.split("page=")[1] - 1;
    // let currentPage = setCurrentPage[1] - 1;
    // console.log(currentPage[currentPage.length - 1] - 1, "adsd");
    console.log(setCurrentPage, "page nih");

    useEffect(() => {
        dispatch(getFilterGameAsync(props.genre.toLowerCase(), page));
    }, [dispatch, props.genre, page]);

    const handleChange = (e, value) => {
        console.log(value, "pagination");
        setPage(value);
    };

    useEffect(() => {
        setPage(1);
        console.log("wow");
    }, [props.genre]);
    return (
        <div className="list-game-container">
            <h1>{props.genre}</h1>
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
                {/* <Stack spacing={2}> */}
                <Pagination
                    count={100}
                    page={nextPage.split("page=")[1] - 1}
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    onChange={handleChange}
                />
                {/* </Stack> */}
            </div>
        </div>
    );
};

export default FilterGenre;
