//  模块化  路由模块基本就是数据模块
import {combineReducers}  from 'redux'
import {reducer as CitiesReducer} from '@/pages/Cities/store/index'
import {reducer as HomeReducer} from '@/pages/Home/store/index'
import {reducer as SearchReducer} from '@/pages/Search/store/index'
import {reducer as HomeDetailGoodsReducer} from '@/pages/HomeDetail/HomeOrder/store/index'
import {reducer as HomeDetailCommentsReducer} from '@/pages/HomeDetail/HomeComment/store/index'
import {reducer as HomeDetailBusinessReducer} from '@/pages/HomeDetail/HomeBusiness/store/index'




export default combineReducers({
    cities:CitiesReducer,
    home:HomeReducer,
    search:SearchReducer,
    comment:HomeDetailCommentsReducer,
    business:HomeDetailBusinessReducer,
    goods:HomeDetailGoodsReducer
   
})