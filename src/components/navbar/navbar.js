import React, { useEffect, useState } from "react";
import "./style/navbar.scss";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { getGenres } from "../../pages/homepage/genres";
import { useDispatch, useSelector } from "react-redux";
import { getFilterGameAsync, genreConditionTrue } from "../../redux/action";
const Navbar = () => {
    const { loading } = useSelector((state) => state.getFilterGameReducer);
    const dispatch = useDispatch();
    let [genrePass, setGenrePass] = useState("");
    const [prevAva, setPrevAva] = useState(false);
    const [tes, setTes] = useState(true);
    let [page, setPage] = useState(1);
    const openModal = () => {
        setPrevAva(true);
    };

    const closeModal = () => {
        setPrevAva(false);
    };
    const selectGenre = (value) => {
        setGenrePass(value);
        dispatch(genreConditionTrue(tes));
    };
    const setHome = () => {
        setGenrePass("");
    };
    useEffect(() => {
        dispatch(getFilterGameAsync(genrePass.toLowerCase(), page));
    }, [dispatch, genrePass, page]);

    const handleHome = () => {
        window.location.reload();
    };
    return (
        <React.Fragment>
            <div className="navbar-container">
                <div className="navbar-box">
                    <div className="left-box">
                        <p className="hello-navbar">HELLO</p>
                        <p className="home-navbar" onClick={handleHome}>
                            HOME
                        </p>
                    </div>
                    <div className="right-box">
                        <p className="add-wishlist">Your Wishlist</p>
                        <p onClick={openModal} className="filter-genre">
                            Filter By Genre
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                keepMounted
                open={prevAva}
                onClose={closeModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description">
                <Box>
                    <div className="filter-genre-modal">
                        <p className="genres-title">Filter By Genre</p>
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
                </Box>
            </Modal>
        </React.Fragment>
    );
};
export default Navbar;
