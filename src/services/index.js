import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

export const getListGame = (page) => {
    return axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}`);
};

export const getFilterGame = (genre, page) => {
    console.log(page, "service page");
    return axios.get(`https://api.rawg.io/api/games?genres=${genre}&key=${apiKey}&page=${page}`);
};
