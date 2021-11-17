import axios from "axios";
const key = "?key=f84a54a5936545fa9851e96eb542ac6f";

export const getListGame = (page) => {
    // if (page === undefined) {
    //     page = 1;
    // }
    return axios.get(
        `https://api.rawg.io/api/games?key=f84a54a5936545fa9851e96eb542ac6f&page=${page}`
    );
};
