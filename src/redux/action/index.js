import { getListGame } from "../../services";

export const getListGameAsync = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: "getListGame/get-start" });
        getListGame(page)
            .then((response) => {
                console.log(response.data, "action");
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
