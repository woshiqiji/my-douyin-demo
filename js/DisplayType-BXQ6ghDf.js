import{ao as e,ap as a,_ as V}from"./common-ByfMVpoB.js";import"./vendor-Bpbe8f_w.js";const t=n=>(Vue.pushScopeId("data-v-22551158"),n=n(),Vue.popScopeId(),n),_={class:"DisplayType"},p=t(()=>Vue.createElementVNode("span",{class:"f16"},"展示范围",-1)),m={class:"content"},y=t(()=>Vue.createElementVNode("div",{class:"left"},"公开可见",-1)),E={key:0,class:"right"},T=t(()=>Vue.createElementVNode("img",{src:a,alt:""},null,-1)),v=[T],h=t(()=>Vue.createElementVNode("div",{class:"left"},"校友可见",-1)),f={key:0,class:"right"},k=t(()=>Vue.createElementVNode("img",{src:a,alt:""},null,-1)),L=[k],N=t(()=>Vue.createElementVNode("div",{class:"left"},"仅自己可见",-1)),P={key:0,class:"right"},Y=t(()=>Vue.createElementVNode("img",{src:a,alt:""},null,-1)),D=[Y],S=Vue.defineComponent({name:"DisplayType",__name:"DisplayType",setup(n){const r=VueRouter.useRouter(),d=VueRouter.useRoute(),s=Vue.reactive({displayType:e.DISPLAY_TYPE.ALL});Vue.onMounted(()=>{s.displayType=~~d.query.displayType});function c(l){s.displayType=l,localStorage.setItem("changeDisplayType",l),r.back()}return(l,o)=>{const i=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",_,[Vue.createVNode(i,null,{center:Vue.withCtx(()=>[p]),_:1}),Vue.createElementVNode("div",m,[Vue.createElementVNode("div",{class:"row",onClick:o[0]||(o[0]=u=>c(Vue.unref(e).DISPLAY_TYPE.ALL))},[y,s.displayType===Vue.unref(e).DISPLAY_TYPE.ALL?(Vue.openBlock(),Vue.createElementBlock("div",E,v)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[1]||(o[1]=u=>c(Vue.unref(e).DISPLAY_TYPE.SCHOOL))},[h,s.displayType===Vue.unref(e).DISPLAY_TYPE.SCHOOL?(Vue.openBlock(),Vue.createElementBlock("div",f,L)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:o[2]||(o[2]=u=>c(Vue.unref(e).DISPLAY_TYPE.ME))},[N,s.displayType===Vue.unref(e).DISPLAY_TYPE.ME?(Vue.openBlock(),Vue.createElementBlock("div",P,D)):Vue.createCommentVNode("",!0)])])])}}}),A=V(S,[["__scopeId","data-v-22551158"]]);export{A as default};
