(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cd477e0"],{"1ff3":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o={class:"container"},n={class:"row"},s={class:"col-8"},r=Object(c["createStaticVNode"])('<div class="personBox mb-3" data-v-01e2bba2><div class="personImgBox" data-v-01e2bba2><img class="personImgBox__img" src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt="用戶照片" data-v-01e2bba2></div><div class="flex-grow-1 d-flex justify-content-between align-items-center p-3" data-v-01e2bba2><div data-v-01e2bba2><p class="text--title" data-v-01e2bba2>阿爾敏</p><p class="text--subTxt" data-v-01e2bba2>9898人追蹤</p></div><button type="button" class="btn btn-primary" data-v-01e2bba2>追蹤</button></div></div><div class="d-flex gap-3 mb-4" data-v-01e2bba2><select class="selectTool form-select" data-v-01e2bba2><option selected value="最新" data-v-01e2bba2>最新貼文</option></select><div class="input-group inputToolContainer flex-grow-1" data-v-01e2bba2><input type="text" class="form-control inputTool" placeholder="搜尋貼文" aria-label="Username" aria-describedby="basic-addon1" data-v-01e2bba2><button class="btn btn-primary" type="button" data-v-01e2bba2><i class="bi bi-search text-white" data-v-01e2bba2></i></button></div></div>',2),l={class:"d-flex flex-column gap-4"},i={class:"col-4"};function b(e,t,a,b,u,p){var d=Object(c["resolveComponent"])("PostCard"),m=Object(c["resolveComponent"])("DynamicWall");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",s,[r,Object(c["createElementVNode"])("div",l,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(b.postList,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:e._id,"post-item":e},null,8,["post-item"])})),128))])]),Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(m)])])])}var u=a("8c2b"),p=a("be2a"),d={components:{PostCard:u["a"],DynamicWall:p["a"]},setup:function(){var e=Object(c["ref"])([{_id:"123",userName:"邊緣小傑",userImgUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",creatAt:"2022/1/10 12:00",postContent:"<p>搶到想要的 NFT 啦！ya~~</p><p>搶到想要的 NFT 啦！ya~~</p>",postImgUrl:"https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80"},{_id:"456",userName:"波吉",userImgUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",creatAt:"2022/1/10 12:00",postContent:"<p>我一定要成為很棒棒的國王</p><p>搶到想要的 NFT 啦！ya~~</p>",postImgUrl:""},{_id:"456",userName:"阿爾敏",userImgUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",creatAt:"2022/1/10 12:00",postContent:"<p>各位我有一個計畫</p><p>搶到想要的 NFT 啦！ya~~</p>",postImgUrl:""}]);return{postList:e}}},m=(a("fcbd"),a("6b0d")),f=a.n(m);const x=f()(d,[["render",b],["__scopeId","data-v-01e2bba2"]]);t["default"]=x},3690:function(e,t,a){"use strict";var c=a("be92"),o=Object(c["b"])({id:"statusStore",state:function(){return{isLoading:!1,newPostModel:!1}},getters:{},actions:{}});t["a"]=o},"62f2":function(e,t,a){},"6c3a":function(e,t,a){"use strict";a("751a")},"751a":function(e,t,a){},"8c2b":function(e,t,a){"use strict";a("b0c0");var c=a("7a23"),o={class:"postBox gap-3"},n={key:0,class:"userBox gap-3"},s=["src","alt"],r={class:"userBox__title"},l={class:"userBox__subTxt"},i={class:"postBox__content gap-3"},b=["innerHTML"],u=["src","alt"];function p(e,t,a,p,d,m){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[e.postItem.user?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("img",{class:"userBox__pic",src:e.postItem.user.photo||"",alt:"".concat(e.postItem.user.name,"照片")},null,8,s),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("p",r,Object(c["toDisplayString"])(e.postItem.user.name),1),Object(c["createElementVNode"])("p",l,Object(c["toDisplayString"])(e.postItem.creatAt),1)])])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",{class:"postBox__content__text",innerHTML:e.postItem.postContent},null,8,b),""!==e.postItem.postImgUrl?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,class:"postBox__content__img",src:e.postItem.postImgUrl,alt:"".concat(e.postItem._id,"貼文")},null,8,u)):Object(c["createCommentVNode"])("",!0)])])}var d={props:["post-item"],setup:function(e){return console.log(e.postItem),{}}},m=(a("e24c"),a("6b0d")),f=a.n(m);const x=f()(d,[["render",p],["__scopeId","data-v-4bcb2a10"]]);t["a"]=x},b0c0:function(e,t,a){var c=a("83ab"),o=a("5e77").EXISTS,n=a("e330"),s=a("9bf2").f,r=Function.prototype,l=n(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,b=n(i.exec),u="name";c&&!o&&s(r,u,{configurable:!0,get:function(){try{return b(i,l(this))[1]}catch(e){return""}}})},be2a:function(e,t,a){"use strict";a("b0c0");var c=a("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-03d40b32"),e=e(),Object(c["popScopeId"])(),e},n={key:0,class:"dynamic-wall rounded d-flex flex-column gap-2 px-3 py-3"},s=o((function(){return Object(c["createElementVNode"])("p",{class:"text-white"},"張貼動態",-1)})),r=[s],l=["src","alt"],i=o((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-bell"},null,-1)})),b=o((function(){return Object(c["createElementVNode"])("p",null,"追蹤名單",-1)})),u=o((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-hand-thumbs-up"},null,-1)})),p=o((function(){return Object(c["createElementVNode"])("p",null,"我按讚的文章",-1)}));function d(e,t,a,o,s,d){var m=Object(c["resolveComponent"])("RouterLink");return o.userData.user._id?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("button",{type:"button",onClick:t[0]||(t[0]=function(e){return o.statusData.newPostModel=!0}),class:"btn--post btn d-flex align-items-center justify-content-center"},r),Object(c["createVNode"])(m,{to:"/my-page",class:"d-flex align-items-center gap-2 py-2"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("img",{class:"userPhoto",src:o.userData.user.photo,alt:o.userData.user.name},null,8,l),Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(o.userData.user.name),1)]})),_:1}),Object(c["createVNode"])(m,{to:"/follow",class:"d-flex align-items-center gap-2 py-2"},{default:Object(c["withCtx"])((function(){return[i,b]})),_:1}),Object(c["createVNode"])(m,{to:"/thumb-up",class:"d-flex align-items-center gap-2 py-2"},{default:Object(c["withCtx"])((function(){return[u,p]})),_:1})])):Object(c["createCommentVNode"])("",!0)}var m=a("f606"),f=a("3690"),x={setup:function(){var e=Object(m["a"])(),t=Object(f["a"])();return{userData:e,statusData:t}}},j=(a("6c3a"),a("6b0d")),v=a.n(j);const O=v()(x,[["render",d],["__scopeId","data-v-03d40b32"]]);t["a"]=O},ceb7:function(e,t,a){},e24c:function(e,t,a){"use strict";a("ceb7")},fcbd:function(e,t,a){"use strict";a("62f2")}}]);
//# sourceMappingURL=chunk-2cd477e0.2039d94a.js.map