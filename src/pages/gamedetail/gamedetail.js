import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style/gamedetail.scss";
import exceptionalImg from "./img/exceptional.png";
import RecommendedImg from "./img/recomended.png";
import mehImg from "./img/meh.png";
import poopImg from "./img/poop.png";
import Footer from "../../components/footer/footer";
import Wishlist from "../homepage/img/wishlist.png";
import { Link } from "react-router-dom";
const GameDetail = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let { id } = useParams();
    let [background, setBackground] = useState("");
    let [dateRes, setDetRes] = useState("");
    let [platformsGame, setPlatformsGame] = useState([]);
    let [gameName, setGameName] = useState("");
    let [synopsis, setSynopsis] = useState("");
    let [rating, setRating] = useState([]);
    let [developers, setDevelovers] = useState([]);
    let [meta, setMeta] = useState("");
    let [publisher, setPublisher] = useState([]);
    let [genres, setGenres] = useState([]);
    let [ageRating, setAgeRating] = useState("");
    let [ratingAverage, setRatingAverage] = useState("");

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var now = new Date(dateRes);
    let releaseDate = months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear(); //Tuesday February 12 2013

    useEffect(() => {
        axios
            .get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
            .then((response) => {
                setRatingAverage(response.data.rating);
                setBackground(response.data.background_image);
                setDetRes(response.data.released);
                setPlatformsGame(response.data.platforms);
                setGameName(response.data.name);
                setSynopsis(response.data.description);
                setRating(response.data.ratings);
                setMeta(response.data.metacritic);
                setDevelovers(response.data.developers);
                setPublisher(response.data.publishers);
                setGenres(response.data.genres);
                setAgeRating(response.data.esrb_rating.name);
            })
            .catch((err) => {
                console.log(err, "err game detail");
            });
    }, []);

    return (
        <div className="game-detail-container">
            <Link to={`/`} style={{ textDecoration: "none" }} className="link-to-home">
                <button>Back To Home</button>
            </Link>
            <div className="rating-average">
                <p className="rating-average-title">RATING</p>
                <p className="rating-average-info">{ratingAverage}</p>
            </div>
            <div className="game-detail-img-container">
                <div className="game-detail-img-box">
                    <img src={background} alt="game detail img" />
                </div>
                <div className="background-filter"></div>
            </div>
            <div className="game-info">
                <div className="date-platforms-container">
                    <p className="date-info">{releaseDate}</p>
                </div>
                <p className="game-name">{gameName}</p>
            </div>

            <div className="game-info-detail">
                <div className="synopsis-container">
                    <div className="rating-container">
                        <div className="rating-box">
                            <div className="rating-emoji-box">
                                <img src={exceptionalImg} alt="rating" />
                            </div>
                            <div className="rating-info">
                                <p className="rating-title">{rating[0]?.title}</p>
                                <p className="rating-count">{rating[0]?.count}</p>
                            </div>
                        </div>
                        <div className="rating-box">
                            <div className="rating-emoji-box">
                                <img src={RecommendedImg} alt="rating" />
                            </div>
                            <div className="rating-info">
                                <p className="rating-title">{rating[1]?.title}</p>
                                <p className="rating-count">{rating[1]?.count}</p>
                            </div>
                        </div>
                        <div className="rating-box">
                            <div className="rating-emoji-box">
                                <img src={mehImg} alt="rating" />
                            </div>
                            <div className="rating-info">
                                <p className="rating-title">{rating[2]?.title}</p>
                                <p className="rating-count">{rating[2]?.count}</p>
                            </div>
                        </div>
                        <div className="rating-box">
                            <div className="rating-emoji-box">
                                <img src={poopImg} alt="rating" />
                            </div>
                            <div className="rating-info">
                                <p className="rating-title">{rating[3]?.title}</p>
                                <p className="rating-count">{rating[3]?.count}</p>
                            </div>
                        </div>
                    </div>
                    <p className="sypnopis-title">About</p>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: synopsis,
                        }}></p>
                </div>
                <div className="rating-wishlist-container">
                    <div className="wishlist-box-container">
                        <div className="wishlist-box">
                            <p>Add to wishlist</p>
                            <img src={Wishlist} alt="wishlist" />
                        </div>
                    </div>
                    <div className="detail-game-full-container">
                        <div className="detail-game-box">
                            <div className="developer">
                                <p className="detail-game-title">Developer</p>
                                <p>{developers.map((e) => `${e.name}, `)}</p>
                            </div>
                            <div className="metascore">
                                <p className="detail-game-title">Metascore</p>
                                <p className="metascore-info">{meta}</p>
                            </div>
                        </div>
                        <div className="detail-game-box">
                            <div className="developer">
                                <p className="detail-game-title">Publisher</p>
                                <p>{publisher.map((e) => `${e.name}, `)}</p>
                            </div>
                            <div className="metascore">
                                <p className="detail-game-title">Release Date</p>
                                <p>{releaseDate}</p>
                            </div>
                        </div>
                        <div className="detail-game-box">
                            <div className="developer">
                                <p className="detail-game-title">Genre</p>
                                <p>{genres.map((e) => `${e.name}, `)}</p>
                            </div>
                            <div className="metascore">
                                <p className="detail-game-title">Age rating</p>
                                <p>{ageRating}</p>
                            </div>
                        </div>
                    </div>
                    <div className="platforms-container">
                        <p className="detail-game-title">Platforms</p>
                        <p>{platformsGame.map((e) => `${e.platform.name}, `)}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GameDetail;
