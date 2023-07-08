function SET_SIDEBAR_STATUS(params = {}) {
    let { state, action } = params
    // let { data: { name, value, } } = action
    let newState = JSON.parse(JSON.stringify(state))

    return newState;
}
export default SET_SIDEBAR_STATUS