import { sleep } from 'antd-mobile/es/utils/sleep'

let count = 0

export async function mockRequest(props) {
    const restaurants = props
 
    if (count >= 10) {
        return []
    }
    await sleep(1000)
    count++
    return restaurants.slice(0,5)
}