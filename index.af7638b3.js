function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequire37c5;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequire37c5=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.af7638b3.js","5JHSy":"no-poster.325dd571.jpg","5UbS1":"index.bab13232.css","84cAH":"index.baf40429.js"}')),s("cXP6Y"),s("kcHu4");var r,o=s("iyB0E");r=new URL(s("kyEFX").resolve("5JHSy"),import.meta.url).toString();function a(e,n){const i=null==n?void 0:n.genres;return e.map((({poster_path:e,original_title:n,release_date:s,genre_ids:o,id:a})=>{""===n?n="Sorry, no title for the movie.":n.length>40&&(n=n.slice(0,40)+"..."),s||(s="Expected");const l=o.reduce(((t,e,n)=>{if(!o.length)return t;if(n<=1){const s=null==i?void 0:i.find((({id:t})=>t===e));return n<=o.length-2?t+(null==s?void 0:s.name)+", ":t+(null==s?void 0:s.name)+" "}return 2===n?t+"Others":t}),""),h=i?l:"Other",c=null==s?void 0:s.split("-").slice(0,1);return{id:a,imagePoster:e?`https://image.tmdb.org/t/p/w500${e}`:t(r),original_title:n,releaseYear:c,fullGenresNames:h}}))}o=s("iyB0E"),o=s("iyB0E");var l=s("k6WP2");function h(t){return t.map((({id:t,imagePoster:e,original_title:n,releaseYear:i,fullGenresNames:s})=>`<li  class="movie-card-item">\n    \t\t\t\t<div class="movie-poster__container">\n    \t\t\t\t\t<img src="${e}" alt="poster" class="imagePoster" data-id="${t}"/>\n\t\t\t\t\t\t<div class="btn-box gallery">\n\t\t\t\t\t\t\t<button class="btn-watche gallery-btn" data-id="${t}" data-target="watched">add to <br class="transfer" />Watched</button>\n\t\t\t\t\t\t\t<button class="btn-queue gallery-btn" data-id="${t}" data-target="queue">add to queue</button>\n\t\t\t\t  \t\t</div> \n    \t\t\t\t</div>\n    \t\t\t\t<div class="movie-card-item__info">\n    \t\t\t\t\t<h2 class="movie-card-item__title" data-id="${t}">${n}</h2>\n    \t\t\t\t\t<p class="movie-card-item__text">${s} | ${i} </p>\n    \t\t\t\t</div>\n\t\t\t\t\t\t\n    \t\t\t</li>`)).join("")}const c=document.querySelector(".movie-card-list"),u=document.querySelector(".pagination");let d,f=0;function p(t,e){let n="",i=e-2,s=e-1,r=e+1,o=e+2;f=e,t<=1||(e>1&&(n+='<li class="pagination-item pagination-arrow">&laquo</li>'),e>3&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">1</li>')),e>2&&(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e>4&&(n+='<li class="pagination-item">...</li>'),i>0&&(n+=`<li class="pagination-item pagination-pages">${i}</li>`)),s>0&&(n+=`<li class="pagination-item pagination-pages">${s}</li>`),n+=`<li class="pagination-item pagination-pages current-page">${e}</li>`,e<t&&(n+=`<li class="pagination-item pagination-pages">${r}</li>`),e<t-1&&(e<t-2&&(n+=`<li class="pagination-item pagination-pages">${o}</li>`,!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e<t-3&&(n+='<li class="pagination-item">...</li>')),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+=`<li class="pagination-item pagination-pages">${t}</li>`)),e<t&&(n+='<li class="pagination-item pagination-arrow">&raquo</li>'),u.innerHTML=n,u.addEventListener("click",g))}function g(e){if("LI"!==e.target.nodeName)return;const n=e.target.textContent;switch(n){case"«":f-=1;break;case"»":f+=1;break;case"...":return;default:f=n}c.innerHTML="",t(l).start(),o.default.fetchGenresList().then((t=>{d=t})),o.input.value?o.default.movieSearch(f).then((e=>{t(l).done();const n=h(a(e.results,d));c.insertAdjacentHTML("beforeend",n),p(e.total_pages,e.page)})).catch((t=>console.log(t))):(o.default.fetchTrendData(f).then((t=>{const e=h(a(t.results,d));c.insertAdjacentHTML("beforeend",e),p(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done())}var m=s("idPZz");s("k6WP2"),s("ahn2g");o=s("iyB0E"),l=s("k6WP2"),o=s("iyB0E");var y=s("kpdgh");const _=document.querySelector(".movie-card-list"),v=document.querySelector(".form__search"),w=document.querySelector(".movie-card-list"),C=document.querySelector(".search__error");let E;o.default.fetchGenresList().then((t=>{E=t})),null==v||v.addEventListener("submit",(function(e){if(e.preventDefault(),!o.input.value)return C.textContent="Search field is empty. Enter movie name and press the search button",void(C.style.display="block");o.default.movieSearch().then((e=>{if(0===e.total_results)C.textContent="Search result is unsuccessful. Enter the correct movie name and press the search button",C.style.display="block";else{C.style.display="none",w.innerHTML="",u.innerHTML="";const n=h(a(e.results,E));_.insertAdjacentHTML("beforeend",n),(0,y.default)(),p(e.total_pages,e.page),t(l).done()}})).catch((t=>console.log(t)))}));var T=s("ix4Jr"),b=s("4a6xH"),I=s("ffjl9"),S=s("7vF8m"),N=s("4TNnu");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,I.stringify)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,I.jsonEval)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}constructor(t){this.domStorage_=t,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,I.contains)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new A(e)}}catch(t){}return new R},D=x("localStorage"),P=x("sessionStorage"),L=new(0,S.Logger)("@firebase/database"),M=function(){let t=1;return function(){return t++}}(),O=function(t){const e=(0,I.stringToByteArray)(t),n=new(0,I.Sha1);n.update(e);const i=n.digest();return I.base64.encodeByteArray(i)},F=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=F.apply(null,i):e+="object"==typeof i?(0,I.stringify)(i):i,e+=" "}return e};let V=null,U=!0;const q=function(t,e){(0,I.assert)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(L.logLevel=S.LogLevel.VERBOSE,V=L.log.bind(L),e&&P.set("logging_enabled",!0)):"function"==typeof t?V=t:(V=null,P.remove("logging_enabled"))},B=function(...t){if(!0===U&&(U=!1,null===V&&!0===P.get("logging_enabled")&&q(!0)),V){const e=F.apply(null,t);V(e)}},j=function(t){return function(...e){B(t,...e)}},H=function(...t){const e="FIREBASE INTERNAL ERROR: "+F(...t);L.error(e)},W=function(...t){const e=`FIREBASE FATAL ERROR: ${F(...t)}`;throw L.error(e),new Error(e)},G=function(...t){const e="FIREBASE WARNING: "+F(...t);L.warn(e)},K=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$=function(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;{const n=et(t),i=et(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},z=function(t,e){return t===e?0:t<e?-1:1},Q=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,I.stringify)(e))},X=function(t){if("object"!=typeof t||null===t)return(0,I.stringify)(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,I.stringify)(e[i]),n+=":",n+=X(t[e[i]]);return n+="}",n},Y=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function J(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Z=function(t){(0,I.assert)(!K(t),"Invalid JSON number");const e=1023;let n,i,s,r,o;0===t?(i=0,s=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=r+e,s=Math.round(t*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(t/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let h="";for(o=0;o<64;o+=8){let t=parseInt(l.substr(o,8),2).toString(16);1===t.length&&(t="0"+t),h+=t}return h.toLowerCase()};const tt=new RegExp("^-?(0*)\\d{1,10}$"),et=function(t){if(tt.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},nt=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw G("Exception was thrown by user callback.",e),t}),Math.floor(0))}},it=function(t,e){const n=setTimeout(t,e);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){G(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(B("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',G(t)}constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}}class ot{getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}constructor(t){this.accessToken=t}}ot.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&D.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}constructor(t,e,n,i,s=!1,r="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=D.get("host:"+t)||this._host}}function ht(t,e,n){let i;if((0,I.assert)("string"==typeof e,"typeof type must == string"),(0,I.assert)("object"==typeof n,"typeof params must == object"),"websocket"===e)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const s=[];return J(n,((t,e)=>{s.push(t+"="+e)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{incrementCounter(t,e=1){(0,I.contains)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,I.deepCopy)(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut={},dt={};function ft(t){const e=t.toString();return ut[e]||(ut[e]=new ct),ut[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&nt((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new pt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if((0,I.isNodeSdk)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new mt(((...t)=>{const[e,n,i,s,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&at.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gt.forceAllow_=!0}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){return!(0,I.isNodeSdk)()&&(!!gt.forceAllow_||!(gt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,I.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,I.base64Encode)(e),i=Y(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,I.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,I.stringify)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}constructor(t,e,n,i,s,r,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=j(t),this.stats_=ft(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),ht(e,"long_polling",t))}}class mt{static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||B("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){(0,I.isNodeSdk)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{B("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,I.isNodeSdk)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=M(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=mt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){B("frame writing exception"),t.stack&&B(t.stack),B(t)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yt=null;"undefined"!=typeof MozWebSocket?yt=MozWebSocket:"undefined"!=typeof WebSocket&&(yt=WebSocket);class _t{static connectionURL_(t,e,n,i,s){const r={v:"5"};return!(0,I.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&at.test(location.hostname)&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),ht(t,"websocket",r)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,D.set("previous_websocket_failure",!0);try{let t;if((0,I.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/5/${k}/${N.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new yt(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==yt&&!_t.forceDisallow_}static previouslyFailed(){return D.isInMemoryStorage||!0===D.get("previous_websocket_failure")}markConnectionHealthy(){D.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,I.jsonEval)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,I.assert)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,I.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Y(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(t,e,n,i,s,r,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=j(this.connId),this.stats_=ft(e),this.connURL=_t.connectionURL_(e,r,o,i,n),this.nodeAdmin=e.nodeAdmin}}_t.responsesRequiredToBeHealthy=2,_t.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{static get ALL_TRANSPORTS(){return[gt,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=_t&&_t.isAvailable();let n=e&&!_t.previouslyFailed();if(t.webSocketOnly&&(e||G("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[_t];else{const t=this.transports_=[];for(const e of vt.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);vt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(t){this.initTransports_(t)}}vt.globalTransportInitialized_=!1;class wt{start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=it((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=Q("t",t),n=Q("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=Q("t",t),n=Q("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=Q("t",t);if("d"in t){const n=t.d;if("h"===e)this.onHandshake_(n);else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?H("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):H("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&G("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),it((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):it((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(D.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(t,e,n,i,s,r,o,a,l,h){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=j("c:"+this.id+":"),this.transportManager_=new vt(e),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){(0,I.assert)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}constructor(t){this.allowedEvents_=t,this.listeners_={},(0,I.assert)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Et{static getInstance(){return new Tt}getInitialEvent(t){return(0,I.assert)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,I.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}}function It(){return new bt("")}function St(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nt(t){return t.pieces_.length-t.pieceNum_}function kt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new bt(t.pieces_,e)}function At(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Rt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xt(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new bt(e,0)}function Dt(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof bt)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new bt(n,0)}function Pt(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=St(t),i=St(e);if(null===n)return e;if(n===i)return Lt(kt(t),kt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mt(t,e){if(Nt(t)!==Nt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Nt(t)>Nt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Ft{constructor(t,e){this.errorPrefix_=e,this.parts_=Rt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=(0,I.stringLength)(this.parts_[t]);Vt(this)}}function Vt(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ut(t))}function Ut(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Et{static getInstance(){return new qt}getInitialEvent(t){return(0,I.assert)("visible"===t,"Unknown event type: "+t),[this.visible_]}constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Ct{sendRequest(t,e,n){const i=++this.requestNumber_,s={r:i,a:t,b:e};this.log_((0,I.stringify)(s)),(0,I.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new(0,I.Deferred),n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const i=t.d;"ok"===t.s?(this.onDataUpdate_(n.p,i,!1,null),e.resolve(i)):e.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[s];void 0!==t&&i===t&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),e.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),e.promise}listen(t,e,n,i){this.initConnection_();const s=t._queryIdentifier,r=t._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,I.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,I.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};t.tag&&(s.q=e._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Bt.warnOnListenWarnings_(r,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,r))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&(0,I.contains)(t,"w")){const n=(0,I.safeGet)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();G(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||(0,I.isAdmin)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,I.isValidFormat)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,I.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const s={p:t};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const s={p:e,d:n};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,s){this.initConnection_();const r={p:e,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:t,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,I.stringify)(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):H("Unrecognized action received from server: "+(0,I.stringify)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,I.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(t){(0,I.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?B("getToken() completed but was canceled"):(B("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new wt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{G(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(t){this.log_("Failed to get token: "+t),r||(this.repoInfo_.nodeAdmin&&G(t),a())}}}interrupt(t){B("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){B("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,I.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>X(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new bt(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){B("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){B("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,I.isNodeSdk)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+k.replace(/\./g,"-")]=1,(0,I.isMobileCordova)()?t["framework.cordova"]=1:(0,I.isReactNative)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Tt.getInstance().currentlyOnline();return(0,I.isEmpty)(this.interruptReasons_)&&t}constructor(t,e,n,i,s,r,o,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Bt.nextPersistentConnectionId_++,this.log_=j("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,I.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qt.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&Tt.getInstance().on("online",this.onOnline_,this)}}Bt.nextPersistentConnectionId_=0,Bt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{static Wrap(t,e){return new jt(t,e)}constructor(t,e){this.name=t,this.node=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new jt("[MIN_NAME]",t),i=new jt("[MIN_NAME]",e);return 0!==this.compare(n,i)}minPost(){return jt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt;class Gt extends Ht{static get __EMPTY_NODE(){return Wt}static set __EMPTY_NODE(t){Wt=t}compare(t,e){return $(t.name,e.name)}isDefinedOn(t){throw(0,I.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return jt.MIN}maxPost(){return new jt("[MAX_NAME]",Wt)}makePost(t,e){return(0,I.assert)("string"==typeof t,"KeyIndex indexValue must always be a string."),new jt(t,Wt)}toString(){return".key"}}const Kt=new Gt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}constructor(t,e,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}}class zt{copy(t,e,n,i,s){return new zt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Qt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:zt.RED,this.left=null!=i?i:Qt.EMPTY_NODE,this.right=null!=s?s:Qt.EMPTY_NODE}}zt.RED=!0,zt.BLACK=!1;class Qt{insert(t,e){return new Qt(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(t){return new Qt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new $t(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new $t(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new $t(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new $t(this.root_,null,this.comparator_,!0,t)}constructor(t,e=Qt.EMPTY_NODE){this.comparator_=t,this.root_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(t,e){return $(t.name,e.name)}function Yt(t,e){return $(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt;Qt.EMPTY_NODE=new class{copy(t,e,n,i,s){return this}insert(t,e,n){return new zt(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Zt=function(t){return"number"==typeof t?"number:"+Z(t):"string:"+t},te=function(t){if(t.isLeafNode()){const e=t.val();(0,I.assert)("string"==typeof e||"number"==typeof e||"object"==typeof e&&(0,I.contains)(e,".sv"),"Priority must be a string or number.")}else(0,I.assert)(t===Jt||t.isEmpty(),"priority of unexpected type.");(0,I.assert)(t===Jt||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ee,ne,ie;class se{static set __childrenNodeConstructor(t){ee=t}static get __childrenNodeConstructor(){return ee}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new se(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Pt(t)?this:".priority"===St(t)?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=St(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,I.assert)(".priority"!==n||1===Nt(t),".priority must be the last token in a path"),this.updateImmediateChild(n,se.__childrenNodeConstructor.EMPTY_NODE.updateChild(kt(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Zt(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?Z(this.value_):this.value_,this.lazyHash_=O(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===se.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof se.__childrenNodeConstructor?-1:((0,I.assert)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=se.VALUE_TYPE_ORDER.indexOf(e),s=se.VALUE_TYPE_ORDER.indexOf(n);return(0,I.assert)(i>=0,"Unknown leaf type: "+e),(0,I.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}constructor(t,e=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,I.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),te(this.priorityNode_)}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];const re=new class extends Ht{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),s=n.compareTo(i);return 0===s?$(t.name,e.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return jt.MIN}maxPost(){return new jt("[MAX_NAME]",new se("[PRIORITY-POST]",ie))}makePost(t,e){const n=ne(t);return new jt(e,new se("[PRIORITY-POST]",n))}toString(){return".priority"}},oe=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/oe,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}}const le=function(t,e,n,i){t.sort(e);const s=function(e,i){const r=i-e;let o,a;if(0===r)return null;if(1===r)return o=t[e],a=n?n(o):o,new zt(a,o.node,zt.BLACK,null,null);{const l=parseInt(r/2,10)+e,h=s(e,l),c=s(l+1,i);return o=t[l],a=n?n(o):o,new zt(a,o.node,zt.BLACK,h,c)}},r=function(e){let i=null,r=null,o=t.length;const a=function(e,i){const r=o-e,a=o;o-=e;const h=s(r+1,a),c=t[r],u=n?n(c):c;l(new zt(u,c.node,i,null,h))},l=function(t){i?(i.left=t,i=t):(r=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,zt.BLACK):(a(i,zt.BLACK),a(i,zt.RED))}return r}(new ae(t.length));return new Qt(i||e,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let he;const ce={};class ue{static get Default(){return(0,I.assert)(ce&&re,"ChildrenNode.ts has not been loaded"),he=he||new ue({".priority":ce},{".priority":re}),he}get(t){const e=(0,I.safeGet)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Qt?e:null}hasIndex(t){return(0,I.contains)(this.indexSet_,t.toString())}addIndex(t,e){(0,I.assert)(t!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=e.getIterator(jt.Wrap);let r,o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?le(n,t.getCompare()):ce;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const h=Object.assign({},this.indexes_);return h[a]=r,new ue(h,l)}addToIndexes(t,e){const n=(0,I.map)(this.indexes_,((n,i)=>{const s=(0,I.safeGet)(this.indexSet_,i);if((0,I.assert)(s,"Missing index implementation for "+i),n===ce){if(s.isDefinedOn(t.node)){const n=[],i=e.getIterator(jt.Wrap);let r=i.getNext();for(;r;)r.name!==t.name&&n.push(r),r=i.getNext();return n.push(t),le(n,s.getCompare())}return ce}{const i=e.get(t.name);let s=n;return i&&(s=s.remove(new jt(t.name,i))),s.insert(t,t.node)}}));return new ue(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,I.map)(this.indexes_,(n=>{if(n===ce)return n;{const i=e.get(t.name);return i?n.remove(new jt(t.name,i)):n}}));return new ue(n,this.indexSet_)}constructor(t,e){this.indexes_=t,this.indexSet_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let de;class fe{static get EMPTY_NODE(){return de||(de=new fe(new Qt(Yt),null,ue.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||de}updatePriority(t){return this.children_.isEmpty()?this:new fe(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?de:e}}getChild(t){const e=St(t);return null===e?this:this.getImmediateChild(e).getChild(kt(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,I.assert)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new jt(t,e);let i,s;e.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?de:this.priorityNode_;return new fe(i,r,s)}}updateChild(t,e){const n=St(t);if(null===n)return e;{(0,I.assert)(".priority"!==St(t)||1===Nt(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(kt(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,s=!0;if(this.forEachChild(re,((r,o)=>{e[r]=o.val(t),n++,s&&fe.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!t&&s&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Zt(this.getPriority().val())+":"),this.forEachChild(re,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":O(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new jt(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new jt(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new jt(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,jt.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,jt.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===pe?-1:0}withIndex(t){if(t===Kt||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new fe(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Kt||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(re),n=e.getIterator(re);let i=t.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(t){return t===Kt?null:this.indexMap_.get(t.toString())}constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&te(this.priorityNode_),this.children_.isEmpty()&&(0,I.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const pe=new class extends fe{compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return fe.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Qt(Yt),fe.EMPTY_NODE,ue.Default)}};Object.defineProperties(jt,{MIN:{value:new jt("[MIN_NAME]",fe.EMPTY_NODE)},MAX:{value:new jt("[MAX_NAME]",pe)}}),Gt.__EMPTY_NODE=fe.EMPTY_NODE,se.__childrenNodeConstructor=fe,Jt=pe,function(t){ie=t}(pe);function ge(t,e=null){if(null===t)return fe.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),(0,I.assert)(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new se(t,ge(e))}if(t instanceof Array){let n=fe.EMPTY_NODE;return J(t,((e,i)=>{if((0,I.contains)(t,e)&&"."!==e.substring(0,1)){const t=ge(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(ge(e))}{const n=[];let i=!1;if(J(t,((t,e)=>{if("."!==t.substring(0,1)){const s=ge(e);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new jt(t,s)))}})),0===n.length)return fe.EMPTY_NODE;const s=le(n,Xt,(t=>t.name),Yt);if(i){const t=le(n,re.getCompare());return new fe(s,ge(e),new ue({".priority":t},{".priority":re}))}return new fe(s,ge(e),ue.Default)}}!function(t){ne=t}(ge);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends Ht{extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),s=n.compareTo(i);return 0===s?$(t.name,e.name):s}makePost(t,e){const n=ge(t),i=fe.EMPTY_NODE.updateChild(this.indexPath_,n);return new jt(e,i)}maxPost(){const t=fe.EMPTY_NODE.updateChild(this.indexPath_,pe);return new jt("[MAX_NAME]",t)}toString(){return Rt(this.indexPath_,0).join("/")}constructor(t){super(),this.indexPath_=t,(0,I.assert)(!Pt(t)&&".priority"!==St(t),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new class extends Ht{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?$(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return jt.MIN}maxPost(){return jt.MAX}makePost(t,e){const n=ge(t);return new jt(e,n)}toString(){return".value"}},_e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){let t=0;const e=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(t){return{type:"value",snapshotNode:t}}function we(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ce(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ee(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,I.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,I.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,I.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,I.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,I.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const t=new Te;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}}function be(t){const e={};if(t.isDefault())return e;let n;return t.index_===re?n="$priority":t.index_===ye?n="$value":t.index_===Kt?n="$key":((0,I.assert)(t.index_ instanceof me,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=(0,I.stringify)(n),t.startSet_&&(e.startAt=(0,I.stringify)(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+(0,I.stringify)(t.indexStartName_))),t.endSet_&&(e.endAt=(0,I.stringify)(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+(0,I.stringify)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ie(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ct{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,I.assert)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const r=Se.getListenId_(t,n),o={};this.listens_[r]=o;const a=be(t._queryParams);this.restRequest_(s+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(s,a,!1,n),(0,I.safeGet)(this.listens_,r)===o){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=Se.getListenId_(t,e);delete this.listens_[n]}get(t){const e=be(t._queryParams),n=t._path.toString(),i=new(0,I.Deferred);return this.restRequest_(n+".json",e,((t,e)=>{let s=e;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(e.auth=i.accessToken),s&&s.token&&(e.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,I.querystring)(e);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,I.jsonEval)(o.responseText)}catch(t){G("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&G("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=j("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}constructor(){this.rootNode_=fe.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return{value:null,children:new Map}}function Ae(t,e,n){if(Pt(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=St(e);t.children.has(i)||t.children.set(i,ke());Ae(t.children.get(i),e=kt(e),n)}}function Re(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,i)=>{Re(i,new bt(e.toString()+"/"+t),n)}))}class xe{get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&J(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}constructor(t){this.collection_=t,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;J(t,((t,i)=>{i>0&&(0,I.contains)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),it(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new xe(t);const n=1e4+2e4*Math.random();it(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,Le;function Me(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Le=Pe||(Pe={}))[Le.OVERWRITE=0]="OVERWRITE",Le[Le.MERGE=1]="MERGE",Le[Le.ACK_USER_WRITE=2]="ACK_USER_WRITE",Le[Le.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Oe{operationForChild(t){if(Pt(this.path)){if(null!=this.affectedTree.value)return(0,I.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new bt(t));return new Oe(It(),e,this.revert)}}return(0,I.assert)(St(this.path)===t,"operationForChild called for unrelated child."),new Oe(kt(this.path),this.affectedTree,this.revert)}constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Pe.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{operationForChild(t){return Pt(this.path)?new Fe(this.source,It(),this.snap.getImmediateChild(t)):new Fe(this.source,kt(this.path),this.snap)}constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Pe.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{operationForChild(t){if(Pt(this.path)){const e=this.children.subtree(new bt(t));return e.isEmpty()?null:e.value?new Fe(this.source,It(),e.value):new Ve(this.source,It(),e)}return(0,I.assert)(St(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ve(this.source,kt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Pe.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Pt(t))return this.isFullyInitialized()&&!this.filtered_;const e=St(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e,n,i,s,r){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw(0,I.assertionError)("Should only compare child_ events.");const i=new jt(e.childName,e.snapshotNode),s=new jt(n.childName,n.snapshotNode);return t.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n))),o.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,r);s.forEach((s=>{s.respondsTo(n.type)&&e.push(s.createEvent(i,t.query_))}))}))}function Be(t,e){return{eventCache:t,serverCache:e}}function je(t,e,n,i){return Be(new Ue(e,n,i),t.serverCache)}function He(t,e,n,i){return Be(t.eventCache,new Ue(e,n,i))}function We(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ge(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke;class $e{static fromObject(t){let e=new $e(null);return J(t,((t,n)=>{e=e.set(new bt(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:It(),value:this.value};if(Pt(t))return null;{const n=St(t),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(kt(t),e);if(null!=s){return{path:Dt(new bt(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Pt(t))return this;{const e=St(t),n=this.children.get(e);return null!==n?n.subtree(kt(t)):new $e(null)}}set(t,e){if(Pt(t))return new $e(e,this.children);{const n=St(t),i=(this.children.get(n)||new $e(null)).set(kt(t),e),s=this.children.insert(n,i);return new $e(this.value,s)}}remove(t){if(Pt(t))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const e=St(t),n=this.children.get(e);if(n){const i=n.remove(kt(t));let s;return s=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&s.isEmpty()?new $e(null):new $e(this.value,s)}return this}}get(t){if(Pt(t))return this.value;{const e=St(t),n=this.children.get(e);return n?n.get(kt(t)):null}}setTree(t,e){if(Pt(t))return e;{const n=St(t),i=(this.children.get(n)||new $e(null)).setTree(kt(t),e);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new $e(this.value,s)}}fold(t){return this.fold_(It(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Dt(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,It(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(Pt(t))return null;{const i=St(t),s=this.children.get(i);return s?s.findOnPath_(kt(t),Dt(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,It(),e)}foreachOnPath_(t,e,n){if(Pt(t))return this;{this.value&&n(e,this.value);const i=St(t),s=this.children.get(i);return s?s.foreachOnPath_(kt(t),Dt(e,i),n):new $e(null)}}foreach(t){this.foreach_(It(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(Dt(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}constructor(t,e=(()=>(Ke||(Ke=new Qt(z)),Ke))()){this.value=t,this.children=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{static empty(){return new ze(new $e(null))}constructor(t){this.writeTree_=t}}function Qe(t,e,n){if(Pt(e))return new ze(new $e(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const s=i.path;let r=i.value;const o=Lt(s,e);return r=r.updateChild(o,n),new ze(t.writeTree_.set(s,r))}{const i=new $e(n),s=t.writeTree_.setTree(e,i);return new ze(s)}}}function Xe(t,e,n){let i=t;return J(n,((t,n)=>{i=Qe(i,Dt(e,t),n)})),i}function Ye(t,e){if(Pt(e))return ze.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new ze(n)}}function Je(t,e){return null!=Ze(t,e)}function Ze(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function tn(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(re,((t,n)=>{e.push(new jt(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new jt(t,n.value))})),e}function en(t,e){if(Pt(e))return t;{const n=Ze(t,e);return new ze(null!=n?new $e(n):t.writeTree_.subtree(e))}}function nn(t){return t.writeTree_.isEmpty()}function sn(t,e){return rn(It(),t.writeTree_,e)}function rn(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,s)=>{".priority"===e?((0,I.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=rn(Dt(t,e),s,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(Dt(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){return vn(e,t)}function an(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,I.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const e=t.allWrites[o];e.visible&&(o>=n&&ln(e,i.path)?s=!1:Ot(i.path,e.path)&&(r=!0)),o--}if(s){if(r)return function(t){t.visibleWrites=cn(t.allWrites,hn,It()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=Ye(t.visibleWrites,i.path);else{J(i.children,(e=>{t.visibleWrites=Ye(t.visibleWrites,Dt(i.path,e))}))}return!0}return!1}function ln(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(Dt(t.path,n),e))return!0;return!1}function hn(t){return t.visible}function cn(t,e,n){let i=ze.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const t=r.path;let e;if(r.snap)Ot(n,t)?(e=Lt(n,t),i=Qe(i,e,r.snap)):Ot(t,n)&&(e=Lt(t,n),i=Qe(i,It(),r.snap.getChild(e)));else{if(!r.children)throw(0,I.assertionError)("WriteRecord should have .snap or .children");if(Ot(n,t))e=Lt(n,t),i=Xe(i,e,r.children);else if(Ot(t,n))if(e=Lt(t,n),Pt(e))i=Xe(i,It(),r.children);else{const t=(0,I.safeGet)(r.children,St(e));if(t){const n=t.getChild(kt(e));i=Qe(i,It(),n)}}}}}return i}function un(t,e,n,i,s){if(i||s){const r=en(t.visibleWrites,e);if(!s&&nn(r))return n;if(s||null!=n||Je(r,It())){const r=function(t){return(t.visible||s)&&(!i||!~i.indexOf(t.writeId))&&(Ot(t.path,e)||Ot(e,t.path))};return sn(cn(t.allWrites,r,e),n||fe.EMPTY_NODE)}return null}{const i=Ze(t.visibleWrites,e);if(null!=i)return i;{const i=en(t.visibleWrites,e);if(nn(i))return n;if(null!=n||Je(i,It())){return sn(i,n||fe.EMPTY_NODE)}return null}}}function dn(t,e,n,i){return un(t.writeTree,t.treePath,e,n,i)}function fn(t,e){return function(t,e,n){let i=fe.EMPTY_NODE;const s=Ze(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(re,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const s=en(t.visibleWrites,e);return n.forEachChild(re,((t,e)=>{const n=sn(en(s,new bt(t)),e);i=i.updateImmediateChild(t,n)})),tn(s).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return tn(en(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function pn(t,e,n,i){return function(t,e,n,i,s){(0,I.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Dt(e,n);if(Je(t.visibleWrites,r))return null;{const e=en(t.visibleWrites,r);return nn(e)?s.getChild(n):sn(e,s.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function gn(t,e){return function(t,e){return Ze(t.visibleWrites,e)}(t.writeTree,Dt(t.treePath,e))}function mn(t,e,n,i,s,r){return function(t,e,n,i,s,r,o){let a;const l=en(t.visibleWrites,e),h=Ze(l,It());if(null!=h)a=h;else{if(null==n)return[];a=sn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&t.length<s;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,s,r)}function yn(t,e,n){return function(t,e,n,i){const s=Dt(e,n),r=Ze(t.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return sn(en(t.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function _n(t,e){return vn(Dt(t.treePath,e),t.writeTree)}function vn(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{trackChildChange(t){const e=t.type,n=t.childName;(0,I.assert)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,I.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===e&&"child_removed"===s)this.changeMap.set(n,Ee(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===s)this.changeMap.set(n,Ce(n,i.oldSnap));else if("child_changed"===e&&"child_added"===s)this.changeMap.set(n,we(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==s)throw(0,I.assertionError)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,Ee(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class En{getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Ue(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yn(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ge(this.viewCache_),s=mn(this.writes_,i,e,1,n,t);return 0===s.length?null:s[0]}constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e,n,i,s){const r=new wn;let o,a;if(n.type===Pe.OVERWRITE){const l=n;l.source.fromUser?o=Sn(t,e,l.path,l.snap,i,s,r):((0,I.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Pt(l.path),o=In(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===Pe.MERGE){const l=n;l.source.fromUser?o=function(t,e,n,i,s,r,o){let a=e;return i.foreach(((i,l)=>{const h=Dt(n,i);Nn(e,St(h))&&(a=Sn(t,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=Dt(n,i);Nn(e,St(h))||(a=Sn(t,a,h,l,s,r,o))})),a}(t,e,l.path,l.children,i,s,r):((0,I.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=An(t,e,l.path,l.children,i,s,a,r))}else if(n.type===Pe.ACK_USER_WRITE){const a=n;o=a.revert?function(t,e,n,i,s,r){let o;if(null!=gn(i,n))return e;{const a=new En(i,e,s),l=e.eventCache.getNode();let h;if(Pt(n)||".priority"===St(n)){let n;if(e.serverCache.isFullyInitialized())n=dn(i,Ge(e));else{const t=e.serverCache.getNode();(0,I.assert)(t instanceof fe,"serverChildren would be complete if leaf node"),n=fn(i,t)}h=t.filter.updateFullNode(l,n,r)}else{const s=St(n);let c=yn(i,s,e.serverCache);null==c&&e.serverCache.isCompleteForChild(s)&&(c=l.getImmediateChild(s)),h=null!=c?t.filter.updateChild(l,s,c,kt(n),a,r):e.eventCache.getNode().hasChild(s)?t.filter.updateChild(l,s,fe.EMPTY_NODE,kt(n),a,r):l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=dn(i,Ge(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||null!=gn(i,It()),je(e,h,o,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,a.path,i,s,r):function(t,e,n,i,s,r,o){if(null!=gn(s,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(Pt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return In(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Pt(n)){let i=new $e(null);return l.getNode().forEachChild(Kt,((t,e)=>{i=i.set(new bt(t),e)})),An(t,e,n,i,s,r,a,o)}return e}{let h=new $e(null);return i.foreach(((t,e)=>{const i=Dt(n,t);l.isCompleteForPath(i)&&(h=h.set(t,l.getNode().getChild(i)))})),An(t,e,n,h,s,r,a,o)}}(t,e,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Pe.LISTEN_COMPLETE)throw(0,I.assertionError)("Unknown operation type: "+n.type);o=function(t,e,n,i,s){const r=e.serverCache,o=He(e,r.getNode(),r.isFullyInitialized()||Pt(n),r.isFiltered());return bn(t,o,n,i,Cn,s)}(t,e,n.path,i,r)}const l=r.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=We(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ve(We(e)))}}(e,o,l),{viewCache:o,changes:l}}function bn(t,e,n,i,s,r){const o=e.eventCache;if(null!=gn(i,n))return e;{let a,l;if(Pt(n))if((0,I.assert)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=Ge(e),s=fn(i,n instanceof fe?n:fe.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),s,r)}else{const n=dn(i,Ge(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,r)}else{const h=St(n);if(".priority"===h){(0,I.assert)(1===Nt(n),"Can't have a priority with additional path components");const s=o.getNode();l=e.serverCache.getNode();const r=pn(i,n,s,l);a=null!=r?t.filter.updatePriority(s,r):o.getNode()}else{const c=kt(n);let u;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const t=pn(i,n,o.getNode(),l);u=null!=t?o.getNode().getImmediateChild(h).updateChild(c,t):o.getNode().getImmediateChild(h)}else u=yn(i,h,e.serverCache);a=null!=u?t.filter.updateChild(o.getNode(),h,u,c,s,r):o.getNode()}}return je(e,a,o.isFullyInitialized()||Pt(n),t.filter.filtersNodes())}}function In(t,e,n,i,s,r,o,a){const l=e.serverCache;let h;const c=o?t.filter:t.filter.getIndexedFilter();if(Pt(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),t,null)}else{const t=St(n);if(!l.isCompleteForPath(n)&&Nt(n)>1)return e;const s=kt(n),r=l.getNode().getImmediateChild(t).updateChild(s,i);h=".priority"===t?c.updatePriority(l.getNode(),r):c.updateChild(l.getNode(),t,r,s,Cn,null)}const u=He(e,h,l.isFullyInitialized()||Pt(n),c.filtersNodes());return bn(t,u,n,s,new En(s,u,r),a)}function Sn(t,e,n,i,s,r,o){const a=e.eventCache;let l,h;const c=new En(s,e,r);if(Pt(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=je(e,h,!0,t.filter.filtersNodes());else{const s=St(n);if(".priority"===s)h=t.filter.updatePriority(e.eventCache.getNode(),i),l=je(e,h,a.isFullyInitialized(),a.isFiltered());else{const r=kt(n),h=a.getNode().getImmediateChild(s);let u;if(Pt(r))u=i;else{const t=c.getCompleteChild(s);u=null!=t?".priority"===At(r)&&t.getChild(xt(r)).isEmpty()?t:t.updateChild(r,i):fe.EMPTY_NODE}if(h.equals(u))l=e;else{l=je(e,t.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nn(t,e){return t.eventCache.isCompleteForChild(e)}function kn(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function An(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,h=e;l=Pt(n)?i:new $e(null).setTree(n,i);const c=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=kn(0,e.serverCache.getNode().getImmediateChild(n),i);h=In(t,h,new bt(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!l){const l=kn(0,e.serverCache.getNode().getImmediateChild(n),i);h=In(t,h,new bt(n),l,s,r,o,a)}})),h}function Rn(t,e){const n=Ge(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Pt(e)&&!n.getImmediateChild(St(e)).isEmpty())?n.getChild(e):null}function xn(t,e,n,i){e.type===Pe.MERGE&&null!==e.source.queryId&&((0,I.assert)(Ge(t.viewCache_),"We should always have a full cache before handling merges"),(0,I.assert)(We(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Tn(t.processor_,s,e,n,i);var o,a;return o=t.processor_,a=r.viewCache,(0,I.assert)(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),(0,I.assert)(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),(0,I.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Dn(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Dn(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const s=[],r=[];return e.forEach((e=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),qe(t,s,"child_removed",e,i,n),qe(t,s,"child_added",e,i,n),qe(t,s,"child_moved",r,i,n),qe(t,s,"child_changed",e,i,n),qe(t,s,"value",e,i,n),s}(t.eventGenerator_,e,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn,Ln;function Mn(t,e,n,i){const s=e.source.queryId;if(null!==s){const r=t.views.get(s);return(0,I.assert)(null!=r,"SyncTree gave us an op for an invalid query."),xn(r,e,n,i)}{let s=[];for(const r of t.views.values())s=s.concat(xn(r,e,n,i));return s}}function On(t,e){let n=null;for(const i of t.views.values())n=n||Rn(i,e);return n}class Fn{constructor(t){this.listenProvider_=t,this.syncPointTree_=new $e(null),this.pendingWriteTree_={visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vn(t,e,n,i,s){return function(t,e,n,i,s){(0,I.assert)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Qe(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,s),s?jn(t,new Fe({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function Un(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(an(t.pendingWriteTree_,e)){let e=new $e(null);return null!=i.snap?e=e.set(It(),!0):J(i.children,(t=>{e=e.set(new bt(t),!0)})),jn(t,new Oe(i.path,e,n))}return[]}function qn(t,e,n){return jn(t,new Fe({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function Bn(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=On(n,Lt(t,e));if(i)return i}));return un(i,e,s,n,!0)}function jn(t,e){return Hn(e,t.syncPointTree_,null,on(t.pendingWriteTree_,It()))}function Hn(t,e,n,i){if(Pt(t.path))return Wn(t,e,n,i);{const s=e.get(It());null==n&&null!=s&&(n=On(s,It()));let r=[];const o=St(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const t=n?n.getImmediateChild(o):null,e=_n(i,o);r=r.concat(Hn(a,l,t,e))}return s&&(r=r.concat(Mn(s,t,i,n))),r}}function Wn(t,e,n,i){const s=e.get(It());null==n&&null!=s&&(n=On(s,It()));let r=[];return e.children.inorderTraversal(((e,s)=>{const o=n?n.getImmediateChild(e):null,a=_n(i,e),l=t.operationForChild(e);l&&(r=r.concat(Wn(l,s,o,a)))})),s&&(r=r.concat(Mn(s,t,i,n))),r}function Gn(t,e){return t.tagToQueryMap.get(e)}function Kn(t){const e=t.indexOf("$");return(0,I.assert)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new bt(t.substr(0,e))}}function $n(t,e,n){const i=t.syncPointTree_.get(e);(0,I.assert)(i,"Missing sync point for query tag that we're tracking");return Mn(i,n,on(t.pendingWriteTree_,e),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new zn(e)}node(){return this.node_}constructor(t){this.node_=t}}class Qn{getImmediateChild(t){const e=Dt(this.path_,t);return new Qn(this.syncTree_,e)}node(){return Bn(this.syncTree_,this.path_)}constructor(t,e){this.syncTree_=t,this.path_=e}}const Xn=function(t,e,n){return t&&"object"==typeof t?((0,I.assert)(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Yn(t[".sv"],e,n):"object"==typeof t[".sv"]?Jn(t[".sv"],e):void(0,I.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Yn=function(t,e,n){if("timestamp"===t)return n.timestamp;(0,I.assert)(!1,"Unexpected server value: "+t)},Jn=function(t,e,n){t.hasOwnProperty("increment")||(0,I.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&(0,I.assert)(!1,"Unexpected increment value: "+i);const s=e.node();if((0,I.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Zn=function(t,e,n,i){return ei(e,new Qn(n,t),i)},ti=function(t,e,n){return ei(t,new zn(e),n)};function ei(t,e,n){const i=t.getPriority().val(),s=Xn(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const i=t,r=Xn(i.getValue(),e,n);return r!==i.getValue()||s!==i.getPriority().val()?new se(r,ge(s)):t}{const i=t;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new se(s))),i.forEachChild(re,((t,i)=>{const s=ei(i,e.getImmediateChild(t),n);s!==i&&(r=r.updateImmediateChild(t,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function ii(t,e){let n=e instanceof bt?e:new bt(e),i=t,s=St(n);for(;null!==s;){const t=(0,I.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new ni(s,i,t),n=kt(n),s=St(n)}return i}function si(t){return t.node.value}function ri(t,e){t.node.value=e,ci(t)}function oi(t){return t.node.childCount>0}function ai(t,e){J(t.node.children,((n,i)=>{e(new ni(n,t,i))}))}function li(t,e,n,i){n&&!i&&e(t),ai(t,(t=>{li(t,e,!0,i)})),n&&i&&e(t)}function hi(t){return new bt(null===t.parent?t.name:hi(t.parent)+"/"+t.name)}function ci(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===si(t)&&!oi(t)}(n),s=(0,I.contains)(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ci(t)):i||s||(t.node.children[e]=n.node,t.node.childCount++,ci(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const ui=/[\[\].#$\/\u0000-\u001F\u007F]/,di=/[\[\].#$\u0000-\u001F\u007F]/,fi=function(t){return"string"==typeof t&&0!==t.length&&!ui.test(t)},pi=function(t){return"string"==typeof t&&0!==t.length&&!di.test(t)},gi=function(t,e,n){const i=n instanceof bt?new Ft(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Ut(i));if("function"==typeof e)throw new Error(t+"contains a function "+Ut(i)+" with contents = "+e.toString());if(K(e))throw new Error(t+"contains "+e.toString()+" "+Ut(i));if("string"==typeof e&&e.length>10485760/3&&(0,I.stringLength)(e)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+Ut(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,s=!1;if(J(e,((e,r)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!fi(e)))throw new Error(t+" contains an invalid key ("+e+") "+Ut(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=e,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=(0,I.stringLength)(a),Vt(o),gi(t,r,i),function(t){const e=t.parts_.pop();t.byteLength_-=(0,I.stringLength)(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&s)throw new Error(t+' contains ".value" child '+Ut(i)+" in addition to actual children.")}},mi=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!fi(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pi(t)}(n))throw new Error((0,I.errorPrefix)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _i(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();null===n||Mt(r,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function vi(t,e,n){_i(t,n),wi(t,(t=>Ot(t,e)||Ot(e,t)))}function wi(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){e(s.path)?(Ci(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ci(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();V&&B("event: "+n.toString()),nt(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yi,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ke(),this.transactionQueueTree_=new ni,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Ti(t,e,n){if(t.stats_=ft(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new Se(t.repoInfo_,((e,n,i,s)=>{Si(t,e,n,i,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Ni(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,I.stringify)(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new Bt(t.repoInfo_,e,((e,n,i,s)=>{Si(t,e,n,i,s)}),(e=>{Ni(t,e)}),(e=>{!function(t,e){J(e,((e,n)=>{ki(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return dt[n]||(dt[n]=e()),dt[n]}(t.repoInfo_,(()=>new De(t.stats_,t.server_))),t.infoData_=new Ne,t.infoSyncTree_=new Fn({startListening:(e,n,i,s)=>{let r=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(r=qn(t.infoSyncTree_,e._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ki(t,"connected",!1),t.serverSyncTree_=new Fn({startListening:(e,n,i,s)=>(t.server_.listen(e,i,n,((n,i)=>{const r=s(n,i);vi(t.eventQueue_,e._path,r)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function bi(t){const e=t.infoData_.getNode(new bt(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function Ii(t){return(e=(e={timestamp:bi(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function Si(t,e,n,i,s){t.dataUpdateCount++;const r=new bt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const e=(0,I.map)(n,(t=>ge(t)));o=function(t,e,n,i){const s=Gn(t,i);if(s){const i=Kn(s),r=i.path,o=i.queryId,a=Lt(r,e),l=$e.fromObject(n);return $n(t,r,new Ve(Me(o),a,l))}return[]}(t.serverSyncTree_,r,e,s)}else{const e=ge(n);o=function(t,e,n,i){const s=Gn(t,i);if(null!=s){const i=Kn(s),r=i.path,o=i.queryId,a=Lt(r,e);return $n(t,r,new Fe(Me(o),a,n))}return[]}(t.serverSyncTree_,r,e,s)}else if(i){const e=(0,I.map)(n,(t=>ge(t)));o=function(t,e,n){const i=$e.fromObject(n);return jn(t,new Ve({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,r,e)}else{const e=ge(n);o=qn(t.serverSyncTree_,r,e)}let a=r;o.length>0&&(a=Li(t,r)),vi(t.eventQueue_,a,o)}function Ni(t,e){ki(t,"connected",e),!1===e&&function(t){xi(t,"onDisconnectEvents");const e=Ii(t),n=ke();Re(t.onDisconnect_,It(),((i,s)=>{const r=Zn(i,s,t.serverSyncTree_,e);Ae(n,i,r)}));let i=[];Re(n,It(),((e,n)=>{i=i.concat(qn(t.serverSyncTree_,e,n));const s=Ui(t,e);Li(t,s)})),t.onDisconnect_=ke(),vi(t.eventQueue_,It(),i)}(t)}function ki(t,e,n){const i=new bt("/.info/"+e),s=ge(n);t.infoData_.updateSnapshot(i,s);const r=qn(t.infoSyncTree_,i,s);vi(t.eventQueue_,i,r)}function Ai(t){return t.nextWriteId_++}function Ri(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}function xi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),B(n,...e)}function Di(t,e,n){return Bn(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function Pi(t,e=t.transactionQueueTree_){if(e||Vi(t,e),si(e)){const n=Oi(t,e);(0,I.assert)(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),s=Di(t,e,i);let r=s;const o=s.hash();for(let t=0;t<n.length;t++){const i=n[t];(0,I.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Lt(e,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{xi(t,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(Un(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Vi(t,ii(t.transactionQueueTree_,e)),Pi(t,t.transactionQueueTree_),vi(t.eventQueue_,e,s);for(let t=0;t<i.length;t++)nt(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{G("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Li(t,e)}}),o)}(t,hi(e),n)}else oi(e)&&ai(e,(e=>{Pi(t,e)}))}function Li(t,e){const n=Mi(t,e),i=hi(n);return function(t,e,n){if(0===e.length)return;const i=[];let s=[];const r=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let a=0;a<e.length;a++){const l=e[a],h=Lt(n,l.path);let c,u=!1;if((0,I.assert)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,c=l.abortReason,s=s.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,c="maxretry",s=s.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else{const n=Di(t,l.path,r);l.currentInputSnapshot=n;const i=e[a].update(n.val());if(void 0!==i){gi("transaction failed: Data returned ",i,l.path);let e=ge(i);"object"==typeof i&&null!=i&&(0,I.contains)(i,".priority")||(e=e.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Ii(t),h=ti(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=h,l.currentWriteId=Ai(t),r.splice(r.indexOf(o),1),s=s.concat(Vn(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),s=s.concat(Un(t.serverSyncTree_,o,!0))}else u=!0,c="nodata",s=s.concat(Un(t.serverSyncTree_,l.currentWriteId,!0))}vi(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,o=e[a].unwatcher,setTimeout(o,Math.floor(0)),e[a].onComplete&&("nodata"===c?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(c),!1,null)))))}var o;Vi(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)nt(i[t]);Pi(t,t.transactionQueueTree_)}(t,Oi(t,n),i),i}function Mi(t,e){let n,i=t.transactionQueueTree_;for(n=St(e);null!==n&&void 0===si(i);)i=ii(i,n),n=St(e=kt(e));return i}function Oi(t,e){const n=[];return Fi(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function Fi(t,e,n){const i=si(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);ai(e,(e=>{Fi(t,e,n)}))}function Vi(t,e){const n=si(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,ri(e,n.length>0?n:void 0)}ai(e,(e=>{Vi(t,e)}))}function Ui(t,e){const n=hi(Mi(t,e)),i=ii(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{qi(t,e)})),qi(t,i),li(i,(e=>{qi(t,e)})),n}function qi(t,e){const n=si(e);if(n){const i=[];let s=[],r=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,I.assert)(r===e-1,"All SENT items should be at beginning of queue."),r=e,n[e].status=3,n[e].abortReason="set"):((0,I.assert)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),s=s.concat(Un(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===r?ri(e,void 0):n.length=r+1,vi(t.eventQueue_,hi(e),s);for(let t=0;t<i.length;t++)nt(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=function(t,e){const n=ji(t),i=n.namespace;"firebase.com"===n.domain&&W(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||W("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&G("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new lt(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new bt(n.pathString)}},ji=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof t){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let c=t.indexOf("/");-1===c&&(c=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(c,u)),c<u&&(s=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(c,u)));const d=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):G(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,u)));h=e.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(e.substring(h+1),10)):h=e.length;const f=e.slice(0,h);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{get key(){return Pt(this._path)?null:At(this._path)}get ref(){return new Wi(this._repo,this._path)}get _queryIdentifier(){const t=Ie(this._queryParams),e=X(t);return"{}"===e?"default":e}get _queryObject(){return Ie(this._queryParams)}isEqual(t){if(!((t=(0,I.getModularInstance)(t))instanceof Hi))return!1;const e=this._repo===t._repo,n=Mt(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}}class Wi extends Hi{get parent(){const t=xt(this._path);return null===t?null:new Wi(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}constructor(t,e){super(t,e,new Te,!1)}}!function(t){(0,I.assert)(!Pn,"__referenceConstructor has already been defined"),Pn=t}(Wi),function(t){(0,I.assert)(!Ln,"__referenceConstructor has already been defined"),Ln=t}(Wi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gi={};let Ki=!1;function $i(t,e,n,i,s){let r=i||t.options.databaseURL;void 0===r&&(t.options.projectId||W("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),B("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Bi(r,s),h=l.repoInfo;void 0!==N&&N.env&&(a=N.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,l=Bi(r,s),h=l.repoInfo):o=!l.repoInfo.secure;const c=s&&o?new ot(ot.OWNER):new rt(t.name,t.options,e);mi("Invalid Firebase Database URL",l),Pt(l.path)||W("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(t,e,n,i){let s=Gi[e.name];s||(s={},Gi[e.name]=s);let r=s[t.toURLString()];r&&W("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Ei(t,Ki,n,i),s[t.toURLString()]=r,r}(h,t,c,new st(t.name,n));return new zi(u,t)}class zi{get _repo(){return this._instanceStarted||(Ti(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wi(this._repo,It())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=Gi[e];n&&n[t.key]===t||W(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ri(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&W("Cannot call "+t+" on a deleted database.")}constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qi,Xi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xi=T.SDK_VERSION,k=Xi,(0,T._registerComponent)(new(0,b.Component)("database",((t,{instanceIdentifier:e})=>$i(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),(0,T.registerVersion)("@firebase/database","0.13.1",Qi),(0,T.registerVersion)("@firebase/database","0.13.1","esm2017");const Yi={authPage:document.querySelector(".form-auth"),authCloseBtn:document.querySelector(".auth-page__btn-close")};Yi.authCloseBtn.addEventListener("click",(function(){Yi.authPage.classList.add("is-hidden")}));var Ji=s("iB56l");m=s("idPZz");const Zi=document.querySelector(".mySwiper");(0,m.default)(Zi);new(0,Ji.default)(".mySwiper",{modules:[Ji.Navigation,Ji.Autoplay],spaceBetween:5,breakpointsBase:"container",autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{210:{slidesPerView:2},600:{slidesPerView:6},768:{slidesPerView:8}}});const ts=document.querySelector(".swiper-wrapper");function es(e){const n=e.map((({poster_path:e,id:n})=>`<div class="swiper-slide">\n\t\t\t\t<img src="${e?`https://image.tmdb.org/t/p/w500${e}`:t(r)}" alt="poster" class="slide-poster" data-id="${n}"/>\n\t\t\t</div>`)).join("");ts.insertAdjacentHTML("beforeend",n)}var ns,is,ss={};function rs(t){return(rs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}ns="undefined"!=typeof self?self:void 0,is=function(t){t.addBackToTop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backgroundColor,n=void 0===e?"#000":e,i=t.cornerOffset,s=void 0===i?20:i,r=t.diameter,o=void 0===r?56:r,a=t.ease,l=void 0===a?q:a,h=t.id,c=void 0===h?"back-to-top":h,u=t.innerHTML,d=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,f=t.onClickScrollTo,p=void 0===f?0:f,g=t.scrollContainer,m=void 0===g?document.body:g,y=t.scrollDuration,_=void 0===y?100:y,v=t.showWhenScrollTopIs,w=void 0===v?1:v,C=t.size,E=void 0===C?o:C,T=t.textColor,b=void 0===T?"#fff":T,I=t.zIndex,S=void 0===I?1:I,N=m===document.body,k=N&&document.documentElement;O();var A=M(),R=!0,x=N?window:m;function D(){V()>=w?P():L()}function P(){R&&(A.className="",R=!1)}function L(){R||(A.className="hidden",R=!0)}function M(){var t=document.createElement("div");return t.id=c,t.className="hidden",t.innerHTML=d,t.addEventListener("click",(function(t){t.preventDefault(),F()})),document.body.appendChild(t),t}function O(){var t=Math.round(.43*E),e=Math.round(.29*E),i="#"+c+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+s+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+b+";cursor:pointer;display:block;height:"+E+"px;opacity:1;outline:0;position:fixed;right:"+s+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+E+"px;z-index:"+S+"}#"+c+" svg{display:block;fill:currentColor;height:"+t+"px;margin:"+e+"px auto 0;width:"+t+"px}#"+c+".hidden{bottom:-"+E+"px;opacity:0}",r=document.createElement("style");r.appendChild(document.createTextNode(i)),document.head.insertAdjacentElement("afterbegin",r)}function F(){var t="function"==typeof p?p():p,e=window,n=e.performance,i=e.requestAnimationFrame;if(_<=0||void 0===n||void 0===i)return U(t);var s=n.now(),r=V(),o=r-t;i((function t(e){var n=Math.min((e-s)/_,1);U(r-Math.round(l(n)*o)),n<1&&i(t)}))}function V(){return m.scrollTop||k&&document.documentElement.scrollTop||0}function U(t){m.scrollTop=t,k&&(document.documentElement.scrollTop=t)}function q(t){return.5*(1-Math.cos(Math.PI*t))}x.addEventListener("scroll",D),D()}},"function"==typeof define&&define.amd?define(["exports"],is):"object"===rs(ss)&&"string"!=typeof ss.nodeName?is(ss):is(ns.commonJsStrict={}),(0,ss.addBackToTop)({diameter:40,backgroundColor:"#f7f7f7",textColor:"#FF6B01"});var os,as=s("b5a3y"),ls=s("amyG6"),hs=(T=s("ix4Jr"),b=s("4a6xH"),S=s("7vF8m"),I=s("ffjl9"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}),cs={},us=us||{},ds=hs||self;function fs(){}function ps(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function gs(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ms="closure_uid_"+(1e9*Math.random()>>>0),ys=0;function _s(t,e,n){return t.call.apply(t.bind,arguments)}function vs(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ws(t,e,n){return(ws=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_s:vs).apply(null,arguments)}function Cs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Es(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Ts(){this.s=this.s,this.o=this.o}var bs={};Ts.prototype.s=!1,Ts.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,ms)&&t[ms]||(t[ms]=++ys)}(this);delete bs[t]}},Ts.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Is=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ss=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Ns(t){return Array.prototype.concat.apply([],arguments)}function ks(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function As(t){return/^[\s\xa0]*$/.test(t)}var Rs,xs=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ds(t,e){return-1!=t.indexOf(e)}function Ps(t,e){return t<e?-1:t>e?1:0}t:{var Ls=ds.navigator;if(Ls){var Ms=Ls.userAgent;if(Ms){Rs=Ms;break t}}Rs=""}function Os(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Fs(t){const e={};for(const n in t)e[n]=t[n];return e}var Vs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Us(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Vs.length;e++)n=Vs[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function qs(t){return qs[" "](t),t}qs[" "]=fs;var Bs,js,Hs=Ds(Rs,"Opera"),Ws=Ds(Rs,"Trident")||Ds(Rs,"MSIE"),Gs=Ds(Rs,"Edge"),Ks=Gs||Ws,$s=Ds(Rs,"Gecko")&&!(Ds(Rs.toLowerCase(),"webkit")&&!Ds(Rs,"Edge"))&&!(Ds(Rs,"Trident")||Ds(Rs,"MSIE"))&&!Ds(Rs,"Edge"),zs=Ds(Rs.toLowerCase(),"webkit")&&!Ds(Rs,"Edge");function Qs(){var t=ds.document;return t?t.documentMode:void 0}t:{var Xs="",Ys=(js=Rs,$s?/rv:([^\);]+)(\)|;)/.exec(js):Gs?/Edge\/([\d\.]+)/.exec(js):Ws?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(js):zs?/WebKit\/(\S+)/.exec(js):Hs?/(?:Version)[ \/]?(\S+)/.exec(js):void 0);if(Ys&&(Xs=Ys?Ys[1]:""),Ws){var Js=Qs();if(null!=Js&&Js>parseFloat(Xs)){Bs=String(Js);break t}}Bs=Xs}var Zs,tr={};function er(){return function(t){var e=tr;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=xs(String(Bs)).split("."),n=xs("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Ps(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Ps(0==s[2].length,0==r[2].length)||Ps(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(ds.document&&Ws){var nr=Qs();Zs=nr||(parseInt(Bs,10)||void 0)}else Zs=void 0;var ir=Zs,sr=function(){if(!ds.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ds.addEventListener("test",fs,e),ds.removeEventListener("test",fs,e)}catch(t){}return t}();function rr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function or(t,e){if(rr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($s){t:{try{qs(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ar[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&or.Z.h.call(this)}}rr.prototype.h=function(){this.defaultPrevented=!0},Es(or,rr);var ar={2:"touch",3:"pen",4:"mouse"};or.prototype.h=function(){or.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lr="closure_listenable_"+(1e6*Math.random()|0),hr=0;function cr(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++hr,this.ca=this.fa=!1}function ur(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dr(t){this.src=t,this.g={},this.h=0}function fr(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Is(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ur(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function pr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}dr.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=pr(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new cr(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var gr="closure_lm_"+(1e6*Math.random()|0),mr={};function yr(t,e,n,i,s){if(i&&i.once)return vr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)yr(t,e[r],n,i,s);return null}return n=Sr(n),t&&t[lr]?t.N(e,n,gs(i)?!!i.capture:!!i,s):_r(t,e,n,!1,i,s)}function _r(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=gs(s)?!!s.capture:!!s,a=br(t);if(a||(t[gr]=a=new dr(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Tr;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)sr||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Er(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function vr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vr(t,e[r],n,i,s);return null}return n=Sr(n),t&&t[lr]?t.O(e,n,gs(i)?!!i.capture:!!i,s):_r(t,e,n,!0,i,s)}function wr(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)wr(t,e[r],n,i,s);else i=gs(i)?!!i.capture:!!i,n=Sr(n),t&&t[lr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=pr(r=t.g[e],n,i,s))&&(ur(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=br(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pr(e,n,i,s)),(n=-1<t?e[t]:null)&&Cr(n))}function Cr(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lr])fr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Er(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=br(e))?(fr(n,t),0==n.h&&(n.src=null,e[gr]=null)):ur(t)}}}function Er(t){return t in mr?mr[t]:mr[t]="on"+t}function Tr(t,e){if(t.ca)t=!0;else{e=new or(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Cr(t),t=n.call(i,e)}return t}function br(t){return(t=t[gr])instanceof dr?t:null}var Ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sr(t){return"function"==typeof t?t:(t[Ir]||(t[Ir]=function(e){return t.handleEvent(e)}),t[Ir])}function Nr(){Ts.call(this),this.i=new dr(this),this.P=this,this.I=null}function kr(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new rr(e,t);else if(e instanceof rr)e.target=e.target||t;else{var s=e;Us(e=new rr(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ar(o,i,!0,e)&&s}if(s=Ar(o=e.g=t,i,!0,e)&&s,s=Ar(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=Ar(o=e.g=n[r],i,!1,e)&&s}function Ar(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&fr(t.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}Es(Nr,Ts),Nr.prototype[lr]=!0,Nr.prototype.removeEventListener=function(t,e,n,i){wr(this,t,e,n,i)},Nr.prototype.M=function(){if(Nr.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ur(n[i]);delete e.g[t],e.h--}}this.I=null},Nr.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Nr.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Rr=ds.JSON.stringify;function xr(){var t=Vr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Dr,Pr=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Lr),(t=>t.reset()));class Lr{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Mr(t){ds.setTimeout((()=>{throw t}),0)}function Or(t,e){Dr||function(){var t=ds.Promise.resolve(void 0);Dr=function(){t.then(Ur)}}(),Fr||(Dr(),Fr=!0),Vr.add(t,e)}var Fr=!1,Vr=new class{add(t,e){const n=Pr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Ur(){for(var t;t=xr();){try{t.h.call(t.g)}catch(t){Mr(t)}var e=Pr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fr=!1}function qr(t,e){Nr.call(this),this.h=t||1,this.g=e||ds,this.j=ws(this.kb,this),this.l=Date.now()}function Br(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function jr(t,e,n){if("function"==typeof t)n&&(t=ws(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ws(t.handleEvent,t)}return 2147483647<Number(e)?-1:ds.setTimeout(t,e||0)}function Hr(t){t.g=jr((()=>{t.g=null,t.i&&(t.i=!1,Hr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Es(qr,Nr),(os=qr.prototype).da=!1,os.S=null,os.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kr(this,"tick"),this.da&&(Br(this),this.start()))}},os.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},os.M=function(){qr.Z.M.call(this),Br(this),delete this.g};class Wr extends Ts{l(t){this.h=arguments,this.g?this.i=!0:Hr(this)}M(){super.M(),this.g&&(ds.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Gr(t){Ts.call(this),this.h=t,this.g={}}Es(Gr,Ts);var Kr=[];function $r(t,e,n,i){Array.isArray(n)||(n&&(Kr[0]=n.toString()),n=Kr);for(var s=0;s<n.length;s++){var r=yr(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function zr(t){Os(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Cr(t)}),t),t.g={}}function Qr(){this.g=!0}function Xr(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Rr(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Gr.prototype.M=function(){Gr.Z.M.call(this),zr(this)},Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qr.prototype.Aa=function(){this.g=!1},Qr.prototype.info=function(){};var Yr={},Jr=null;function Zr(){return Jr=Jr||new Nr}function to(t){rr.call(this,Yr.Ma,t)}function eo(t){const e=Zr();kr(e,new to(e,t))}function no(t,e){rr.call(this,Yr.STAT_EVENT,t),this.stat=e}function io(t){const e=Zr();kr(e,new no(e,t))}function so(t,e){rr.call(this,Yr.Na,t),this.size=e}function ro(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ds.setTimeout((function(){t()}),e)}Yr.Ma="serverreachability",Es(to,rr),Yr.STAT_EVENT="statevent",Es(no,rr),Yr.Na="timingevent",Es(so,rr);var oo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ao={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function lo(){}function ho(t){return t.h||(t.h=t.i())}function co(){}lo.prototype.h=null;var uo,fo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function po(){rr.call(this,"d")}function go(){rr.call(this,"c")}function mo(){}function yo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Gr(this),this.P=vo,t=Ks?125:void 0,this.W=new qr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _o}function _o(){this.i=null,this.g="",this.h=!1}Es(po,rr),Es(go,rr),Es(mo,lo),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},uo=new mo;var vo=45e3,wo={},Co={};function Eo(t,e,n){t.K=1,t.v=Go(Uo(e)),t.s=n,t.U=!0,To(t,null)}function To(t,e){t.F=Date.now(),No(t),t.A=Uo(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),sa(n.h,"t",i),t.C=0,n=t.l.H,t.h=new _o,t.g=sl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Wr(ws(t.Ia,t,t.g),t.O)),$r(t.V,t.g,"readystatechange",t.gb),e=t.H?Fs(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),eo(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function bo(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Io(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=So(t,n),i==Co){4==e&&(t.o=4,io(14),s=!1),Xr(t.j,t.m,null,"[Incomplete Response]");break}if(i==wo){t.o=4,io(15),Xr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Xr(t.j,t.m,i,null),Do(t,i)}bo(t)&&i!=Co&&i!=wo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,io(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xa(e),e.L=!0,io(11))):(Xr(t.j,t.m,n,"[Invalid Chunked Response]"),xo(t),Ro(t))}function So(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Co:(n=Number(e.substring(n,i)),isNaN(n)?wo:(i+=1)+n>e.length?Co:(e=e.substr(i,n),t.C=i+n,e))}function No(t){t.Y=Date.now()+t.P,ko(t,t.P)}function ko(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ro(ws(t.eb,t),e)}function Ao(t){t.B&&(ds.clearTimeout(t.B),t.B=null)}function Ro(t){0==t.l.G||t.I||Za(t.l,t)}function xo(t){Ao(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Br(t.W),zr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Do(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ca(n.i,t)))if(n.I=t.N,!t.J&&ca(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ja(n),Ba(n)}Qa(n),io(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=ro(ws(n.ab,n),6e3));if(1>=ha(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else el(n,11)}else if((t.J||n.g==t)&&Ja(n),!As(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Ds(t,"spdy")||Ds(t,"quic")||Ds(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ua(r,r.h),r.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Wo(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=il(i,i.H?i.la:null,i.W),o.J){da(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Ao(a),No(a)),i.g=o}else za(i);0<n.l.length&&Wa(n)}else"stop"!=h[0]&&"close"!=h[0]||el(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?el(n,7):qa(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}eo(4)}catch(t){}}function Po(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ps(t)||"string"==typeof t)Ss(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ps(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ps(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Lo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Lo)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Mo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Oo(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)Oo(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function Oo(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(os=yo.prototype).setTimeout=function(t){this.P=t},os.gb=function(t){t=t.target;const e=this.L;e&&3==Ma(t)?e.l():this.Ia(t)},os.Ia=function(t){try{if(t==this.g)t:{const c=Ma(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||Ks||this.g&&(this.h.h||this.g.ga()||Oa(this.g)))){this.I||4!=c||7==e||eo(8==e||0>=u?3:2),Ao(this);var n=this.g.ba();this.N=n;e:if(bo(this)){var i=Oa(this.g);t="";var s=i.length,r=4==Ma(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){xo(this),Ro(this);var o="";break e}this.h.i=new ds.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!As(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,io(12),xo(this),Ro(this);break t}Xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Do(this,n)}this.U?(Io(this,c,o),Ks&&this.i&&3==c&&($r(this.V,this.W,"tick",this.fb),this.W.start())):(Xr(this.j,this.m,o,null),Do(this,o)),4==c&&xo(this),this.i&&!this.I&&(4==c?Za(this.l,this):(this.i=!1,No(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,io(12)):(this.o=0,io(13)),xo(this),Ro(this)}}}catch(t){}},os.fb=function(){if(this.g){var t=Ma(this.g),e=this.g.ga();this.C<e.length&&(Ao(this),Io(this,t,e),this.i&&4!=t&&No(this))}},os.cancel=function(){this.I=!0,xo(this)},os.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(eo(3),io(17)),xo(this),this.o=2,Ro(this)):ko(this,this.Y-t)},(os=Lo.prototype).R=function(){Mo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},os.T=function(){return Mo(this),this.g.concat()},os.get=function(t,e){return Oo(this.h,t)?this.h[t]:e},os.set=function(t,e){Oo(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},os.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var Fo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Vo(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Vo){this.g=void 0!==e?e:t.g,qo(this,t.j),this.s=t.s,Bo(this,t.i),jo(this,t.m),this.l=t.l,e=t.h;var n=new ta;n.i=e.i,e.g&&(n.g=new Lo(e.g),n.h=e.h),Ho(this,n),this.o=t.o}else t&&(n=String(t).match(Fo))?(this.g=!!e,qo(this,n[1]||"",!0),this.s=Ko(n[2]||""),Bo(this,n[3]||"",!0),jo(this,n[4]),this.l=Ko(n[5]||"",!0),Ho(this,n[6]||"",!0),this.o=Ko(n[7]||"")):(this.g=!!e,this.h=new ta(null,this.g))}function Uo(t){return new Vo(t)}function qo(t,e,n){t.j=n?Ko(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bo(t,e,n){t.i=n?Ko(e,!0):e}function jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ho(t,e,n){e instanceof ta?(t.h=e,function(t,e){e&&!t.j&&(ea(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(na(this,e),sa(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=$o(e,Jo)),t.h=new ta(e,t.g))}function Wo(t,e,n){t.h.set(e,n)}function Go(t){return Wo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ko(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $o(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,zo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Vo.prototype.toString=function(){var t=[],e=this.j;e&&t.push($o(e,Qo,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push($o(e,Qo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push($o(n,"/"==n.charAt(0)?Yo:Xo,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$o(n,Zo)),t.join("")};var Qo=/[#\/\?@]/g,Xo=/[#\?:]/g,Yo=/[#\?]/g,Jo=/[#\?@]/g,Zo=/#/g;function ta(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ea(t){t.g||(t.g=new Lo,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function na(t,e){ea(t),e=ra(t,e),Oo(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Oo((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Mo(t)))}function ia(t,e){return ea(t),e=ra(t,e),Oo(t.g.h,e)}function sa(t,e,n){na(t,e),0<n.length&&(t.i=null,t.g.set(ra(t,e),ks(n)),t.h+=n.length)}function ra(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(os=ta.prototype).add=function(t,e){ea(this),this.i=null,t=ra(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},os.forEach=function(t,e){ea(this),this.g.forEach((function(n,i){Ss(n,(function(n){t.call(e,n,i,this)}),this)}),this)},os.T=function(){ea(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},os.R=function(t){ea(this);var e=[];if("string"==typeof t)ia(this,t)&&(e=Ns(e,this.g.get(ra(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ns(e,t[n])}return e},os.set=function(t,e){return ea(this),this.i=null,ia(this,t=ra(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},os.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},os.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function oa(t){this.l=t||aa,ds.PerformanceNavigationTiming?t=0<(t=ds.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ds.g&&ds.g.Ea&&ds.g.Ea()&&ds.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aa=10;function la(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ha(t){return t.h?1:t.g?t.g.size:0}function ca(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ua(t,e){t.g?t.g.add(e):t.h=e}function da(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function fa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ks(t.i)}function pa(){}function ga(){this.g=new pa}function ma(t,e,n){const i=n||"";try{Po(t,(function(t,n){let s=t;gs(t)&&(s=Rr(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ya(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function _a(t){this.l=t.$b||null,this.j=t.ib||!1}function va(t,e){Nr.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oa.prototype.cancel=function(){if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},pa.prototype.stringify=function(t){return ds.JSON.stringify(t,void 0)},pa.prototype.parse=function(t){return ds.JSON.parse(t,void 0)},Es(_a,lo),_a.prototype.g=function(){return new va(this.l,this.j)},_a.prototype.i=function(t){return function(){return t}}({}),Es(va,Nr);var wa=0;function Ca(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ta(t)}function Ta(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(os=va.prototype).open=function(t,e){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ta(this)},os.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ds).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},os.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ea(this)),this.readyState=wa},os.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ta(this)),this.g&&(this.readyState=3,Ta(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ds.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ca(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},os.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ea(this):Ta(this),3==this.readyState&&Ca(this)}},os.Ua=function(t){this.g&&(this.response=this.responseText=t,Ea(this))},os.Ta=function(t){this.g&&(this.response=t,Ea(this))},os.ha=function(){this.g&&Ea(this)},os.setRequestHeader=function(t,e){this.v.append(t,e)},os.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},os.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(va.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ba=ds.JSON.parse;function Ia(t){Nr.call(this),this.headers=new Lo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sa,this.K=this.L=!1}Es(Ia,Nr);var Sa="",Na=/^https?$/i,ka=["POST","PUT"];function Aa(t){return"content-type"==t.toLowerCase()}function Ra(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xa(t),Pa(t)}function xa(t){t.D||(t.D=!0,kr(t,"complete"),kr(t,"error"))}function Da(t){if(t.h&&void 0!==us&&(!t.C[1]||4!=Ma(t)||2!=t.ba()))if(t.v&&4==Ma(t))jr(t.Fa,0,t);else if(kr(t,"readystatechange"),4==Ma(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(Fo)[1]||null;if(!s&&ds.self&&ds.self.location){var r=ds.self.location.protocol;s=r.substr(0,r.length-1)}i=!Na.test(s?s.toLowerCase():"")}n=i}if(n)kr(t,"complete"),kr(t,"success");else{t.m=6;try{var o=2<Ma(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",xa(t)}}finally{Pa(t)}}}function Pa(t,e){if(t.g){La(t);const n=t.g,i=t.C[0]?fs:null;t.g=null,t.C=null,e||kr(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function La(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ds.clearTimeout(t.A),t.A=null)}function Ma(t){return t.g?t.g.readyState:0}function Oa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Sa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Fa(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Os(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Wo(t,e,n))}function Va(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ua(t){this.za=0,this.l=[],this.h=new Qr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Va("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Va("baseRetryDelayMs",5e3,t),this.$a=Va("retryDelaySeedMs",1e4,t),this.Ya=Va("forwardChannelMaxRetries",2,t),this.ra=Va("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new oa(t&&t.concurrentRequestLimit),this.Ca=new ga,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function qa(t){if(ja(t),3==t.G){var e=t.V++,n=Uo(t.F);Wo(n,"SID",t.J),Wo(n,"RID",e),Wo(n,"TYPE","terminate"),Ka(t,n),(e=new yo(t,t.h,e,void 0)).K=2,e.v=Go(Uo(n)),n=!1,ds.navigator&&ds.navigator.sendBeacon&&(n=ds.navigator.sendBeacon(e.v.toString(),"")),!n&&ds.Image&&((new Image).src=e.v,n=!0),n||(e.g=sl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),No(e)}nl(t)}function Ba(t){t.g&&(Xa(t),t.g.cancel(),t.g=null)}function ja(t){Ba(t),t.u&&(ds.clearTimeout(t.u),t.u=null),Ja(t),t.i.cancel(),t.m&&("number"==typeof t.m&&ds.clearTimeout(t.m),t.m=null)}function Ha(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Wa(t)}function Wa(t){la(t.i)||t.m||(t.m=!0,Or(t.Ha,t),t.C=0)}function Ga(t,e){var n;n=e?e.m:t.V++;const i=Uo(t.F);Wo(i,"SID",t.J),Wo(i,"RID",n),Wo(i,"AID",t.U),Ka(t,i),t.o&&t.s&&Fa(i,t.o,t.s),n=new yo(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$a(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ua(t.i,n),Eo(n,i,e)}function Ka(t,e){t.j&&Po({},(function(t,n){Wo(e,n,t)}))}function $a(t,e,n){n=Math.min(t.l.length,n);var i=t.j?ws(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{ma(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function za(t){t.g||t.u||(t.Y=1,Or(t.Ga,t),t.A=0)}function Qa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ro(ws(t.Ga,t),tl(t,t.A)),t.A++,!0)}function Xa(t){null!=t.B&&(ds.clearTimeout(t.B),t.B=null)}function Ya(t){t.g=new yo(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Uo(t.oa);Wo(e,"RID","rpc"),Wo(e,"SID",t.J),Wo(e,"CI",t.N?"0":"1"),Wo(e,"AID",t.U),Ka(t,e),Wo(e,"TYPE","xmlhttp"),t.o&&t.s&&Fa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Go(Uo(e)),n.s=null,n.U=!0,To(n,t)}function Ja(t){null!=t.v&&(ds.clearTimeout(t.v),t.v=null)}function Za(t,e){var n=null;if(t.g==e){Ja(t),Xa(t),t.g=null;var i=2}else{if(!ca(t.i,e))return;n=e.D,da(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;kr(i=Zr(),new so(i,n,e,s)),Wa(t)}else za(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(ha(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ro(ws(t.Ha,t,e),tl(t,t.C)),t.C++,0)))}(t,e)||2==i&&Qa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:el(t,5);break;case 4:el(t,10);break;case 3:el(t,6);break;default:el(t,2)}}function tl(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function el(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=ws(t.jb,t);n||(n=new Vo("//www.google.com/images/cleardot.gif"),ds.location&&"http"==ds.location.protocol||qo(n,"https"),Go(n)),function(t,e){const n=new Qr;if(ds.Image){const i=new Image;i.onload=Cs(ya,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Cs(ya,n,i,"TestLoadImage: error",!1,e),i.onabort=Cs(ya,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Cs(ya,n,i,"TestLoadImage: timeout",!1,e),ds.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else io(2);t.G=0,t.j&&t.j.va(e),nl(t),ja(t)}function nl(t){t.G=0,t.I=-1,t.j&&(0==fa(t.i).length&&0==t.l.length||(t.i.i.length=0,ks(t.l),t.l.length=0),t.j.ua())}function il(t,e,n){let i=function(t){return t instanceof Vo?Uo(t):new Vo(t,void 0)}(n);if(""!=i.i)e&&Bo(i,e+"."+i.i),jo(i,i.m);else{const t=ds.location;i=function(t,e,n,i){var s=new Vo(null,void 0);return t&&qo(s,t),e&&Bo(s,e),n&&jo(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Os(t.aa,(function(t,e){Wo(i,e,t)})),e=t.D,n=t.sa,e&&n&&Wo(i,e,n),Wo(i,"VER",t.ma),Ka(t,i),i}function sl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Ia(new _a({ib:!0})):new Ia(t.qa)).L=t.H,e}function rl(){}function ol(){if(Ws&&!(10<=Number(ir)))throw Error("Environmental error: no available transport.")}function al(t,e){Nr.call(this),this.g=new Ua(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!As(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!As(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new cl(this)}function ll(t){po.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function hl(){go.call(this),this.status=1}function cl(t){this.g=t}(os=Ia.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uo.g(),this.C=this.u?ho(this.u):ho(uo),this.g.onreadystatechange=ws(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ra(this,t)}t=n||"";const s=new Lo(this.headers);i&&Po(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=Aa;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=ds.FormData&&t instanceof ds.FormData,!(0<=Is(ka,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{La(this),0<this.B&&((this.K=function(t){return Ws&&er()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ws(this.pa,this)):this.A=jr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ra(this,t)}},os.pa=function(){void 0!==us&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kr(this,"timeout"),this.abort(8))},os.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kr(this,"complete"),kr(this,"abort"),Pa(this))},os.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pa(this,!0)),Ia.Z.M.call(this)},os.Fa=function(){this.s||(this.F||this.v||this.l?Da(this):this.cb())},os.cb=function(){Da(this)},os.ba=function(){try{return 2<Ma(this)?this.g.status:-1}catch(t){return-1}},os.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},os.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ba(e)}},os.Da=function(){return this.m},os.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(os=Ua.prototype).ma=8,os.G=1,os.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},os.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new yo(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Fs(r),Us(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=$a(this,s,e),Wo(n=Uo(this.F),"RID",t),Wo(n,"CVER",22),this.D&&Wo(n,"X-HTTP-Session-Id",this.D),Ka(this,n),this.o&&r&&Fa(n,this.o,r),ua(this.i,s),this.Ra&&Wo(n,"TYPE","init"),this.ja?(Wo(n,"$req",e),Wo(n,"SID","null"),s.$=!0,Eo(s,n,null)):Eo(s,n,e),this.G=2}}else 3==this.G&&(t?Ga(this,t):0==this.l.length||la(this.i)||Ga(this))},os.Ga=function(){if(this.u=null,Ya(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ro(ws(this.bb,this),t)}},os.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,io(10),Ba(this),Ya(this))},os.ab=function(){null!=this.v&&(this.v=null,Ba(this),Qa(this),io(19))},os.jb=function(t){t?(this.h.info("Successfully pinged google.com"),io(2)):(this.h.info("Failed to ping google.com"),io(1))},(os=rl.prototype).xa=function(){},os.wa=function(){},os.va=function(){},os.ua=function(){},os.Oa=function(){},ol.prototype.g=function(t,e){return new al(t,e)},Es(al,Nr),al.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Or(ws(t.hb,t,e))),io(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=il(t,null,t.W),Wa(t)},al.prototype.close=function(){qa(this.g)},al.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Ha(this.g,e)}else this.v?((e={}).__data__=Rr(t),Ha(this.g,e)):Ha(this.g,t)},al.prototype.M=function(){this.g.j=null,delete this.j,qa(this.g),delete this.g,al.Z.M.call(this)},Es(ll,po),Es(hl,go),Es(cl,rl),cl.prototype.xa=function(){kr(this.g,"a")},cl.prototype.wa=function(t){kr(this.g,new ll(t))},cl.prototype.va=function(t){kr(this.g,new hl(t))},cl.prototype.ua=function(){kr(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,al.prototype.send=al.prototype.u,al.prototype.open=al.prototype.m,al.prototype.close=al.prototype.close,oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,ao.COMPLETE="complete",co.EventType=fo,fo.OPEN="a",fo.CLOSE="b",fo.ERROR="c",fo.MESSAGE="d",Nr.prototype.listen=Nr.prototype.N,Ia.prototype.listenOnce=Ia.prototype.O,Ia.prototype.getLastError=Ia.prototype.La,Ia.prototype.getLastErrorCode=Ia.prototype.Da,Ia.prototype.getStatus=Ia.prototype.ba,Ia.prototype.getResponseJson=Ia.prototype.Qa,Ia.prototype.getResponseText=Ia.prototype.ga,Ia.prototype.send=Ia.prototype.ea;var ul=cs.createWebChannelTransport=function(){return new ol},dl=cs.getStatEventTarget=function(){return Zr()},fl=cs.ErrorCode=oo,pl=cs.EventType=ao,gl=cs.Event=Yr,ml=cs.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yl=cs.FetchXmlHttpFactory=_a,_l=cs.WebChannel=co,vl=cs.XhrIo=Ia;N=s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}wl.UNAUTHENTICATED=new wl(null),wl.GOOGLE_CREDENTIALS=new wl("google-credentials-uid"),wl.FIRST_PARTY=new wl("first-party-uid"),wl.MOCK_USER=new wl("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Cl="9.8.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new(0,S.Logger)("@firebase/firestore");function Tl(){return El.logLevel}function bl(t,...e){if(El.logLevel<=S.LogLevel.DEBUG){const n=e.map(Nl);El.debug(`Firestore (${Cl}): ${t}`,...n)}}function Il(t,...e){if(El.logLevel<=S.LogLevel.ERROR){const n=e.map(Nl);El.error(`Firestore (${Cl}): ${t}`,...n)}}function Sl(t,...e){if(El.logLevel<=S.LogLevel.WARN){const n=e.map(Nl);El.warn(`Firestore (${Cl}): ${t}`,...n)}}function Nl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t="Unexpected state"){const e=`FIRESTORE (${Cl}) INTERNAL ASSERTION FAILED: `+t;throw Il(e),new Error(e)}function Al(t,e){t||kl()}function Rl(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Dl extends I.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ml{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wl.UNAUTHENTICATED)))}shutdown(){}}class Ol{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Pl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pl,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{bl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(bl("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pl)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(bl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Al("string"==typeof e.accessToken),new Ll(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Al(null===t||"string"==typeof t),new wl(t)}constructor(t){this.t=t,this.currentUser=wl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Fl{constructor(t,e,n){this.type="FirstParty",this.user=wl.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Vl{getToken(){return Promise.resolve(new Fl(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(wl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class Ul{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ql{start(t,e){const n=t=>{null!=t.error&&bl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,bl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{bl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):bl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Al("string"==typeof t.token),this.p=t.token,new Ul(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bl(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Bl(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Hl(t,e){return t<e?-1:t>e?1:0}function Wl(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gl{static now(){return Gl.fromMillis(Date.now())}static fromDate(t){return Gl.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Gl(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Hl(this.nanoseconds,t.nanoseconds):Hl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Dl(xl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Dl(xl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Dl(xl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Dl(xl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{static fromTimestamp(t){return new Kl(t)}static min(){return new Kl(new Gl(0,0))}static max(){return new Kl(new Gl(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{get length(){return this.len}isEqual(t){return 0===$l.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $l?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&kl(),void 0===n?n=t.length-e:n>t.length-e&&kl(),this.segments=t,this.offset=e,this.len=n}}class zl extends $l{construct(t,e,n){return new zl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Dl(xl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new zl(e)}static emptyPath(){return new zl([])}}const Ql=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xl extends $l{construct(t,e,n){return new Xl(t,e,n)}static isValidIdentifier(t){return Ql.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Xl(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Dl(xl.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Dl(xl.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Dl(xl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Dl(xl.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xl(e)}static emptyPath(){return new Xl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{static fromPath(t){return new Yl(zl.fromString(t))}static fromName(t){return new Yl(zl.fromString(t).popFirst(5))}static empty(){return new Yl(zl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===zl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return zl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Yl(new zl(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Jl.UNKNOWN_ID=-1;function Zl(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Kl.fromTimestamp(1e9===i?new Gl(n+1,0):new Gl(n,i));return new eh(s,Yl.empty(),e)}function th(t){return new eh(t.readTime,t.key,-1)}class eh{static min(){return new eh(Kl.min(),Yl.empty(),-1)}static max(){return new eh(Kl.max(),Yl.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function nh(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Yl.comparator(t.documentKey,e.documentKey),0!==n?n:Hl(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sh{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t){if(t.code!==xl.FAILED_PRECONDITION||t.message!==ih)throw t;bl("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&kl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new oh(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof oh?e:oh.resolve(e)}catch(t){return oh.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):oh.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):oh.reject(e)}static resolve(t){return new oh(((e,n)=>{e(t)}))}static reject(t){return new oh(((e,n)=>{n(t)}))}static waitFor(t){return new oh(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=oh.resolve(!1);for(const n of t)e=e.next((t=>t?oh.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new oh(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new oh(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lh{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ch(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lh.ot=-1;class dh{insert(t,e){return new dh(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ph.BLACK,null,null))}remove(t){return new dh(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ph.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fh(this.root,t,this.comparator,!1)}getReverseIterator(){return new fh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fh(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||ph.EMPTY}}class fh{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class ph{copy(t,e,n,i,s){return new ph(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ph.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ph.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ph.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ph.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw kl();if(this.right.isRed())throw kl();const t=this.left.check();if(t!==this.right.check())throw kl();return t+(this.isRed()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:ph.RED,this.left=null!=i?i:ph.EMPTY,this.right=null!=s?s:ph.EMPTY,this.size=this.left.size+1+this.right.size}}ph.EMPTY=null,ph.RED=!0,ph.BLACK=!1,ph.EMPTY=new class{get key(){throw kl()}get value(){throw kl()}get color(){throw kl()}get left(){throw kl()}get right(){throw kl()}copy(t,e,n,i,s){return this}insert(t,e,n){return new ph(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mh(this.data.getIterator())}getIteratorFrom(t){return new mh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof gh))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new gh(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new dh(this.comparator)}}class mh{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yh{static empty(){return new yh([])}unionWith(t){let e=new gh(Xl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new yh(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Wl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Xl.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static fromBase64String(t){const e=atob(t);return new vh(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new vh(e)}[_h](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Hl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}vh.EMPTY_BYTE_STRING=new vh("");const wh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ch(t){if(Al(!!t),"string"==typeof t){let e=0;const n=wh.exec(t);if(Al(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Eh(t.seconds),nanos:Eh(t.nanos)}}function Eh(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Th(t){return"string"==typeof t?vh.fromBase64String(t):vh.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ih(t){const e=Ch(t.mapValue.fields.__local_write_time__.timestampValue);return new Gl(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Nh{static empty(){return new Nh("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Nh&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){return null==t}function Ah(t){return 0===t&&1/t==-1/0}function Rh(t){return"number"==typeof t&&Number.isInteger(t)&&!Ah(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dh(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bh(t)?4:Hh(t)?9007199254740991:10:kl()}function Ph(t,e){if(t===e)return!0;const n=Dh(t);if(n!==Dh(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ih(t).isEqual(Ih(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ch(t.timestampValue),i=Ch(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,Th(t.bytesValue).isEqual(Th(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Eh(t.geoPointValue.latitude)===Eh(e.geoPointValue.latitude)&&Eh(t.geoPointValue.longitude)===Eh(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Eh(t.integerValue)===Eh(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Eh(t.doubleValue),i=Eh(e.doubleValue);return n===i?Ah(n)===Ah(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Wl(t.arrayValue.values||[],e.arrayValue.values||[],Ph);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(hh(n)!==hh(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Ph(n[t],i[t])))return!1;return!0}(t,e);default:return kl()}var i}function Lh(t,e){return void 0!==(t.values||[]).find((t=>Ph(t,e)))}function Mh(t,e){if(t===e)return 0;const n=Dh(t),i=Dh(e);if(n!==i)return Hl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Hl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Eh(t.integerValue||t.doubleValue),i=Eh(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Oh(t.timestampValue,e.timestampValue);case 4:return Oh(Ih(t),Ih(e));case 5:return Hl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Th(t),i=Th(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Hl(n[t],i[t]);if(0!==e)return e}return Hl(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Hl(Eh(t.latitude),Eh(e.latitude));return 0!==n?n:Hl(Eh(t.longitude),Eh(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Mh(n[t],i[t]);if(e)return e}return Hl(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===xh.mapValue&&e===xh.mapValue)return 0;if(t===xh.mapValue)return 1;if(e===xh.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Hl(i[t],r[t]);if(0!==e)return e;const o=Mh(n[i[t]],s[r[t]]);if(0!==o)return o}return Hl(i.length,r.length)}(t.mapValue,e.mapValue);default:throw kl()}}function Oh(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Hl(t,e);const n=Ch(t),i=Ch(e),s=Hl(n.seconds,i.seconds);return 0!==s?s:Hl(n.nanos,i.nanos)}function Fh(t){return Vh(t)}function Vh(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ch(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Th(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Yl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Vh(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Vh(t.fields[s])}`;return n+"}"}(t.mapValue):kl()}function Uh(t){return!!t&&"integerValue"in t}function qh(t){return!!t&&"arrayValue"in t}function Bh(t){return!!t&&"mapValue"in t}function jh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ch(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=jh(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jh(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hh(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wh{static empty(){return new Wh({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Bh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=jh(e)}setAll(t){let e=Xl.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=jh(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Bh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ph(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Bh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ch(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Wh(jh(this.value))}constructor(t){this.value=t}}function Gh(t){const e=[];return ch(t.fields,((t,n)=>{const i=new Xl([t]);if(Bh(n)){const t=Gh(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new yh(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Kh{static newInvalidDocument(t){return new Kh(t,0,Kl.min(),Kl.min(),Wh.empty(),0)}static newFoundDocument(t,e,n){return new Kh(t,1,e,Kl.min(),n,0)}static newNoDocument(t,e){return new Kh(t,2,e,Kl.min(),Wh.empty(),0)}static newUnknownDocument(t,e){return new Kh(t,3,e,Kl.min(),Wh.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wh.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Kl.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Kh&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kh(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ut=null}}function zh(t,e=null,n=[],i=[],s=null,r=null,o=null){return new $h(t,e,n,i,s,r,o)}function Qh(t){const e=Rl(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+Fh(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),kh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Fh(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Fh(t))).join(",")),e.ut=t}return e.ut}function Xh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lc(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Ph(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cc(t.startAt,e.startAt)&&cc(t.endAt,e.endAt)}class Yh extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Jh(t,e,n):"array-contains"===e?new nc(t,n):"in"===e?new ic(t,n):"not-in"===e?new sc(t,n):"array-contains-any"===e?new rc(t,n):new Yh(t,e,n)}static ct(t,e,n){return"in"===e?new Zh(t,n):new tc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Mh(e,this.value)):null!==e&&Dh(this.value)===Dh(e)&&this.at(Mh(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return kl()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Jh extends Yh{matches(t){const e=Yl.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=Yl.fromName(n.referenceValue)}}class Zh extends Yh{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=ec("in",e)}}class tc extends Yh{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=ec("not-in",e)}}function ec(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Yl.fromName(t.referenceValue)))}class nc extends Yh{matches(t){const e=t.data.field(this.field);return qh(e)&&Lh(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class ic extends Yh{matches(t){const e=t.data.field(this.field);return null!==e&&Lh(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class sc extends Yh{matches(t){if(Lh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Lh(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class rc extends Yh{matches(t){const e=t.data.field(this.field);return!(!qh(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Lh(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class oc{constructor(t,e){this.position=t,this.inclusive=e}}class ac{constructor(t,e="asc"){this.field=t,this.dir=e}}function lc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function hc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Yl.comparator(Yl.fromName(o.referenceValue),n.key):Mh(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function cc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ph(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function dc(t,e,n,i,s,r,o,a){return new uc(t,e,n,i,s,r,o,a)}function fc(t){return new uc(t)}function pc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gc(t){for(const e of t.filters)if(e.ht())return e.field;return null}function mc(t){return null!==t.collectionGroup}function yc(t){const e=Rl(t);if(null===e.lt){e.lt=[];const t=gc(e),n=pc(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ac(t)),e.lt.push(new ac(Xl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ac(Xl.keyField(),t))}}}return e.lt}function _c(t){const e=Rl(t);if(!e.ft)if("F"===e.limitType)e.ft=zh(e.path,e.collectionGroup,yc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of yc(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ac(n.field,e))}const n=e.endAt?new oc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new oc(e.startAt.position,e.startAt.inclusive):null;e.ft=zh(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function vc(t,e,n){return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wc(t,e){return Xh(_c(t),_c(e))&&t.limitType===e.limitType}function Cc(t){return`${Qh(_c(t))}|lt:${t.limitType}`}function Ec(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${Fh(e.value)}`})).join(", ")}]`),kh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Fh(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Fh(t))).join(",")),`Target(${e})`}(_c(t))}; limitType=${t.limitType})`}function Tc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Yl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=hc(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,yc(n),i)||n.endAt&&!function(t,e,n){const i=hc(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,yc(n),i)));var n,i}function bc(t){return(e,n)=>{let i=!1;for(const s of yc(t)){const t=Ic(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Ic(t,e,n){const i=t.field.isKeyField()?Yl.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Mh(i,s):kl()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return kl()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ah(e)?"-0":e}}function Nc(t){return{integerValue:""+t}}function kc(t,e){return Rh(e)?Nc(e):Sc(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this._=void 0}}function Rc(t,e,n){return t instanceof Pc?Lc(t,e):t instanceof Mc?Oc(t,e):n}function xc(t,e){var n,i;return t instanceof Fc?Uh(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class Dc extends Ac{}class Pc extends Ac{constructor(t){super(),this.elements=t}}function Lc(t,e){const n=Uc(e);for(const e of t.elements)n.some((t=>Ph(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Mc extends Ac{constructor(t){super(),this.elements=t}}function Oc(t,e){let n=Uc(e);for(const e of t.elements)n=n.filter((t=>!Ph(t,e)));return{arrayValue:{values:n}}}class Fc extends Ac{constructor(t,e){super(),this.wt=t,this._t=e}}function Vc(t){return Eh(t.integerValue||t.doubleValue)}function Uc(t){return qh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e){this.version=t,this.transformResults=e}}class Bc{static none(){return new Bc}static exists(t){return new Bc(void 0,t)}static updateTime(t){return new Bc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function jc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Hc{}function Wc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new tu(t.key,Bc.none()):new Qc(t.key,t.data,Bc.none());{const n=t.data,i=Wh.empty();let s=new gh(Xl.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Xc(t.key,i,new yh(s.toArray()),Bc.none())}}function Gc(t,e,n){var i;t instanceof Qc?function(t,e,n){const i=t.value.clone(),s=Jc(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Xc?function(t,e,n){if(!jc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Jc(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Yc(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Kc(t,e,n,i){return t instanceof Qc?function(t,e,n,i){if(!jc(t.precondition,e))return n;const s=t.value.clone(),r=Zc(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Xc?function(t,e,n,i){if(!jc(t.precondition,e))return n;const s=Zc(t.fieldTransforms,i,e),r=e.data;return r.setAll(Yc(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(s=e,r=n,jc(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function $c(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=xc(i.transform,t||null);null!=s&&(null===n&&(n=Wh.empty()),n.set(i.field,s))}return n||null}function zc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Wl(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Pc&&i instanceof Pc||n instanceof Mc&&i instanceof Mc?Wl(n.elements,i.elements,Ph):n instanceof Fc&&i instanceof Fc?Ph(n._t,i._t):n instanceof Dc&&i instanceof Dc);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Qc extends Hc{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Xc extends Hc{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Yc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Jc(t,e,n){const i=new Map;Al(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Rc(o,a,n[s]))}return i}function Zc(t,e,n){const i=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=e,(s=t)instanceof Dc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):s instanceof Pc?Lc(s,r):s instanceof Mc?Oc(s,r):function(t,e){const n=xc(t,e),i=Vc(n)+Vc(t._t);return Uh(n)&&Uh(t._t)?Nc(i):Sc(t.wt,i)}(s,r)))}var s,r,o;return i}class tu extends Hc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class eu extends Hc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nu,iu;function su(t){switch(t){default:return kl();case xl.CANCELLED:case xl.UNKNOWN:case xl.DEADLINE_EXCEEDED:case xl.RESOURCE_EXHAUSTED:case xl.INTERNAL:case xl.UNAVAILABLE:case xl.UNAUTHENTICATED:return!1;case xl.INVALID_ARGUMENT:case xl.NOT_FOUND:case xl.ALREADY_EXISTS:case xl.PERMISSION_DENIED:case xl.FAILED_PRECONDITION:case xl.ABORTED:case xl.OUT_OF_RANGE:case xl.UNIMPLEMENTED:case xl.DATA_LOSS:return!0}}function ru(t){if(void 0===t)return Il("GRPC error has no .code"),xl.UNKNOWN;switch(t){case nu.OK:return xl.OK;case nu.CANCELLED:return xl.CANCELLED;case nu.UNKNOWN:return xl.UNKNOWN;case nu.DEADLINE_EXCEEDED:return xl.DEADLINE_EXCEEDED;case nu.RESOURCE_EXHAUSTED:return xl.RESOURCE_EXHAUSTED;case nu.INTERNAL:return xl.INTERNAL;case nu.UNAVAILABLE:return xl.UNAVAILABLE;case nu.UNAUTHENTICATED:return xl.UNAUTHENTICATED;case nu.INVALID_ARGUMENT:return xl.INVALID_ARGUMENT;case nu.NOT_FOUND:return xl.NOT_FOUND;case nu.ALREADY_EXISTS:return xl.ALREADY_EXISTS;case nu.PERMISSION_DENIED:return xl.PERMISSION_DENIED;case nu.FAILED_PRECONDITION:return xl.FAILED_PRECONDITION;case nu.ABORTED:return xl.ABORTED;case nu.OUT_OF_RANGE:return xl.OUT_OF_RANGE;case nu.UNIMPLEMENTED:return xl.UNIMPLEMENTED;case nu.DATA_LOSS:return xl.DATA_LOSS;default:return kl()}}(iu=nu||(nu={}))[iu.OK=0]="OK",iu[iu.CANCELLED=1]="CANCELLED",iu[iu.UNKNOWN=2]="UNKNOWN",iu[iu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",iu[iu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",iu[iu.NOT_FOUND=5]="NOT_FOUND",iu[iu.ALREADY_EXISTS=6]="ALREADY_EXISTS",iu[iu.PERMISSION_DENIED=7]="PERMISSION_DENIED",iu[iu.UNAUTHENTICATED=16]="UNAUTHENTICATED",iu[iu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",iu[iu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",iu[iu.ABORTED=10]="ABORTED",iu[iu.OUT_OF_RANGE=11]="OUT_OF_RANGE",iu[iu.UNIMPLEMENTED=12]="UNIMPLEMENTED",iu[iu.INTERNAL=13]="INTERNAL",iu[iu.UNAVAILABLE=14]="UNAVAILABLE",iu[iu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ou{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ch(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return uh(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new dh(Yl.comparator);function lu(){return au}const hu=new dh(Yl.comparator);function cu(...t){let e=hu;for(const n of t)e=e.insert(n.key,n);return e}function uu(t){let e=hu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function du(){return pu()}function fu(){return pu()}function pu(){return new ou((t=>t.toString()),((t,e)=>t.isEqual(e)))}const gu=new dh(Yl.comparator),mu=new gh(Yl.comparator);function yu(...t){let e=mu;for(const n of t)e=e.add(n);return e}const _u=new gh(Hl);function vu(){return _u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.databaseId=t,this.dt=e}}function Cu(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eu(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Tu(t,e){return Cu(t,e.toTimestamp())}function bu(t){return Al(!!t),Kl.fromTimestamp(function(t){const e=Ch(t);return new Gl(e.seconds,e.nanos)}(t))}function Iu(t,e){return(n=t,new zl(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Su(t){const e=zl.fromString(t);return Al(Vu(e)),e}function Nu(t,e){return Iu(t.databaseId,e.path)}function ku(t){const e=Su(t);return 4===e.length?zl.emptyPath():Ru(e)}function Au(t){return new zl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ru(t){return Al(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xu(t,e,n){return{name:Nu(t,e),fields:n.value.mapValue.fields}}function Du(t,e){let n;if(e instanceof Qc)n={update:xu(t,e.key,e.value)};else if(e instanceof tu)n={delete:Nu(t,e.key)};else if(e instanceof Xc)n={update:xu(t,e.key,e.data),updateMask:Fu(e.fieldMask)};else{if(!(e instanceof eu))return kl();n={verify:Nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Dc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Pc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Mc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Fc)return{fieldPath:e.field.canonicalString(),increment:n._t};throw kl()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(s=e.precondition).updateTime?{updateTime:Tu(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:kl())),n;var i,s}function Pu(t){let e=ku(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Al(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Lu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new ac(Mu((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,kh(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new oc(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new oc(n,e)}(n.endAt)),dc(e,s,o,r,a,"F",l,h)}function Lu(t){return t?void 0!==t.unaryFilter?[Ou(t)]:void 0!==t.fieldFilter?[(e=t,Yh.create(Mu(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return kl()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Lu(t))).reduce(((t,e)=>t.concat(e))):kl():[];var e}function Mu(t){return Xl.fromServerFormat(t.fieldPath)}function Ou(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Mu(t.unaryFilter.field);return Yh.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Mu(t.unaryFilter.field);return Yh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mu(t.unaryFilter.field);return Yh.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Mu(t.unaryFilter.field);return Yh.create(s,"!=",{nullValue:"NULL_VALUE"});default:return kl()}}function Fu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Vu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bu=qu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ju{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Gc(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Kc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Kc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fu();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Wc(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Kl.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),yu())}isEqual(t){return this.batchId===t.batchId&&Wl(this.mutations,t.mutations,((t,e)=>zc(t,e)))&&Wl(this.baseMutations,t.baseMutations,((t,e)=>zc(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class Hu{static from(t,e,n){Al(t.mutations.length===n.length);let i=gu;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new Hu(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){this.ne=t}}function Ku(t){const e=Pu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?vc(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Eh(t.integerValue));else if("doubleValue"in t){const n=Eh(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Ah(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Th(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Hh(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):kl()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),Yl.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}$u.ye=new $u;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zu{addToCollectionParentIndex(t,e){return this.ze.add(e),oh.resolve()}getCollectionParents(t,e){return oh.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return oh.resolve()}deleteFieldIndex(t,e){return oh.resolve()}getDocumentsMatchingTarget(t,e){return oh.resolve(null)}getIndexType(t,e){return oh.resolve(0)}getFieldIndexes(t,e){return oh.resolve([])}getNextCollectionGroupToUpdate(t){return oh.resolve(null)}getMinOffset(t,e){return oh.resolve(eh.min())}getMinOffsetFromCollectionGroup(t,e){return oh.resolve(eh.min())}updateCollectionGroup(t,e,n){return oh.resolve()}updateIndexEntries(t,e){return oh.resolve()}constructor(){this.ze=new Qu}}class Qu{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new gh(zl.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new gh(zl.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Xu{static withCacheSize(t){return new Xu(t,Xu.DEFAULT_COLLECTION_PERCENTILE,Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xu.DEFAULT_COLLECTION_PERCENTILE=10,Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xu.DEFAULT=new Xu(41943040,Xu.DEFAULT_COLLECTION_PERCENTILE,Xu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xu.DISABLED=new Xu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yu{next(){return this.En+=2,this.En}static An(){return new Yu(0)}static Rn(){return new Yu(-1)}constructor(t){this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ju{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Kh.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?oh.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new ou((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Kc(n.mutation,t,yh.empty(),Gl.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,yu()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=yu()){const i=du();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=cu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=du();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,yu())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=lu();const r=pu(),o=pu();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Xc)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Kc(o.mutation,e,o.mutation.getFieldMask(),Gl.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Zu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=pu();let i=new dh(((t,e)=>t-e)),s=yu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||yh.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||yu()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,h=fu();l.forEach((t=>{if(!s.has(t)){const i=Wc(e.get(t),n.get(t));null!==i&&h.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return oh.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,Yl.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):mc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):oh.resolve(du());let o=-1,a=s;return r.next((e=>oh.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?oh.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,yu()))).next((t=>({batchId:o,changes:uu(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Yl(e)).next((t=>{let e=cu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=cu();return this.indexManager.getCollectionParents(t,i).next((r=>oh.forEach(r,(r=>{const o=(a=e,l=r.child(i),new uc(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,Kh.newInvalidDocument(n)))}));let n=cu();return i.forEach(((i,s)=>{const r=t.get(i);void 0!==r&&Kc(r.mutation,s,yh.empty(),Gl.now()),Tc(e,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):oh.resolve(Kh.newInvalidDocument(e))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{getBundleMetadata(t,e){return oh.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:bu(n.createTime)}),oh.resolve()}getNamedQuery(t,e){return oh.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:Ku(n.bundledQuery),readTime:bu(n.readTime)}),oh.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{getOverlay(t,e){return oh.resolve(this.overlays.get(e))}getOverlays(t,e){const n=du();return oh.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),oh.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),oh.resolve()}getOverlaysForCollection(t,e,n){const i=du(),s=e.length+1,r=new Yl(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return oh.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new dh(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=du(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=du(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return oh.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Wu(e,n));let s=this.Xn.get(e);void 0===s&&(s=yu(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}constructor(){this.overlays=new dh(Yl.comparator),this.Xn=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new sd(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new sd(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Yl(new zl([])),n=new sd(e,t),i=new sd(e,t+1),s=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Yl(new zl([])),n=new sd(e,t),i=new sd(e,t+1);let s=yu();return this.es.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new sd(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new gh(sd.ts),this.es=new gh(sd.ns)}}class sd{static ts(t,e){return Yl.comparator(t.key,e.key)||Hl(t.ls,e.ls)}static ns(t,e){return Hl(t.ls,e.ls)||Yl.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{checkEmpty(t){return oh.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ju(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.ds=this.ds.add(new sd(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return oh.resolve(r)}lookupMutationBatch(t,e){return oh.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),s=i<0?0:i;return oh.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return oh.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return oh.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sd(e,0),i=new sd(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);s.push(e)})),oh.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new gh(Hl);return e.forEach((t=>{const e=new sd(t,0),i=new sd(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),oh.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Yl.isDocumentKey(s)||(s=s.child(""));const r=new sd(new Yl(s),0);let o=new gh(Hl);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),r),oh.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Al(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return oh.forEach(e.mutations,(i=>{const s=new sd(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new sd(e,0),i=this.ds.firstAfterOrEqual(n);return oh.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,oh.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new gh(sd.ts)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return oh.resolve(n?n.document.mutableCopy():Kh.newInvalidDocument(e))}getEntries(t,e){let n=lu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Kh.newInvalidDocument(t))})),oh.resolve(n)}getAllFromCollection(t,e,n){let i=lu();const s=new Yl(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||nh(th(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return oh.resolve(i)}getAllFromCollectionGroup(t,e,n,i){kl()}Is(t,e){return oh.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ad(this)}getSize(t){return oh.resolve(this.size)}constructor(t){this.ps=t,this.docs=new dh(Yl.comparator),this.size=0}}class ad extends Ju{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),oh.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),oh.resolve()}getLastRemoteSnapshotVersion(t){return oh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return oh.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),oh.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),oh.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Yu(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,oh.resolve()}updateTargetData(t,e){return this.vn(e),oh.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,oh.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),oh.waitFor(s).next((()=>i))}getTargetCount(t){return oh.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return oh.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),oh.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),oh.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),oh.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return oh.resolve(n)}containsKey(t,e){return oh.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new ou((t=>Qh(t)),Xh),this.lastRemoteSnapshotVersion=Kl.min(),this.highestTargetId=0,this.Es=0,this.As=new id,this.targetCount=0,this.Rs=Yu.An()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new rd(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){bl("MemoryPersistence","Starting transaction:",t);const i=new cd(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return oh.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new lh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new ld(this),this.indexManager=new zu,this.remoteDocumentCache=new od((t=>this.referenceDelegate.Ss(t))),this.wt=new Gu(e),this.Ds=new ed(this.wt)}}class cd extends sh{constructor(t){super(),this.currentSequenceNumber=t}}class ud{static Ms(t){return new ud(t)}get Fs(){if(this.Os)return this.Os;throw kl()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),oh.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),oh.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),oh.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oh.forEach(this.Fs,(n=>{const i=Yl.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,Kl.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return oh.or([()=>oh.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new id,this.Os=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dd{static Vi(t,e){let n=yu(),i=yu();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new dd(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((s=>s||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return oh.resolve(null)}xi(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(Kl.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const r=this.ki(e,s);return this.Oi(e,r,n,i)?this.Ni(t,e):(Tl()<=S.LogLevel.DEBUG&&bl("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ec(e)),this.Mi(t,r,e,Zl(i,-1)))}))}ki(t,e){let n=new gh(bc(t));return e.forEach(((e,i)=>{Tc(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(t,e){return Tl()<=S.LogLevel.DEBUG&&bl("QueryEngine","Using full collection scan to execute query:",Ec(e)),this.Di.getDocumentsMatchingQuery(t,e,eh.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new td(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new dh(Hl),this.Bi=new ou((t=>Qh(t)),Xh),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function gd(t,e,n,i){return new pd(t,e,n,i)}async function md(t,e){const n=Rl(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=yu();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function yd(t){const e=Rl(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function _d(t,e){const n=Rl(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class vd{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=vu()}}class wd{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new vd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new vd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){bl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){bl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends class{ro(t,e,n,i,s){const r=this.oo(t,e);bl("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.co(t,r,o,n).then((t=>(bl("RestConnection","Received: ",t),t)),(e=>{throw Sl("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,i,s){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Cl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Td[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,i){return new Promise(((s,r)=>{const o=new vl;o.listenOnce(pl.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case fl.NO_ERROR:const e=o.getResponseJson();bl("Connection","XHR received:",JSON.stringify(e)),s(e);break;case fl.TIMEOUT:bl("Connection",'RPC "'+t+'" timed out'),r(new Dl(xl.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const n=o.getStatus();if(bl("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(xl).indexOf(e)>=0?e:xl.UNKNOWN}(t.status);r(new Dl(e,t.message))}else r(new Dl(xl.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Dl(xl.UNAVAILABLE,"Connection failed."));break;default:kl()}}finally{bl("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ul(),r=dl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new yl({})),this.uo(o.initMessageHeaders,e,n),(0,I.isMobileCordova)()||(0,I.isReactNative)()||(0,I.isElectron)()||(0,I.isIE)()||(0,I.isUWP)()||(0,I.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");bl("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let h=!1,c=!1;const u=new bd({jr:t=>{c?bl("Connection","Not sending because WebChannel is closed:",t):(h||(bl("Connection","Opening WebChannel transport."),l.open(),h=!0),bl("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,_l.EventType.OPEN,(()=>{c||bl("Connection","WebChannel transport opened.")})),d(l,_l.EventType.CLOSE,(()=>{c||(c=!0,bl("Connection","WebChannel transport closed"),u.eo())})),d(l,_l.EventType.ERROR,(t=>{c||(c=!0,Sl("Connection","WebChannel transport errored:",t),u.eo(new Dl(xl.UNAVAILABLE,"The operation could not be completed")))})),d(l,_l.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];Al(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){bl("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=nu[t];if(void 0!==e)return ru(e)}(t),n=s.message;void 0===e&&(e=xl.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),c=!0,u.eo(new Dl(e,n)),l.close()}else bl("Connection","WebChannel received:",n),u.no(n)}})),d(r,gl.STAT_EVENT,(t=>{t.stat===ml.PROXY?bl("Connection","Detected buffering proxy"):t.stat===ml.NOPROXY&&bl("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.Zr()}),0),u}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){return new wu(t,!0)}class kd{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&bl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===xl.RESOURCE_EXHAUSTED?(Il(e.toString()),Il("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===xl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Dl(xl.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return bl("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(bl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,s,r,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new kd(t,e)}}class Rd extends Ad{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Al(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Al(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?bu(t.updateTime):bu(e);return n.isEqual(Kl.min())&&(n=bu(e)),new qc(n,t.transformResults||[])}(t,n)))):[]),s=bu(t.commitTime);return this.listener.Jo(s,i)}var e,n;return Al(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Au(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Du(this.wt,t)))};this.Mo(e)}constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.wt=s,this.Wo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends class{}{tu(){if(this.Zo)throw new Dl(xl.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===xl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Dl(xl.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===xl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Dl(xl.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}}class Dd{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Il(e),this.su=!1):bl("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Od(this)&&(bl("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Rl(t);e.lu.add(4),await Md(e),e._u.set("Unknown"),e.lu.delete(4),await Ld(e)}(this))}))})),this._u=new Dd(n,i)}}async function Ld(t){if(Od(t))for(const e of t.fu)await e(!0)}async function Md(t){for(const e of t.fu)await e(!1)}function Od(t){return 0===Rl(t).lu.size}async function Fd(t,e,n){if(!ah(e))throw e;t.lu.add(1),await Md(t),t._u.set("Offline"),n||(n=()=>yd(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{bl("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ld(t)}))}function Vd(t,e){return e().catch((n=>Fd(t,n,e)))}async function Ud(t){const e=Rl(t),n=Xd(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;qd(e);)try{const t=await _d(e.localStore,i);if(null===t){0===e.au.length&&n.ko();break}i=t.batchId,Bd(e,t)}catch(t){await Fd(e,t)}jd(e)&&Hd(e)}function qd(t){return Od(t)&&t.au.length<10}function Bd(t,e){t.au.push(e);const n=Xd(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function jd(t){return Od(t)&&!Xd(t).Do()&&t.au.length>0}function Hd(t){Xd(t).start()}async function Wd(t){Xd(t).Xo()}async function Gd(t){const e=Xd(t);for(const n of t.au)e.Ho(n.mutations)}async function Kd(t,e,n){const i=t.au.shift(),s=Hu.from(i,e,n);await Vd(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ud(t)}async function $d(t,e){e&&Xd(t).zo&&await async function(t,e){if(su(n=e.code)&&n!==xl.ABORTED){const n=t.au.shift();Xd(t).No(),await Vd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ud(t)}var n}(t,e),jd(t)&&Hd(t)}async function zd(t,e){const n=Rl(t);n.asyncQueue.verifyOperationInProgress(),bl("RemoteStore","RemoteStore received new credentials");const i=Od(n);n.lu.add(3),await Md(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ld(n)}async function Qd(t,e){const n=Rl(t);e?(n.lu.delete(2),await Ld(n)):e||(n.lu.add(2),await Md(n),n._u.set("Unknown"))}function Xd(t){return t.gu||(t.gu=function(t,e,n){const i=Rl(t);return i.tu(),new Rd(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:Wd.bind(null,t),Jr:$d.bind(null,t),Yo:Gd.bind(null,t),Jo:Kd.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Ud(t)):(await t.gu.stop(),t.au.length>0&&(bl("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yd{static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Yd(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Dl(xl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Pl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Jd(t,e){if(Il("AsyncQueue",`${e}: ${t}`),ah(t))return new Dl(xl.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.queries=new ou((t=>Cc(t)),wc),this.onlineState="Unknown",this.Tu=new Set}}function tf(t){t.Tu.forEach((t=>{t.next()}))}class ef{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new ou((t=>Cc(t)),wc),this.ec=new Map,this.nc=new Set,this.sc=new dh(Yl.comparator),this.ic=new Map,this.rc=new id,this.oc={},this.uc=new Map,this.cc=Yu.Rn(),this.onlineState="Unknown",this.ac=void 0}}function nf(t,e,n){const i=Rl(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Rl(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0)})),i&&tf(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function sf(t,e){const n=Rl(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Rl(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=oh.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Al(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=yu();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);af(n,i,null),of(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await lf(n,t)}catch(t){await rh(t)}}async function rf(t,e,n){const i=Rl(t);try{const t=await function(t,e){const n=Rl(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Al(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);af(i,e,n),of(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await lf(i,t)}catch(t){await rh(t)}}function of(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function af(t,e,n){const i=Rl(t);let s=i.oc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.oc[i.currentUser.toKey()]=s}}async function lf(t,e,n){const i=Rl(t),s=[],r=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=dd.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Zu.Go(s),await async function(t,e){const n=Rl(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>oh.forEach(e,(e=>oh.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>oh.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ah(t))throw t;bl("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(e,s)}}}(i.localStore,r))}async function hf(t,e){const n=Rl(t);if(!n.currentUser.isEqual(e)){bl("SyncEngine","User change. New user:",e.toKey());const t=await md(n.localStore,e);n.currentUser=e,(i=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new Dl(xl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await lf(n,t.Ki)}var i}function cf(t){const e=Rl(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rf.bind(null,e),e}class uf{async initialize(t){this.wt=Nd(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return gd(this.persistence,new fd,t.initialUser,this.wt)}_c(t){return new hd(ud.Ms,this.wt)}dc(t){return new wd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class df{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>nf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=hf.bind(null,this.syncEngine),await Qd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Zd}createDatastore(t){const e=Nd(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Id(i));var i,s,r;return s=t.authCredentials,r=t.appCheckCredentials,new xd(s,r,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>nf(this.syncEngine,t,0),r=Ed.V()?new Ed:new Cd,new Pd(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new ef(t,e,n,i,s,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Rl(t);bl("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Md(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ff{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Dl(xl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Pl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Jd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=wl.UNAUTHENTICATED,this.clientId=jl.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{bl("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(bl("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function pf(t,e){t.asyncQueue.verifyOperationInProgress(),bl("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await md(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mf(t);bl("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>zd(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>zd(e.remoteStore,n))),t.onlineComponents=e}async function mf(t){return t.offlineComponents||(bl("FirestoreClient","Using default OfflineComponentProvider"),await pf(t,new uf)),t.offlineComponents}async function yf(t){return t.onlineComponents||(bl("FirestoreClient","Using default OnlineComponentProvider"),await gf(t,new df)),t.onlineComponents}function _f(t){return yf(t).then((t=>t.syncEngine))}const vf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e,n){if(!n)throw new Dl(xl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cf(t){if(!Yl.isDocumentKey(t))throw new Dl(xl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ef(t){if(Yl.isDocumentKey(t))throw new Dl(xl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":kl()}function bf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Dl(xl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new Dl(xl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Dl(xl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Dl(xl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Dl(xl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{get app(){if(!this._app)throw new Dl(xl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Dl(xl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ml;switch(t.type){case"gapi":const e=t.client;return Al(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Vl(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Dl(xl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=vf.get(t);e&&(bl("ComponentProvider","Removing Datastore"),vf.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,t instanceof Nh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Dl(xl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nh(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Af(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nf(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class kf{withConverter(t){return new kf(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Af extends kf{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nf(this.firestore,null,new Yl(t))}withConverter(t){return new Af(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,fc(n)),this._path=n,this.type="collection"}}function Rf(t,e,...n){if(t=(0,I.getModularInstance)(t),wf("collection","path",e),t instanceof Sf){const i=zl.fromString(e,...n);return Ef(i),new Af(t,null,i)}{if(!(t instanceof Nf||t instanceof Af))throw new Dl(xl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(zl.fromString(e,...n));return Ef(i),new Af(t.firestore,null,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xf{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Sd();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Pl;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!ah(t))throw t;bl("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw Il("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Yd.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&kl()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new kd(this,"async_queue_retry"),this.Kc=()=>{const t=Sd();t&&bl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Sd();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class Df extends Sf{_terminate(){return this._firestoreClient||Lf(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new xf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function Pf(t){return t._firestoreClient||Lf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lf(t){var e;const n=t._freezeSettings(),i=(s=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Sh(s,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;t._firestoreClient=new ff(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mf{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Dl(xl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xl(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Of{static fromBase64String(t){try{return new Of(vh.fromBase64String(t))}catch(t){throw new Dl(xl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Of(vh.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Hl(this._lat,t._lat)||Hl(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Dl(xl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Dl(xl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=/^__.*__$/;class qf{toMutation(t,e){return null!==this.fieldMask?new Xc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qc(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Bf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw kl()}}class jf{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new jf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.sa(t),i}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Zf(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Bf(this.Zc)&&Uf.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Hf{aa(t,e,n,i=!1){return new jf({Zc:t,methodName:e,ca:n,path:Xl.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Nd(t)}}function Wf(t){const e=t._freezeSettings(),n=Nd(t._databaseId);return new Hf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gf(t,e,n,i,s,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,s);Qf("Data must be an object, but it was:",o,i);const a=$f(i,o);let l,h;if(r.merge)l=new yh(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Xf(e,i,n);if(!o.contains(s))throw new Dl(xl.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);tp(t,s)||t.push(s)}l=new yh(t),h=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,h=o.fieldTransforms;return new qf(new Wh(a),l,h)}function Kf(t,e){if(zf(t=(0,I.getModularInstance)(t)))return Qf("Unsupported field value:",e,t),$f(t,e);if(t instanceof Ff)return function(t,e){if(!Bf(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Kf(s,e.ra(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,I.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return kc(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Gl.fromDate(t);return{timestampValue:Cu(e.wt,n)}}if(t instanceof Gl){const n=new Gl(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Cu(e.wt,n)}}if(t instanceof Vf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Of)return{bytesValue:Eu(e.wt,t._byteString)};if(t instanceof Nf){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Iu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Tf(t)}`)}(t,e)}function $f(t,e){const n={};return uh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ch(t,((t,i)=>{const s=Kf(i,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function zf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Gl||t instanceof Vf||t instanceof Of||t instanceof Nf||t instanceof Ff)}function Qf(t,e,n){if(!zf(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Tf(n);throw"an object"===i?e.oa(t+" a custom object"):e.oa(t+" "+i)}var i}function Xf(t,e,n){if((e=(0,I.getModularInstance)(e))instanceof Mf)return e._internalPath;if("string"==typeof e)return Jf(t,e);throw Zf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yf=new RegExp("[~\\*/\\[\\]]");function Jf(t,e,n){if(e.search(Yf)>=0)throw Zf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mf(...e.split("."))._internalPath}catch(i){throw Zf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zf(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Dl(xl.INVALID_ARGUMENT,a+t+l)}function tp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ep(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function np(t,e){const n=bf(t.firestore,Df),i=function(t,e,...n){if(t=(0,I.getModularInstance)(t),1===arguments.length&&(e=jl.I()),wf("doc","path",e),t instanceof Sf){const i=zl.fromString(e,...n);return Cf(i),new Nf(t,null,new Yl(i))}{if(!(t instanceof Nf||t instanceof Af))throw new Dl(xl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(zl.fromString(e,...n));return Cf(i),new Nf(t.firestore,t instanceof Af?t.converter:null,new Yl(i))}}(t),s=ep(t.converter,e);return ip(n,[Gf(Wf(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,Bc.exists(!1))]).then((()=>i))}function ip(t,e){return function(t,e){const n=new Pl;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=cf(t);try{const t=await function(t,e){const n=Rl(t),i=Gl.now(),s=e.reduce(((t,e)=>t.add(e.key)),yu());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=lu(),l=yu();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=$c(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Xc(t.key,e,Gh(e.value.mapValue),Bc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:uu(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oc[t.currentUser.toKey()];i||(i=new dh(Hl)),i=i.insert(e,n),t.oc[t.currentUser.toKey()]=i}(i,t.batchId,n),await lf(i,t.changes),await Ud(i.remoteStore)}catch(t){const e=Jd(t,"Failed to persist write");n.reject(e)}}(await _f(t),e,n))),n.promise}(Pf(t),e)}!function(t,e=!0){var n;n=T.SDK_VERSION,Cl=n,(0,T._registerComponent)(new(0,b.Component)("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Df(i,new Ol(t.getProvider("auth-internal")),new ql(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,T.registerVersion)("@firebase/firestore","3.4.10",t),(0,T.registerVersion)("@firebase/firestore","3.4.10","esm2017")}(),s("iyB0E");const sp=function(t=(0,T.getApp)()){return(0,T._getProvider)(t,"firestore").getImmediate()}(as.default),rp=(0,ls.getAuth)(),op={formWrap:document.querySelector(".form-auth"),loginForm:document.querySelector('[name="loginForm"]'),regForm:document.querySelector('[name="regForm"]'),regBtn:document.querySelector(".nav-item__reg"),loginBtn:document.querySelector(".nav-item__login"),libBtn:document.querySelector(".nav-item__lib"),logoutBtn:document.querySelector(".nav-item__logout"),homeBtn:document.querySelector(".nav__home")};op.regForm.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements.emailReg.value.trim(),n=t.target.elements.passwordReg.value.trim();if(""===e||""===n)return void(op.regForm.querySelector(".error").innerHTML="Input fields are not filled");(0,ls.createUserWithEmailAndPassword)(rp,e,n).then((async t=>{try{await np(Rf(sp,"users"),{email:e,password:n,watched:[],queue:[]});op.regForm.querySelector(".error").innerHTML=""}catch(t){}})).catch((t=>{console.log(t.message),t.message.includes("email-already-in-use")?op.regForm.querySelector(".error").innerHTML="Email already in use":t.message.includes("weak-password")&&(op.regForm.querySelector(".error").innerHTML="Password should be at least 6 characters")}))})),op.loginForm.addEventListener("submit",(async function(t){t.preventDefault();const e=t.target.elements.emailLogin.value.trim(),n=t.target.elements.passwordLogin.value.trim();if(""===e||""===n)return void(op.loginForm.querySelector(".error").innerHTML="Input fields are not filled");await(0,ls.signInWithEmailAndPassword)(rp,e,n).then((()=>{op.loginForm.querySelector(".error").innerHTML=""})).catch((t=>{console.log(t),t.message.includes("wrong-password")?op.loginForm.querySelector(".error").innerHTML="Wrong password":t.message.includes("user-not-found)")?op.loginForm.querySelector(".error").innerHTML="User email not found":t.message.includes("too-many-requests)")&&(op.loginForm.querySelector(".error").innerHTML=" Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.")}))})),op.logoutBtn.addEventListener("click",(function(t){t.preventDefault(),(0,ls.signOut)(rp),op.loginBtn.classList.remove("nav__current")})),op.loginBtn.addEventListener("click",(function(){op.loginForm.classList.remove("is-hidden"),op.formWrap.classList.remove("is-hidden"),op.regForm.classList.add("is-hidden"),op.homeBtn.classList.remove("nav__current"),op.loginBtn.classList.add("nav__current"),op.regBtn.classList.remove("nav__current")})),op.regBtn.addEventListener("click",(function(){op.regForm.classList.remove("is-hidden"),op.formWrap.classList.remove("is-hidden"),op.loginForm.classList.add("is-hidden"),op.regBtn.classList.add("nav__current"),op.loginBtn.classList.remove("nav__current")})),(0,ls.onAuthStateChanged)(rp,(async t=>{t&&(op.logoutBtn.classList.remove("is-hidden"),op.libBtn.classList.remove("is-hidden"),op.loginBtn.classList.add("is-hidden"),op.regBtn.classList.add("is-hidden"),op.regForm.classList.add("is-hidden"),op.formWrap.classList.add("is-hidden"),op.homeBtn.classList.add("nav__current")),t||(op.loginBtn.classList.remove("is-hidden"),op.regBtn.classList.remove("is-hidden"),op.logoutBtn.classList.add("is-hidden"),op.libBtn.classList.add("is-hidden"))}));m=s("idPZz");var ap=s("58AAY"),lp=s("1qskl");let hp;const cp=document.querySelector(".movie-card-list");(0,m.default)(cp),o.default.fetchGenresList().then((t=>{hp=t})),o.default.fetchTrendData().then((t=>{const e=h(a(t.results,hp));cp.insertAdjacentHTML("beforeend",e),es(t.results);const n=document.querySelectorAll(".btn-watche"),i=document.querySelectorAll(".btn-queue");n.forEach((t=>{m.watchedArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Watched")}))})),i.forEach((t=>{m.queueArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Queue")}))})),p(t.total_pages,t.page)})).catch((t=>console.log(t))),cp.addEventListener("click",(async function(t){if(!t.target.dataset.target)return;const e=t.target.dataset.id,n=await o.default.fetchFullMovieInfo(e);if("watched"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Watched",void(0,ap.default)(n,m.watchedArr,t.target.dataset.target);t.target.textContent="Add to Watched",(0,lp.default)(e,m.watchedArr,t.target.dataset.target)}if("queue"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Queue",void(0,ap.default)(n,m.queueArr,t.target.dataset.target);t.target.textContent="Add to Queue",(0,lp.default)(e,m.queueArr,t.target.dataset.target)}}));
//# sourceMappingURL=index.af7638b3.js.map
