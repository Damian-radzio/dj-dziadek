(function(){"use strict";var e={196:function(e,t,n){var i=n(963),a=n(252),o=n(577);const s={class:"children"},r={id:"footer"};function l(e,t,n,l,c,d){const u=(0,a.up)("Menu"),m=(0,a.up)("router-view"),p=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{id:"menu",class:(0,o.C_)({showNavbar:this.showNavbar,hideNavbar:!this.showNavbar})},[(0,a.Wm)(u,{showNavbar:this.showNavbar},null,8,["showNavbar"])],2),(0,a._)("div",s,[(0,a.Wm)(m,null,{default:(0,a.w5)((({Component:e})=>[(0,a.Wm)(i.uT,{name:"route",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))])),_:2},1024)])),_:1})]),(0,a._)("div",r,[(0,a.Wm)(p)])],64)}var c=n.p+"img/instagram.c2d6fbdd.png";const d={class:"header-container"},u={class:"icon-wrapper"},m=["src"],p={key:0},h=(0,a.Uk)("Start"),w=(0,a.Uk)("O mnie"),v=(0,a.Uk)("Galeria"),f=(0,a.Uk)("Opinie"),g=(0,a.Uk)("Kontakt"),_=["src","click"],k=["src","click"],b={class:"social-container"},z=(0,a._)("div",{class:"social-tile"},[(0,a._)("a",{href:"https://www.instagram.com/_djdziadek_/"},[(0,a._)("img",{src:c})])],-1),y={class:"social-tile"},j={href:"https://www.facebook.com/Dj-wodzirej-S%C5%82awomir-Dziadek-106330881397763/"},M=["src"],O=(0,a.Uk)("Start"),D=(0,a.Uk)("O mnie"),S=(0,a.Uk)("Galeria"),C=(0,a.Uk)("Opinie"),E=(0,a.Uk)("Kontakt");function W(e,t,n,i,s,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",d,[(0,a._)("div",u,[(0,a._)("img",{src:i.DjDziadekIcon,alt:"logo"},null,8,m)]),this.width>=768?((0,a.wg)(),(0,a.iD)("nav",p,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/"},{default:(0,a.w5)((()=>[h])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/about"},{default:(0,a.w5)((()=>[w])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/gallery"},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/reviews"},{default:(0,a.w5)((()=>[f])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/contact"},{default:(0,a.w5)((()=>[g])),_:1})])])])):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"hamburger-wrapper",onClick:t[0]||(t[0]=(...e)=>r.openMobileMenu&&r.openMobileMenu(...e))},[this.isMobileMenuOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("img",{key:0,src:i.HamburgerBtn,click:this.menuMobileOpen=!0},null,8,_)),this.isMobileMenuOpen?((0,a.wg)(),(0,a.iD)("img",{key:1,src:i.OpenedHamburgerBtn,click:this.menuMobileOpen=!1},null,8,k)):(0,a.kq)("",!0)])),this.isMobileMenuOpen&&this.width<=768?((0,a.wg)(),(0,a.iD)("div",{key:2,class:(0,o.C_)(["mobile-menu",e.showMobileMenu=this.menuMobileOpen])},[(0,a._)("section",b,[z,(0,a._)("div",y,[(0,a._)("a",j,[(0,a._)("img",{src:i.Facebook},null,8,M)])])]),(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/",onClick:t[1]||(t[1]=e=>this.isMobileMenuOpen=!1)},{default:(0,a.w5)((()=>[O])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/about",onClick:t[2]||(t[2]=e=>r.methodsAfterMenuElementClick())},{default:(0,a.w5)((()=>[D])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/gallery",onClick:t[3]||(t[3]=e=>r.methodsAfterMenuElementClick())},{default:(0,a.w5)((()=>[S])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/reviews",onClick:t[4]||(t[4]=e=>r.methodsAfterMenuElementClick())},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{"class-active":"active",to:"/contact",onClick:t[5]||(t[5]=e=>r.methodsAfterMenuElementClick())},{default:(0,a.w5)((()=>[E])),_:1})])])])],2)):(0,a.kq)("",!0)])}var T=n.p+"img/dj-dziadek-logo.d278cd21.svg",P=n.p+"img/hamburger.14ef2fe4.svg",x=n.p+"img/opened-menu-hamburger.af0646b1.svg",N=n.p+"img/facebook.d36b3cca.svg",F={name:"Menu-component",setup(){return{DjDziadekIcon:T,HamburgerBtn:P,OpenedHamburgerBtn:x,Facebook:N}},props:["showNavbar"],data(){return{width:window.innerWidth,height:window.innerHeight,isMobileMenuOpen:!1,isOpen:!1}},created(){window.addEventListener("resize",this.onResize),window.addEventListener("scroll",this.onScroll)},unmounted(){window.removeEventListener("resize",this.onResize)},methods:{onResize(){this.width=window.innerWidth,this.height=window.innerHeight},openMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen},scrollToTop(){window.scrollTo(0,0)},methodsAfterMenuElementClick(){this.isMobileMenuOpen=!1,this.scrollToTop()},onScroll(){this.isMobileMenuOpen&&this.isOpen,this.showNavbar||(this.isMobileMenuOpen=!1)}}},L=n(744);const U=(0,L.Z)(F,[["render",W]]);var R=U;const H={class:"social-container"},q=(0,a._)("div",{class:"social-tile"},[(0,a._)("a",{href:"https://www.instagram.com/_djdziadek_/"},[(0,a._)("h2",null,"Instagram"),(0,a._)("img",{src:c})])],-1),I={class:"social-tile"},A={href:"https://www.facebook.com/Dj-wodzirej-S%C5%82awomir-Dziadek-106330881397763/"},Z=(0,a._)("h2",null,"Facebook",-1),K=["src"],B={class:"contact"},Y={class:"contact-data-container"},G=(0,a._)("h2",null,"Kontakt",-1),J=(0,a._)("p",null,[(0,a._)("a",{href:"tel:514-209-538"},"(+48) 514 209 538")],-1),Q={key:0},V=(0,a._)("a",{href:"mailto:slawekdjdziadek@gmail.com"},"slawekdjdziadek@gmail.com",-1),X=[V],$=(0,a.Uk)("formularz kontaktowy"),ee={key:1},te=(0,a._)("a",{href:"mailto:slawekdjdziadek@gmail.com"},"slawekdjdziadek@gmail.com ",-1),ne=[te];function ie(e,t,n,i,o,s){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",null,[(0,a._)("section",H,[q,(0,a._)("div",I,[(0,a._)("a",A,[Z,(0,a._)("img",{src:i.Facebook},null,8,K)])])]),(0,a._)("section",B,[(0,a._)("div",Y,[G,J,this.width>=1024?((0,a.wg)(),(0,a.iD)("p",Q,X)):(0,a.kq)("",!0),(0,a.Wm)(r,{to:"/contact",onClick:t[0]||(t[0]=e=>s.scrollToTop())},{default:(0,a.w5)((()=>[$])),_:1}),this.width<=1024?((0,a.wg)(),(0,a.iD)("p",ee,ne)):(0,a.kq)("",!0)])])])}var ae={name:"Footer-component",setup(){return{Facebook:N}},data(){return{width:window.innerWidth,height:window.innerHeight}},created(){window.addEventListener("resize",this.onResize)},unmounted(){window.removeEventListener("resize",this.onResize)},methods:{onResize(){this.width=window.innerWidth,this.height=window.innerHeight},scrollToTop(){window.scrollTo(0,1200)}}};const oe=(0,L.Z)(ae,[["render",ie]]);var se=oe,re={name:"App",components:{Menu:R,Footer:se},data(){return{showNavbar:!0,lastScrollPosition:0}},created(){window.addEventListener("resize",this.onResize)},mounted(){window.addEventListener("scroll",this.onScroll)},unmounted(){window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;e<0||Math.abs(e-this.lastScrollPosition)<60||(this.showNavbar=e<this.lastScrollPosition,this.lastScrollPosition=e)}}};const le=(0,L.Z)(re,[["render",l]]);var ce=le,de=n(201);const ue={class:"home"},me=(0,a._)("h1",{class:"h1"},[(0,a._)("span",{class:"first"}," Najlepszy DJ "),(0,a.Uk)(" na Twoją imprezę! "),(0,a._)("span",null,"DJ Dziadek")],-1),pe=(0,a._)("div",{class:"hero-image"},null,-1),he=[me,pe];function we(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("section",ue,he)}var ve={name:"Home-section"};const fe=(0,L.Z)(ve,[["render",we]]);var ge=fe,_e=n.p+"img/SlawekD.b66af06c.png",ke=n.p+"img/DamianR.130b01c8.png",be=n.p+"img/MartynaS.d94a1969.png",ze=n.p+"img/MarlenaK.f91d34bf.png";const ye={class:"about"},je={class:"about-general"},Me=(0,a._)("h2",null,"Cześć, jestem Sławek!",-1),Oe=(0,a._)("div",{class:"about-me-image"},null,-1),De=(0,a.uE)('<section class="announcers-wrapper"><h2>Imprezę obsługuje Dj Dziadek i jego konferansjer.</h2><div class="announcers"><div><div class="img-wrapper"><img src="'+_e+'" alt="Zdięcia wodzireja"><p class="name">Wodzirej<span>Sławomir Dziadek</span></p></div></div><div><div class="img-wrapper"><img src="'+ke+'" alt="zdięcie konferansjera"><p class="name">Konferansjer<span>Damian Radecki</span></p></div></div></div></section><section class="announcers-wrapper coworkers-wrapper"><h2>Współpracuję z:</h2><div class="announcers coworkers"><div><div class="img-wrapper"><img src="'+be+'" alt="zdięcie fotografa"><p class="name">Fotograf<span>Martyna Skrond</span></p></div></div><div><div class="img-wrapper"><img src="'+ze+'" alt="zdięcie skrzypaczki"><p class="name">Skrzypaczka<span>Marlena Król</span></p></div></div></div></section>',2);function Se(e,t,n,i,s,r){return(0,a.wg)(),(0,a.iD)("div",ye,[(0,a._)("section",je,[(0,a._)("div",{class:(0,o.C_)(["text",{active:this.mounted}])},[Me,(0,a._)("p",null," Od lat dokładam wszelkich starań, by każda poprowadzona przeze mnie impreza stała się najlepszym wspomnieniem moich klientów. Konsola od zawsze była moim hobby, dlatego mimo pracy na etacie postanowiłem podążać za marzeniami i spełniać się w tym co kocham. Tym sposobem, jestem częścią tej branży od "+(0,o.zw)(this.getExperienceDate())+" lat i nie zamierzam zwalniać a przeciwnie, dopiero nabieram rozpędu. ",1)],2),Oe]),De])}var Ce={name:"About-section",mounted(){this.mounted=!0},data(){return{mounted:!1}},methods:{getExperienceDate(){const e=new Date,t=e.getFullYear();return t-2014}}};const Ee=(0,L.Z)(Ce,[["render",Se]]);var We=Ee;const Te={class:"images-wrapper"},Pe={class:"social-container"},xe=(0,a._)("div",{class:"text"},[(0,a._)("p",null,"Fotograf")],-1),Ne=(0,a._)("a",{href:"instagram.com/photo_martynek/"},[(0,a._)("img",{src:c})],-1),Fe={href:"https://www.facebook.com/Fotografia-Skrond-Martyna-103140005265426"},Le=["src"],Ue=["href"],Re=["src"];function He(e,t,n,i,s,r){return(0,a.wg)(),(0,a.iD)("ul",Te,[(0,a._)("div",{class:(0,o.C_)(["photograph-link",{hiddenNavbar:!this.showNavbar}])},[(0,a._)("div",Pe,[xe,Ne,(0,a._)("a",Fe,[(0,a._)("img",{src:i.Facebook},null,8,Le)])])],2),(0,a._)("div",{class:(0,o.C_)(["images-wrapper",{lessFromTop:!this.showNavbar}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.images,(e=>((0,a.wg)(),(0,a.iD)("a",{class:"image-wrapper",key:e,href:e.responsiveImage.src,"data-lightbox":"roadtrip"},[(0,a._)("img",{class:"img",src:e.responsiveImage.src,"aspect-ratio":"1 ",alt:"img",lazy:"true"},null,8,Re)],8,Ue)))),128))],2)])}var qe=n(669),Ie=n.n(qe),Ae=n.p+"img/facebook-small.2df24e9e.svg",Ze={name:"Gallery-section",setup(){return{Facebook:Ae}},data(){return{images:[],showNavbar:!0,lastScrollPosition:0}},mounted(){window.addEventListener("scroll",this.onScroll);const e=document.createElement("script");e.setAttribute("src","lightbox/lightbox-plus-jquery.min.js"),document.head.appendChild(e)},unmounted(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;e<0||Math.abs(e-this.lastScrollPosition)<60||(this.showNavbar=e<this.lastScrollPosition,this.lastScrollPosition=e)},getPhotos(){Ie().post("https://graphql.datocms.com/",{query:"\n        {\n      allUploads(first: 100) {\n    responsiveImage {\n      src\n    }\n  }\n        }"},{headers:{authorization:"Bearer: ebd56168c699113d9671ac9266db48 "}}).then((e=>this.images=e.data.data.allUploads)).catch((e=>e))}},created(){this.getPhotos(),window.addEventListener("resize",this.onResize)}};const Ke=(0,L.Z)(Ze,[["render",He]]);var Be=Ke;const Ye={id:"reviews-wrapper",class:"elfsight-app-de030aa4-f700-428f-9012-7bfadbd38fe1",async:""};function Ge(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("div",Ye)}var Je={name:"Reviews-section",data(){return{isLoading:!1,fullPage:!0}},mounted(){const e=document.createElement("script");e.setAttribute("src","https://apps.elfsight.com/p/platform.js"),document.head.appendChild(e)},methods:{removeLoader(){return this.isLoading=!1}}};const Qe=(0,L.Z)(Je,[["render",Ge]]);var Ve=Qe;const Xe={class:"wrapper"},$e=(0,a._)("header",{class:"section-header-text"},[(0,a._)("h2",null,"Cieszę się że tu zajrzałeś."),(0,a._)("p",null," Oznacza to że rozważasz skontaktowanie się ze mną w sprawie twojego przyjęcia, a ja wychodzę na przeciw aby Ci to ułatwić. Poniżej znajduje się formularz kontaktowy, który odpowiednio wypełniony zostanie do mnie bezpośrednio wysłany, a ja szybko będę mógł na niego odpowiedzieć. Jeśli jednak masz do mnie więcej pytań, skontaktuj się ze mną bezpośrednio. ")],-1),et=(0,a._)("section",{class:"contact-form-wrapper"},[(0,a._)("h2",null,"Formularz kontaktowy"),(0,a._)("form",{action:"https://formsubmit.co/slawekdjdziadek@gmail.com",method:"POST",class:"contact-form"},[(0,a._)("input",{type:"hidden",name:"_template",value:"table",id:"formularz"}),(0,a._)("input",{type:"hidden",name:"_next",value:"http://localhost:3000/contact/sent"}),(0,a._)("input",{type:"hidden",name:"_autoresponse",value:"Otrzymałem twoją wiadomość, dziękuję!"}),(0,a._)("input",{type:"hidden",name:"_subject",value:"Nowa wiadomość, ze strony djdziadek!"}),(0,a._)("input",{type:"hidden",name:"_captcha",value:"false"}),(0,a._)("form",{action:"https://formsubmit.co/email",method:"POST"}),(0,a._)("input",{type:"text",class:"input",name:"imie_nazwisko",placeholder:"Imię i nazwisko *",required:""}),(0,a._)("input",{type:"email",class:"input",name:"email",placeholder:"Email *",required:""}),(0,a._)("input",{name:"numer_tel",class:"input",type:"text",placeholder:"Telefon *",required:""}),(0,a._)("input",{name:"lokalizacja_imprezy",class:"input place",type:"text",placeholder:"Miejscowość"}),(0,a._)("label",{for:"temin-imprezy",class:"label date"},"Wybierz termin imprezy"),(0,a._)("input",{name:"termin-imprezy",class:"input",type:"date"}),(0,a._)("textarea",{name:"wiadomosc",class:"message input",type:"text",placeholder:"Wiadomość (opcjonalnie)"}),(0,a._)("input",{class:"submit",type:"submit",value:"Wyślij"})])],-1),tt=[$e,et];function nt(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("div",Xe,tt)}var it={name:"Contact-section",data(){return{inputsData:{name:"",email:"",phone:"",location:"",eventDate:"",message:"",reference:""}}}};const at=(0,L.Z)(it,[["render",nt]]);var ot=at;const st={class:"sent-info-wrapper"},rt={class:"close-icon"},lt=(0,a._)("h2",null,[(0,a.Uk)(" Twoja wiadomość została wysłana! "),(0,a._)("span",null,"W najbliszym czasie oczekuj odpowiedzi na swoim e-mailu.")],-1);function ct(e,t,n,i,o,s){const r=(0,a.up)("CloseIcon"),l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",st,[(0,a.Wm)(l,{to:"/contact"},{default:(0,a.w5)((()=>[(0,a._)("div",rt,[(0,a.Wm)(r)])])),_:1}),lt])}var dt=n.p+"img/close-icon-x.e40623e0.svg",ut=n.t(dt),mt={name:"SentInfo",components:{CloseIcon:ut}};const pt=(0,L.Z)(mt,[["render",ct]]);var ht=pt;const wt=[{path:"/",name:"Home",component:ge},{path:"/about",name:"About",component:We},{path:"/gallery",name:"Gallery",component:Be},{path:"/reviews",name:"Reviews",component:Ve},{path:"/contact",name:"Contact",component:ot,children:[{path:"sent",component:ht}]}],vt=(0,de.p7)({history:(0,de.PO)(),routes:wt});var ft=vt;(0,i.ri)(ce).use(ft).mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],o=e[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,a){if(1&a&&(i=this(i)),8&a)return i;if("object"===typeof i&&i){if(4&a&&i.__esModule)return i;if(16&a&&"function"===typeof i.then)return i}var o=Object.create(null);n.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&i;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){s[e]=function(){return i[e]}}));return s["default"]=function(){return i},n.d(o,s),o}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/dj-dziadek/dj-dziadek-ui/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var d=l(n)}for(t&&t(i);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunkdj_dziadek_ui"]=self["webpackChunkdj_dziadek_ui"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(196)}));i=n.O(i)})();
//# sourceMappingURL=app.44374fcd.js.map