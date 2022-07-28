import * as actionTypes from './constants'
import { getHomeDetailSellerRequest } from '@/api/request.js'

export const changeBusinessList = (data) => ({
    type: actionTypes.GET_BUSINESS_LIST,
    data
})
export const changeLoading = (data) => ({
    type: actionTypes.GET_LOADING,
    data
})

export const getBusinessList = () => {
    return (dispatch) => {
        getHomeDetailSellerRequest().then(data => {
            const action = changeBusinessList(data.data.data)
            dispatch(action)
        })
    }
}

