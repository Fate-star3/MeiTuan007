import{g as a,C as c,s as o,c as p,r as h,j as n,L as d}from"./index.aa6002f3.js";const C=t=>({type:c,data:t}),m=()=>t=>{a().then(e=>{const s=C(e.data);t(s)})},x=o.div`
    .city_name {
        display: block;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid rgb(206, 204,204);
        font-size: 18px;
        line-height: 50px;
        text-indent: 10px;
    }
`,g=t=>{const{cities:e,getCitiesDispatch:s}=t;return h.exports.useEffect(()=>{s()},[]),n(x,{children:(()=>e.map(({id:r,nm:i})=>n(d,{className:"city_name",to:{pathname:"/home",search:`name=${i}`},children:i},r)))()})},l=t=>({cities:t.cities.CitiesList}),u=t=>({getCitiesDispatch(){t(m())}});var f=p(l,u)(g);export{f as default};
