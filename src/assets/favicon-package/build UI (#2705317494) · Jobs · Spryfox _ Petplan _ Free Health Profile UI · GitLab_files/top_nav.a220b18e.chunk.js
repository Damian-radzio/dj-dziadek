(this.webpackJsonp=this.webpackJsonp||[]).push([[894],{DwQZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("uHfJ"),n("R0RX"),n("h8Et");var r=n("Cf2W"),s=n.n(r),a=n("BYh8");function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"<b>",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"</b>";if(!e)return"";if(!t)return e;const i=Object(a.a)(e.toString(),{ALLOWED_TAGS:[]}),o=s.a.match(i,t.toString());return i.split("").map((function(e,t){return o.includes(t)?`${n}${e}${r}`:e})).join("")}},EqYD:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"h",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"g",(function(){return f}));n("WmlO"),n("3R5X"),n("W9Nl");var r=n("t9l/"),s=n("mpzd");const a="minute",i="hour",o="day",c="120000",u="d mmm, yyyy",l="yyyy-mm-dd",d=[u,l],m=[{label:Object(r.a)("30 minutes"),duration:{seconds:1800},name:"thirtyMinutes",interval:a},{label:Object(r.a)("3 hours"),duration:{seconds:10800},name:"threeHours",interval:i},{label:Object(r.a)("8 hours"),duration:{seconds:28800},name:"eightHours",default:!0,interval:i},{label:Object(r.a)("1 day"),duration:{seconds:86400},name:"oneDay",interval:i},{label:Object(r.a)("3 days"),duration:{seconds:259200},name:"threeDays",interval:i},{label:Object(r.a)("7 days"),duration:{seconds:604800},name:"oneWeek",interval:o},{label:Object(r.a)("30 days"),duration:{seconds:2592e3},name:"oneMonth",interval:o}],p=m.find((function(e){return e.default})),h="circle",v="rect",f=function(e,t){return Object(r.h)(Object(r.a)("Only %{workspaceType} members with %{permissions} can view or be notified about this %{issuableType}."),{workspaceType:e===s.e.project?Object(r.a)("project"):Object(r.a)("group"),issuableType:t===s.c.Issue?Object(r.a)("issue"):Object(r.a)("epic"),permissions:t===s.c.Issue?Object(r.a)("at least the Reporter role, the author, and assignees"):Object(r.a)("at least the Reporter role")})}},OWFf:function(e,t,n){"use strict";n.r(t),n.d(t,"mountTopNav",(function(){return Xe})),n.d(t,"mountTopNavResponsive",(function(){return Ye}));var r={};n.r(r),n.d(r,"setNamespace",(function(){return Ne})),n.d(r,"setStorageKey",(function(){return $e})),n.d(r,"requestFrequentItems",(function(){return Le})),n.d(r,"receiveFrequentItemsSuccess",(function(){return Ae})),n.d(r,"receiveFrequentItemsError",(function(){return ke})),n.d(r,"fetchFrequentItems",(function(){return De})),n.d(r,"requestSearchedItems",(function(){return Fe})),n.d(r,"receiveSearchedItemsSuccess",(function(){return Ue})),n.d(r,"receiveSearchedItemsError",(function(){return Qe})),n.d(r,"fetchSearchedItems",(function(){return Ge})),n.d(r,"setSearchQuery",(function(){return Pe}));var s={};n.r(s),n.d(s,"hasSearchQuery",(function(){return He}));var a=n("q+nE"),i=n("CkNe"),o=n("qFo7"),c=n("/LsX"),u={props:{slotKey:{type:String,required:!1,default:""}},data:()=>({aliveSlotsLookup:{}}),computed:{aliveSlots(){return Object.keys(this.aliveSlotsLookup)}},watch:{slotKey:{handler(e){e&&this.$set(this.aliveSlotsLookup,e,!0)},immediate:!0}},methods:{isCurrentSlot(e){return e===this.slotKey}}},l=n("bPvS"),d=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.aliveSlots,(function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isCurrentSlot(t),expression:"isCurrentSlot(slot)"}],key:t,staticClass:"gl-h-full gl-w-full"},[e._t(t)],2)})),0)}),[],!1,null,null,null).exports;n("uHfJ"),n("R0RX");const m=function(e){return null==e?void 0:e.map((function(e){return{...e,active:!1}}))};var p=n("ly/8"),h=n("APtt"),v=n.n(h),f=n("SNO9"),g=n.n(f),y=n("cuRJ"),_=n("H8gz");var E={components:{GlButton:y.a,GlIcon:_.a},props:{menuItem:{type:Object,required:!0},iconOnly:{type:Boolean,required:!1,default:!1}},computed:{dataAttrs(){return v()(this.menuItem.data||{},(function(e,t){return function(e){return`data-${g()(e)}`}(t)}))}},ACTIVE_CLASS:"gl-shadow-none! gl-font-weight-bold! active"},S=Object(l.a)(E,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("gl-button",t._g(t._b({staticClass:"top-nav-menu-item gl-display-block gl-pr-3!",class:[t.menuItem.css_class,(e={},e[t.$options.ACTIVE_CLASS]=t.menuItem.active,e)],attrs:{category:"tertiary",href:t.menuItem.href,"aria-label":t.menuItem.title}},"gl-button",t.dataAttrs,!1),t.$listeners),[r("span",{staticClass:"gl-display-flex"},[t.menuItem.icon?r("gl-icon",{class:{"gl-mr-3!":!t.iconOnly},attrs:{name:t.menuItem.icon}}):t._e(),t._v(" "),t.iconOnly?t._e():[t._v("\n      "+t._s(t.menuItem.title)+"\n      "),t.menuItem.view?r("gl-icon",{staticClass:"gl-ml-auto",attrs:{name:"chevron-right"}}):t._e()]],2)])}),[],!1,null,null,null).exports,w={components:{TopNavMenuItem:S},directives:{GlTooltip:p.a},computed:{menuItem:()=>({id:"home",view:"home",icon:"chevron-lg-left"})}},b=Object(l.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"gl-py-4 gl-display-flex gl-align-items-center"},[n("top-nav-menu-item",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:e.s__("TopNav|Go back")},expression:"{ title: s__('TopNav|Go back') }"}],staticClass:"gl-p-3!",attrs:{"menu-item":e.menuItem,"icon-only":""},on:{click:function(t){return e.$emit("menu-item-click",e.menuItem)}}}),e._v(" "),n("span",{staticClass:"gl-font-size-h2 gl-font-weight-bold gl-ml-2"},[e._t("default")],2)],1)}),[],!1,null,null,null).exports;n("ujLG"),n("3R5X"),n("HaUQ");const I="gl-pt-3 gl-border-1 gl-border-t-solid gl-border-gray-50";var O={components:{TopNavMenuItem:S},props:{sections:{type:Array,required:!0},withTopBorder:{type:Boolean,required:!1,default:!1}},methods:{onClick(e){e.href||this.$emit("menu-item-click",e)},getMenuSectionClasses(e){return{[I]:this.withTopBorder||e>0,"gl-mt-3":e>0}}},BORDER_CLASSES:I},T=Object(l.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gl-display-flex gl-align-items-stretch gl-flex-direction-column"},e._l(e.sections,(function(t,r){var s=t.id,a=t.menuItems;return n("div",{key:s,class:e.getMenuSectionClasses(r),attrs:{"data-testid":"menu-section"}},e._l(a,(function(t,r){return n("top-nav-menu-item",{key:t.id,staticClass:"gl-w-full",class:{"gl-mt-1":r>0},attrs:{"menu-item":t,"data-testid":"menu-item"},on:{click:function(n){return e.onClick(t)}}})})),1)})),0)}),[],!1,null,null,null).exports,j=n("OkMp"),M=n("OqKX"),q=n("0X+3"),C=n("Gr03"),x={components:{GlDropdown:j.a,GlDropdownDivider:M.a,GlDropdownItem:q.a,GlDropdownSectionHeader:C.a},props:{viewModel:{type:Object,required:!0}},computed:{sections(){return this.viewModel.menu_sections||[]},showHeaders(){return this.sections.length>1}}},R=Object(l.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gl-dropdown",{attrs:{"toggle-class":"top-nav-menu-item",icon:"plus",text:e.viewModel.title,category:"tertiary","text-sr-only":"","no-caret":"",right:""}},[e._l(e.sections,(function(t,r){var s=t.title,a=t.menu_items;return[r>0?n("gl-dropdown-divider",{key:r+"_divider",attrs:{"data-testid":"divider"}}):e._e(),e._v(" "),e.showHeaders?n("gl-dropdown-section-header",{key:r+"_header",attrs:{"data-testid":"header"}},[e._v("\n      "+e._s(s)+"\n    ")]):e._e(),e._v(" "),e._l(a,(function(t){return[n("gl-dropdown-item",{key:r+"_item_"+t.id,attrs:{"link-class":"top-nav-menu-item",href:t.href,"data-testid":"item","data-qa-selector":t.title.toLowerCase().replace(" ","_")+"_mobile_button"}},[e._v("\n        "+e._s(t.title)+"\n      ")])]}))]}))],2)}),[],!1,null,null,null).exports;var N={components:{TopNavMenuItem:S,TopNavMenuSections:T,TopNavNewDropdown:R},directives:{GlTooltip:p.a},props:{navData:{type:Object,required:!0}},computed:{menuSections(){return[{id:"primary",menuItems:this.navData.primary},{id:"secondary",menuItems:this.navData.secondary}].filter((function(e){var t;return null===(t=e.menuItems)||void 0===t?void 0:t.length}))},newDropdownViewModel(){return this.navData.views.new},searchMenuItem(){return this.navData.views.search}}},$=Object(l.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",{staticClass:"gl-display-flex gl-align-items-center gl-py-4 gl-pl-4"},[n("h1",{staticClass:"gl-m-0 gl-font-size-h2 gl-reset-color gl-mr-auto"},[e._v(e._s(e.__("Menu")))]),e._v(" "),e.searchMenuItem?n("top-nav-menu-item",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:e.searchMenuItem.title},expression:"{ title: searchMenuItem.title }"}],staticClass:"gl-ml-3",attrs:{"menu-item":e.searchMenuItem,"icon-only":""}}):e._e(),e._v(" "),e.newDropdownViewModel?n("top-nav-new-dropdown",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:e.newDropdownViewModel.title},expression:"{ title: newDropdownViewModel.title }"}],staticClass:"gl-ml-3",attrs:{"view-model":e.newDropdownViewModel,"data-qa-selector":"mobile_new_dropdown"}}):e._e()],1),e._v(" "),n("top-nav-menu-sections",e._g({staticClass:"gl-h-full",attrs:{sections:e.menuSections}},e.$listeners))],1)}),[],!1,null,null,null).exports,L=n("zLBL"),A=n("xqp2"),k=n("SEpv"),D=n.n(k),F=n("USFb"),U=n.n(F);n("0no1"),n("gdbl"),n("g+EE");const Q="`vuex_module_mappers` can only be used with an array of strings, or an object with string values. Consider using the regular `vuex` map helpers instead.",G=function(e){return Array.isArray(e)?e.reduce((function(e,t){return Object.assign(e,{[t]:t})}),{}):e},P=function(){let{namespaceSelector:e,fields:t,vuexHelper:n,selector:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=U()(G(t),(function(t){if(!D()(t))throw new Error(Q);return function(){const n=e(this);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return r(n,t,...a)}}));return n(s)},H=function(e,t){return P({namespaceSelector:e,fields:t,vuexHelper:i.f,selector:function(e,t,n){return n[e][t]}})},V=function(e,t){return P({namespaceSelector:e,fields:t,vuexHelper:i.c,selector:function(e,t,n){for(var r=arguments.length,s=new Array(r>3?r-3:0),a=3;a<r;a++)s[a-3]=arguments[a];return n(`${e}/${t}`,...s)}})};var B=n("SYh6"),J=Object(B.a)(),z=n("kJBk"),K=n("WCLl"),X=n.n(K),Y=n("9LGn"),W=n("DwQZ"),Z=n("vRHk"),ee=n("mWeI"),te=n("Xgvv");const ne=ee.a.mixin();var re={components:{GlButton:y.a,ProjectAvatar:te.a},directives:{SafeHtml:Y.a},mixins:[ne],inject:["vuexModule"],props:{matcher:{type:String,required:!1,default:""},itemId:{type:Number,required:!0},itemName:{type:String,required:!0},namespace:{type:String,required:!1,default:""},webUrl:{type:String,required:!0},avatarUrl:{required:!0,validator:e=>null===e||"string"==typeof e}},computed:{...H((function(e){return e.vuexModule}),["dropdownType"]),truncatedNamespace(){return Object(Z.z)(this.namespace)},highlightedItemName(){return Object(W.a)(this.itemName,this.matcher)},itemTrackingLabel(){return`${this.dropdownType}_dropdown_frequent_items_list_item_${X()(this.itemName)}`}}},se=Object(l.a)(re,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"frequent-items-list-item-container"},[n("gl-button",{staticClass:"gl-text-left gl-justify-content-start!",attrs:{category:"tertiary",href:e.webUrl},on:{click:function(t){return e.track("click_link",{label:e.itemTrackingLabel})}}},[n("project-avatar",{staticClass:"gl-float-left gl-mr-3",attrs:{"project-avatar-url":e.avatarUrl,"project-name":e.itemName,"aria-hidden":"true"}}),e._v(" "),n("div",{ref:"frequentItemsItemMetadataContainer",staticClass:"frequent-items-item-metadata-container"},[n("div",{directives:[{name:"safe-html",rawName:"v-safe-html",value:e.highlightedItemName,expression:"highlightedItemName"}],ref:"frequentItemsItemTitle",staticClass:"frequent-items-item-title",attrs:{title:e.itemName}}),e._v(" "),e.namespace?n("div",{ref:"frequentItemsItemNamespace",staticClass:"frequent-items-item-namespace",attrs:{title:e.namespace}},[e._v("\n        "+e._s(e.truncatedNamespace)+"\n      ")]):e._e()])],1)],1)}),[],!1,null,null,null).exports,ae={props:{namespace:{type:String,required:!0}},methods:{getTranslations(e){var t=this;return e.reduce((function(e,n){return{...e,[n]:o.g[t.namespace][n]}}),{})}}},ie={components:{FrequentItemsListItem:se},mixins:[ae],props:{items:{type:Array,required:!0},hasSearchQuery:{type:Boolean,required:!0},isFetchFailed:{type:Boolean,required:!0},matcher:{type:String,required:!0}},computed:{translations(){return this.getTranslations(["itemListEmptyMessage","itemListErrorMessage","searchListEmptyMessage","searchListErrorMessage"])},isListEmpty(){return 0===this.items.length},listEmptyMessage(){return this.hasSearchQuery?this.isFetchFailed?this.translations.searchListErrorMessage:this.translations.searchListEmptyMessage:this.isFetchFailed?this.translations.itemListErrorMessage:this.translations.itemListEmptyMessage},sanitizedItems(){return this.items.map(z.c)}}},oe=Object(l.a)(ie,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frequent-items-list-container"},[n("ul",{ref:"frequentItemsList",staticClass:"list-unstyled"},[e.isListEmpty?n("li",{staticClass:"section-empty gl-mb-3",class:{"section-failure":e.isFetchFailed}},[e._v("\n      "+e._s(e.listEmptyMessage)+"\n    ")]):e._l(e.sanitizedItems,(function(t){return n("frequent-items-list-item",{key:t.id,attrs:{"item-id":t.id,"item-name":t.name,namespace:t.namespace,"web-url":t.webUrl,"avatar-url":t.avatarUrl,matcher:e.matcher}})}))],2)])}),[],!1,null,null,null).exports,ce=n("4pZC"),ue=n.n(ce),le=n("6HTq");const de=ee.a.mixin();var me,pe,he={components:{GlSearchBoxByType:le.a},mixins:[ae,de],inject:["vuexModule"],data:()=>({searchQuery:""}),computed:{...H((function(e){return e.vuexModule}),["dropdownType"]),translations(){return this.getTranslations(["searchInputPlaceholder"])}},watch:{searchQuery:ue()((function(){this.track("type_search_query",{label:`${this.dropdownType}_dropdown_frequent_items_search_input`}),this.setSearchQuery(this.searchQuery)}),500)},methods:{...V((function(e){return e.vuexModule}),["setSearchQuery"])}},ve={components:{FrequentItemsSearchInput:Object(l.a)(he,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-input-container"},[n("gl-search-box-by-type",{attrs:{placeholder:e.translations.searchInputPlaceholder},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1)}),[],!1,null,null,null).exports,FrequentItemsList:oe,GlLoadingIcon:L.a},mixins:[ae],inject:["vuexModule"],props:{currentUserName:{type:String,required:!0},currentItem:{type:Object,required:!0},searchClass:{type:String,required:!1,default:""}},computed:{...H((function(e){return e.vuexModule}),["searchQuery","isLoadingItems","isFetchFailed","items"]),...(me=function(e){return e.vuexModule},pe=["hasSearchQuery"],P({namespaceSelector:me,fields:pe,vuexHelper:i.f,selector:function(e,t,n,r){return r[`${e}/${t}`]}})),translations(){return this.getTranslations(["loadingMessage","header"])}},created(){const{namespace:e,currentUserName:t,currentItem:n}=this,r=`${t}/${o.f[e]}`;this.setNamespace(e),this.setStorageKey(r),n.id&&this.logItemAccess(r,n),J.$on(`${this.namespace}-dropdownOpen`,this.dropdownOpenHandler);const s=document.getElementById(`nav-${this.namespace}-dropdown`);s&&s.classList.contains("show")&&this.dropdownOpenHandler()},beforeDestroy(){J.$off(`${this.namespace}-dropdownOpen`,this.dropdownOpenHandler)},methods:{...V((function(e){return e.vuexModule}),["setNamespace","setStorageKey","fetchFrequentItems"]),dropdownOpenHandler(){(""===this.searchQuery||Object(z.b)())&&this.fetchFrequentItems()},logItemAccess(e,t){const n=Object(z.c)(t);if(!A.a.canUseLocalStorage())return!1;const r=localStorage.getItem(e),s=r?JSON.parse(r):[{...n,frequency:1}],a=s.findIndex((function(e){return e.id===n.id}));return a>-1?s[a]=Object(z.d)(s[a],n):(s.length===o.b.MAX_COUNT&&s.shift(),s.push({...n,frequency:1})),localStorage.setItem(e,JSON.stringify(s))}}},fe=Object(l.a)(ve,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gl-display-flex gl-flex-direction-column gl-flex-align-items-stretch gl-h-full"},[n("frequent-items-search-input",{class:e.searchClass,attrs:{namespace:e.namespace,"data-testid":"frequent-items-search-input"}}),e._v(" "),e.isLoadingItems?n("gl-loading-icon",{staticClass:"loading-animation prepend-top-20",attrs:{label:e.translations.loadingMessage,size:"lg","data-testid":"loading"}}):e._e(),e._v(" "),e.isLoadingItems||e.hasSearchQuery?e._e():n("div",{staticClass:"section-header",attrs:{"data-testid":"header"}},[e._v("\n    "+e._s(e.translations.header)+"\n  ")]),e._v(" "),e.isLoadingItems?e._e():n("frequent-items-list",{attrs:{items:e.items,namespace:e.namespace,"has-search-query":e.hasSearchQuery,"is-fetch-failed":e.isFetchFailed,matcher:e.searchQuery}})],1)}),[],!1,null,null,null).exports,ge={provide(){return{vuexModule:this.$options.propsData.vuexModule}},props:{vuexModule:{type:String,required:!0}},render(){return this.$slots.default}},ye={components:{FrequentItemsApp:fe,TopNavMenuSections:T,VuexModuleProvider:Object(l.a)(ge,void 0,void 0,!1,null,null,null).exports},inheritAttrs:!1,props:{frequentItemsVuexModule:{type:String,required:!0},frequentItemsDropdownType:{type:String,required:!0},currentItem:{type:Object,required:!0},containerClass:{type:String,required:!1,default:""},linksPrimary:{type:Array,required:!1,default:function(){return[]}},linksSecondary:{type:Array,required:!1,default:function(){return[]}}},computed:{menuSections(){return[{id:"primary",menuItems:this.linksPrimary},{id:"secondary",menuItems:this.linksSecondary}].filter((function(e){var t;return null===(t=e.menuItems)||void 0===t?void 0:t.length}))},currentItemTimestamped(){return{...this.currentItem,lastAccessedOn:Date.now()}}},mounted(){var e=this;this.$nextTick((function(){J.$emit(`${e.frequentItemsDropdownType}-dropdownOpen`)}))}},_e=Object(l.a)(ye,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top-nav-container-view gl-display-flex gl-flex-direction-column"},[t("div",{staticClass:"frequent-items-dropdown-container gl-w-auto",class:this.containerClass,attrs:{"data-testid":"frequent-items-container"}},[t("div",{staticClass:"frequent-items-dropdown-content gl-w-full! gl-pt-0!"},[t("vuex-module-provider",{attrs:{"vuex-module":this.frequentItemsVuexModule}},[t("frequent-items-app",this._b({attrs:{"current-item":this.currentItemTimestamped}},"frequent-items-app",this.$attrs,!1))],1)],1)]),this._v(" "),t("top-nav-menu-sections",{staticClass:"gl-mt-auto",attrs:{sections:this.menuSections,"with-top-border":""}})],1)}),[],!1,null,null,null).exports,Ee={components:{KeepAliveSlots:d,ResponsiveHeader:b,ResponsiveHome:$,TopNavContainerView:_e},props:{navData:{type:Object,required:!0}},data:()=>({activeView:"home",hasMobileOverlay:!1}),computed:{nav(){return function(e){let{primary:t,secondary:n,...r}=e;return{...r,primary:m(t),secondary:m(n)}}(this.navData)}},created(){this.$root.$on(c.b,this.showMobileOverlay),this.$root.$on(c.a,this.hideMobileOverlay)},beforeDestroy(){this.$root.$off(c.b,this.showMobileOverlay),this.$root.$off(c.a,this.hideMobileOverlay)},methods:{onMenuItemClick(e){let{view:t}=e;t&&(this.activeView=t)},showMobileOverlay(){this.hasMobileOverlay=!0},hideMobileOverlay(){this.hasMobileOverlay=!1}},FREQUENT_ITEMS_PROJECTS:o.e,FREQUENT_ITEMS_GROUPS:o.d},Se=Object(l.a)(Ee,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mobile-overlay",class:{"mobile-nav-open":e.hasMobileOverlay},attrs:{"data-testid":"mobile-overlay"}}),e._v(" "),n("keep-alive-slots",{attrs:{"slot-key":e.activeView},scopedSlots:e._u([{key:"home",fn:function(){return[n("responsive-home",{attrs:{"nav-data":e.nav},on:{"menu-item-click":e.onMenuItemClick}})]},proxy:!0},{key:"projects",fn:function(){return[n("responsive-header",{on:{"menu-item-click":e.onMenuItemClick}},[e._v("\n        "+e._s(e.__("Projects"))+"\n      ")]),e._v(" "),n("top-nav-container-view",e._b({attrs:{"frequent-items-dropdown-type":e.$options.FREQUENT_ITEMS_PROJECTS.namespace,"frequent-items-vuex-module":e.$options.FREQUENT_ITEMS_PROJECTS.vuexModule,"container-class":"gl-px-3"}},"top-nav-container-view",e.nav.views.projects,!1))]},proxy:!0},{key:"groups",fn:function(){return[n("responsive-header",{on:{"menu-item-click":e.onMenuItemClick}},[e._v("\n        "+e._s(e.__("Groups"))+"\n      ")]),e._v(" "),n("top-nav-container-view",e._b({attrs:{"frequent-items-dropdown-type":e.$options.FREQUENT_ITEMS_GROUPS.namespace,"frequent-items-vuex-module":e.$options.FREQUENT_ITEMS_GROUPS.vuexModule,"container-class":"gl-px-3"}},"top-nav-container-view",e.nav.views.groups,!1))]},proxy:!0}])})],1)}),[],!1,null,null,null).exports,we=n("gP3b"),be=n("vXMh"),Ie=n("m6pR"),Oe=n("s1va"),Te=n.n(Oe),je=(n("TMxP"),n("iQ9A"),n("WmlO"),n("W9Nl"),n("JHu5"),n("XUYm"),{components:{KeepAliveSlots:d,TopNavContainerView:_e,TopNavMenuSections:T},props:{primary:{type:Array,required:!1,default:function(){return[]}},secondary:{type:Array,required:!1,default:function(){return[]}},views:{type:Object,required:!1,default:function(){return{}}}},data(){return{menuSections:[{id:"primary",menuItems:Te()(this.primary)},{id:"secondary",menuItems:Te()(this.secondary)}].filter((function(e){var t;return null===(t=e.menuItems)||void 0===t?void 0:t.length}))}},computed:{allMenuItems(){return this.menuSections.flatMap((function(e){return e.menuItems}))},activeView(){const e=this.allMenuItems.find((function(e){return e.active}));return null==e?void 0:e.view},menuClass(){return this.activeView?"":"gl-w-full"}},methods:{onMenuItemClick(e){var t=this;let{id:n}=e;this.allMenuItems.forEach((function(e){t.$set(e,"active",n===e.id)}))}},FREQUENT_ITEMS_PROJECTS:o.e,FREQUENT_ITEMS_GROUPS:o.d}),Me=Object(l.a)(je,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gl-display-flex gl-align-items-stretch"},[n("div",{staticClass:"gl-w-grid-size-30 gl-flex-shrink-0 gl-bg-gray-10 gl-p-3",class:e.menuClass,attrs:{"data-testid":"menu-sidebar"}},[n("top-nav-menu-sections",{attrs:{sections:e.menuSections},on:{"menu-item-click":e.onMenuItemClick}})],1),e._v(" "),n("keep-alive-slots",{directives:[{name:"show",rawName:"v-show",value:e.activeView,expression:"activeView"}],staticClass:"gl-w-grid-size-40 gl-overflow-hidden gl-p-3",attrs:{"slot-key":e.activeView,"data-testid":"menu-subview","data-qa-selector":"menu_subview_container"},scopedSlots:e._u([{key:"projects",fn:function(){return[n("top-nav-container-view",e._b({attrs:{"frequent-items-dropdown-type":e.$options.FREQUENT_ITEMS_PROJECTS.namespace,"frequent-items-vuex-module":e.$options.FREQUENT_ITEMS_PROJECTS.vuexModule}},"top-nav-container-view",e.views.projects,!1))]},proxy:!0},{key:"groups",fn:function(){return[n("top-nav-container-view",e._b({attrs:{"frequent-items-dropdown-type":e.$options.FREQUENT_ITEMS_GROUPS.namespace,"frequent-items-vuex-module":e.$options.FREQUENT_ITEMS_GROUPS.vuexModule}},"top-nav-container-view",e.views.groups,!1))]},proxy:!0}])})],1)}),[],!1,null,null,null).exports,qe={components:{GlNav:we.a,GlNavItemDropdown:be.a,GlDropdownForm:Ie.a,TopNavDropdownMenu:Me},props:{navData:{type:Object,required:!0}}},Ce=Object(l.a)(qe,(function(){var e=this.$createElement,t=this._self._c||e;return t("gl-nav",{staticClass:"navbar-sub-nav"},[t("gl-nav-item-dropdown",{attrs:{text:this.navData.activeTitle,"data-qa-selector":"navbar_dropdown","data-qa-title":this.navData.activeTitle,icon:"hamburger","menu-class":"gl-mt-3! gl-max-w-none! gl-max-h-none! gl-sm-w-auto! js-top-nav-dropdown-menu","toggle-class":"top-nav-toggle js-top-nav-dropdown-toggle gl-px-3!","no-flip":"","no-caret":""}},[t("gl-dropdown-form",[t("top-nav-dropdown-menu",{attrs:{primary:this.navData.primary,secondary:this.navData.secondary,views:this.navData.views}})],1)],1)],1)}),[],!1,null,null,null).exports,xe=n("oj/M"),Re=n("LCHN");const Ne=function(e,t){let{commit:n}=e;n("SET_NAMESPACE",t)},$e=function(e,t){let{commit:n}=e;n("SET_STORAGE_KEY",t)},Le=function(e){let{commit:t}=e;t("REQUEST_FREQUENT_ITEMS")},Ae=function(e,t){let{commit:n}=e;n("RECEIVE_FREQUENT_ITEMS_SUCCESS",t)},ke=function(e){let{commit:t}=e;t("RECEIVE_FREQUENT_ITEMS_ERROR")},De=function(e){let{state:t,dispatch:n}=e;if(n("requestFrequentItems"),A.a.canUseLocalStorage()){const e=JSON.parse(localStorage.getItem(t.storageKey));n("receiveFrequentItemsSuccess",e?Object(z.a)(e):[])}else n("receiveFrequentItemsError")},Fe=function(e){let{commit:t}=e;t("REQUEST_SEARCHED_ITEMS")},Ue=function(e,t){let{commit:n}=e;n("RECEIVE_SEARCHED_ITEMS_SUCCESS",t)},Qe=function(e){let{commit:t}=e;t("RECEIVE_SEARCHED_ITEMS_ERROR")},Ge=function(e,t){let{state:n,dispatch:r}=e;r("requestSearchedItems");const s={simple:!0,per_page:20,membership:Object(xe.C)()};let a;return"projects"===n.namespace?(a=Re.j,s.order_by="last_activity_at"):a=Re.h,a(t,s).then((function(e){r("receiveSearchedItemsSuccess",e)})).catch((function(){r("receiveSearchedItemsError")}))},Pe=function(e,t){let{commit:n,dispatch:r}=e;n("SET_SEARCH_QUERY",t),t?r("fetchSearchedItems",t):r("fetchFrequentItems")},He=function(e){return""!==e.searchQuery};var Ve={SET_NAMESPACE(e,t){Object.assign(e,{namespace:t})},SET_STORAGE_KEY(e,t){Object.assign(e,{storageKey:t})},SET_SEARCH_QUERY(e,t){const n=""!==t;Object.assign(e,{searchQuery:t,isLoadingItems:!0,hasSearchQuery:n})},REQUEST_FREQUENT_ITEMS(e){Object.assign(e,{isLoadingItems:!0,hasSearchQuery:!1})},RECEIVE_FREQUENT_ITEMS_SUCCESS(e,t){Object.assign(e,{items:t,isLoadingItems:!1,hasSearchQuery:!1,isFetchFailed:!1})},RECEIVE_FREQUENT_ITEMS_ERROR(e){Object.assign(e,{isLoadingItems:!1,hasSearchQuery:!1,isFetchFailed:!0})},REQUEST_SEARCHED_ITEMS(e){Object.assign(e,{isLoadingItems:!0,hasSearchQuery:!0})},RECEIVE_SEARCHED_ITEMS_SUCCESS(e,t){const n=t.data?t.data:t;Object.assign(e,{items:n.map((function(e){return{id:e.id,name:e.name,namespace:e.name_with_namespace||e.full_name,webUrl:e.web_url,avatarUrl:e.avatar_url}})),isLoadingItems:!1,hasSearchQuery:!0,isFetchFailed:!1})},RECEIVE_SEARCHED_ITEMS_ERROR(e){Object.assign(e,{isLoadingItems:!1,hasSearchQuery:!0,isFetchFailed:!0})}},Be=function(){let{dropdownType:e=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{namespace:"",dropdownType:e,storageKey:"",searchQuery:"",isLoadingItems:!1,isFetchFailed:!1,items:[]}};const Je=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{namespaced:!0,actions:r,getters:s,mutations:Ve,state:Be(e)}},ze=function(){return{modules:o.c.reduce((function(e,t){let{namespace:n,vuexModule:r}=t;return Object.assign(e,{[r]:Je({dropdownType:n})})}),{})}};a.default.use(i.b);const Ke=function(e,t){const n=JSON.parse(e.dataset.viewModel),r=new i.b.Store(ze());return new a.default({el:e,name:"TopNavRoot",store:r,render:e=>e(t,{props:{navData:n}})})},Xe=function(e){return Ke(e,Ce)},Ye=function(e){return Ke(e,Se)}},SYh6:function(e,t,n){"use strict";n("N8nX"),n("c5nz"),n("OZcL"),n("x5O4"),n("lxnW"),n("5sVn"),n("4xRc"),n("LM9r"),n("51O6"),n("une/"),n("Kypc"),n("yt6R"),n("6v3E"),n("RsOv"),n("ujLG"),n("3R5X"),n("HaUQ"),n("JHu5"),n("XUYm");class r{constructor(){this.$_all=new Map}dispose(){this.$_all.clear()}$on(e,t){const n=this.$_all.get(e);n&&n.push(t)||this.$_all.set(e,[t])}$off(e,t){const n=this.$_all.get(e)||[],r=t?n.filter((function(e){return e!==t})):[];r.length?this.$_all.set(e,r):this.$_all.delete(e)}$once(e,t){var n=this;const r=function(){n.$off(e,r),t(...arguments)};this.$on(e,r)}$emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(this.$_all.get(e)||[]).forEach((function(e){e(...n)}))}}t.a=function(){return new r}},Xgvv:function(e,t,n){"use strict";var r=n("cmjF"),s=n("EqYD"),a={components:{GlAvatar:r.a},props:{projectName:{type:String,required:!0},projectAvatarUrl:{type:String,required:!1,default:""},size:{type:Number,default:32,required:!1},alt:{type:String,required:!1,default:void 0}},computed:{avatarAlt(){var e;return null!==(e=this.alt)&&void 0!==e?e:this.projectName}},AVATAR_SHAPE_OPTION_RECT:s.b},i=n("bPvS"),o=Object(i.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("gl-avatar",{attrs:{shape:this.$options.AVATAR_SHAPE_OPTION_RECT,"entity-name":this.projectName,src:this.projectAvatarUrl,alt:this.avatarAlt,size:this.size}})}),[],!1,null,null,null);t.a=o.exports},kJBk:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n("o08x"),s=n.n(r),a=(n("h8Et"),n("ujLG"),n("3R5X"),n("HaUQ"),n("49qB")),i=n("BYh8"),o=n("qFo7");const c=function(){return["md","sm","xs"].includes(a.b.getBreakpointSize())},u=function(e){if(!e)return[];const t=c()?o.b.LIST_COUNT_MOBILE:o.b.LIST_COUNT_DESKTOP,n=e.filter((function(e){return e.frequency>=o.b.ELIGIBLE_FREQUENCY}));return n&&0!==n.length?(n.sort((function(e,t){return e.frequency!==t.frequency?t.frequency-e.frequency:e.lastAccessedOn!==t.lastAccessedOn?t.lastAccessedOn-e.lastAccessedOn:0})),s()(n,t)):[]},l=function(e,t){const n=!e.lastAccessedOn||Math.abs(t.lastAccessedOn-e.lastAccessedOn)/o.a>1;return{...t,frequency:n?e.frequency+1:e.frequency,lastAccessedOn:n?Date.now():e.lastAccessedOn}},d=function(e){const t=function(t){return Object.prototype.hasOwnProperty.call(e,t)?{[t]:Object(i.a)(e[t].toString(),{ALLOWED_TAGS:[]})}:{}};return{...e,...t("name"),...t("namespace")}}},mpzd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c}));var r=n("t9l/");const s={Closed:"closed",Open:"opened",Reopened:"reopened"},a={[s.Closed]:Object(r.a)("Closed"),[s.Open]:Object(r.a)("Open"),[s.Reopened]:Object(r.a)("Open")},i={Issue:"issue",Epic:"epic",MergeRequest:"merge_request",Alert:"alert"},o={Issue:"issue",Incident:"incident",TestCase:"test_case"},c={project:"project",group:"group"}},qFo7:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n("t9l/");const s={MAX_COUNT:20,LIST_COUNT_DESKTOP:5,LIST_COUNT_MOBILE:3,ELIGIBLE_FREQUENCY:3},a=9e5,i={projects:"frequent-projects",groups:"frequent-groups"},o={projects:{loadingMessage:Object(r.g)("ProjectsDropdown|Loading projects"),header:Object(r.g)("ProjectsDropdown|Frequently visited"),itemListErrorMessage:Object(r.g)("ProjectsDropdown|This feature requires browser localStorage support"),itemListEmptyMessage:Object(r.g)("ProjectsDropdown|Projects you visit often will appear here"),searchListErrorMessage:Object(r.g)("ProjectsDropdown|Something went wrong on our end."),searchListEmptyMessage:Object(r.g)("ProjectsDropdown|Sorry, no projects matched your search"),searchInputPlaceholder:Object(r.g)("ProjectsDropdown|Search your projects")},groups:{loadingMessage:Object(r.g)("GroupsDropdown|Loading groups"),header:Object(r.g)("GroupsDropdown|Frequently visited"),itemListErrorMessage:Object(r.g)("GroupsDropdown|This feature requires browser localStorage support"),itemListEmptyMessage:Object(r.g)("GroupsDropdown|Groups you visit often will appear here"),searchListErrorMessage:Object(r.g)("GroupsDropdown|Something went wrong on our end."),searchListEmptyMessage:Object(r.g)("GroupsDropdown|Sorry, no groups matched your search"),searchInputPlaceholder:Object(r.g)("GroupsDropdown|Search your groups")}},c={namespace:"projects",key:"project",vuexModule:"frequentProjects"},u={namespace:"groups",key:"group",vuexModule:"frequentGroups"},l=[c,u]}}]);
//# sourceMappingURL=top_nav.a220b18e.chunk.js.map