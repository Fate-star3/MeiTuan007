import{s as r,p as s,j as e,f as t,N as l,r as a,u as h,i as b,O as u}from"./index.ce3d10ea.js";const p=r.div`

    z-index: 1;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    touch-action: pan-y;
    background-color: #fff;
   .order-container {
    z-index: 2;
    -webkit-transform: translateZ(2px);
    transform: translateZ(2px);
    position: relative;
    touch-action: none;
}

.order-container {
    z-index: 2;
    -webkit-transform: translateZ(2px);
    transform: translateZ(2px);
    position: relative;
    touch-action: none;

}

* {
    touch-action: pan-y;
}

.order-container-back {
    height: 50px;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    position: relative;
    z-index: 5;
}

.order-container-back .order-container-backIcon {
    width: 40px;
    height: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAAEVsH/dAAAABGdBTUEAALGPC/xhBQAAAMJJREFUKBXFkrEOwjAMRFMkFujKB1Ti+5GYGahA/AMDS6X+AywovEu5BApCMGHpYvt8dtMkIcZYBRvJJbBsTIw9tT5zJDEnKYBoM0Oyq1hqmIWmNtasSMqY3EBAoX0pQtRA1khRErdCThzbi7hSWJpIHmIGZN8X5kNDnOZREHvQ/UBISssxtziA3IITeN6SBfYItHcdkKwH/2zg87qJA5CdQTkg7RlCAh2UrAPDE3j4oc+C+5R16n83wZPsEZbXbHLkbwE+Cry82MV2AAAAAElFTkSuQmCC) no-repeat;
    background-size: 2vw 4vw;
    background-position: bottom 3.6vw right 4.26666667vw;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.order-container-bg:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    -webkit-filter: blur(3px);
    filter: blur(3px);
}

.order-container-pic {
    position: absolute;
    right: 16px;
    top: 8px;
    width: 30px;
    height: 30px;
    z-index: 9;
}

.order-container-pic .order-container-picv2 {
    width: 30px;
    height: 30px;
}

.order-content {
    margin-top: -8.4vw;
    min-height: 10.66666667vw;
}

.order-contentv2 {
    position: relative;
    width: 100%;
    padding: 3.33333333vw 4.26666667vw;
    box-sizing: border-box;
    background: white;
    border-radius: 3.2vw 3.2vw 0 0;
}

.order-content-pic {
    position: absolute;
    right: 4.26666667vw;
    top: -1.6vw;
    width: 17.33333333vw;
    height: 17.33333333vw;
    border-radius: 1.6vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0.26666667vw 0.26666667vw 1.33333333vw 0 rgb(0 0 0 / 5%);
}

.order-content-txt>div {
    margin-bottom: 1.06666667vw;
}

.order-content-txt .order-content-storeName {
    width: 67.73333333vw;
    font-weight: 600;
    font-size: 5.86666667vw;
    color: #222426;
    line-height: 8.26666667vw;
}

.order-content-storeNamev2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.order-content-txt .order-content-desc {
    height: 4.8vw;
    display: flex;
    align-items: center;
    width: 67.73333333vw;
}

.order-content-txt .order-content-desc .content-desc-comment {
    font-weight: 500;
    font-size: 3.2vw;
    color: #FF8000;
    display: inline-flex;
    align-items: center;
}

.order-content-txt .order-content-desc>span {
    margin-right: 2.13333333vw;
}

.order-content-txt .order-content-desc .content-desc-comment:before {
    content: '';
    margin-right: 0.8vw;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADKQTcFAAACqUlEQVRIDcVWv2vVUBT+bqwKWgfByYIuglpFoVYUtPXH2C4OIqhDJ/UfcGrr0/e0RbD/gJuDLgUVhIo6iSJ0EEFRUOji4mTH+quvuX7nvCS8JDev76aBXkhyc853vu+cm9zkAOs0TBldaxGggVGNrWHOGIS+PIFvgOLrqMPimR4N3CrD4V2xbeAw6/tAsTjpkLMBU8NHnwTi4O5jQtTaRCUuYOU3uidoIb0qtlM4iCY+USgdZ2jpwSEzgc/dJuBX8TIry4qKktiamOxWVHDpzDtE2js4TvJ3hBQlG7LqE2YS8x1oElcRSQKQCZd4ACt4wmknfCAYxaai3TfOiu19bMFP7CHRPi7jCI/LDO9xU+SsTa7jIx7PsQFfsQML5hp+ZVEqbGfoXsKYihjsJWinPrcsusy9vHjAD56/aTIb8cCMY7FVxRJe0HFEeQVW5Wi9jH2k7KPGWSzjIueD8TPrr1JrFS7VioVnVgFX57a4J2Qt4WF+8g2eVsdewCQap3A7ETZnuEOHcYGG2YKQKsyzoqFaZIuXGmroxyXdClXIpDkegtyxqLhy+1j/tXU8pu9cOrbknSxvDeez/+yk4phWAb24wpR+x7bSV+HYiqtZUeHLCYvRXOd3C3gl8zUNi5cRV47GKRyhFnJof0MhR7GwxXZ/nUyEKeYoFjY4kKHxv7XFHE5hvtnyaV+7MJNXLkfKTmHcxW5iex14P5PFNkxhlyvI/Y/9h/0usNpkLSzecv4+wgxyfYZoy30T1C//dOB7hE0ubmFgU4JonxjMkX7C3Ey3stryWkwTOtIOj+ZOLrdwwG4xxF9WsTkKfsMdP87eWXqu3Ih66lH2ZSfZtUwzbigC/WEJX3IBNLiXhw5WcZSXY2xfXvu0rSKibfAKTjPZeTZ/8SMR1/qP/w/unKSA9/BmAAAAAElFTkSuQmCC);
    width: 2.4vw;
    height: 2.4vw;
    background-size: 2.4vw 2.4vw;
}

.order-content-txt .order-content-desc>span {
    margin-right: 2.13333333vw;
    font-size: 2.66666667vw;
}

.order-content-txt>div:last-child {
    margin-bottom: 2.13333333vw;
}

.order-content-txt .content-hot {
    height: 4.53333333vw;
    display: flex;
    align-items: center;
}

.order-content-txt>div {
    margin-bottom: 1.06666667vw;
}

.order-content-txt .content-hot>span {
    height: 4.53333333vw;
    align-items: center;
    padding: 0 1.06666667vw;
    background: #F5F5F6;
    border-radius: 1.06666667vw;
    font-size: 2.93333333vw;
    color: #222426;
    margin-right: 2.13333333vw;
}

.content-bd {
    position: relative;
}

.content-bdv2.content-bdv3>div:last-child {
    margin-bottom: 2.13333333vw;
}

.content-bdv2.content-bdv3>div {
    margin-bottom: 1.06666667vw;
}

.content-bdv2 .content-bd-left,
.content-bdv2 .content-bd-left * {
    touch-action: pan-x;
}

.content-bdv2 .content-bd-left {
    /* overflow-x: scroll; */
    white-space: nowrap;
    width: 100%;
   


}

.bd-left {
    height: 5.6vw;
    background: #FF473D;
    color: #FFFFFF;
    border-radius: 0.53333333vw;
    margin-right: 1.06666667vw;
    display: inline-block;
}

.bd-box {
    padding: 0 1.6vw 0 2.66666667vw;
    height: 100%;
    border-right: 1px dashed #FFFFFF;
    box-sizing: border-box;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
}

.bd-box>.bd-box-icon {
    font-size: 3.2vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    color: #fff !important;;
}

.bd-box>.bd-box-number {
    font-weight: 500;
    font-size: 3.73333333vw;
    margin-left: 0.53333333vw;
    color: #fff !important;;
}

.bd-box-txt {
    padding: 0 2.13333333vw 0 2vw;
    height: 100%;
    font-size: 2.66666667vw;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    color: #fff !important;;
}

.bd-box {
    padding: 0 1.6vw 0 2.66666667vw;
    height: 100%;
    border-right: 1px dashed #FFFFFF;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
}




.order-content-ft {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.order-content-ft .ft-adv2 {
    height: 3.73333333vw;
    margin-top: 0;
    max-width: 88vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.order-content-ft .ft-ad {
    font-size: 2.93333333vw;
    color: #858687;
}

.order-content-ft .ft-last {
    display: inline-block;
    background-image: url("https://p0.meituan.net/openhfiveimages/ea475a63c516941e059619d052724d01746.png");
    width: 2.4vw;
    height: 2.4vw;
    margin-left: 0.8vw;
    background-size: 2.4vw 2.4vw;
}

.content-bd>.ft-last-v2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.15s;
    pointer-events: none;
    background: white;
}
 `,v=r.div`
.navbar{
    height: 35px;
    background:#fff;
    border-bottom: 1px solid #ccc;
    .nav-box{
        display:flex;
        height: 35px!important;
        line-height: 35px!important;
        position:relative;
    }
    .nav-item{
        width:auto!important;
        position: relative;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        justify-content: center;
        font-size: .8rem;
        color: #666;
        border-bottom: 1px solid #ebebeb;
        &.active{
            ::after
        {
            content: "";
            background-color: rgb(35, 149, 255);
            width:1rem;
            height: 0.03rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
        color: #000;
        font-weight:bolder;
        }
        
    }
    
    .navbar-searchbox {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    display: flex;
    width: 57px;
    margin: 0 10px;
    position: relative;
    background: #fff;
    border-radius: 100px;
    margin-left: 100px;
}
.navbar-searchbox input {
    width: 100%;
    background: #eee;
    -webkit-align-self: center;
    align-self: center;
    position: relative;
    border: none;
    height: 25px;
    padding-left: 23px;
    box-sizing: border-box;
    border-radius: 15px;
    overflow: hidden;
    opacity: 1;
}
    .navbar-searchbox .searchbox-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.navbar-searchbox .searchbox-content .searchbox-content-icon {
    background: url("https://p0.meituan.net/openhfiveimages/a7b59ad3ad25e21f59e0b4feb53647dd1517.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 12px;
    height: 12px;
    -webkit-flex: none;
    flex: none;
    margin-left: 6px;
    margin-right: 4px;
}
.navbar-searchbox .searchbox-content .searchbox-content-search {
    -webkit-flex: auto;
    flex: auto;
    font-size: 12px;
    color: #222426;
    font-weight: 600;
    text-align: center;
    margin-right: 2px;
}
.navbar-searchbox .searchbox-content .searchbox-content-desc {
    -webkit-flex: auto;
    flex: auto;
    font-size: 11px;
    color: #858687;
    text-align: center;
    margin-right: 10px;
    display: none;
}
}
`;function c({id:n}){return e(v,{children:e("div",{className:"navbar",children:t("div",{className:"nav-box ",children:[[{id:1,desc:"\u70B9\u9910",path:"/order"},{id:2,desc:"\u8BC4\u4EF7",path:"/comment"},{id:3,desc:"\u5546\u5BB6",path:"/business"}].map((i,d)=>e(l,{index:d,to:`/homedetail/${n}${i.path}`,className:"nav-item ",children:i.desc},i.id)),t("div",{id:"menuSearch",className:"navbar-searchbox",style:{width:"57px"},children:[e("input",{type:"search",name:"",id:""}),t("div",{className:"searchbox-content",children:[e("div",{className:"searchbox-content-icon"}),e("div",{className:"searchbox-content-search",id:"menuSearchText",style:{display:"block"},children:"\u641C\u7D22"}),e("div",{className:"searchbox-content-desc",id:"menuSearchTextExpand",style:{display:"none"},children:"\u8BF7\u8F93\u5165\u83DC\u54C1\u540D\u79F0"})]})]})]})})})}c.propTyes={id:s.string.isRequired};function g(){const n=h();let{id:o}=b();if(!o){n("/home");return}return a.exports.useEffect(()=>{n(`/homedetail/${o}/order`)},[]),t(p,{children:[t("div",{className:"order-container",children:[t("div",{style:{height:"123.096px",position:"relative"},children:[e("div",{className:"order-container-bg",style:{color:"rgb(255, 255, 255)",position:"relative",height:"100%",background:"linear-gradient(rgba(34, 36, 38, 0.5), rgba(34, 36, 38, 0.5)), url('https://p0.meituan.net/business/b4d136b1986be156162b0caa89e2c5a7489581.png@750w') center top / cover no-repeat"},children:e("div",{style:{width:"100%",height:" 50px",position:"relative",touchAction:"none",zIndex:1},children:e("div",{children:e("div",{className:"order-container-back order-container-backv2",children:e("i",{className:"order-container-backIcon",onClick:()=>n("/")})})})})}),e("div",{className:"order-container-pic",style:{paddingTop:0},children:e("img",{src:"https://p0.meituan.net/ingee/3806cebbee5cc441b1e7d66f05b40a8a2081.png",className:"order-container-picv2"})})]}),e("div",{className:"order-content",children:t("div",{className:"order-contentv2",children:[e("div",{className:"order-content-pic",style:{backgroundImage:"url('https://p0.meituan.net/waimaipoi/15b278543e4db3e6c1afc369ea3e781189709.png@130w')"}}),t("div",{className:"order-content-txt",children:[t("div",{children:[e("div",{className:"order-content-storeName order-content-storeNamev2",children:"\u534E\u83B1\u58EB\xB7\u5168\u9E21\u6C49\u5821\uFF08\u91D1\u725B\u5E97\uFF09"}),t("div",{className:"order-content-desc",children:[e("span",{className:"content-desc-comment",children:"4.5"}),e("span",{className:"content-desc-time",children:"\u914D\u9001\u7EA632\u5206\u949F"})]})]}),e("div",{className:"content-hot",children:e("span",{children:"\u4E0B\u7F57\u6C49\u5821\u70ED\u9500\u699C\u7B2C3\u540D"})})]}),t("div",{className:"content-bd",children:[e("div",{className:"content-bdv2 content-bdv3",children:t("div",{className:"content-bd-left",children:[t("span",{className:"bd-left",children:[t("span",{className:"bd-box",children:[e("span",{className:"bd-box-icon",children:"\xA5"}),e("span",{className:"bd-box-number",children:"1"})]}),e("span",{className:"bd-box-txt",children:"\u9886"})]}),t("span",{className:"bd-left",children:[t("span",{className:"bd-box",children:[e("span",{className:"bd-box-icon",children:"\xA5"}),e("span",{className:"bd-box-number",children:"3"})]}),e("span",{className:"bd-box-txt",children:"\u9886"})]}),t("span",{className:"bd-left",children:[t("span",{className:"bd-box",children:[e("span",{className:"bd-box-icon",children:"\xA5"}),e("span",{className:"bd-box-number",children:"5"})]}),e("span",{className:"bd-box-txt",children:"\u9886"})]})]})}),t("div",{className:"order-content-ft",children:[e("span",{className:"ft-ad ft-adv2",children:"\u516C\u544A\uFF1A\u3010\u4E2D\u56FD\u534E\u83B1\u58EB\uFF0C\u5168\u56FD\u8FDE\u9501\u4E24\u4E07\u5BB6\u3011 \u3010\u5168\u9E21\u914D\u6C49\u5821\uFF0C\u534E\u83B1\u58EB\u5403\u597D\u3011 \u3010\u8FDE\u9501\u54C1\u8D28\uFF0C\u5B89\u5168\u653E\u5FC3\u3011 \u3010\u7528\u9910\u95EE\u9898\uFF0C\u6B22\u8FCE\u8054\u7CFB\u3011 \u3010\u6536\u85CF\u95E8\u5E97\uFF0C\u60CA\u559C\u76F8\u9001\u3011"}),e("span",{className:"ft-last"})]}),e("div",{className:"ft-last-v2"})]})]})})]}),e(c,{id:o}),e(u,{})]})}var m=a.exports.memo(g);export{m as default};
