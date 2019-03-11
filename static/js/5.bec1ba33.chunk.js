(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{65:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,"a",function(){return a})},66:function(e,n,t){"use strict";function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}t.d(n,"a",function(){return o})},67:function(e,n,t){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(n,"a",function(){return a})},68:function(e,n,t){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function r(e,n){return!n||"object"!==o(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}t.d(n,"a",function(){return r})},69:function(e,n,t){"use strict";function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}t.d(n,"a",function(){return o})},77:function(e,n,t){"use strict";t.r(n),t.d(n,"readingTime",function(){return M}),t.d(n,"default",function(){return E}),t.d(n,"tableOfContents",function(){return b}),t.d(n,"frontMatter",function(){return y});var a=t(17),o=t(65),r=t(66),s=t(68),c=t(67),p=t(69),m=t(0),i=t.n(m),l=t(22),u=t(78),d=t.n(u),g=t(79),f=t.n(g),h=t(80),T=t.n(h),M={text:"2 min read",minutes:1.895,time:113700,words:379},E=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).layout=null,t}return Object(p.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(a.a)(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",components:n},i.a.createElement("div",{className:T.a.Welcome},i.a.createElement("div",{className:T.a.logo},i.a.createElement("img",{src:d.a,className:T.a["logo-navi"],alt:"logo"}),i.a.createElement("img",{src:f.a,className:T.a["logo-react"],alt:"logo"})),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"how-to"}},"How to\u2026"),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To update this post,")," edit ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/pages/posts/2019-01-05-welcome/document.mdx")," and save to reload."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To update the site\u2019s title,")," edit the metadata in ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/siteMetadata.js"),"."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To your bio and photo,")," edit the Bio component in ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/Bio.js"),"."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To change the site\u2019s colors,")," edit the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},":root")," block in ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/index.module.css"),"."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To create a new post,")," add a new directory to ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/pages/posts")," that is prefixed with the new post\u2019s publication date, then create a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"post.js")," file inside it:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`Learn How To Build This Blog From Scratch`</span></span><span class="token punctuation">,</span>\n  tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'navi\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  spoiler<span class="token punctuation">:</span> <span class="token string">"An online course with loads of live demos and exercises."</span><span class="token punctuation">,</span>\n  getContent<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./document.mdx\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To set the maximum number of posts on an index page,"),", set the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"indexPageSize")," property of the object exported by ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/siteMetadata.js"),"."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To modify the generated HTML,")," update the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/renderPageToString.js")," file."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To add non-blog pages,")," just use ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://frontarm.com/navi/reference/declarations/#createpage"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Navi.createPage()")),", ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://frontarm.com/navi/reference/declarations/#createswitch"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Navi.createSwitch()"))," and ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://frontarm.com/navi/reference/declarations/#createredirect"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Navi.createRedirect()")),". For an example, check the about page at ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/pages/about/index.js"),". If you create a page, remember to add it to the root switch at ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/pages/index.js"),"."),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"To brush up on React\u2019s fundamentals,")," check out the ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://frontarm.com/courses/learn-raw-react/"}},"React (without the buzzwords)")," and ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://frontarm.com/courses/async-javascript/"}},"Asynchronous JavaScript")," courses."),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"the-lowdown"}},"The lowdown"),i.a.createElement(l.MDXTag,{name:"p",components:n},"This template is designed with a JAMstack architecture. This means that the blog is statically rendered for the fastest possible load time, but once loaded, it turns into a single page app\u200a\u2014\u200aensuring navigation is silky smooth."),i.a.createElement(l.MDXTag,{name:"p",components:n},"It follows a convention-over-configuation philosophy. It should work out of the box with minimal effort for most people\u2019s needs, but can also be configured where required."),i.a.createElement(l.MDXTag,{name:"p",components:n},"Finally, an effort has been made to prefer explicit code over concise code, and simplicity over complexity. Magic is avoided wherever possible, even if this means more code is required for the desired result."),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"the-tools"}},"The tools"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://reactjs.org"}},"React")," renders the UI"),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://mdxjs.com"}},"MDX")," converts markdown into React components"),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://frontarm.com/navi/"}},"Navi")," handles routing and creates static HTML files for each route"),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://reactjs.org/docs/create-a-new-react-app.html"}},"create-react-app")," builds the app\u2019s assets and provides the dev server"))))}}]),n}(i.a.Component),b=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"how-to",level:2,title:"How to\u2026",children:[]},{id:"the-lowdown",level:2,title:"The lowdown",children:[]},{id:"the-tools",level:2,title:"The tools",children:[]}]},y={}},78:function(e,n,t){e.exports=t.p+"static/media/navi-logo.0f2f9d7f.svg"},79:function(e,n,t){e.exports=t.p+"static/media/react-logo.5d5d9eef.svg"},80:function(e,n,t){e.exports={logo:"document_logo__23Tly","logo-navi":"document_logo-navi__22Qxx","logo-react":"document_logo-react__N8k6i","Index-logo-navi-spin":"document_Index-logo-navi-spin__y0bXE","Index-logo-react-spin":"document_Index-logo-react-spin__3rhba"}}}]);
//# sourceMappingURL=5.bec1ba33.chunk.js.map