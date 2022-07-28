import * as actionTypes from './constants.js'

const defaulState = {
    BannersList: [],
    RestaurantsList: [],
    Loading: true

}

const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case actionTypes.GET_BANNERS_LIST:
            return {
                ...state,
                BannersList: action.data,

            }
        case actionTypes.GET_RESTAURANTS_LIST:
            return {
                ...state,
                RestaurantsList: action.data,

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