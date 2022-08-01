import{g as a,C as c,s as o,c as p,r as h,j as r,L as m}from"./index.82acbebf.js";const d=t=>({type:c,data:t}),C=()=>t=>{a().then(e=>{const s=d(e.data);t(s)})},g=o.div`
    .city_name {
        display: block;
        width: 100%;
        height: 2.27rem;
        border-bottom: 1px solid rgb(206, 204,204);
        font-size: 0.81rem;
        line-height: 2.27rem;
        text-indent: 0.45rem;
    }
`,l=t=>{const{cities:e,getCitiesDispatch:s}=t;return h.exports.useEffect(()=>{s()},[]),r(g,{children:(()=>e.map(({id:n,nm:i})=>r(m,{className:"city_name",to:{pathname:"/home",search:`name=${i}`},children:i},n)))()})},u=t=>({cities:t.cities.CitiesList}),x=t=>({getCitiesDispatch(){t(C())}});var f=p(u,x)(l);export{f as default};
