(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{143:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(44),s=n.n(r),o=n(13),i=n(10),l=n(8),u=n(9),d=n.n(u),j=n(15),b=n(16),p=n.n(b),m="SET_ALERT",O="REMOVE_ALERT",f="REGISTER_SUCCESS",h="REGISTER_FAIL",g="USER_LOADED",x="AUTH_ERROR",v="LOGIN_SUCCESS",y="LOGIN_FAIL",N="LOGOUT",w="GET_PRODUCTS",C="QUERY_PRODUCTS",S="DELETE_PRODUCT",R="ADD_PRODUCT",k="ERROR_ADD_PRODUCT",E="LOADING_PRODUCT",A="PRODUCTS_ERROR",I="GET_RECORDS",T="RECORDS_ERROR",D="TOGGLE_PLOT_ITEM",_=n(289),P=function(e,t){return function(n){var a=Object(_.a)();n({type:m,payload:{msg:e,alertType:t,id:a}}),setTimeout((function(){return n({type:O,payload:a})}),3e3)}},L=function(e){e?p.a.defaults.headers.common.Authorization=e:delete p.a.defaults.headers.common.Authorization},U=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&L(localStorage.token),e.prev=1,e.next=4,p.a.get("/api/auth");case 4:n=e.sent,t({type:g,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},F=n.p+"static/media/logo.360a1715.png",G=n(1);var V=Object(l.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:N})}}})((function(e){var t=e.auth,n=t.isAuthenticated,c=t.loading,r=e.logout,s=Object(i.g)().pathname,l=Object(G.jsx)("ul",{children:Object(G.jsx)("li",{children:Object(G.jsxs)("a",{onClick:r,href:"#!",children:[Object(G.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(G.jsx)("span",{className:"hide-sm",children:"Sair"})]})})}),u=Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/login",children:"Login"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.b,{to:"/registrar",children:"Registrar"})})]});return Object(G.jsxs)("nav",{className:"navbar ".concat("/dashboard"===s&&"navbar-transposed"),children:["/dashboard"!==s?Object(G.jsxs)(o.b,{to:"/",className:"logo-container",children:[Object(G.jsx)("img",{src:F,alt:"logo",className:"logo-s"}),Object(G.jsx)("h3",{children:"Deep in Sales"})]}):Object(G.jsx)(a.Fragment,{children:Object(G.jsx)("img",{src:F,alt:"logo",className:"logo-m"})}),!c&&Object(G.jsxs)(a.Fragment,{children:[" ",n?l:u]})]})}));var M=function(){return Object(G.jsx)("section",{className:"landing",children:Object(G.jsx)("div",{className:"dark-overlay",children:Object(G.jsxs)("div",{className:"landing-inner",children:[Object(G.jsx)("h1",{className:"x-large",children:"Deep in Sales"}),Object(G.jsx)("p",{className:"lead",children:"Monitore an\xfancios do Mercado Livre."}),Object(G.jsxs)("div",{class:"buttons-container",children:[Object(G.jsx)(o.b,{to:"/registrar",className:"btn btn-primary",children:"Registrar"}),Object(G.jsx)(o.b,{to:"/login",className:"btn btn-light",children:"Login"})]})]})})})},q=n(6),J=n(2),z=n(11),B=Object(l.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(G.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}))}));var Y=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e){var t=e.email,n=e.password;return function(){var e=Object(j.a)(d.a.mark((function e(a){var c,r,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:t,password:n}),e.prev=2,e.next=5,p.a.post("/api/auth",r,c);case 5:s=e.sent,a({type:v,payload:s.data}),a(U()),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),(o=e.t0.response.data.errors)&&o.forEach((function(e){return a(P(e.message,"danger"))})),a({type:y});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),r=Object(z.a)(c,2),s=r[0],o=r[1],l=s.email,u=s.password,d=function(e){return o(Object(J.a)(Object(J.a)({},s),{},Object(q.a)({},e.target.name,e.target.value)))};return n?Object(G.jsx)(i.a,{to:"/dashboard"}):Object(G.jsx)(a.Fragment,{children:Object(G.jsxs)("section",{className:"container",children:[Object(G.jsx)(B,{}),Object(G.jsx)("h1",{className:"large text-primary",children:"Sign In"}),Object(G.jsxs)("p",{className:"lead",children:[Object(G.jsx)("i",{className:"fas fa-user"})," Sign into Your Account"]}),Object(G.jsxs)("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t({email:l,password:u})}(e)},children:[Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:l,onChange:function(e){return d(e)},required:!0})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"password",placeholder:"Password",name:"password",minLength:"6",value:u,onChange:function(e){return d(e)},required:!0})}),Object(G.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Entrar"}),Object(G.jsxs)("p",{className:"my-1",children:["Don't have an account? ",Object(G.jsx)("a",{href:"register.html",children:"Sign Up"})]})]})]})})}));var K=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:P,register:function(e){var t=e.name,n=e.email,a=e.password;return function(){var e=Object(j.a)(d.a.mark((function e(c){var r,s,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json"}},s=JSON.stringify({name:t,email:n,password:a}),e.prev=2,e.next=5,p.a.post("/api/users/register",s,r);case 5:o=e.sent,c({type:f,payload:o.data}),c(U()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(i=e.t0.response.data.errors)&&i.forEach((function(e){return c(P(e.message,"danger"))})),c({type:h});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,n=e.register,c=e.isAuthenticated,r=Object(a.useState)({name:"",email:"",password:"",password2:""}),s=Object(z.a)(r,2),o=s[0],l=s[1],u=o.name,d=o.email,j=o.password,b=o.password2,p=function(e){return l(Object(J.a)(Object(J.a)({},o),{},Object(q.a)({},e.target.name,e.target.value)))};return c?Object(G.jsx)(i.a,{to:"/dashboard"}):Object(G.jsx)(a.Fragment,{children:Object(G.jsxs)("section",{className:"container",children:[Object(G.jsx)(B,{}),Object(G.jsx)("h1",{className:"large text-primary",children:"Registro"}),Object(G.jsxs)("p",{className:"lead",children:[Object(G.jsx)("i",{className:"fas fa-user"})," Crie uma conta"]}),Object(G.jsxs)("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),j!==b?t("As senhas n\xe3o correspondem","danger"):n({name:u,email:d,password:j})}(e)},children:[Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:u,onChange:function(e){return p(e)}})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:d,onChange:function(e){return p(e)}})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"password",placeholder:"Password",name:"password",minLength:"6",value:j,onChange:function(e){return p(e)}})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",minLength:"6",value:b,onChange:function(e){return p(e)}})}),Object(G.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Registar-se"})]})]})})})),H=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/records");case 3:n=e.sent,t({type:I,payload:n.data.records}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t({type:T,payload:{msg:"error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/products");case 3:n=e.sent,t({type:w,payload:n.data.products}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:A,payload:{msg:"error"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},W=n(7),$=(n(143),Object(l.b)((function(e){return{plot:e.plot}}),{togglePlotItem:function(e,t,n){return function(){var a=Object(j.a)(d.a.mark((function a(c){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=n?[].concat(Object(W.a)(e),[t]):e.filter((function(e){return e!==t})),c({type:D,payload:r});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},deleteProduct:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var a,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:E}),a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({productId:e}),t.prev=3,t.next=6,p.a.post("/api/products/delete",c,a);case 6:t.sent,n({type:S}),n(Q()),n(H()),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),(r=t.t0.response.data.errors)&&r.forEach((function(e){return n(P(e.message,"danger"))}));case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.product,n=e.togglePlotItem,c=e.deleteProduct,r=e.plot,s=Object(a.useState)(!1),o=Object(z.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(!1),d=Object(z.a)(u,2),j=d[0],b=d[1],p=Object(a.useState)({name:""}),m=Object(z.a)(p,2),O=m[0],f=m[1],h=Object(a.useState)(!1),g=Object(z.a)(h,2),x=g[0],v=g[1],y=O.name;Object(a.useEffect)((function(){r.plotItems.includes(t.id)?v(!0):v(!1)}),[r,t]);var N=function(e){e.preventDefault()},w=(a.Fragment,t.category.map((function(e,t){return Object(G.jsxs)("div",{className:"categories-tag",style:{border:"1px solid ".concat(e.borderColor),backgroundColor:"".concat(e.bgColor)},children:[e.name,i&&Object(G.jsx)("i",{className:"fas fa-times-circle icon-btn",style:{marginLeft:"5px"}})]},t)}))),C=Object(G.jsxs)(a.Fragment,{children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("i",{className:"fas fa-eye icon icon-light"}),Object(G.jsx)("p",{className:"info-icon-text",children:t.curr_total_visits})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("i",{className:"fas fa-shopping-cart icon icon-light"}),Object(G.jsx)("p",{className:"info-icon-text",children:t.curr_total_sells})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("i",{className:"fas fa-sync-alt icon icon-light"}),Object(G.jsx)("p",{className:"info-icon-text",children:t.conversion_rate.toFixed(2)})]})]}),S=Object(G.jsx)(a.Fragment,{children:Object(G.jsxs)("div",{className:"icon-btn btn-danger",onClick:function(){return c(t.id)},children:[Object(G.jsx)("i",{className:"fas fa-trash-alt icon-sm",style:{marginRight:"5px"}}),"Deletar"]})}),R=Object(G.jsxs)(a.Fragment,{children:[Object(G.jsxs)("p",{children:["R$",t.price]}),Object(G.jsx)("p",{className:"text-s dp",children:t.seller})]}),k=Object(G.jsxs)("div",{className:"item-container ".concat(x?"border-glow":""),children:[Object(G.jsx)("a",{href:t.url,target:"_blank",children:Object(G.jsx)("img",{src:t.image_url,alt:"produto",className:"image-btn"})}),Object(G.jsxs)("div",{className:"item-outer",children:[Object(G.jsxs)("div",{className:"item-header",children:[Object(G.jsx)("i",{className:"fas fa-info icon icon-btn icon-header-product ".concat(j?"btn-icon-glow-green":""),style:{marginRight:"5px"},onClick:function(){return t.name,b(!j),void(!j&&i&&l(!1))}}),Object(G.jsx)("i",{className:"fas fa-cog icon icon-btn icon-header-product ".concat(i?"btn-icon-glow-green":""),onClick:function(){return t.name,l(!i),void(!i&&j&&b(!1))}}),Object(G.jsx)("p",{className:"item-title",children:t.name.length>30?t.name.slice(0,31).concat("..."):t.name}),Object(G.jsx)("i",{className:"fas fa-chart-bar icon icon-btn icon-header-product ".concat(x?"btn-icon-glow":""),onClick:function(){return function(e){v(!x),n(r.plotItems,e.id,!x)}(t)}})]}),Object(G.jsx)("div",{className:"categories-box",children:w}),Object(G.jsx)("div",{className:"item-inner",children:i?S:j?R:C})]})]});return Object(G.jsx)(a.Fragment,{children:k})}))),X=n(107),Z=function(e){var t=e.tags,n=e.setTags,c=Object(a.useRef)(""),r=function(){return Math.floor(250*Math.random())};return Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{id:"categoryInput",type:"text",placeholder:"Categoria (TAB para adicionar)",onKeyDown:function(e){var a=e.target.value,s=[r(),r(),r()],o=s[0],i=s[1],l=s[2],u="rgb(".concat(o,", ").concat(i,", ").concat(l,")"),d="rgba(".concat(o,", ").concat(i,", ").concat(l,", 0.1)");if("Tab"===e.key&&a){if(t.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return;n([].concat(Object(W.a)(t),[{name:a,borderColor:u,bgColor:d}])),c.current.value=""}},ref:c}),Object(G.jsx)("ul",{className:"tag-container",children:t.map((function(e,a){return Object(G.jsxs)("li",{className:"tag",children:[e.name,Object(G.jsx)(X.a,{onClick:function(){return function(e){var a=Object(W.a)(t);a.splice(e,1),n(a)}(a)},className:"tag-delete"})]},e.name)}))})]})};var ee=Object(l.b)(null,{addProduct:function(e){var t=e.name,n=e.url,a=e.categories;return function(){var e=Object(j.a)(d.a.mark((function e(c){var r,s,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json"}},s=JSON.stringify({name:t,url:n,categories:a}),e.prev=2,c({type:E}),e.next=6,p.a.post("/api/products",s,r);case 6:o=e.sent,c({type:R,payload:o.data.product}),c(Q()),c(H()),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),(i=e.t0.response.data.errors)&&i.forEach((function(e){return c(P(e.message,"danger"))})),c({type:k});case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.addProduct,n=e.onAddProduct,c=Object(a.useState)(""),r=Object(z.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(""),l=Object(z.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)([]),b=Object(z.a)(j,2),p=b[0],m=b[1];return Object(G.jsxs)("div",{className:"addProduct-container",children:[Object(G.jsx)("h1",{children:"Adicione um produto"}),Object(G.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t({name:s,url:u,categories:p}),o(""),d(""),m([]),n()},onKeyDown:function(e){"Tab"===e.key&&(document.getElementById("categoryInput")!==document.activeElement||e.preventDefault())},children:[Object(G.jsxs)("div",{className:"form-control text-light",children:[Object(G.jsx)("label",{children:"URL do an\xfancio"}),Object(G.jsx)("input",{type:"url",placeholder:"URL do an\xfancio",value:u,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(G.jsxs)("div",{className:"form-control text-light",children:[Object(G.jsx)("label",{children:"Nome (opcional)"}),Object(G.jsx)("input",{type:"text",placeholder:"Nome do produto",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-control text-light",children:[Object(G.jsx)("label",{children:"Categoria(s)"}),Object(G.jsx)(Z,{tags:p,setTags:m})]}),Object(G.jsx)("input",{type:"submit",value:"Salvar an\xfancio",className:"btn btn-success btn-block"})]})]})})),te=n(100);var ne=Object(l.b)(null,{queryProducts:function(e,t){return function(){var n=Object(j.a)(d.a.mark((function n(a){var c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=e.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())||e.category.map((function(e){return e.name})).reduce((function(e,t){return e.concat(t)}),"").toUpperCase().includes(t.toUpperCase())})),a({type:C,payload:c});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.queryProducts,n=e.products,c=e.productsInView,r=e.loading,s=Object(a.useState)(!1),o=Object(z.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(!1),d=Object(z.a)(u,2),j=d[0],b=d[1],p=Object(a.useState)([{dateIni:"",dateEnd:"",productName:""}]),m=Object(z.a)(p,2),O=m[0],f=m[1],h=O.dateIni,g=O.dateEnd,x=O.productName,v=function(e){e.preventDefault()},y=function(e){t(n,e)},N=function(e){f(Object(J.a)(Object(J.a)({},O),{},Object(q.a)({},e.target.name,e.target.value))),"productName"===e.target.name&&y(e.target.value)},w=c.map((function(e){return Object(G.jsx)($,{product:e},e.id)})),C=Object(G.jsxs)(a.Fragment,{children:[Object(G.jsx)("form",{id:"filter-date",onSubmit:function(e){return v(e)}}),Object(G.jsxs)("div",{className:"datepicker-container",onSubmit:function(e){return v(e)},children:[Object(G.jsx)("p",{children:"In\xedcio"}),Object(G.jsx)("input",{type:"date",form:"filter-date",name:"dateIni",value:h,onChange:function(e){return N(e)}}),Object(G.jsx)("p",{children:"Fim"}),Object(G.jsx)("input",{type:"date",form:"filter-date",name:"dateEnd",value:g,onChange:function(e){return N(e)}}),Object(G.jsx)("input",{type:"submit",className:"btn btn-success",value:"Aplicar",form:"filter-date"})]})]});return Object(G.jsx)(a.Fragment,{children:Object(G.jsxs)("section",{className:"container-products",children:[Object(G.jsxs)("div",{className:"products-header",children:[Object(G.jsx)("form",{id:"search-product",onSubmit:function(e){return y(e)}}),Object(G.jsxs)("div",{className:"form-products",children:[Object(G.jsx)("i",{className:"fas fa-filter icon icon-btn icon-15x"}),Object(G.jsx)("i",{className:"fas fa-calendar-alt icon icon-btn icon-15x pop-window-btn",onClick:function(){l(!i)}}),Object(G.jsx)("div",{className:"dummy",children:i&&C}),Object(G.jsx)("i",{className:"fas fa-layer-group icon icon-btn icon-15x"}),Object(G.jsx)("input",{type:"text",placeholder:"Pesquise produtos ou categorias...",form:"search-product",name:"productName",value:x,onChange:function(e){return N(e)}}),Object(G.jsx)("i",{className:"fas fa-plus-square icon-btn icon-2x add-product-btn",onClick:function(){b(!j)}}),Object(G.jsx)("div",{className:"dummy",children:j&&Object(G.jsx)(ee,{onAddProduct:function(){b(!1)}})})]})]}),Object(G.jsxs)("div",{className:"products-body",style:{overflowY:"auto"},children:[r&&Object(G.jsx)(a.Fragment,{children:Object(G.jsx)(te.CommonLoading,{})}),Object(G.jsx)(B,{}),w]})]})})})),ae=n(108);n(285);var ce=Object(l.b)((function(e){return{plot:e.plot,records:e.records}}))((function(e){var t=e.records,n=e.plot,c={datasets:t.records.filter((function(e){return n.plotItems.includes(e.productId)&&e.record.length>0})).map((function(e){return{label:e.productName,data:e.record.map((function(e){return{x:e.timestamp,y:e.total_sells}})),fill:!1,backgroundColor:"rgb(".concat(e.color[0],", ").concat(e.color[1],", ").concat(e.color[2],")"),borderColor:"rgb(".concat(e.color[0],", ").concat(e.color[1],", ").concat(e.color[2],", 0.2)"),tension:.2}}))};return Object(G.jsx)(a.Fragment,{children:Object(G.jsx)("section",{className:"container-plot",children:Object(G.jsx)(ae.a,{data:c,height:150,options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{position:"left",title:{display:!0,text:"Vendas acumuladas",font:{size:16}}},x:{type:"time",time:{unit:"second"}}}}})})})})),re=Object(l.b)((function(e){return{product:e.product,records:e.records}}),{loadProducts:Q,loadRecords:H})((function(e){var t=e.product,n=(e.records,e.loadProducts),c=e.loadRecords;return Object(a.useEffect)((function(){n(),c()}),[n,c]),Object(G.jsx)(a.Fragment,{children:Object(G.jsxs)("div",{className:"workarea",children:[Object(G.jsx)(ne,{products:t.products,productsInView:t.productsInView,loading:t.loading}),Object(G.jsx)(ce,{redraw:!0})]})})})),se=n(45),oe=["component","auth"],ie=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,a=n.isAuthenticated,c=n.loading,r=Object(se.a)(e,oe);return Object(G.jsx)(i.b,Object(J.a)(Object(J.a)({},r),{},{render:function(e){return a||c?Object(G.jsx)(t,Object(J.a)({},e)):Object(G.jsx)(i.a,{to:"/login"})}}))})),le=["component","auth"],ue=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,a=n.isAuthenticated,c=n.loading,r=Object(se.a)(e,le);return Object(G.jsx)(i.b,Object(J.a)(Object(J.a)({},r),{},{render:function(e){return a&&!c?Object(G.jsx)(i.a,{to:"/dashboard"}):Object(G.jsx)(t,Object(J.a)({},e))}}))})),de=n(25),je=n(105),be=n(106),pe=[];var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case m:return[].concat(Object(W.a)(e),[a]);case O:return e.filter((function(e){return e.id!==a}));default:return e}},Oe={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case g:return Object(J.a)(Object(J.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case f:case v:return localStorage.setItem("token",a.token),Object(J.a)(Object(J.a)(Object(J.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case h:case x:case y:case N:return localStorage.removeItem("token"),Object(J.a)(Object(J.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},he={products:[],productsInView:[],loading:!0,error:{}};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case C:return Object(J.a)(Object(J.a)({},e),{},{productsInView:a,loading:!1});case w:return Object(J.a)(Object(J.a)({},e),{},{products:a,productsInView:a,loading:!1});case R:case k:case S:return Object(J.a)(Object(J.a)({},e),{},{loading:!1});case A:return Object(J.a)(Object(J.a)({},e),{},{error:a,loading:!1,products:[],productsInView:[]});case E:return Object(J.a)(Object(J.a)({},e),{},{loading:!0});default:return e}},xe={records:[],loading:!0,error:{}};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case I:return Object(J.a)(Object(J.a)({},e),{},{records:a,loading:!1});case T:return Object(J.a)(Object(J.a)({},e),{},{error:a,records:[],loading:!1});default:return e}},ye={plotItems:[]};var Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case D:return Object(J.a)(Object(J.a)({},e),{},{plotItems:a});default:return e}},we=Object(de.combineReducers)({alert:me,auth:fe,product:ge,records:ve,plot:Ne}),Ce=Object(de.createStore)(we,{},Object(je.composeWithDevTools)(Object(de.applyMiddleware)(be.a)));n(286);localStorage.token&&L(localStorage.token);var Se=function(){return Object(a.useEffect)((function(){Ce.dispatch(U())}),[]),Object(G.jsx)(l.a,{store:Ce,children:Object(G.jsx)(o.a,{children:Object(G.jsxs)(a.Fragment,{children:[Object(G.jsx)(V,{}),Object(G.jsx)(ue,{exact:!0,path:"/",component:M}),Object(G.jsxs)(i.d,{children:[Object(G.jsx)(ue,{exact:!0,path:"/registrar",component:K}),Object(G.jsx)(ue,{exact:!0,path:"/login",component:Y}),Object(G.jsx)(ie,{exact:!0,path:"/dashboard",component:re})]})]})})})};s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(Se,{})}),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.0869525a.chunk.js.map