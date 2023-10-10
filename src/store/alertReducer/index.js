import ALERT from "./ALERT";

export const alertReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case 'ALERT': {
            return ALERT({ action })
        }
        default:
            return state;
    }
};
