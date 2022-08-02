import{S as P,R as h,a as _,_ as $,b as z,r as d,d as M,s as N,e as j,f as S,j as u,h as w,c as I,u as Q}from"./index.20595181.js";import{m as U,w as G}from"./with-default-props.62109557.js";const W=n=>({type:P,data:n});function T(n,i){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,s){return e.__proto__=s,e},T(n,i)}function D(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,T(n,i)}function X(n,i){return n.classList?!!i&&n.classList.contains(i):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+i+" ")!==-1}function q(n,i){n.classList?n.classList.add(i):X(n,i)||(typeof n.className=="string"?n.className=n.className+" "+i:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+i))}function O(n,i){return n.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function V(n,i){n.classList?n.classList.remove(i):typeof n.className=="string"?n.className=O(n.className,i):n.setAttribute("class",O(n.className&&n.className.baseVal||"",i))}var B={disabled:!1},A=h.createContext(null),k="unmounted",E="exited",x="entering",C="entered",F="exiting",v=function(n){D(i,n);function i(e,s){var t;t=n.call(this,e,s)||this;var r=s,a=r&&!r.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?a?(o=E,t.appearStatus=x):o=C:e.unmountOnExit||e.mountOnEnter?o=k:o=E,t.state={status:o},t.nextCallback=null,t}i.getDerivedStateFromProps=function(s,t){var r=s.in;return r&&t.status===k?{status:E}:null};var l=i.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(s){var t=null;if(s!==this.props){var r=this.state.status;this.props.in?r!==x&&r!==C&&(t=x):(r===x||r===C)&&(t=F)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var s=this.props.timeout,t,r,a;return t=r=a=s,s!=null&&typeof s!="number"&&(t=s.exit,r=s.enter,a=s.appear!==void 0?s.appear:r),{exit:t,enter:r,appear:a}},l.updateStatus=function(s,t){s===void 0&&(s=!1),t!==null?(this.cancelNextCallback(),t===x?this.performEnter(s):this.performExit()):this.props.unmountOnExit&&this.state.status===E&&this.setState({status:k})},l.performEnter=function(s){var t=this,r=this.props.enter,a=this.context?this.context.isMounting:s,o=this.props.nodeRef?[a]:[_.findDOMNode(this),a],c=o[0],p=o[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!s&&!r||B.disabled){this.safeSetState({status:C},function(){t.props.onEntered(c)});return}this.props.onEnter(c,p),this.safeSetState({status:x},function(){t.props.onEntering(c,p),t.onTransitionEnd(m,function(){t.safeSetState({status:C},function(){t.props.onEntered(c,p)})})})},l.performExit=function(){var s=this,t=this.props.exit,r=this.getTimeouts(),a=this.props.nodeRef?void 0:_.findDOMNode(this);if(!t||B.disabled){this.safeSetState({status:E},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:F},function(){s.props.onExiting(a),s.onTransitionEnd(r.exit,function(){s.safeSetState({status:E},function(){s.props.onExited(a)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(s,t){t=this.setNextCallback(t),this.setState(s,t)},l.setNextCallback=function(s){var t=this,r=!0;return this.nextCallback=function(a){r&&(r=!1,t.nextCallback=null,s(a))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},l.onTransitionEnd=function(s,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:_.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!r||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],c=o[0],p=o[1];this.props.addEndListener(c,p)}s!=null&&setTimeout(this.nextCallback,s)},l.render=function(){var s=this.state.status;if(s===k)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=$(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return h.createElement(A.Provider,{value:null},typeof r=="function"?r(s,a):h.cloneElement(h.Children.only(r),a))},i}(h.Component);v.contextType=A;v.propTypes={};function g(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g};v.UNMOUNTED=k;v.EXITED=E;v.ENTERING=x;v.ENTERED=C;v.EXITING=F;var H=v,Z=function(i,l){return i&&l&&l.split(" ").forEach(function(e){return q(i,e)})},y=function(i,l){return i&&l&&l.split(" ").forEach(function(e){return V(i,e)})},L=function(n){D(i,n);function i(){for(var e,s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return e=n.call.apply(n,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(a,o){var c=e.resolveArguments(a,o),p=c[0],f=c[1];e.removeClasses(p,"exit"),e.addClass(p,f?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(a,o)},e.onEntering=function(a,o){var c=e.resolveArguments(a,o),p=c[0],f=c[1],m=f?"appear":"enter";e.addClass(p,m,"active"),e.props.onEntering&&e.props.onEntering(a,o)},e.onEntered=function(a,o){var c=e.resolveArguments(a,o),p=c[0],f=c[1],m=f?"appear":"enter";e.removeClasses(p,m),e.addClass(p,m,"done"),e.props.onEntered&&e.props.onEntered(a,o)},e.onExit=function(a){var o=e.resolveArguments(a),c=o[0];e.removeClasses(c,"appear"),e.removeClasses(c,"enter"),e.addClass(c,"exit","base"),e.props.onExit&&e.props.onExit(a)},e.onExiting=function(a){var o=e.resolveArguments(a),c=o[0];e.addClass(c,"exit","active"),e.props.onExiting&&e.props.onExiting(a)},e.onExited=function(a){var o=e.resolveArguments(a),c=o[0];e.removeClasses(c,"exit"),e.addClass(c,"exit","done"),e.props.onExited&&e.props.onExited(a)},e.resolveArguments=function(a,o){return e.props.nodeRef?[e.props.nodeRef.current,a]:[a,o]},e.getClassNames=function(a){var o=e.props.classNames,c=typeof o=="string",p=c&&o?o+"-":"",f=c?""+p+a:o[a],m=c?f+"-active":o[a+"Active"],R=c?f+"-done":o[a+"Done"];return{baseClassName:f,activeClassName:m,doneClassName:R}},e}var l=i.prototype;return l.addClass=function(s,t,r){var a=this.getClassNames(t)[r+"ClassName"],o=this.getClassNames("enter"),c=o.doneClassName;t==="appear"&&r==="done"&&c&&(a+=" "+c),r==="active"&&s&&s.scrollTop,a&&(this.appliedClasses[t][r]=a,Z(s,a))},l.removeClasses=function(s,t){var r=this.appliedClasses[t],a=r.base,o=r.active,c=r.done;this.appliedClasses[t]={},a&&y(s,a),o&&y(s,o),c&&y(s,c)},l.render=function(){var s=this.props;s.classNames;var t=$(s,["classNames"]);return h.createElement(H,z({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(h.Component);L.defaultProps={classNames:""};L.propTypes={};var J=L;function K(n){return d.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n,{style:Object.assign({verticalAlign:"-0.125em"},n.style),className:["antd-mobile-icon",n.className].filter(Boolean).join(" ")}),d.exports.createElement("g",{id:"LeftOutline-LeftOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.exports.createElement("g",{id:"LeftOutline-\u7F16\u7EC4"},d.exports.createElement("rect",{id:"LeftOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),d.exports.createElement("path",{d:"M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",id:"LeftOutline-\u8DEF\u5F84",fill:"currentColor",fillRule:"nonzero"}))))}const b="adm-nav-bar",Y={back:"",backArrow:!0},ee=n=>{const i=U(Y,n),{back:l,backArrow:e}=i;return G(i,h.createElement("div",{className:M(b)},h.createElement("div",{className:`${b}-left`,role:"button"},l!==null&&h.createElement("div",{className:`${b}-back`,onClick:i.onBack},e&&h.createElement("span",{className:`${b}-back-arrow`},e===!0?h.createElement(K,null):e),h.createElement("span",{"aria-hidden":"true"},l)),i.left),h.createElement("div",{className:`${b}-title`},i.children),h.createElement("div",{className:`${b}-right`},i.right)))};var te=ee;const ne=N.div`
    
    .search_input {
    position: relative;
    height: 23.06666667vw;
    background: #F5F5F5;
    }
.search_input .search_input-main {
    padding: 3.2vw;
    padding-bottom: 2.13333333vw;
    position: fixed;
    height: 14.4vw;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    .search_right-box {
    display: inline-block;
    width: 0.13333333vw;
    height: 3.46666667vw;
    background: #777778;
    position: absolute;
    top: 6.13333333vw;
    right: 19.2vw;
}
.search_right-text {
    font-weight: 600;
    font-size: 3.73333333vw;
    line-height: 4.8vw;
    color: #222426;
    display: inline-block;
    position: absolute;
    top: 5.33333333vw;
    right: 7.46666667vw;
}

}
.search_input .search_input-main .search_input-from {
    position: relative;
}
.search_input .search_input-main .search_input-from .search_input-v2 {
    outline: none;
    border: none;
    width: 100%;
    color: #2D3556;
    font-size: 3.73333333vw;
    line-height: 4.8vw;
    padding: 2.13333333vw 16vw 2.13333333vw 4.53333333vw;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 9.33333333vw;
    .search_input .search_input-iconfont {
    display: none;
}
.search_input .search_input-icon {
    width: 3.2vw;
    height: 3.2vw;
    display: block;
    position: absolute;
    top: 6.13333333vw;
    right: 21.46666667vw;
    background: url('https://p0.meituan.net/openhfiveimages/a415bca….png');
    background-size: contain;
    background-repeat: no-repeat;
}


}
button, input {
    overflow: visible;
}

`,se=n=>{const i=()=>{t()},l=d.exports.useRef(),{newQuery:e}=n,{handleQuery:s,back:t}=n,[r,a]=d.exports.useState("");let o=d.exports.useMemo(()=>j(s,500),[s]);return d.exports.useEffect(()=>{l.current.focus()},[]),d.exports.useEffect(()=>{o(r)},[r]),d.exports.useEffect(()=>{let p=r;e!==r&&(p=e,l.current.value=e),a(p)},[e]),S(ne,{children:[u(te,{onBack:i,style:{backgroundColor:"#fff"},children:"\u641C\u7D22\u9875"}),u("div",{className:"search_input",children:S("div",{className:"search_input-main",children:[u("form",{className:"search_input-from",children:u("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u5546\u5BB6\u6216\u5546\u54C1\u540D\u79F0",className:"search_input-v2",value:r,ref:l,onChange:p=>{let f=p.currentTarget.value;a(f)}})}),u("i",{className:"search_input-icon search_input-iconfont"}),u("div",{className:"search_right-box"}),u("div",{className:"search_right-text",children:"\u641C\u7D22"})]})})]})};var ae=d.exports.memo(se);const re=N.div`
/* background-color: #fff; */
height:23rem;
.search-content {
    background: #fff;
    border-radius: 3.73333333vw;
    position: absolute;
    top: 5rem;
    left: 0;
    overflow: auto;
    z-index: 1;
    .search-content-box .search-content-nav {
    color: #222426;
    font-size: 3.73333333vw;
    margin: 5.33333333vw 3.2vw 3.2vw;
    font-weight: 600;
}
.search-content-box .search-content-link {
    background: #fff;
    margin: 3.46666667vw 2.66666667vw 1.06666667vw 2.66666667vw;
}
.search-content-box .search-content-hots {
    background: #F5F5F6;
    border-radius: 6.66666667vw;
    padding: 1.86666667vw 2.66666667vw;
    color: #5E5F60;
    margin: 0.53333333vw 1.06666667vw;
    font-size: 3.2vw;
    display: inline-block;
    position: relative;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.search-content-box a {
    text-decoration: none;
}
}

`;function ie(){return u(re,{children:u("div",{className:"search-content",children:S("div",{className:"search-content-box",children:[u("nav",{className:"search-content-nav",children:"\u70ED\u95E8\u641C\u7D22"}),S("section",{className:"search-content-link",children:[u("a",{className:"search-content-hots",children:"\u70E7\u70E4"}),u("a",{className:"search-content-hots",children:"\u997A\u5B50"}),u("a",{className:"search-content-hots",children:"\u5976\u8336"}),u("a",{className:"search-content-hots",children:"\u53E4\u8317"}),u("a",{className:"search-content-hots",children:"\u70B8\u9E21"}),u("a",{className:"search-content-hots",children:"\u9EBB\u8FA3\u70EB"}),u("a",{className:"search-content-hots",children:"\u87BA\u72EE\u7C89"}),u("a",{className:"search-content-hots",children:"\u4E00\u70B9\u70B9"}),u("a",{className:"search-content-hots",children:"\u534E\u83B1\u58EB"}),u("a",{className:"search-content-hots",children:"\u53E4\u8317\u5976\u8336"}),u("a",{className:"search-content-hots",children:"\u871C\u96EA\u51B0\u57CE"}),u("a",{className:"search-content-hots",children:"\u8336\u767E\u9053"}),u("a",{className:"search-content-hots",children:"\u6B63\u65B0\u9E21\u6392"}),u("a",{className:"search-content-hots",children:"\u80AF\u5FB7\u57FA"}),u("a",{className:"search-content-hots",children:"\u9EA6\u5F53\u52B3"})]})]})})})}var oe=d.exports.memo(ie);N.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`;const ce=N.div`
    position:fixed;
    top: 0;
    left:0;
    /* right:0;
    bottom: ${n=>n.play>0?"3rem":0}; */
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
`;N.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${n=>n.show?"":"none"};
`;N.div`
    margin: 0 1rem 1rem 1rem;
    .title {
        padding-top: 1.75rem;
        margin-bottom: 1rem;
        font-size: ${w["font-size-m"]};
        color: ${w["font-color-desc-v2"]};
    }
    .item {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin: 0 1rem 0.5rem 0;
        border-radius: 0.3rem;
        background: ${w["highlight-background-color"]};
        font-size: ${w["font-size-m"]};
        color: ${w["font-color-desc"]};
    }

    
`;const le=n=>{const i=Q(),[l,e]=d.exports.useState("\u5468\u6770\u4F26"),[s,t]=d.exports.useState(!0);return d.exports.useEffect(()=>{},[]),u(J,{in:s,timeout:1e3,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{i("/")},children:u(ce,{children:S("div",{className:"search_box_wrapper",children:[u(ae,{back:()=>{t(!1)},newQuery:l,handleQuery:o=>{e(o)}}),u(oe,{})]})})})},ue=n=>({enterLoading:n.search.enterLoading}),pe=n=>({changeEnterLoadingDispatch(i){n(W(i))}});var fe=I(ue,pe)(d.exports.memo(le));export{fe as default};
