import * as actionTypes from './constants.js'

const defaulState = {
    BusinessList: [],
    Loading:true

}

const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUSINESS_LIST:
            return {
                ...state,
                BusinessList: action.data,

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
export default reducer