import * as actionTypes from './constants.js'

const defaulState = {
    GoodsList: [],
    Loading:true,
   
}

export default (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GOODS_LIST:
            return {
                ...state,
                GoodsList: action.data,

            }
            case actionTypes.GET_LOADING:
                return {
                    ...state,
                    Loading: action.data,
    
                }
        default:
            return state
    }
}