import * as actionTypes  from './constants'
import { getHomeDetailOrderRequest } from '@/api/request.js'


export const changeGoodsList = (data) => ({
    type:actionTypes.CHANGE_GOODS_LIST,
    data
})

export const changeLoading = (data) => ({
    type: actionTypes.GET_LOADING,
    data
})

export const getGoodsList = () => {
    return (dispatch) => {
        getHomeDetailOrderRequest().then(data => {
            const action = changeGoodsList(data.data.data.food_spu_tags)
            dispatch(action)
            dispatch(changeLoading(false))
            // console.log(action);
        })
    }
}