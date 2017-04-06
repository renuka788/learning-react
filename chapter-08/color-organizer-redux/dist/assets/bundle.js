!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=32)}([function(module,exports){var g;g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var constants={ADD_COLOR:"ADD_COLOR",RATE_COLOR:"RATE_COLOR",REMOVE_COLOR:"REMOVE_COLOR",SORT_COLORS:"SORT_COLORS"};exports.default=constants},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__root_js__=__webpack_require__(19),Symbol=__WEBPACK_IMPORTED_MODULE_0__root_js__.a.Symbol;__webpack_exports__.a=Symbol},function(module,__webpack_exports__,__webpack_require__){"use strict";function isPlainObject(value){if(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__.a)(value)||__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__.a)(value)!=objectTag)return!1;var proto=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__.a)(value);if(null===proto)return!0;var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__=__webpack_require__(13),__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__=__webpack_require__(15),__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__=__webpack_require__(20),objectTag="[object Object]",funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object);__webpack_exports__.a=isPlainObject},function(module,__webpack_exports__,__webpack_require__){"use strict";function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++)funcs[_key]=arguments[_key];if(0===funcs.length)return function(arg){return arg};if(1===funcs.length)return funcs[0];var last=funcs[funcs.length-1],rest=funcs.slice(0,-1);return function(){return rest.reduceRight(function(composed,f){return f(composed)},last.apply(void 0,arguments))}}__webpack_exports__.a=compose},function(module,__webpack_exports__,__webpack_require__){"use strict";function createStore(reducer,preloadedState,enhancer){function ensureCanMutateNextListeners(){nextListeners===currentListeners&&(nextListeners=currentListeners.slice())}function getState(){return currentState}function subscribe(listener){if("function"!=typeof listener)throw new Error("Expected listener to be a function.");var isSubscribed=!0;return ensureCanMutateNextListeners(),nextListeners.push(listener),function(){if(isSubscribed){isSubscribed=!1,ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1)}}}function dispatch(action){if(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__.a)(action))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===action.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(isDispatching)throw new Error("Reducers may not dispatch actions.");try{isDispatching=!0,currentState=currentReducer(currentState,action)}finally{isDispatching=!1}for(var listeners=currentListeners=nextListeners,i=0;i<listeners.length;i++)listeners[i]();return action}function replaceReducer(nextReducer){if("function"!=typeof nextReducer)throw new Error("Expected the nextReducer to be a function.");currentReducer=nextReducer,dispatch({type:ActionTypes.INIT})}function observable(){var _ref,outerSubscribe=subscribe;return _ref={subscribe:function(observer){function observeState(){observer.next&&observer.next(getState())}if("object"!=typeof observer)throw new TypeError("Expected the observer to be an object.");return observeState(),{unsubscribe:outerSubscribe(observeState)}}},_ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a]=function(){return this},_ref}var _ref2;if("function"==typeof preloadedState&&void 0===enhancer&&(enhancer=preloadedState,preloadedState=void 0),void 0!==enhancer){if("function"!=typeof enhancer)throw new Error("Expected the enhancer to be a function.");return enhancer(createStore)(reducer,preloadedState)}if("function"!=typeof reducer)throw new Error("Expected the reducer to be a function.");var currentReducer=reducer,currentState=preloadedState,currentListeners=[],nextListeners=currentListeners,isDispatching=!1;return dispatch({type:ActionTypes.INIT}),_ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a]=observable,_ref2}var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_1_symbol_observable__=__webpack_require__(25),__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);__webpack_require__.d(__webpack_exports__,"b",function(){return ActionTypes}),__webpack_exports__.a=createStore;var ActionTypes={INIT:"@@redux/INIT"}},function(module,__webpack_exports__,__webpack_require__){"use strict"},function(module,exports){function bytesToUuid(buf,offset){var i=offset||0,bth=byteToHex;return bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]}for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=bytesToUuid},function(module,exports,__webpack_require__){(function(global){var rng,crypto=global.crypto||global.msCrypto;if(crypto&&crypto.getRandomValues){var rnds8=new Uint8Array(16);rng=function(){return crypto.getRandomValues(rnds8),rnds8}}if(!rng){var rnds=new Array(16);rng=function(){for(var r,i=0;i<16;i++)0==(3&i)&&(r=4294967296*Math.random()),rnds[i]=r>>>((3&i)<<3)&255;return rnds}}module.exports=rng}).call(exports,__webpack_require__(0))},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sortColors=exports.rateColor=exports.removeColor=exports.addColor=void 0;var _constants=__webpack_require__(1),_constants2=_interopRequireDefault(_constants),_uuid=__webpack_require__(28);exports.addColor=function(title,color){return{type:_constants2.default.ADD_COLOR,id:(0,_uuid.v4)(),title:title,color:color,timestamp:(new Date).toString()}},exports.removeColor=function(id){return{type:_constants2.default.REMOVE_COLOR,id:id}},exports.rateColor=function(id,rating){return{type:_constants2.default.RATE_COLOR,id:id,rating:rating}},exports.sortColors=function(sortedBy){return"rating"===sortedBy?{type:_constants2.default.SORT_COLORS,sortBy:"SORTED_BY_RATING"}:"title"===sortedBy?{type:_constants2.default.SORT_COLORS,sortBy:"SORTED_BY_TITLE"}:{type:_constants2.default.SORT_COLORS,sortBy:"SORTED_BY_DATE"}}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _redux=__webpack_require__(24),_reducers=__webpack_require__(12),_initialState=__webpack_require__(11),_initialState2=_interopRequireDefault(_initialState),logger=function(store){return function(next){return function(action){var result=void 0;return console.groupCollapsed("dispatching",action.type),console.log("prev state",store.getState()),console.log("action",action),result=next(action),console.log("next state",store.getState()),console.groupEnd(),result}}},saver=function(store){return function(next){return function(action){var result=next(action);return localStorage["redux-store"]=JSON.stringify(store.getState()),result}}},storeFactory=function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:_initialState2.default;return(0,_redux.applyMiddleware)(logger,saver)(_redux.createStore)((0,_redux.combineReducers)({colors:_reducers.colors,sort:_reducers.sort}),localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):_initialState2.default)};exports.default=storeFactory},function(module,exports){module.exports={colors:[{id:"8658c1d0-9eda-4a90-95e1-8001e8eb6036",title:"Ocean Blue",color:"#0070ff",rating:3,timestamp:"Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"},{id:"f9005b4e-975e-433d-a646-79df172e1dbb",title:"Tomato",color:"#d10012",rating:2,timestamp:"Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"},{id:"58d9caee-6ea6-4d7b-9984-65b145031979",title:"Lawn",color:"#67bf4f",rating:1,timestamp:"Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"},{id:"a5685c39-6bdc-4727-9188-6c9a00bf7f95",title:"Party Pink",color:"#ff00f7",rating:5,timestamp:"Wed Mar 9 2016 03:26:00 GMT-0800 (PST)"}],sort:"SORTED_BY_DATE"}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sort=exports.colors=exports.color=void 0;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_constants=__webpack_require__(1),_constants2=_interopRequireDefault(_constants),color=exports.color=function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},action=arguments[1];switch(action.type){case _constants2.default.ADD_COLOR:return{id:action.id,title:action.title,color:action.color,timestamp:action.timestamp,rating:0};case _constants2.default.RATE_COLOR:return state.id!==action.id?state:_extends({},state,{rating:action.rating});default:return state}};exports.colors=function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],action=arguments[1];switch(action.type){case _constants2.default.ADD_COLOR:return[].concat(_toConsumableArray(state),[color({},action)]);case _constants2.default.RATE_COLOR:return state.map(function(c){return color(c,action)});case _constants2.default.REMOVE_COLOR:return state.filter(function(c){return c.id!==action.id});default:return state}},exports.sort=function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SORTED_BY_DATE",action=arguments[1];switch(action.type){case _constants2.default.SORT_COLORS:return action.sortBy;default:return state}}},function(module,__webpack_exports__,__webpack_require__){"use strict";function baseGetTag(value){return null==value?void 0===value?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(value)?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__.a)(value):__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__.a)(value)}var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__=__webpack_require__(16),__WEBPACK_IMPORTED_MODULE_2__objectToString_js__=__webpack_require__(17),nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=__WEBPACK_IMPORTED_MODULE_0__Symbol_js__.a?__WEBPACK_IMPORTED_MODULE_0__Symbol_js__.a.toStringTag:void 0;__webpack_exports__.a=baseGetTag},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global;__webpack_exports__.a=freeGlobal}).call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__overArg_js__=__webpack_require__(18),getPrototype=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__.a)(Object.getPrototypeOf,Object);__webpack_exports__.a=getPrototype},function(module,__webpack_exports__,__webpack_require__){"use strict";function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result}var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__=__webpack_require__(2),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=__WEBPACK_IMPORTED_MODULE_0__Symbol_js__.a?__WEBPACK_IMPORTED_MODULE_0__Symbol_js__.a.toStringTag:void 0;__webpack_exports__.a=getRawTag},function(module,__webpack_exports__,__webpack_require__){"use strict";function objectToString(value){return nativeObjectToString.call(value)}var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;__webpack_exports__.a=objectToString},function(module,__webpack_exports__,__webpack_require__){"use strict";function overArg(func,transform){return function(arg){return func(transform(arg))}}__webpack_exports__.a=overArg},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__=__webpack_require__(14),freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=__WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__.a||freeSelf||Function("return this")();__webpack_exports__.a=root},function(module,__webpack_exports__,__webpack_require__){"use strict";function isObjectLike(value){return null!=value&&"object"==typeof value}__webpack_exports__.a=isObjectLike},function(module,__webpack_exports__,__webpack_require__){"use strict";function applyMiddleware(){for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++)middlewares[_key]=arguments[_key];return function(createStore){return function(reducer,preloadedState,enhancer){var store=createStore(reducer,preloadedState,enhancer),_dispatch=store.dispatch,chain=[],middlewareAPI={getState:store.getState,dispatch:function(action){return _dispatch(action)}};return chain=middlewares.map(function(middleware){return middleware(middlewareAPI)}),_dispatch=__WEBPACK_IMPORTED_MODULE_0__compose__.a.apply(void 0,chain)(store.dispatch),_extends({},store,{dispatch:_dispatch})}}}var __WEBPACK_IMPORTED_MODULE_0__compose__=__webpack_require__(4);__webpack_exports__.a=applyMiddleware;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}},function(module,__webpack_exports__,__webpack_require__){"use strict";function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(void 0,arguments))}}function bindActionCreators(actionCreators,dispatch){if("function"==typeof actionCreators)return bindActionCreator(actionCreators,dispatch);if("object"!=typeof actionCreators||null===actionCreators)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===actionCreators?"null":typeof actionCreators)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var keys=Object.keys(actionCreators),boundActionCreators={},i=0;i<keys.length;i++){var key=keys[i],actionCreator=actionCreators[key];"function"==typeof actionCreator&&(boundActionCreators[key]=bindActionCreator(actionCreator,dispatch))}return boundActionCreators}__webpack_exports__.a=bindActionCreators},function(module,__webpack_exports__,__webpack_require__){"use strict";function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type;return"Given action "+(actionType&&'"'+actionType.toString()+'"'||"an action")+', reducer "'+key+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function assertReducerSanity(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key];if(void 0===reducer(void 0,{type:__WEBPACK_IMPORTED_MODULE_0__createStore__.b.INIT}))throw new Error('Reducer "'+key+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===reducer(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+key+"\" returned undefined when probed with a random type. Don't try to handle "+__WEBPACK_IMPORTED_MODULE_0__createStore__.b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function combineReducers(reducers){for(var reducerKeys=Object.keys(reducers),finalReducers={},i=0;i<reducerKeys.length;i++){var key=reducerKeys[i];"function"==typeof reducers[key]&&(finalReducers[key]=reducers[key])}var sanityError,finalReducerKeys=Object.keys(finalReducers);try{assertReducerSanity(finalReducers)}catch(e){sanityError=e}return function(){var state=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],action=arguments[1];if(sanityError)throw sanityError;for(var hasChanged=!1,nextState={},i=0;i<finalReducerKeys.length;i++){var key=finalReducerKeys[i],reducer=finalReducers[key],previousStateForKey=state[key],nextStateForKey=reducer(previousStateForKey,action);if(void 0===nextStateForKey){var errorMessage=getUndefinedStateErrorMessage(key,action);throw new Error(errorMessage)}nextState[key]=nextStateForKey,hasChanged=hasChanged||nextStateForKey!==previousStateForKey}return hasChanged?nextState:state}}var __WEBPACK_IMPORTED_MODULE_0__createStore__=__webpack_require__(5);__webpack_require__(3),__webpack_require__(6);__webpack_exports__.a=combineReducers},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__createStore__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_1__combineReducers__=__webpack_require__(23),__WEBPACK_IMPORTED_MODULE_2__bindActionCreators__=__webpack_require__(22),__WEBPACK_IMPORTED_MODULE_3__applyMiddleware__=__webpack_require__(21),__WEBPACK_IMPORTED_MODULE_4__compose__=__webpack_require__(4);__webpack_require__(6);__webpack_require__.d(__webpack_exports__,"createStore",function(){return __WEBPACK_IMPORTED_MODULE_0__createStore__.a}),__webpack_require__.d(__webpack_exports__,"combineReducers",function(){return __WEBPACK_IMPORTED_MODULE_1__combineReducers__.a}),__webpack_require__.d(__webpack_exports__,"bindActionCreators",function(){return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__.a}),__webpack_require__.d(__webpack_exports__,"applyMiddleware",function(){return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__.a}),__webpack_require__.d(__webpack_exports__,"compose",function(){return __WEBPACK_IMPORTED_MODULE_4__compose__.a})},function(module,exports,__webpack_require__){module.exports=__webpack_require__(26)},function(module,exports,__webpack_require__){"use strict";(function(global,module){function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var root,_ponyfill=__webpack_require__(27),_ponyfill2=_interopRequireDefault(_ponyfill);root="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:module;var result=(0,_ponyfill2.default)(root);exports.default=result}).call(exports,__webpack_require__(0),__webpack_require__(31)(module))},function(module,exports,__webpack_require__){"use strict";function symbolObservablePonyfill(root){var result,_Symbol=root.Symbol;return"function"==typeof _Symbol?_Symbol.observable?result=_Symbol.observable:(result=_Symbol("observable"),_Symbol.observable=result):result="@@observable",result}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=symbolObservablePonyfill},function(module,exports,__webpack_require__){var v1=__webpack_require__(29),v4=__webpack_require__(30),uuid=v4;uuid.v1=v1,uuid.v4=v4,module.exports=uuid},function(module,exports,__webpack_require__){function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[];options=options||{};var clockseq=void 0!==options.clockseq?options.clockseq:_clockseq,msecs=void 0!==options.msecs?options.msecs:(new Date).getTime(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;var tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var node=options.node||_nodeId,n=0;n<6;++n)b[i+n]=node[n];return buf||bytesToUuid(b)}var rng=__webpack_require__(8),bytesToUuid=__webpack_require__(7),_seedBytes=rng(),_nodeId=[1|_seedBytes[0],_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]],_clockseq=16383&(_seedBytes[6]<<8|_seedBytes[7]),_lastMSecs=0,_lastNSecs=0;module.exports=v1},function(module,exports,__webpack_require__){function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"==options?new Array(16):null,options=null),options=options||{};var rnds=options.random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}var rng=__webpack_require__(8),bytesToUuid=__webpack_require__(7);module.exports=v4},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _store=__webpack_require__(10),_store2=_interopRequireDefault(_store),_actions=__webpack_require__(9),store=(0,_store2.default)();store.dispatch((0,_actions.addColor)("Bonkers Blue","#1122FF")),store.dispatch((0,_actions.rateColor)("8658c1d0-9eda-4a90-95e1-8001e8eb6036",5)),store.dispatch((0,_actions.sortColors)("title")),store.dispatch((0,_actions.removeColor)("a5685c39-6bdc-4727-9188-6c9a00bf7f95")),console.log("current state",store.getState()),console.log("Go ahead, dispatch some actions..."),window.store=store,window.addColor=_actions.addColor,window.removeColor=_actions.removeColor,window.rateColor=_actions.rateColor,window.sortColors=_actions.sortColors}]);
//# sourceMappingURL=bundle.map