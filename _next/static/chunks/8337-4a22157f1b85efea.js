"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8337],{18337:function(e,t,n){n.d(t,{P:function(){return u},t:function(){return m}});var o=n(27378),r=n(22971),i=n(30770),a=n(26569),l=n(76253);let c=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}],s=`
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
`;function d({label:e,image:t,description:n}){return o.createElement(r.Z,{wrap:"nowrap"},o.createElement(i.q,{src:t,radius:"xl",size:"lg"}),o.createElement("div",null,o.createElement(a.x,null,e),o.createElement(a.x,{size:"sm",c:"dimmed",fw:400},n)))}function m(e){let t=c.map(e=>o.createElement(l.U.Item,{value:e.id,key:e.label},o.createElement(l.U.Control,null,o.createElement(d,{...e})),o.createElement(l.U.Panel,null,o.createElement(a.x,{size:"sm"},e.content))));return o.createElement(l.U,{chevronPosition:"right",variant:"contained",...e},t)}let u={type:"code",code:s,component:function(){return o.createElement(m,null)},maxWidth:540,centered:!0}},76253:function(e,t,n){n.d(t,{U:function(){return B}});var o=n(27378),r=n(31002),i=n(58675),a=n(71078),l=n(88140),c=n(92082),s=n(83453),d=n(96739),m=n(6231),u=n(56589),h=n(1189),p=n(20410),f=n(71656);let[g,v]=(0,f.R)("Accordion component was not found in the tree"),[b,y]=(0,f.R)("Accordion.Item component was not found in the tree");var C={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};let w={},A=(0,p.d)((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:l,value:c,...s}=(0,d.w)("AccordionItem",w,e),m=v();return o.createElement(b,{value:{value:c}},o.createElement(u.x,{ref:t,mod:{active:m.isItemActive(c)},...m.getStyles("item",{className:r,classNames:n,styles:a,style:i,variant:m.variant}),...s}))});A.displayName="@mantine/core/AccordionItem",A.classes=C;var E=n(4184);let x={},S=(0,p.d)((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:l,children:c,...s}=(0,d.w)("AccordionPanel",x,e),{value:m}=y(),u=v();return o.createElement(E.U,{ref:t,...u.getStyles("panel",{className:r,classNames:n,style:i,styles:a}),...s,in:u.isItemActive(m),transitionDuration:u.transitionDuration??200,role:"region",id:u.getRegionId(m),"aria-labelledby":u.getControlId(m)},o.createElement("div",{...u.getStyles("content",{classNames:n,styles:a})},c))});S.displayName="@mantine/core/AccordionPanel",S.classes=C;var M=n(61734),I=n(19397);let R={},k=(0,p.d)((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:l,chevron:c,icon:s,onClick:m,onKeyDown:h,children:p,disabled:f,...g}=(0,d.w)("AccordionControl",R,e),{value:b}=y(),C=v(),w=C.isItemActive(b),A="number"==typeof C.order,E=`h${C.order}`,x=o.createElement(I.k,{...g,...C.getStyles("control",{className:r,classNames:n,style:i,styles:a,variant:C.variant}),unstyled:C.unstyled,mod:["accordion-control",{active:w,"chevron-position":C.chevronPosition,disabled:f}],ref:t,onClick:e=>{m?.(e),C.onChange(b)},type:"button",disabled:f,"aria-expanded":w,"aria-controls":C.getRegionId(b),id:C.getControlId(b),onKeyDown:(0,M.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:C.loop,orientation:"vertical",onKeyDown:h})},o.createElement(u.x,{component:"span",mod:{rotate:!C.disableChevronRotation&&w,position:C.chevronPosition},...C.getStyles("chevron",{classNames:n,styles:a})},c||C.chevron),o.createElement("span",{...C.getStyles("label",{classNames:n,styles:a})},p),s&&o.createElement(u.x,{component:"span",mod:{"chevron-position":C.chevronPosition},...C.getStyles("icon",{classNames:n,styles:a})},s));return A?o.createElement(E,{...C.getStyles("itemTitle",{classNames:n,styles:a})},x):x});k.displayName="@mantine/core/AccordionControl",k.classes=C;let z={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:o.createElement(h.Q,null)},P=(0,s.Z)((e,{transitionDuration:t,chevronSize:n,radius:o})=>({root:{"--accordion-transition-duration":void 0===t?void 0:`${t}ms`,"--accordion-chevron-size":void 0===n?void 0:(0,a.h)(n),"--accordion-radius":void 0===o?void 0:(0,c.H5)(o)}}));function B(e){let t=(0,d.w)("Accordion",z,e),{classNames:n,className:a,style:c,styles:s,unstyled:h,vars:p,children:f,multiple:v,value:b,defaultValue:y,onChange:w,id:A,loop:E,transitionDuration:x,disableChevronRotation:S,chevronPosition:M,chevronSize:I,order:R,chevron:k,variant:B,radius:T,...H}=t,G=(0,r.M)(A),[N,Z]=(0,i.C)({value:b,defaultValue:y,finalValue:v?[]:null,onChange:w}),F=(0,m.y)({name:"Accordion",classes:C,props:t,className:a,style:c,classNames:n,styles:s,unstyled:h,vars:p,varsResolver:P});return o.createElement(g,{value:{isItemActive:e=>Array.isArray(N)?N.includes(e):e===N,onChange:e=>{let t=Array.isArray(N)?N.includes(e)?N.filter(t=>t!==e):[...N,e]:e===N?null:e;Z(t)},getControlId:(0,l.A)(`${G}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,l.A)(`${G}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:x,disableChevronRotation:S,chevronPosition:M,order:R,chevron:k,loop:E,getStyles:F,variant:B,unstyled:h}},o.createElement(u.x,{...F("root"),id:G,...H,variant:B,"data-accordion":!0},f))}B.extend=e=>e,B.classes=C,B.displayName="@mantine/core/Accordion",B.Item=A,B.Panel=S,B.Control=k,B.Chevron=h.Q},30770:function(e,t,n){n.d(t,{q:function(){return C}});var o=n(27378),r=n(92082),i=n(83453),a=n(96739),l=n(6231),c=n(56589),s=n(50332),d=n(20410);let m=(0,o.createContext)(null),u=m.Provider;var h={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"};let p={},f=(0,i.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,r.bG)(t)}})),g=(0,d.d)((e,t)=>{let n=(0,a.w)("AvatarGroup",p,e),{classNames:r,className:i,style:s,styles:d,unstyled:m,vars:g,spacing:v,...b}=n,y=(0,l.y)({name:"AvatarGroup",classes:h,props:n,className:i,style:s,classNames:r,styles:d,unstyled:m,vars:g,varsResolver:f,rootSelector:"group"});return o.createElement(u,{value:!0},o.createElement(c.x,{ref:t,...y("group"),...b}))});function v(e){return o.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}g.classes=h,g.displayName="@mantine/core/AvatarGroup";let b={},y=(0,i.Z)((e,{size:t,radius:n,variant:o,gradient:i,color:a})=>{let l=e.variantColorResolver({color:a||"gray",theme:e,gradient:i,variant:o||"light"});return{root:{"--avatar-size":(0,r.ap)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,r.H5)(n),"--avatar-bg":a||o?l.background:void 0,"--avatar-color":a||o?l.color:void 0,"--avatar-bd":a||o?l.border:void 0}}}),C=(0,s.b)((e,t)=>{let n=(0,a.w)("Avatar",b,e),{classNames:r,className:i,style:s,styles:d,unstyled:u,vars:p,src:f,alt:g,radius:C,color:w,gradient:A,imageProps:E,children:x,...S}=n,M=function(){let e=(0,o.useContext)(m);return{withinGroup:!!e}}(),[I,R]=(0,o.useState)(!f),k=(0,l.y)({name:"Avatar",props:n,classes:h,className:i,style:s,classNames:r,styles:d,unstyled:u,vars:p,varsResolver:y});return(0,o.useEffect)(()=>R(!f),[f]),o.createElement(c.x,{...k("root"),mod:{"within-group":M.withinGroup},ref:t,...S},I?o.createElement("span",{...k("placeholder"),title:g},x||o.createElement(v,null)):o.createElement("img",{...E,...k("image"),src:f,alt:g,onError:e=>{R(!0),E?.onError?.(e)}}))});C.classes=h,C.displayName="@mantine/core/Avatar",C.Group=g},4184:function(e,t,n){n.d(t,{U:function(){return f}});var o=n(27378),r=n(82269),i=n(2256),a=n(96739),l=n(48649),c=n(56589),s=n(31542),d=n(82591),m=n(72840);function u(e){return e?.current?e.current.scrollHeight:"auto"}let h="undefined"!=typeof window&&window.requestAnimationFrame,p={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},f=(0,o.forwardRef)((e,t)=>{let{children:n,in:f,transitionDuration:g,transitionTimingFunction:v,style:b,onTransitionEnd:y,animateOpacity:C,...w}=(0,a.w)("Collapse",p,e),A=(0,i.rZ)(),E=(0,r.J)(),x=!!A.respectReducedMotion&&E,S=x?0:g,M=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:n=()=>{},opened:r}){let i=(0,o.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[l,c]=(0,o.useState)(r?{}:a),p=e=>{(0,s.flushSync)(()=>c(e))},f=e=>{p(t=>({...t,...e}))};function g(n){let o=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(n);return{transition:`height ${o}ms ${t}`}}(0,d.l)(()=>{"function"==typeof h&&(r?h(()=>{f({willChange:"height",display:"block",overflow:"hidden"}),h(()=>{let e=u(i);f({...g(e),height:e})})}):h(()=>{let e=u(i);f({...g(e),willChange:"height",height:e}),h(()=>f({height:0,overflow:"hidden"}))}))},[r]);let v=e=>{if(e.target===i.current&&"height"===e.propertyName){if(r){let e=u(i);e===l.height?p({}):f({height:e}),n()}else 0===l.height&&(p(a),n())}};return function({style:e={},refKey:t="ref",...n}={}){let o=n[t];return{"aria-hidden":!r,...n,[t]:(0,m.lq)(i,o),onTransitionEnd:v,style:{boxSizing:"border-box",...e,...l}}}}({opened:f,transitionDuration:S,transitionTimingFunction:v,onTransitionEnd:y});return 0===S?f?o.createElement(c.x,{...w},n):null:o.createElement(c.x,{...M({style:(0,l.c)(b,A),ref:t,...w})},o.createElement("div",{style:{opacity:f||!C?1:0,transition:C?`opacity ${S}ms ${v}`:"none"}},n))});f.displayName="@mantine/core/Collapse"}}]);