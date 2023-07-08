import SET_SIDEBAR_STATUS from "./SET_SIDEBAR_STATUS";

const INITIAL_STATE = {
    isSideBarOpen: false,
}
export const generalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SIDEBAR_STATUS': {
            return SET_SIDEBAR_STATUS({ state, action })
        }
        default:
            return state;
    }
}