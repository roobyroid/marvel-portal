(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{16:function(e,c,t){"use strict";var a=t.p+"static/media/error.42292aa1.gif",s=t(2);c.a=()=>Object(s.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},18:function(e,c,t){"use strict";var a=t(0);c.a=()=>{const{request:e,clearError:c,process:t,setProcess:s}=(()=>{const[e,c]=Object(a.useState)("waiting");return{request:Object(a.useCallback)((async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};c("loading");try{const c=await fetch(e,{method:t,body:a,headers:s});if(!c.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));return await c.json()}catch(r){throw c("error"),r}}),[]),clearError:Object(a.useCallback)((()=>{c("loading")}),[]),process:e,setProcess:c}})(),r="https://gateway.marvel.com:443/v1/public/",n="apikey=".concat("9cd3821e98ade5880261f9dd5523ec0d"),i=e=>({id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var c;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(c=e.textObjects[0])||void 0===c?void 0:c.language)||"en-us",prices:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:c,process:t,setProcess:s,getAllCharacters:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;const t=await e("".concat(r,"characters?limit=9&offset=").concat(c,"&").concat(n));return t.data.results.map(i)},getCharacter:async c=>{const t=await e("".concat(r,"characters/").concat(c,"?").concat(n));return i(t.data.results[0])},getAllComics:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=await e("".concat(r,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(n));return t.data.results.map(o)},getComic:async c=>{const t=await e("".concat(r,"comics/").concat(c,"?").concat(n));return o(t.data.results[0])},getCharacterByName:async c=>(await e("".concat(r,"characters?name=").concat(c,"&").concat(n))).data.results.map(i)}}},21:function(e,c,t){"use strict";var a=t(16),s=(t(22),t(2));var r=()=>Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(s.jsxs)("div",{className:"skeleton",children:[Object(s.jsxs)("div",{className:"pulse skeleton__header",children:[Object(s.jsx)("div",{className:"pulse skeleton__circle"}),Object(s.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(s.jsx)("div",{className:"pulse skeleton__block"}),Object(s.jsx)("div",{className:"pulse skeleton__block"}),Object(s.jsx)("div",{className:"pulse skeleton__block"})]})]}),n=t(7);c.a=(e,c,t)=>{switch(e){case"waiting":return Object(s.jsx)(r,{});case"loading":return Object(s.jsx)(n.a,{});case"confirmed":return Object(s.jsx)(c,{data:t});case"error":return Object(s.jsx)(a.a,{});default:throw new Error("Unexpected process state")}}},22:function(e,c,t){},24:function(e,c,t){"use strict";var a=t(0),s=t(16),r=t(2);class n extends a.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,c){console.log(e,c),this.setState({error:!0})}render(){return this.state.error?Object(r.jsx)(s.a,{}):this.props.children}}c.a=n},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},47:function(e,c,t){},63:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(20),r=t(18),n=t(21),i=(t(40),t.p+"static/media/mjolnir.61f31e18.png"),o=t(2);const l=e=>{let c,{data:t}=e,{name:a,description:s,thumbnail:r,homepage:n,wiki:i}=t,l=s||"No description";return l=l.length>100?l.slice(0,200)+"...":l,r||(r="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"),r.includes("image_not_available")&&(c={objectFit:"contain"}),Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:r,style:c,alt:"Random character",className:"randomchar__img"}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:a}),Object(o.jsx)("p",{className:"randomchar__descr",children:l}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:n,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:i,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})};var d=()=>{const[e,c]=Object(a.useState)({}),{getCharacter:t,clearError:s,process:d,setProcess:h}=Object(r.a)(),j=e=>{c(e)},m=()=>{s();const e=Math.floor(2131*Math.random()+1009224);t(e).then(j).then((()=>h("confirmed")))};return Object(a.useEffect)((()=>{m()}),[]),Object(o.jsxs)("div",{className:"randomchar",children:[Object(n.a)(d,l,e),Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{className:"button button__main",children:Object(o.jsx)("div",{className:"inner",onClick:m,children:"try it"})}),Object(o.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=t(19),j=t.n(h),m=t(64),b=t(65),u=t(7),O=t(16);t(41);const _=e=>{const[c,t]=Object(a.useState)([]),[s,n]=Object(a.useState)(!1),[i,l]=Object(a.useState)(285),[d,h]=Object(a.useState)(!1),{getAllCharacters:j,process:_,setProcess:x}=Object(r.a)(),p=e=>{let c=!1;e.length<9&&(c=!0),t((c=>[...c,...e])),n(!1),l(i+9),h(c)},v=(e,c)=>{n(!c),j(e).then(p).then((()=>x("confirmed")))};Object(a.useEffect)((()=>{v(i,!0)}),[]);const N=Object(a.useRef)([]),g=e=>{N.current.forEach((e=>e.classList.remove("char__item_selected"))),N.current[e].classList.add("char__item_selected"),N.current[e].focus()},f=Object(a.useMemo)((()=>((e,c,t)=>{switch(e){case"waiting":return Object(o.jsx)(u.a,{});case"loading":return t?c:Object(o.jsx)(u.a,{});case"confirmed":return c;case"error":return Object(o.jsx)(O.a,{});default:throw new Error("Unexpected process state")}})(_,(c=>{const t=c.map(((c,t)=>{const{thumbnail:a,name:s,id:r}=c;let n;return a.includes("image_not_available")&&(n={objectFit:"contain"}),Object(o.jsx)(m.a,{in:"true",timeout:300,classNames:"char-anim",children:Object(o.jsxs)("li",{className:"char__item",onClick:()=>{e.onCharSelected(r),g(t)},onKeyPress:c=>{" "!==c.key&&"Enter"!==c.key||(e.onCharSelected(r),g(t))},tabIndex:"0",ref:e=>N.current[t]=e,style:{transitionDelay:"".concat(300*t*.5,"ms")},children:[Object(o.jsx)("img",{src:a,style:n,alt:"abyss"}),Object(o.jsx)("div",{className:"char__name",children:s})]})},r)}));return Object(o.jsx)("ul",{className:"char__grid",children:Object(o.jsx)(b.a,{appear:!0,component:null,children:t})})})(c),s)),[_]);return Object(o.jsxs)("div",{className:"char__list",children:[f,Object(o.jsx)("button",{style:{display:d?"none":"block"},className:"button button__main button__long",disabled:s,onClick:()=>v(i),children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})};_.propsTypes={onCharSelected:j.a.func};var x=_,p=t(4);t(42);const v=e=>{let{data:c}=e;const{name:t,description:a,thumbnail:s,homepage:r,wiki:n,comics:i}=c;let l;s.includes("image_not_available")&&(l={objectFit:"contain"});let d=i.length?i.map(((e,c)=>{const t=e.resourceURI.substring(43);return Object(o.jsx)("li",{className:"char__comics-item",children:Object(o.jsx)(p.b,{to:"comics/".concat(t),children:e.name})},c)})).slice(0,10):"Not comics";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:s,alt:t,style:l}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:t}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:n,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:a}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsx)("ul",{className:"char__comics-list",children:d})]})};var N=e=>{const[c,t]=Object(a.useState)(null),{getCharacter:s,process:i,setProcess:l}=Object(r.a)(),d=e=>{t(e)};return Object(a.useEffect)((()=>{(()=>{const{charId:c}=e;c&&s(c).then(d).then((()=>l("confirmed")))})()}),[e.charId]),Object(o.jsx)("div",{className:"char__info",children:Object(n.a)(i,v,c)})},g=t(24),f=t.p+"static/media/vision.067d4ae1.png",y=t(57),k=t(43);t(47);var w=()=>{const[e,c]=Object(a.useState)(null),{getCharacterByName:t,clearError:s,process:n,setProcess:i}=Object(r.a)(),l=e=>{c(e)},d="error"===n?Object(o.jsx)("div",{className:"char__search-critical-error",children:Object(o.jsx)(O.a,{})}):null,h=e?e.length>0?Object(o.jsxs)("div",{className:"char__search-wrapper",children:[Object(o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),Object(o.jsx)(p.b,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"To page"})})]}):Object(o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(o.jsxs)("div",{className:"char__search-form",children:[Object(o.jsx)(y.d,{initialValues:{charName:""},validationSchema:k.a({charName:k.b().required("This field is required")}),onSubmit:e=>{let{charName:c}=e;return a=c,s(),void t(a).then(l).then((()=>i("confirmed")));var a},children:Object(o.jsxs)(y.c,{children:[Object(o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(o.jsxs)("div",{className:"char__search-wrapper",children:[Object(o.jsx)(y.b,{name:"charName",type:"text",id:"charName",placeholder:"Enter name"}),Object(o.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===n,children:Object(o.jsx)("div",{className:"inner",children:"find"})})]}),Object(o.jsx)(y.a,{component:"div",className:"char__search-error",name:"charName"})]})}),h,d]})};c.default=()=>{const[e,c]=Object(a.useState)(null);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(s.a,{children:[Object(o.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(o.jsx)("title",{children:"Marvel information portal"})]}),Object(o.jsx)(g.a,{children:Object(o.jsx)(d,{})}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(g.a,{children:Object(o.jsx)(x,{onCharSelected:e=>{c(e)}})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(g.a,{children:Object(o.jsx)(N,{charId:e})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(w,{})})]}),Object(o.jsx)("img",{className:"bg-decoration",src:f,alt:"vision"})]})]})}}}]);
//# sourceMappingURL=4.346d9d82.chunk.js.map