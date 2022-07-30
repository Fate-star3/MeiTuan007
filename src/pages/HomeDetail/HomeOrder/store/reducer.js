import { object } from 'prop-types'
import * as actionTypes from './constants.js'

const defaulState = {
    GoodsList: [],
    Loading: true,
    SingleCart: []


}

export default (state = defaulState, action) => {
    let val = state.GoodsList
    let changeList = []
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
        // +-
        case actionTypes.CHNAGE_GOODS_NUM:
            for (let i = 0; i < val.length; i++) {
                changeList.push(val[i].spus)
            }
            changeList.map((item) => {
                item.map((item) => {
                    if (item.id == action.data.id) {
                        if (action.data.status == 'add') {
                            item.praise_num++ 
                            state.SingleCart.push(item)
                        }else {
                            item.praise_num--
                            state.SingleCart.pop()

                        }                 
                            
                        // console.log(item);
                    }
                })
            })

            return Object.assign({}, state, { GoodsList: [...val] })
        case actionTypes.CHNAGE_GOODSAll_NUM:

            for (let i = 0; i < val.length; i++) {
                changeList.push(val[i].spus)
            }
            changeList.map((item) => {
                item.map((item) => {
                    item.praise_num = 0
                })
            })
            state.SingleCart=[]
            return Object.assign({}, state, { GoodsList: [...val] })
        default:
            return state
    }
}