import * as actionTypes from './constants'

const defaultState = {
    // KeyList: [],
    enterLoading: false
}
// redux 状态就是心相印 纸巾？ 
export default (state=defaultState, action) => {
    switch(action.type) {
        // case actionTypes.SET_KEYWORDS:
        //     return {
        //         ...state,
        //         KeyList: action.data
        //     }
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}