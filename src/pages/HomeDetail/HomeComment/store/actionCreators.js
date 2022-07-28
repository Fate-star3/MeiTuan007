import * as actionTypes from './constants'
import { getHomeDetailCommentRequest } from '@/api/request.js'

export const changeCommentsList = (data) => ({
    type: actionTypes.GET_COMMENTS_LIST,
    data
})
export const changeLoading = (data) => ({
    type: actionTypes.GET_LOADING,
    data
})
export const changeNavList = (data) => ({
    type: actionTypes.GET_NAV_LIST ,
    data
})

export const getCommentsList = () => {
    return (dispatch) => {
        getHomeDetailCommentRequest().then(data => {
            const action = changeCommentsList(data.data.data.comments)
            dispatch(action)
            dispatch(changeLoading(false))
            // console.log(action);
        })
    }
}

export const getNavList = () => {
    return (dispatch) => {
        getHomeDetailCommentRequest().then(data => {
            const action = changeNavList(data.data.data.labels)
            dispatch(action)

        })
    }
}

