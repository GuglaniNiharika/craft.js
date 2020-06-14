(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(47),o=n(207),a=(n(0),n(208)),i={id:"overview",title:"Overview"},c={id:"version-0.1.0-beta.7/overview",title:"Overview",description:"Motivation",source:"@site/versioned_docs/version-0.1.0-beta.7/overview.md",permalink:"/r/docs/overview",version:"0.1.0-beta.7",sidebar:"version-0.1.0-beta.7/docs",next:{title:"Acknowledgements",permalink:"/r/docs/acknowledgements"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Features",id:"features",children:[{value:"It&#39;s just React",id:"its-just-react",children:[]},{value:"Control how your components are edited",id:"control-how-your-components-are-edited",children:[]},{value:"User components with droppable regions",id:"user-components-with-droppable-regions",children:[]},{value:"Extensible",id:"extensible",children:[]},{value:"Serializable state",id:"serializable-state",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"Page editors are a great way to provide an excellent user experience. However, to build one is often a pretty dreadful task."),Object(a.b)("p",null,"There're existing libraries that come with a fully working page editor out of the box with a user interface and editable components. However, if you wish to make customisations such as tweaking the user interface, it will most definitely involve modifying the library itself."),Object(a.b)("p",null,"Craft.js solves this problem by modularising the building blocks of a page editor. It provides a drag-n-drop system and handles the way user components should be rendered, updated and moved - among other things. With this, you'll be able to focus on building the page editor according to your own specifications and needs."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("h3",{id:"its-just-react"},"It's just React"),Object(a.b)("p",null,"No need for complicated plugin systems. Design your editor from top to bottom the same way as you would design any other frontend application in React."),Object(a.b)("p",null,"A simple user component can easily be defined as such:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import {useNode} from "@craftjs/core";\n\nconst TextComponent = ({text}) => {\n  const { connectors:{drag} } = useNode();\n\n  return (\n    <div ref={drag}>\n      <h2>{text}</h2>\n    </div>\n  )\n}\n')),Object(a.b)("p",null,"Heck, the entire UI of your page editor is built using just React."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {Editor, Frame, Canvas, Selector} from "@craftjs/core";\nconst App = () => {\n  return (\n    <div>\n      <header>Some fancy header or whatever</header>\n      <Editor>\n        // Editable area starts here\n        <Frame resolver={TextComponent, Container}> \n          <Canvas>\n            <TextComponent text="I\'m already rendered here" />\n          </Canvas>\n        </Frame>\n      </Editor>\n    </div>\n  )\n}\n')),Object(a.b)("h3",{id:"control-how-your-components-are-edited"},"Control how your components are edited"),Object(a.b)("p",null,"An obvious requirement for page editors is that they need to allow users to edit components. With Craft.js, you control the process of which these components should be edited."),Object(a.b)("p",null,"In the following example, when the user clicks on a component, we'll display a modal that requires the user to input a value for the ",Object(a.b)("inlineCode",{parentName:"p"},"text")," prop. As the input value changes, the component will be re-rendered with updated prop."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import {useNode} from "@craftjs/core";\n\nconst TextComponent = ({text}) => {\n  const { connectors:{ connect, drag }, isClicked, actions: {setProp} } = useNode(\n    (state) => ({\n      isClicked: state.event.selected,\n    })\n  );\n\n  return (\n    <div ref={dom => connect(drag(dom))}>\n      <h2>{text}</h2>\n      {\n        isClicked ? (\n          <Modal>\n            <input\n              type="text"\n              value={text}\n              onChange={e => setProp(e.target.value)}\n            />\n          </Modal>\n        )\n      }\n    </div>\n  )\n}\n')),Object(a.b)("p",null,"With this, you could easily implement content editable text or drag-to-resize components, just as any modern page editor would have."),Object(a.b)("h3",{id:"user-components-with-droppable-regions"},"User components with droppable regions"),Object(a.b)("p",null,'Let\'s say we need a "Container" component which users can drop into the editor. Additionally, we would also like them to be able to drag and drop other components into the Container.'),Object(a.b)("p",null,"In Craft.js, it's as simple as calling the ",Object(a.b)("inlineCode",{parentName:"p"},"<Canvas />")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import {useNode} from "@craftjs/core";\nconst Container = () => {\n  const { connectors: {drag} } = useNode();\n\n  return (\n    <div ref={drag}>\n      <Canvas id="drop_section">\n         // Now users will be able to drag/drop components into this section\n        <TextComponent />\n      </Canvas>\n    </div>\n  )\n}\n')),Object(a.b)("h3",{id:"extensible"},"Extensible"),Object(a.b)("p",null,"Craft.js provides an expressive API which allows you to easily read and manipulate the editor state. Let's say you would like to implement a copy function for a component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import {useEditor, useNode} from "@craftjs/core";\nconst Container = () => {\n  const { actions: {add}, query: { createNode, node } } = useEditor();\n  const { id, connectors: {drag, connect}} = useNode();\n  return (\n    <div ref={dom => connect(drag(dom))}>\n      ...\n      <a onClick={() => {\n        const { data: {type, props}} = node(id).get();\n        add(\n          createNode(React.createElement(type, props));\n        );\n      }}>\n        Make a copy of me\n      </a>\n    </div>\n  )\n}\n\n')),Object(a.b)("h3",{id:"serializable-state"},"Serializable state"),Object(a.b)("p",null,"The editor's state can be serialized into JSON which you can then apply a compression technique of your choice for storage."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const SaveButton = () => {\n  const { query } = useEditor();\n  return <a onClick={() => console.log(query.serialize()) }>Get JSON</a>\n}\n")),Object(a.b)("p",null,"Of course, Craft.js will also able to recreate the entire state from the JSON string."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  const jsonString = /* retrieve JSON from server */\n  return (\n    <Editor>\n      <Frame json={jsonString}>\n        ...\n      </Frame>\n    </Editor>\n  )\n}\n")))}d.isMDXComponent=!0},207:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);