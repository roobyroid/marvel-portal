(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{16:function(t,e,c){"use strict";var s=c.p+"static/media/error.42292aa1.gif",a=c(2);e.a=()=>Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"Error"})},18:function(t,e,c){"use strict";var s=c(0);e.a=()=>{const{request:t,clearError:e,process:c,setProcess:a}=(()=>{const[t,e]=Object(s.useState)("waiting");return{request:Object(s.useCallback)((async function(t){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};e("loading");try{const e=await fetch(t,{method:c,body:s,headers:a});if(!e.ok)throw new Error("Could not fetch ".concat(t,", status: ").concat(e.status));return await e.json()}catch(n){throw e("error"),n}}),[]),clearError:Object(s.useCallback)((()=>{e("loading")}),[]),process:t,setProcess:e}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=".concat("9cd3821e98ade5880261f9dd5523ec0d"),i=t=>({id:t.id,name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}),o=t=>{var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",prices:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{clearError:e,process:c,setProcess:a,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;const c=await t("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(r));return c.data.results.map(i)},getCharacter:async e=>{const c=await t("".concat(n,"characters/").concat(e,"?").concat(r));return i(c.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const c=await t("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(r));return c.data.results.map(o)},getComic:async e=>{const c=await t("".concat(n,"comics/").concat(e,"?").concat(r));return o(c.data.results[0])},getCharacterByName:async e=>(await t("".concat(n,"characters?name=").concat(e,"&").concat(r))).data.results.map(i)}}},24:function(t,e,c){"use strict";var s=c(0),a=c(16),n=c(2);class r extends s.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(t,e){console.log(t,e),this.setState({error:!0})}render(){return this.state.error?Object(n.jsx)(a.a,{}):this.props.children}}e.a=r},27:function(t,e,c){},28:function(t,e,c){"use strict";c(27);var s=c.p+"static/media/Avengers.4065c8f9.png",a=c.p+"static/media/Avengers_logo.9eaf2193.png",n=c(2);e.a=()=>Object(n.jsxs)("div",{className:"app__banner",children:[Object(n.jsx)("img",{src:s,alt:"Avengers"}),Object(n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(n.jsx)("br",{}),"Stay tuned!"]}),Object(n.jsx)("img",{src:a,alt:"Avengers logo"})]})},54:function(t,e,c){},66:function(t,e,c){"use strict";c.r(e);var s=c(20),a=c(0),n=c(19),r=c.n(n),i=c(4),o=c(18),l=c(7),u=c(16),m=(c(54),c(2));const d=(t,e,c)=>{switch(t){case"waiting":return Object(m.jsx)(l.a,{});case"loading":return c?Object(m.jsx)(e,{}):Object(m.jsx)(l.a,{});case"confirmed":return Object(m.jsx)(e,{});case"error":return Object(m.jsx)(u.a,{});default:throw new Error("Unexpected process state")}},j=()=>{const[t,e]=Object(a.useState)([]),[c,s]=Object(a.useState)(!1),[n,r]=Object(a.useState)(285),[l,u]=Object(a.useState)(!1),{getAllComics:j,process:b,setProcess:p}=Object(o.a)(),h=t=>{let c=!1;t.length<8&&(c=!0),e((e=>[...e,...t])),s(!1),r(n+8),u(c)},g=(t,e)=>{s(!e),j(t).then(h).then((()=>p("confirmed")))};Object(a.useEffect)((()=>{g(n,!0)}),[]);return Object(m.jsxs)("div",{className:"comics__list",children:[d(b,(()=>(t=>{const e=t.map(((t,e)=>{const{thumbnail:c,title:s,id:a,price:n}=t;let r;return c.includes("image_not_available")&&(r={objectFit:"contain"}),Object(m.jsx)("li",{className:"comics__item",children:Object(m.jsxs)(i.b,{to:"/comics/".concat(a),children:[Object(m.jsx)("img",{src:c,style:r,alt:s,className:"comics__item-img"}),Object(m.jsx)("p",{className:"comics__item-name",children:s}),Object(m.jsx)("span",{className:"comics__item-price",children:n})]})},e)}));return Object(m.jsx)("ul",{className:"comics__grid",children:e})})(t)),c),Object(m.jsx)("button",{className:"button button__main button__long",style:{display:l?"none":"block"},disabled:c,onClick:()=>g(n),children:Object(m.jsx)("div",{className:"inner",children:"load more"})})]})};j.propsTypes={onCharSelected:r.a.func};var b=j,p=c(28),h=c(24);e.default=()=>Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.a,{children:[Object(m.jsx)("meta",{name:"description",content:"Page with list our comics"}),Object(m.jsx)("title",{children:"Comics page"})]}),Object(m.jsx)(p.a,{}),Object(m.jsx)(h.a,{children:Object(m.jsx)(b,{})})]})}}]);
//# sourceMappingURL=6.e54b86cb.chunk.js.map