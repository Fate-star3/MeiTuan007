import * as actionTypes from './constants.js'

const defaulState = {
    CommentsList: [],
    NavList:[],
    Loading: true

}

const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS_LIST:
            return {
                ...state,
                CommentsList: action.data,

            }
        case actionTypes.GET_LOADING:
            return {
                ...state,
                Loading: action.data,

            }
        case actionTypes.GET_NAV_LIST :
            return {
                ...state,
                NavList: action.data,

            }
        default:
            return state
    }
}
export default reducer