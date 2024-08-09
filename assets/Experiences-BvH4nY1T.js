import{r as n,u as D,f as W,M as U,j as e,b as Z,c as G,L as _,d as $,m as i,v as V,P as s}from"./index-BLeS9XUx.js";function O(){const l=n.useRef(!1);return D(()=>(l.current=!0,()=>{l.current=!1}),[]),l}function Y(){const l=O(),[o,t]=n.useState(0),r=n.useCallback(()=>{l.current&&t(o+1)},[o]);return[n.useCallback(()=>W.postRender(r),[r]),o]}class q extends n.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Q({children:l,isPresent:o}){const t=n.useId(),r=n.useRef(null),j=n.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=n.useContext(U);return n.useInsertionEffect(()=>{const{width:h,height:x,top:b,left:w}=j.current;if(o||!r.current||!h||!x)return;r.current.dataset.motionPopId=t;const a=document.createElement("style");return u&&(a.nonce=u),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${x}px !important;
            top: ${b}px !important;
            left: ${w}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[o]),e.jsx(q,{isPresent:o,childRef:r,sizeRef:j,children:n.cloneElement(l,{ref:r})})}const R=({children:l,initial:o,isPresent:t,onExitComplete:r,custom:j,presenceAffectsLayout:u,mode:h})=>{const x=Z(J),b=n.useId(),w=n.useMemo(()=>({id:b,initial:o,isPresent:t,custom:j,onExitComplete:a=>{x.set(a,!0);for(const d of x.values())if(!d)return;r&&r()},register:a=>(x.set(a,!1),()=>x.delete(a))}),u?[Math.random()]:[t]);return n.useMemo(()=>{x.forEach((a,d)=>x.set(d,!1))},[t]),n.useEffect(()=>{!t&&!x.size&&r&&r()},[t]),h==="popLayout"&&(l=e.jsx(Q,{isPresent:t,children:l})),e.jsx(G.Provider,{value:w,children:l})};function J(){return new Map}const f=l=>l.key||"";function X(l,o){l.forEach(t=>{const r=f(t);o.set(r,t)})}function ee(l){const o=[];return n.Children.forEach(l,t=>{n.isValidElement(t)&&o.push(t)}),o}const p=({children:l,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:j,presenceAffectsLayout:u=!0,mode:h="sync"})=>{const x=n.useContext(_).forceRender||Y()[0],b=O(),w=ee(l);let a=w;const d=n.useRef(new Map).current,N=n.useRef(a),g=n.useRef(new Map).current,k=n.useRef(!0);if(D(()=>{k.current=!1,X(w,g),N.current=a}),$(()=>{k.current=!0,g.clear(),d.clear()}),k.current)return e.jsx(e.Fragment,{children:a.map(c=>e.jsx(R,{isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:u,mode:h,children:c},f(c)))});a=[...a];const I=N.current.map(f),S=w.map(f),B=I.length;for(let c=0;c<B;c++){const m=I[c];S.indexOf(m)===-1&&!d.has(m)&&d.set(m,void 0)}return h==="wait"&&d.size&&(a=[]),d.forEach((c,m)=>{if(S.indexOf(m)!==-1)return;const C=g.get(m);if(!C)return;const F=I.indexOf(m);let v=c;if(!v){const H=()=>{d.delete(m);const A=Array.from(g.keys()).filter(y=>!S.includes(y));if(A.forEach(y=>g.delete(y)),N.current=w.filter(y=>{const K=f(y);return K===m||A.includes(K)}),!d.size){if(b.current===!1)return;x(),r&&r()}};v=e.jsx(R,{isPresent:!1,onExitComplete:H,custom:o,presenceAffectsLayout:u,mode:h,children:C},f(C)),d.set(m,v)}a.splice(F,0,v)}),a=a.map(c=>{const m=c.key;return d.has(m)?c:e.jsx(R,{isPresent:!0,presenceAffectsLayout:u,mode:h,children:c},f(c))}),e.jsx(e.Fragment,{children:d.size?a:a.map(c=>n.cloneElement(c))})},M="/portfolio-2024/assets/bem-1-Bp951zhf.jpeg",E="/portfolio-2024/assets/bem-2-Zo1CIlbD.jpeg",P="/portfolio-2024/assets/bem-3-BZStawNy.jpeg",z="/portfolio-2024/assets/internship-1-94V7GNRI.jpeg",L="/portfolio-2024/assets/internship-2-CmKuQAvc.png",T="/portfolio-2024/assets/internship-3-Bddg2k7r.png",se="/portfolio-2024/assets/ipcree-2-Da35yCZ2.png",ie="/portfolio-2024/assets/lkmmtd-1-DbjOfdbq.jpeg",te="/portfolio-2024/assets/pk2-1-D9u8KG1P.png",ae="/portfolio-2024/assets/pk2-2-yZAj8lxI.png",ne="/portfolio-2024/assets/pk2-3-IkTY7GTm.png",re="/portfolio-2024/assets/poros%20_%20cyberclass-ZyrHH6OR.png",oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(i.div,{initial:"hidden",animate:"visible",variants:V,layoutScroll:"false",children:e.jsxs("div",{className:"experiences pb-3 pt-20 px-20 max-lg:px-10 w-full h-screen 2xl:w-9/12 min-[2000px]:w-1/2 m-auto overflow-y-auto overflow-x-hidden absolute z-10",children:[e.jsxs("section",{className:"mb-auto",children:[e.jsxs("div",{className:"sm:flex flex-row relative",children:[e.jsx("div",{className:"basis-1/4 h-44 max-sm:flex max-sm:space-x-5 max-xs:space-x-0",children:e.jsxs(p,{children:[e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3 max-xs:hidden",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.1,type:"tween",duration:.2},children:e.jsx("img",{src:T,className:"object-cover h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3 max-xs:hidden",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.3,type:"tween",duration:.2},children:e.jsx("img",{src:L,className:"object-cover h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3 max-xs:w-full",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.5,type:"tween",duration:.2},children:e.jsx("img",{src:z,className:"object-cover  h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"})})]})}),e.jsxs("div",{className:"basis-3/4 p-5 pl-10 max-lg:pl-28 max-sm:p-0 max-sm:text-center",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"INTERNSHIP | 2022"}),e.jsx("p",{className:" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1",children:"Fullstack Developer at PT. Andromedia"}),e.jsxs("p",{className:" text-base",children:["This internship is a part of Program Magang dan Studi Independen",e.jsx("br",{})," Bersertifikat (MSIB) Batch 3."]})]})]}),e.jsxs("div",{className:"sm:flex flex-row relative",children:[e.jsxs("div",{className:"basis-3/4 w-screen p-5 pr-10 max-lg:pr-16 max-sm:pl-0",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"HARD SKILLS"}),e.jsxs("li",{children:["Built ",e.jsx("a",{href:"https://github.com/Millahh/IssueTicketWeb",target:"_blank",className:"inline-block underline underline-offset-4 hover:text-primary",children:e.jsx(s,{children:"Issue Ticket Website"})})," using ",e.jsx(s,{children:"adminLTE"}),", ",e.jsx(s,{children:"Laravel"}),", and ",e.jsx(s,{children:"PostgreSQL"}),"."]}),e.jsxs("li",{children:["Continued development ",e.jsx("a",{href:"https://kelava.id/",target:"_blank",className:"inline-block underline underline-offset-4 hover:text-primary",children:e.jsx(s,{children:"Kelava CRM"})})," Project using special company’s ",e.jsx(s,{children:"CMS"})," with ",e.jsx(s,{children:"AngularJS"}),", ",e.jsx(s,{children:"Yii1"}),", and ",e.jsx(s,{children:"Rapid Application Development (RAD)"})," as a development method."]}),e.jsxs("li",{children:["Developed the ",e.jsx(s,{children:"front-end"})," of ",e.jsx(s,{children:"CRP Web Project"})," with ",e.jsx(s,{children:"RAD"})," approach."]}),e.jsxs("li",{children:["Evaluated and redesigned ",e.jsx(s,{children:"Mobile Warehouse Application"})," using ",e.jsx(s,{children:"Figma"})," and ",e.jsx(s,{children:"Maze"})," to meet client usability requirements."]})]}),e.jsx("div",{className:"basis-1/4 align-middle max-sm:space-x-5 max-sm:hidden",children:e.jsxs(p,{children:[e.jsx(i.div,{className:"z-0 sm:absolute right-0 w-1/4 max-lg:w-1/3",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:1,type:"tween",duration:.2},children:e.jsx("img",{src:T,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-1 top-2 right-3 max-lg:right-2 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:1.2,type:"tween",duration:.2},children:e.jsx("img",{src:z,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-2 top-4 right-6 max-lg:right-4 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:1.4,type:"tween",duration:.2},children:e.jsx("img",{src:L,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})})]})})]}),e.jsxs("div",{className:"sm:flex flex-row relative",children:[e.jsx("div",{className:"basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5",children:e.jsxs(p,{children:[e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:1.5,type:"tween",duration:.2},children:e.jsx("img",{src:L,className:"object-cover w-11/12 max-lg:w-full h-40 border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:1.7,type:"tween",duration:.2},children:e.jsx("img",{src:z,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:2,type:"tween",duration:.2},children:e.jsx("img",{src:T,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})})]})}),e.jsxs("div",{className:"basis-3/4 p-5 pl-10 max-lg:pl-20 max-sm:p-0",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"SOFT SKILLS"}),e.jsxs("p",{className:" text-base",children:["I also took the opportunity and responsibility to be part of ",e.jsx(s,{children:"Tribe Leader"}),", help communication ",e.jsx("br",{}),"between the company and MSIB to help effective collaboration."]})]})]})]}),e.jsx("hr",{className:" mt-24 mb-10 max-sm:mt-6"}),e.jsxs("section",{className:"mb-auto",children:[e.jsxs("div",{className:"sm:flex flex-row relative",children:[e.jsx("div",{className:"basis-1/4 h-44 max-lg:basis-1/3 max-sm:flex max-sm:space-x-5 max-xs:space-x-0",children:e.jsxs(p,{children:[e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:hidden",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.2,type:"tween",duration:.2},children:e.jsx("img",{src:M,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3 max-sm:hidden",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.5,type:"tween",duration:.2},children:e.jsx("img",{src:P,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.7,type:"tween",duration:.2},children:e.jsx("img",{src:E,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})})]})}),e.jsxs("div",{className:"basis-3/4 p-5 pl-10 max-lg:pl-20 max-sm:p-0 max-sm:text-center",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"ORGANIZATION | 2021"}),e.jsxs("p",{className:" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1",children:["Expert Staff of Information and Technology ",e.jsx("br",{}),"Development (PIT)"]}),e.jsx("p",{className:" text-base",children:"PIT is a part of Student Executive Board (BEM) Divisions of Fakultas Ilmu Komputer"})]})]}),e.jsxs("div",{className:"sm:flex flex-row relative",children:[e.jsxs("div",{className:"basis-3/4 max-lg:basis-8/12 w-screen pl-5 pt-10 max-lg:pt-5 pr-10 max-sm:pl-0 h-40",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"HARD SKILLS"}),e.jsxs("p",{className:"inline-block",children:[e.jsx(s,{children:"Designed"})," the Elaborasi Makna website ",e.jsx("a",{href:"https://bemfilkom.ub.ac.id/2020/#/",target:"_blank",className:"inline-block underline underline-offset-4 hover:text-primary",children:e.jsx(s,{children:"bemfilkom.ub.ac.id"})}),", creating an engaging interface that effectively showcased the organization's mission, events, and activities."]})]}),e.jsx("div",{className:"basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5",children:e.jsxs(p,{children:[e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:1,type:"tween",duration:.2},children:e.jsx("img",{src:M,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-1 top-2 right-3 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:1.2,type:"tween",duration:.2},children:e.jsx("img",{src:E,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-2 top-4 right-6 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:1.4,type:"tween",duration:.2},children:e.jsx("img",{src:P,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})})]})})]}),e.jsxs("div",{className:"sm:flex flex-row relative",children:[e.jsx("div",{className:"basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5",children:e.jsxs(p,{children:[e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:1.6,type:"tween",duration:.2},children:e.jsx("img",{src:E,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:1.8,type:"tween",duration:.2},children:e.jsx("img",{src:P,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})}),e.jsx(i.div,{className:"-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:2,type:"tween",duration:.2},children:e.jsx("img",{src:M,className:"object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"})})]})}),e.jsxs("div",{className:"basis-3/4 py-7 pl-10 pr-20 max-lg:pl-20 max-sm:p-0",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"SOFT SKILLS"}),e.jsxs("p",{className:" text-base",children:["Supported a team of 3 members as a PIT ",e.jsx(s,{children:"Mentor for PIT Staff"}),". This experience allowed me to ",e.jsx(s,{children:"share"})," my knowledge and ",e.jsx(s,{children:"learn"})," from the diverse perspectives and ideas of my mentees."]})]})]})]}),e.jsx("hr",{className:" mt-24 mb-10 max-sm:mt-5"}),e.jsxs("section",{className:"mb-auto space-y-5",children:[e.jsxs("div",{className:"sm:flex flex-row sm:relative mt-10",children:[e.jsx("div",{className:"basis-1/4 h-36 max-lg:basis-1/3",children:e.jsx(p,{children:e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full max-sm:m-auto",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.2,type:"tween",duration:.2},children:e.jsx("img",{src:re,className:"object-cover w-full h-44 border-2 border-white rounded-xl"})})})}),e.jsxs("div",{className:"basis-3/4 p-3 pl-10 max-sm:text-center max-sm:mt-10 max-sm:p-0",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50 pt-1",children:"ORGANIZATION | 2021"}),e.jsxs("p",{className:" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1",children:["Public Relations Staff of Organization of ",e.jsx("br",{}),"Open Source (POROS)"]})]})]}),e.jsxs("div",{className:"sm:flex flex-row pt-10 max-sm:p-0",children:[e.jsxs("div",{className:"basis-1/2 pr-20 max-sm:p-0",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"HARD SKILLS"}),e.jsxs("p",{children:["Created posts design and maintained an official instagram account of POROS  to enhance our online presence ",e.jsx("a",{href:"https://www.instagram.com/porosfilkom/",target:"_blank",className:"inline-block underline underline-offset-4 hover:text-primary",children:"@porosfilkom"}),"."]})]}),e.jsxs("div",{className:"basis-1/2 pr-20 max-sm:mt-2 max-sm:p-0",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"SOFT SKILLS"}),e.jsx("p",{children:"Took responsibility as Vice Chief Committee and Master of Ceremonies at the 'Cyber Class 2020' event."})]})]}),e.jsx("hr",{className:" my-10 sm:hidden"}),e.jsxs("div",{className:"sm:flex flex-row sm:relative",children:[e.jsxs("div",{className:"basis-3/4 w-screen max-sm:w-full sm:pr-10 text-right max-lg:basis-2/3",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50 max-sm:text-center",children:"VOLUNTEER | 2021"}),e.jsx("p",{className:" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1 max-sm:text-center",children:"Website Builder Staff of Indonesian Petroleum Community Russian and Eastern European (IPCREE)"}),e.jsx("p",{className:" tracking-widest text-xs opacity-50 pt-2 max-sm:hidden",children:"HARD SKILLS"}),e.jsxs("p",{className:"max-sm:hidden",children:[e.jsx(s,{children:"Developed website"})," of IPCREE with ",e.jsx(s,{children:"WordPress"})," (ipcree.com) and took responsibility for ",e.jsx(s,{children:"writing"})," one of the ",e.jsx(s,{children:"press releases"})," for the National Energy Week event."]})]}),e.jsx("div",{className:"basis-1/4 max-lg:basis-1/3 my-3",children:e.jsx(p,{children:e.jsx(i.div,{className:"z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full max-sm:m-auto",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:.5,type:"tween",duration:.2},children:e.jsx("img",{src:se,className:"object-cover w-full h-44 border-2 border-white rounded-xl "})})})}),e.jsx("p",{className:" tracking-widest text-xs opacity-50 pt-2 sm:hidden",children:"HARD SKILLS"}),e.jsxs("p",{className:"sm:hidden",children:[e.jsx(s,{children:"Developed website"})," of IPCREE with ",e.jsx(s,{children:"WordPress"})," (ipcree.com) and took responsibility for ",e.jsx(s,{children:"writing"})," one of the ",e.jsx(s,{children:"press releases"})," for the National Energy Week event."]})]})]}),e.jsx("hr",{className:" my-10"}),e.jsxs("section",{className:"mb-auto space-y-5",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1",children:"PK2MABA & STARTUP ACADEMY"}),e.jsx("p",{children:"Annual campus event welcomes new students, introducing and providing essential information to help kickstart their journey."})]}),e.jsx("div",{className:"flex justify-between space-x-5 max-xs:space-x-0",children:e.jsxs(p,{children:[e.jsx(i.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:.2,type:"tween",duration:.2},children:e.jsx("img",{src:te,className:"object-cover h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:hidden"})}),e.jsx(i.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:.5,type:"tween",duration:.2},children:e.jsx("img",{src:ne,className:"object-cover h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:w-full max-xs:h-full"})}),e.jsx(i.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:.7,type:"tween",duration:.2},children:e.jsx("img",{src:ae,className:"object-cover h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:hidden"})})]})}),e.jsxs("div",{children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"SOFT SKILLS"}),e.jsx("p",{className:" text-base font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-1",children:"Staff of Event Division | 2021"}),e.jsxs("li",{children:[e.jsx(s,{children:"Collaborated"})," with the ",e.jsx(s,{children:"team"})," in ",e.jsx(s,{children:"organizing"})," and ",e.jsx(s,{children:"managing events"})," such as PK2MABA, Startup Academy, Inspiration Class, Fusion, and Open House."]}),e.jsxs("li",{children:[e.jsx(s,{children:"Best staff"})," and ",e.jsx(s,{children:"person in charge"})," of a series of Fusion events."]}),e.jsx("p",{className:" text-base font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-3 mb-1",children:"Staff of Companion Division | 2020"}),e.jsxs("p",{children:["Supported ",e.jsx(s,{children:"35"})," students, ",e.jsx(s,{children:"building bonds"})," among students and ",e.jsx(s,{children:"distributing information"})," about PK2MABA & Startup Academy events and lecture-related matters."]}),e.jsx("p",{className:" text-base font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-3 mb-1",children:"Speaker of Program Kreatifitas Mahasiswa Baru (PKM) | 2020"}),e.jsxs("p",{children:["PKM is a national scientific writing competition, I ",e.jsx(s,{children:"mentored"})," and ",e.jsx(s,{children:"facilitated 35"})," students, ",e.jsx(s,{children:"delivering material"})," about PKM and how to ",e.jsx(s,{children:"make good presentations"}),"."]})]})]}),e.jsx("hr",{className:" my-10"}),e.jsxs("section",{className:" h-4/5 mb-auto space-y-8 max-xs:mb-52",children:[e.jsxs("div",{className:"sm:flex flex-row",children:[e.jsx("div",{className:"basis-1/4 max-lg:basis-1/3",children:e.jsx(i.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{delay:.2,type:"tween",duration:.2},children:e.jsx("img",{src:ie,className:" object-cover object-left-top h-44 border-2 border-white rounded-xl max-sm:m-auto max-xs:w-full"})})}),e.jsxs("div",{className:"basis-3/4 p-5 pl-10 max-sm:p-0 max-sm:text-center",children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50 pt-2",children:"VOLUNTEER | 2021"}),e.jsx("p",{className:" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1",children:"Head of Event Division at LKMM-TD"}),e.jsx("p",{className:" text-base",children:"LKMM-TD is Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar to provide knowledge and managerial skills to be a good leader."})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:" tracking-widest text-xs opacity-50",children:"SOFT SKILLS"}),e.jsxs("li",{children:[e.jsx(s,{children:"Promoting"})," the event to new students at Startup Academy Event resulted in ",e.jsx(s,{children:"doubling the participant numbers"})," from the previous year."]}),e.jsxs("li",{children:[e.jsx(s,{children:"Collaborated"})," with the ",e.jsx(s,{children:"team"})," in preparing and controlling LKMM-TD activities."]})]})]})]})}),e.jsx(i.p,{initial:"hidden",animate:"visible",variants:V,layoutScroll:"false",className:"max-xs:right-8 bottom-2 right-3 text-sm font-sans italic max-md:bg-black max-xs:text-[0.5rem] max-md:text-xs fixed z-20",children:"More rolls, more chance of luck "})]});export{oe as default};
