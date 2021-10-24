(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=a(14),s=a(5),l=a(6),u=a(8),h=a(7),g=a(12),d=(a(30),a(9),a(24)),m=a.n(d),p=(a(51),a(15)),b=a(1),j=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,o=e.openModalImage;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:t,alt:n,largeImageURL:a,onClick:function(){return o({largeImageURL:a})},className:"ImageGalleryItem-image"})})},f=function(e){var t=e.pictures,a=e.openModalImage;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.createElement)(j,Object(p.a)(Object(p.a)({},e),{},{key:e.id,openModalImage:a}))}))})},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.onInputChange=function(t){e.setState({query:t.target.value.toLowerCase()})},e.onSubmitForm=function(t){if(t.preventDefault(),""===e.state.query.trim())return g.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e!");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitForm,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{value:this.state.query,onChange:this.onInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=y,v=function(e){var t=e.getPictureFetch;return Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})},w=document.getElementById("modal--root"),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u043d\u0430\u0436\u0430\u043b\u0438 ESC"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),w)}}]),a}(n.Component),x=S,I=a(25),k=a.n(I),C=function(e){var t=e.query,a=e.page;return k.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"page=").concat(a,"&key=").concat("22984759-30de173458e69cd83eb69d4b0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",page:1,pictures:[],error:"",largeImageURL:"",tags:"",showModal:!1,isLoading:!1},e.getPictureFetch=function(){var t=e.state,a=t.query,n=t.page;e.setState({isLoading:!0}),C({query:a,page:n}).then((function(t){e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(t)),page:e.page+1}}))})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.handleFormSubmit=function(t){e.setState({query:t,page:1,pictures:[]})},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModalImage=function(t){var a=t.largeImageURL,n=t.tags;e.setState({largeImageURL:a,tags:n}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getPictureFetch(),1!==this.state.page&&t.page!==this.state.page&&this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.showModal,n=e.largeImageURL,o=e.tags,r=e.isLoading;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(f,{pictures:t,openModalImage:this.openModalImage}),r?Object(b.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}):1!==this.state.page&&Object(b.jsx)(v,{onLoadMore:this.getPictureFetch}),a&&Object(b.jsx)(x,{onClose:this.toggleModal,children:Object(b.jsx)("img",{src:n,alt:o})}),Object(b.jsx)(g.a,{autoClose:3e3})]})}}]),a}(n.Component),L=F;c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.ea1b92ac.chunk.js.map