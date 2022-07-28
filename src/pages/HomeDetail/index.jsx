import React, { useEffect } from 'react'
import { Wrapper } from './style'
// import { NavBar } from 'antd-mobile'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
// 快捷方式 @ /src   工程化 alias 
import HomeDetailNav from '@/components/HomeDetailNav'

 function HomeDetail() {
  const navigate = useNavigate()
  let { id } = useParams();
  if (!id) {
    navigate('/home');
    return;
  }

  // 如果id存在 跳转到order页面
  useEffect(() => {
    navigate(`/homedetail/${id}/order`)
  }, [])

  return (
    <Wrapper>
      <div className="_38Yx0ky3e3QNQTlborXn8c">
        <div style={{ height: "123.096px", position: "relative" }}>
          <div className="XYbyDmgwxplKc6FWLeTY1" style={{
            color: "rgb(255, 255, 255)",
            position: "relative",
            height: "100%",
            background: "linear-gradient(rgba(34, 36, 38, 0.5), rgba(34, 36, 38, 0.5)), url('https://p0.meituan.net/business/b4d136b1986be156162b0caa89e2c5a7489581.png@750w') center top / cover no-repeat"
          }}>
            <div style={{
              width: "100%",
              height: " 50px",
              position: "relative",
              touchAction: "none",
              zIndex: 1
            }}>
              <div>
                <div className="_2EMaVEYRy1EslD-dh3AINT _35znmbDbko7fIpUGCq5El2">
                  <i className="ZxOwDLMiwnQcGAjIpkYgI" onClick={() => navigate('/')}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="_2I9FgrZFprYh2sFBBmIKsK" observe-tag="708" style={{ paddingTop: 0 }}>
            <img src="https://p0.meituan.net/ingee/3806cebbee5cc441b1e7d66f05b40a8a2081.png" className="Ky2Bl9PPxbw3zZ2EVgWw_" />
          </div>
        </div>
        <div className="Y-bmfzRWfnaXuX7xJOSMz">
          <div className="_301FRB5JKHEfFl5rwiJxjm">
            <div className="_1-JPgBLaBFf9TIgEtnLsI4" style={{ backgroundImage: "url('https://p0.meituan.net/waimaipoi/15b278543e4db3e6c1afc369ea3e781189709.png@130w')" }}></div>
            <div className="_1KtKAOIYDTJbkE_I13fIET"><div>
              <div className="-Nt5tZ79SR2_QofVVs25D _1gRp9Dl3Xus3cRiWB7uw1M">华莱士·全鸡汉堡（金牛店）</div>
              <div className="_1hjRdmM1uZvWhkhcMy8Ff8">
                <span className="_24m4hKoEYUQunakFV0ow5g">4.5</span>
                <span className="_3E9MLJJKBBtombCYEGhMjE">配送约32分钟</span>
              </div></div>
              <div className="_3TphDwVUp1-3yqCAd3pBGU">
                <span>下罗汉堡热销榜第3名</span>
              </div></div>
            <div className="eRGvwnAnZdVL3N3xqVxky">
              <div className="tkh9yt0Kj8tt7SNdYaKe3 _2jAKlL9hYuMLejHnxuXxcB">
                <div className="iq-ekS5gfSwarhzQjeISg">
                  <span className="TWaA3Gw-WLEcLvsXCKcUK" observe-tag="709">
                    <span className="_2AkCq0baM4T41_vOIdLEkw">
                      <span className="_25udGeloqSaaSWmhWRf6OJ">¥</span>
                      <span className="_2ShbM46nHBqycDzGE0Jj0W">1</span>
                    </span>
                    <span className="_1RyddKDdsA-uFasb0iIXM">领</span>
                  </span>
                  <span className="TWaA3Gw-WLEcLvsXCKcUK" observe-tag="710" >
                    <span className="_2AkCq0baM4T41_vOIdLEkw">
                      <span className="_25udGeloqSaaSWmhWRf6OJ">¥</span>
                      <span className="_2ShbM46nHBqycDzGE0Jj0W">3</span>
                    </span>
                    <span className="_1RyddKDdsA-uFasb0iIXM">领</span>
                  </span>
                  <span className="TWaA3Gw-WLEcLvsXCKcUK" observe-tag="711">
                    <span className="_2AkCq0baM4T41_vOIdLEkw">
                      <span className="_25udGeloqSaaSWmhWRf6OJ">¥</span>
                      <span className="_2ShbM46nHBqycDzGE0Jj0W">5</span>
                    </span><span className="_1RyddKDdsA-uFasb0iIXM">领</span>
                  </span>
                </div></div>
              <div className="JzRNdrX6MNVPDl4oZo40h">
                <span className="_2wMpbuYcVp6RCfD7hrX7cp _1fqbOcvsXfnb1FQUjHR95q">
                  公告：【中国华莱士，全国连锁两万家】
                  【全鸡配汉堡，华莱士吃好】
                  【连锁品质，安全放心】
                  【用餐问题，欢迎联系】
                  【收藏门店，惊喜相送】
                </span><span className="_1jvleO1I0OLNJM4wqrkYeQ"></span>
              </div><div className="_1boS-8z7mzagiP1mgNFXS6">
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeDetailNav id={id} />
      <Outlet />
    </Wrapper >
  )
}
export default HomeDetail