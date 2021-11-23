const initialState = {
    genreComponent: false,
};

function genreConditionReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "set-true/genre-filter":
            return {
                ...state,
                genreComponent: payload.cond,
            };
        case "set-false/genre-filter":
            return {
                ...state,
                genreComponent: false,
            };

        default:
            return state;
    }
}

export default genreConditionReducer;
