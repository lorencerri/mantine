(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4139],{20818:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-logger",function(){return o(96196)}])},96196:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return h}});var t=o(24246),r=o(71670),s=o(3916),c=o(30289),u=o(27378),i=o(82591),l=o(8671);let d=`
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`,a={type:"code",code:d,component:function(){var e,n;let[o,t]=(0,u.useState)(0);return e="Demo",n=[{count:o,hello:"world"}],(0,u.useEffect)(()=>(console.log(`${e} mounted`,...n),()=>console.log(`${e} unmounted`)),[]),(0,i.l)(()=>{console.log(`${e} updated`,...n)},n),u.createElement(l.z,{onClick:()=>t(e=>e+1)},"Update state (",o,")")},centered:!0},p=(0,s.A)(c.us.useLogger);function g(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-logger"})," logs given values to the console each time component renders.\nOpen devtools to see state changes in console:"]}),"\n",(0,t.jsx)(o,{data:a}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useLogger(componentName: string, props: any[]): any;\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...e,children:(0,t.jsx)(g,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=20818)}),_N_E=e.O()}]);