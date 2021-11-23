const initialState = {
    listgame: [],
    nextPage: "",
    loading: false,
    error: "",
};

function getListGameReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getListGame/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getListgame/get-success":
            return {
                ...state,
                loading: false,
                listgame: payload.getGame.results,
                nextPage: payload.getGame.next,
            };
        case "getListgame/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.err,
            };

        default:
            return state;
    }
}

export default getListGameReducer;
