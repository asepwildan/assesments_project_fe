import { getListGame, getFilterGame } from "../../services";

export const getListGameAsync = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: "getListGame/get-start" });
        getListGame(page)
            .then((response) => {
                dispatch(getListGameSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getListGameFailed(err));
            });
    };
};

export const getListGameSuccess = (getGame) => ({
    type: "getListgame/get-success",
    payload: {
        getGame,
    },
});

export const getListGameFailed = (err) => ({
    type: "getListgame/get-failed",
    payload: {
        err,
    },
});

export const getFilterGameAsync = (genre, page) => {
    return (dispatch, getState) => {
        dispatch({ type: "getFilterGame/get-start" });
        getFilterGame(genre, page)
            .then((response) => {
                console.log(response.data, "asd");
                dispatch(getFilterGameSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getFilterGameFailed(err));
            });
    };
};

export const getFilterGameSuccess = (getGameFilter) => ({
    type: "getFilterGame/get-success",
    payload: {
        getGameFilter,
    },
});

export const getFilterGameFailed = (err) => ({
    type: "getFilterGame/get-failed",
    payload: {
        err,
    },
});

export const genreConditionTrue = (cond) => ({
    type: "set-true/genre-filter",
    payload: {
        cond,
    },
});

export const genreConditionFalse = {
    type: "set-false/genre-filter",
};
