(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7695],{48788:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-page-leave",function(){return n(76141)}])},76141:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(24246),s=n(71670),u=n(3916),i=n(30289),r=n(27378),Text=n(26569);let a=`
import { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`,c={type:"code",component:function(){var e;let[t,n]=(0,r.useState)(0);return e=()=>n(e=>e+1),(0,r.useEffect)(()=>(document.documentElement.addEventListener("mouseleave",e),()=>document.documentElement.removeEventListener("mouseleave",e)),[]),r.createElement(Text.x,{ta:"center"},"Mouse left the page ",t," times")},code:a},d=(0,u.A)(i.us.usePageLeave);function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-page-leave"})," calls given function when mouse leaves the page:"]}),"\n",(0,o.jsx)(n,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function usePageLeave(onPageLeave: () => void): void;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,{...e,children:(0,o.jsx)(l,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=48788)}),_N_E=e.O()}]);