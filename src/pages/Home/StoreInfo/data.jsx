import { sleep } from 'antd-mobile/es/utils/sleep'

let count = 0

export async function mockRequest(props) {
    const restaurants = props
 
    if (count >= 5) {
        return [...res]
    }
    await sleep(1000)
    count++
    restaurants.forEach((item, index) => {
        item.id = 100 * count + index
    })
   
    return restaurants.slice(0,5)
}