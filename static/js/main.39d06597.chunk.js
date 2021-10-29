(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=a(14),s=a(5),l=a(6),u=a(8),g=a(7),h=a(11),d=(a(30),a(13),a(23)),m=a.n(d),p=(a(51),a(25)),b=a(1),j=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,o=e.openModalImage;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:t,alt:n,largeImageURL:a,onClick:function(){return o({largeImageURL:a})},className:"ImageGalleryItem-image"})})},f=function(e){var t=e.images,a=e.openModalImage;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.jsx)(j,Object(p.a)({openModalImage:a},e),e.id)}))})},y=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.onInputChange=function(t){e.setState({query:t.target.value.toLowerCase()})},e.onSubmitForm=function(t){if(t.preventDefault(),""===e.state.query.trim())return h.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e!");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitForm,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{value:this.state.query,onChange:this.onInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=y,v=function(e){var t=e.onLoadMore;return Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})},w=document.getElementById("modal--root"),x=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u043d\u0430\u0436\u0430\u043b\u0438 ESC"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),w)}}]),a}(n.Component),S=x,I=a(24),L=a.n(I),M=function(e){var t=e.query,a=void 0===t?"":t,n=e.page,o=void 0===n?1:n;return L.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(o,"&key=").concat("22984759-30de173458e69cd83eb69d4b0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},k=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",page:1,images:[],error:"",largeImageURL:"",tags:"",showModal:!1,isLoading:!1},e.getPictureFetch=function(){var t=e.state,a=t.query,n=t.page;e.setState({isLoading:!0}),M({query:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.handleFormSubmit=function(t){e.setState({query:t,page:1,images:[]})},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModalImage=function(t){var a=t.largeImageURL,n=t.tags;e.setState({largeImageURL:a,tags:n}),e.toggleModal()},e.onLoadMore=function(){e.getPictureFetch()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getPictureFetch(),1!==this.state.page&&t.page!==this.state.page&&this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.page,a=e.images,n=e.showModal,o=e.largeImageURL,r=e.tags,c=e.isLoading,i=1!==t&&a.length>0&&a.length>=12;return Object(b.jsxs)("div",{className:"Wrapper",children:[Object(b.jsx)(O,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(f,{images:a,openModalImage:this.openModalImage}),c&&Object(b.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}),n&&Object(b.jsx)(S,{onClose:this.toggleModal,children:Object(b.jsx)("img",{src:o,alt:r})}),i&&Object(b.jsx)(v,{onLoadMore:this.onLoadMore}),Object(b.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component),C=k;c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.39d06597.chunk.js.map