(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/docz.less":function(e,n,t){},"./src/lang/isObjectValueEqual.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r}));var c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("react"),t("./node_modules/@mdx-js/react/dist/esm.js")),s=(t("./src/docz.less"),{}),b="wrapper";function r(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)(b,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"isobjectvalequal"},"isObjectValEqual"),Object(a.b)("p",null,"\u5bf9\u6bd4\u4e24\u4e2a\u5bf9\u8c61\u7684\u503c\u662f\u5426\u76f8\u7b49\uff08\u53ea\u652f\u6301\u57fa\u7840\u6570\u636e\u7c7b\u578b\u7684\u6bd4\u8f83\uff09"),Object(a.b)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"/**\n * \u5bf9\u6bd4\u4e24\u4e2a\u5bf9\u8c61\u7684\u503c\u662f\u5426\u76f8\u7b49\uff08\u53ea\u652f\u6301\u57fa\u7840\u6570\u636e\u7c7b\u578b\u7684\u6bd4\u8f83\uff09needCheckAttrs (\u9700\u8981\u5ffd\u7565\u7684\u5c5e\u6027 key)\n *@param srcObj<Object>\n *@param othObj<Object>\n *@param needCheckAttrs<Array>\n */\nconst isObjectValEqual = (srcObj,othObj,needCheckAttrs=null) => boolean;\n")),Object(a.b)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"let srcObj = {\n    id:'1',\n    name:'2',\n    code:'3',\n    codeValue:''\n};\nlet othObj = {\n    id:'1',\n    name:'2',\n    code:'3',\n    codeValue:'wct'\n};\nlet needCheckAttrs = ['codeValue']\nlet had = isObjectValueEmpty(srcObj,othObj,needCheckAttrs);\n\n/**\n* \u8f93\u51fa\uff1a\n* had = true\n*\n*/\n\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\lang\\isObjectValueEqual.mdx"}}),r.isMDXComponent=!0}}]);