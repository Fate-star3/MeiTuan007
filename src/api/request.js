import axios from 'axios'

export const getCitiesRequest = () =>
    axios.get('https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/cities')
export const getBannersRequest = () =>
    axios.get('https://www.fastmock.site/mock/0a7dd8897c829f1675e2e5962a305383/MeiTuan/banners')
export const getRestaurantsRequest = () =>
    axios.get('https://www.fastmock.site/mock/0a7dd8897c829f1675e2e5962a305383/MeiTuan/restaurants')
// export const getHomeDetailOrderRequest  = () =>
//     axios.get('https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/dinner_order')
export const getHomeDetailOrderRequest = () =>
    axios.get('/src/assets/data/goods.json')
export const getHomeDetailCommentRequest = () =>
    axios.get('https://www.fastmock.site/mock/0a7dd8897c829f1675e2e5962a305383/MeiTuan/assess')
export const getHomeDetailSellerRequest = () =>
    axios.get('https://www.fastmock.site/mock/0a7dd8897c829f1675e2e5962a305383/MeiTuan/seller')
export const getKeywordsRequest =
    axios.get('https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/restaurants')