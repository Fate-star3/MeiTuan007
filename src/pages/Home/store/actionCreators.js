import * as actionTypes from './constants'
import { getBannersRequest, getRestaurantsRequest } from '@/api/request.js'

export const changeBannersList = (data) => ({
    type: actionTypes.GET_BANNERS_LIST,
    data
})

export const changeRestaurantsList = (data) => ({
    type: actionTypes.GET_RESTAURANTS_LIST,
    data
})
export const changeLoading = (data) => ({
    type: actionTypes.GET_LOADING,
    data
})


export const getBannersList = () => {
    return (dispatch) => {
        getBannersRequest().then(data => {
            const action = changeBannersList(data.data)
            dispatch(action)
        })
    }
}


export const getRestaurantsList = () => {
    return (dispatch) => {
        getRestaurantsRequest().then(data => {
            const action = changeRestaurantsList(data.data)
            dispatch(action)
            dispatch(changeLoading(false))
        })
    }
}
