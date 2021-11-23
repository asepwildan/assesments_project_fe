const initialState = {
    full: {},
    listgame: [],
    nextPage: "",
    loading: false,
    error: "",
};

function getFilterGameReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getFilterGame/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getFilterGame/get-success":
            return {
                ...state,
                loading: false,
                listgame: payload.getGameFilter,
                listgame: payload.getGameFilter.results,
                nextPage: payload.getGameFilter.next,
            };
        case "getFilterGame/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.err,
            };

        default:
            return state;
    }
}

export default getFilterGameReducer;
