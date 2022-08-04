import{g as c,C as o,s as p,c as m,r as n,j as r,L as h}from"./index.6d691c34.js";const d=t=>({type:o,data:t}),C=()=>t=>{c().then(e=>{const s=d(e.data);t(s)})},g=p.div`
    .city_name {
        display: block;
        width: 100%;
        height: 2.27rem;
        border-bottom: 1px solid rgb(206, 204,204);
        font-size: 0.81rem;
        line-height: 2.27rem;
        text-indent: 0.45rem;
    }
`,l=t=>{const{cities:e,getCitiesDispatch:s}=t;return n.exports.useEffect(()=>{s()},[]),r(g,{children:(()=>e.map(({id:a,nm:i})=>r(h,{className:"city_name",to:{pathname:"/home",search:`name=${i}`},children:i},a)))()})},u=t=>({cities:t.cities.CitiesList}),x=t=>({getCitiesDispatch(){t(C())}});var f=m(u,x)(n.exports.memo(l));export{f as default};
