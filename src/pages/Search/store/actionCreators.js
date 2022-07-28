import * as actionTypes from './constants'
// import {
//     getKeywordsRequest,
   
// } from '@/api/request'

// const changeKeywords = (data) => ({
//     type: actionTypes.SET_KEYWORDS,
//     data
// })

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data
})

// export const getKeywords = () => {
//     return (dispatch) => {
//         getKeywordsRequest()
//             .then(data => {
//                const action =  changeKeywords(data.data)
//                 dispatch(action)
//                 console.log(action);
//             })
//     }
// } 

