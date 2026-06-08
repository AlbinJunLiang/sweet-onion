import{a as Ga}from"./chunk-B23DHMHF.js";import{a as bt,b as Ah,c as Ka}from"./chunk-CI6GI5CS.js";import{$ as Ii,$a as M,$b as G,$c as Va,$d as qa,A as Ne,Aa as m,Ab as p,Ac as Vi,Ad as kh,B as Jt,Ba as Lt,Bb as k,Bc as Mr,Bd as Pr,C as je,Ca as Fu,Cb as T,Cd as Nr,Da as Ft,Db as Da,Dc as Ut,Dd as ja,E as ot,Ea as Ei,Eb as Ma,Ec as zi,F as oc,Fa as Uu,Fb as Pa,Fc as In,Fd as Ih,G as xu,Ga as Vu,Gb as Gu,Gc as Zt,Gd as Eh,H as ke,Ha as lc,Hb as qu,Hc as lh,Hd as Ch,I as sc,Ia as C,Ib as Ku,J as Ta,Ja as Ee,Jb as Qe,Jc as dh,Jd as Ha,K as _n,Ka as ee,Kc as uh,L as cc,La as zu,Lb as Yu,Lc as hh,Ld as xh,M as Ze,Ma as Bu,Mb as Qu,Mc as Fa,N as me,Na as Re,Nb as Ju,Nc as Ua,O as _e,Oa as Kn,Ob as Xu,Od as $a,P as It,Pa as ju,Pb as he,Pc as mh,Pd as zt,Q as Su,Qb as P,Qd as Sh,R as Tu,Ra as Hu,Rb as Zu,Rc as ph,Rd as Wa,S as ye,Sa as $u,Sb as Ti,Sc as vt,Sd as tt,T as Au,Ta as Wu,Tb as eh,Td as we,U as Wn,Ub as Qn,Ud as yt,V as S,Va as Y,Vb as Ai,Vd as Bt,W as Ie,Wa as I,Wb as Ri,Wc as en,Wd as Th,X as Ru,Xa as E,Xb as uc,Xc as Je,Xd as En,Y as V,Yb as hc,Yc as fh,Yd as Rh,Z as ki,Za as vn,Zb as Oe,Zc as ct,Zd as Cn,_ as l,_a as bn,_c as gh,_d as xn,a as v,aa as _t,ab as u,ac as yn,ad as za,b as B,ba as ie,bb as h,bc as th,bd as _h,be as Oh,c as tc,ca as N,cb as x,cc as nh,cd as Xn,d as xa,da as L,db as oe,dc as wn,dd as He,e as wu,ea as Pt,eb as fe,ec as Na,ed as vh,ee as Dh,f as pt,fa as Or,fb as dc,fc as ih,fe as Mh,g as te,ga as Z,gd as Bi,ge as Wi,h as ft,ha as Xt,hc as Oi,hd as ji,he as Gi,i as Rr,ia as Gn,ic as rh,id as Ba,ja as Ou,jb as H,jc as ah,k as ku,ka as ue,kb as Et,kc as oh,l as Iu,la as pe,lb as w,lc as Di,ld as Hi,ma as Aa,mb as Yn,mc as Mi,md as $i,n as gt,na as Du,nb as b,nc as Pi,nd as ae,o as Sa,oa as y,ob as ve,oc as sh,od as Vt,p as nc,pa as Ra,pb as K,pc as xe,q as ic,qa as Le,qb as et,r as de,ra as qn,rb as st,rc as kn,s as F,sa as Nt,sb as $,sc as Ni,sd as bh,t as Be,ta as Ae,tb as W,td as Zn,u as rc,ua as Mu,ub as Ci,uc as ch,ud as yh,v as Eu,va as re,vb as xi,vc as Li,w as ne,wa as Oa,wb as Ce,wc as Fi,wd as mc,x as ac,xa as Pu,xb as Dr,xc as Jn,y as gn,ya as Nu,yb as z,yc as Ui,yd as pc,z as Cu,za as Lu,zb as Si,zc as La,zd as wh}from"./chunk-PTT2JO2G.js";var U="primary",Yr=Symbol("RouteTitle"),bc=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ti(n){return new bc(n)}function fc(n,t,e){for(let i=0;i<n.length;i++){let r=n[i],a=t[i];if(r[0]===":")e[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function Bh(n,t,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||e.pathMatch==="full"&&(t.hasChildren()||i.length<n.length))return null;let c={},d=n.slice(0,i.length);return fc(i,d,c)?{consumed:d,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let a=i.slice(0,r),o=i.slice(r+1);if(a.length+o.length>n.length||e.pathMatch==="full"&&t.hasChildren()&&e.path!=="**")return null;let s={};return!fc(a,n.slice(0,a.length),s)||!fc(o,n.slice(n.length-o.length),s)?null:{consumed:n,posParams:s}}function eo(n){return new Promise((t,e)=>{n.pipe(_n()).subscribe({next:i=>t(i),error:i=>e(i)})})}function y_(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(!jt(n[e],t[e]))return!1;return!0}function jt(n,t){let e=n?yc(n):void 0,i=t?yc(t):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let a=0;a<e.length;a++)if(r=e[a],!jh(n[r],t[r]))return!1;return!0}function yc(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function jh(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;let e=[...n].sort(),i=[...t].sort();return e.every((r,a)=>i[a]===r)}else return n===t}function w_(n){return n.length>0?n[n.length-1]:null}function ri(n){return rc(n)?n:Hu(n)?de(Promise.resolve(n)):F(n)}function Hh(n){return rc(n)?eo(n):Promise.resolve(n)}var k_={exact:Gh,subset:qh},$h={exact:I_,subset:E_,ignored:()=>!0},Wh={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},wc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ph(n,t,e){return k_[e.paths](n.root,t.root,e.matrixParams)&&$h[e.queryParams](n.queryParams,t.queryParams)&&!(e.fragment==="exact"&&n.fragment!==t.fragment)}function I_(n,t){return jt(n,t)}function Gh(n,t,e){if(!ei(n.segments,t.segments)||!Ja(n.segments,t.segments,e)||n.numberOfChildren!==t.numberOfChildren)return!1;for(let i in t.children)if(!n.children[i]||!Gh(n.children[i],t.children[i],e))return!1;return!0}function E_(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(e=>jh(n[e],t[e]))}function qh(n,t,e){return Kh(n,t,t.segments,e)}function Kh(n,t,e,i){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!ei(r,e)||t.hasChildren()||!Ja(r,e,i))}else if(n.segments.length===e.length){if(!ei(n.segments,e)||!Ja(n.segments,e,i))return!1;for(let r in t.children)if(!n.children[r]||!qh(n.children[r],t.children[r],i))return!1;return!0}else{let r=e.slice(0,n.segments.length),a=e.slice(n.segments.length);return!ei(n.segments,r)||!Ja(n.segments,r,i)||!n.children[U]?!1:Kh(n.children[U],t,a,i)}}function Ja(n,t,e){return t.every((i,r)=>$h[e](n[r].parameters,i.parameters))}var dt=class{root;queryParams;fragment;_queryParamMap;constructor(t=new Q([],{}),e={},i=null){this.root=t,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ti(this.queryParams),this._queryParamMap}toString(){return S_.serialize(this)}},Q=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Xa(this)}},Sn=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=ti(this.parameters),this._parameterMap}toString(){return Qh(this)}};function C_(n,t){return ei(n,t)&&n.every((e,i)=>jt(e.parameters,t[i].parameters))}function ei(n,t){return n.length!==t.length?!1:n.every((e,i)=>e.path===t[i].path)}function x_(n,t){let e=[];return Object.entries(n.children).forEach(([i,r])=>{i===U&&(e=e.concat(t(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==U&&(e=e.concat(t(r,i)))}),e}var tr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:()=>new Tn,providedIn:"root"})}return n})(),Tn=class{parse(t){let e=new Ic(t);return new dt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Lr(t.root,!0)}`,i=R_(t.queryParams),r=typeof t.fragment=="string"?`#${T_(t.fragment)}`:"";return`${e}${i}${r}`}},S_=new Tn;function Xa(n){return n.segments.map(t=>Qh(t)).join("/")}function Lr(n,t){if(!n.hasChildren())return Xa(n);if(t){let e=n.children[U]?Lr(n.children[U],!1):"",i=[];return Object.entries(n.children).forEach(([r,a])=>{r!==U&&i.push(`${r}:${Lr(a,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=x_(n,(i,r)=>r===U?[Lr(n.children[U],!1)]:[`${r}:${Lr(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[U]!=null?`${Xa(n)}/${e[0]}`:`${Xa(n)}/(${e.join("//")})`}}function Yh(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ya(n){return Yh(n).replace(/%3B/gi,";")}function T_(n){return encodeURI(n)}function kc(n){return Yh(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Za(n){return decodeURIComponent(n)}function Nh(n){return Za(n.replace(/\+/g,"%20"))}function Qh(n){return`${kc(n.path)}${A_(n.parameters)}`}function A_(n){return Object.entries(n).map(([t,e])=>`;${kc(t)}=${kc(e)}`).join("")}function R_(n){let t=Object.entries(n).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Ya(e)}=${Ya(r)}`).join("&"):`${Ya(e)}=${Ya(i)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var O_=/^[^\/()?;#]+/;function gc(n){let t=n.match(O_);return t?t[0]:""}var D_=/^[^\/()?;=#]+/;function M_(n){let t=n.match(D_);return t?t[0]:""}var P_=/^[^=?&#]+/;function N_(n){let t=n.match(P_);return t?t[0]:""}var L_=/^[^&#]+/;function F_(n){let t=n.match(L_);return t?t[0]:""}var Ic=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new ye(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,t));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,t)),(e.length>0||Object.keys(i).length>0)&&(r[U]=new Q(e,i)),r}parseSegment(){let t=gc(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new ye(4009,!1);return this.capture(t),new Sn(Za(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=M_(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=gc(this.remaining);r&&(i=r,this.capture(i))}t[Za(e)]=Za(i)}parseQueryParam(t){let e=N_(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let o=F_(this.remaining);o&&(i=o,this.capture(i))}let r=Nh(e),a=Nh(i);if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(a)}else t[r]=a}parseParens(t,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=gc(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new ye(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=U);let s=this.parseChildren(e+1);i[o??U]=Object.keys(s).length===1&&s[U]?s[U]:new Q([],s),this.consumeOptional("//")}return i}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new ye(4011,!1)}};function Jh(n){return n.segments.length>0?new Q([],{[U]:n}):n}function Xh(n){let t={};for(let[i,r]of Object.entries(n.children)){let a=Xh(r);if(i===U&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))t[o]=s;else(a.segments.length>0||a.hasChildren())&&(t[i]=a)}let e=new Q(n.segments,t);return U_(e)}function U_(n){if(n.numberOfChildren===1&&n.children[U]){let t=n.children[U];return new Q(n.segments.concat(t.segments),t.children)}return n}function An(n){return n instanceof dt}function Zh(n,t,e=null,i=null,r=new Tn){let a=em(n);return tm(a,t,e,i,r)}function em(n){let t;function e(a){let o={};for(let c of a.children){let d=e(c);o[c.outlet]=d}let s=new Q(a.url,o);return a===n&&(t=s),s}let i=e(n.root),r=Jh(i);return t??r}function tm(n,t,e,i,r){let a=n;for(;a.parent;)a=a.parent;if(t.length===0)return _c(a,a,a,e,i,r);let o=V_(t);if(o.toRoot())return _c(a,a,new Q([],{}),e,i,r);let s=z_(o,a,n),c=s.processChildren?Ur(s.segmentGroup,s.index,o.commands):im(s.segmentGroup,s.index,o.commands);return _c(a,s.segmentGroup,c,e,i,r)}function to(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Br(n){return typeof n=="object"&&n!=null&&n.outlets}function Lh(n,t,e){n||="\u0275";let i=new dt;return i.queryParams={[n]:t},e.parse(e.serialize(i)).queryParams[n]}function _c(n,t,e,i,r,a){let o={};for(let[d,f]of Object.entries(i??{}))o[d]=Array.isArray(f)?f.map(g=>Lh(d,g,a)):Lh(d,f,a);let s;n===t?s=e:s=nm(n,t,e);let c=Jh(Xh(s));return new dt(c,o,r)}function nm(n,t,e){let i={};return Object.entries(n.children).forEach(([r,a])=>{a===t?i[r]=e:i[r]=nm(a,t,e)}),new Q(n.segments,i)}var no=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,i){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=i,t&&i.length>0&&to(i[0]))throw new ye(4003,!1);let r=i.find(Br);if(r&&r!==w_(i))throw new ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function V_(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new no(!0,0,n);let t=0,e=!1,i=n.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?t++:s!=""&&r.push(s))}),r):[...r,a]},[]);return new no(e,t,i)}var Ki=class{segmentGroup;processChildren;index;constructor(t,e,i){this.segmentGroup=t,this.processChildren=e,this.index=i}};function z_(n,t,e){if(n.isAbsolute)return new Ki(t,!0,0);if(!e)return new Ki(t,!1,NaN);if(e.parent===null)return new Ki(e,!0,0);let i=to(n.commands[0])?0:1,r=e.segments.length-1+i;return B_(e,r,n.numberOfDoubleDots)}function B_(n,t,e){let i=n,r=t,a=e;for(;a>r;){if(a-=r,i=i.parent,!i)throw new ye(4005,!1);r=i.segments.length}return new Ki(i,!1,r-a)}function j_(n){return Br(n[0])?n[0].outlets:{[U]:n}}function im(n,t,e){if(n??=new Q([],{}),n.segments.length===0&&n.hasChildren())return Ur(n,t,e);let i=H_(n,t,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let a=new Q(n.segments.slice(0,i.pathIndex),{});return a.children[U]=new Q(n.segments.slice(i.pathIndex),n.children),Ur(a,0,r)}else return i.match&&r.length===0?new Q(n.segments,{}):i.match&&!n.hasChildren()?Ec(n,t,e):i.match?Ur(n,0,r):Ec(n,t,e)}function Ur(n,t,e){if(e.length===0)return new Q(n.segments,{});{let i=j_(e),r={};if(Object.keys(i).some(a=>a!==U)&&n.children[U]&&n.numberOfChildren===1&&n.children[U].segments.length===0){let a=Ur(n.children[U],t,e);return new Q(n.segments,a.children)}return Object.entries(i).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=im(n.children[a],t,o))}),Object.entries(n.children).forEach(([a,o])=>{i[a]===void 0&&(r[a]=o)}),new Q(n.segments,r)}}function H_(n,t,e){let i=0,r=t,a={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=e.length)return a;let o=n.segments[r],s=e[i];if(Br(s))break;let c=`${s}`,d=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Uh(c,d,o))return a;i+=2}else{if(!Uh(c,{},o))return a;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ec(n,t,e){let i=n.segments.slice(0,t),r=0;for(;r<e.length;){let a=e[r];if(Br(a)){let c=$_(a.outlets);return new Q(i,c)}if(r===0&&to(e[0])){let c=n.segments[t];i.push(new Sn(c.path,Fh(e[0]))),r++;continue}let o=Br(a)?a.outlets[U]:`${a}`,s=r<e.length-1?e[r+1]:null;o&&s&&to(s)?(i.push(new Sn(o,Fh(s))),r+=2):(i.push(new Sn(o,{})),r++)}return new Q(i,{})}function $_(n){let t={};return Object.entries(n).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(t[e]=Ec(new Q([],{}),0,i))}),t}function Fh(n){let t={};return Object.entries(n).forEach(([e,i])=>t[e]=`${i}`),t}function Uh(n,t,e){return n==e.path&&jt(t,e.parameters)}var Vr="imperative",De=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(De||{}),ut=class{id;url;constructor(t,e){this.id=t,this.url=e}},ni=class extends ut{type=De.NavigationStart;navigationTrigger;restoredState;constructor(t,e,i="imperative",r=null){super(t,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ht=class extends ut{urlAfterRedirects;type=De.NavigationEnd;constructor(t,e,i){super(t,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},$e=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})($e||{}),jr=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(jr||{}),wt=class extends ut{reason;code;type=De.NavigationCancel;constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function rm(n){return n instanceof wt&&(n.code===$e.Redirect||n.code===$e.SupersededByNewNavigation)}var nn=class extends ut{reason;code;type=De.NavigationSkipped;constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r}},ii=class extends ut{error;target;type=De.NavigationError;constructor(t,e,i,r){super(t,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Hr=class extends ut{urlAfterRedirects;state;type=De.RoutesRecognized;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},io=class extends ut{urlAfterRedirects;state;type=De.GuardsCheckStart;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ro=class extends ut{urlAfterRedirects;state;shouldActivate;type=De.GuardsCheckEnd;constructor(t,e,i,r,a){super(t,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ao=class extends ut{urlAfterRedirects;state;type=De.ResolveStart;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},oo=class extends ut{urlAfterRedirects;state;type=De.ResolveEnd;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},so=class{route;type=De.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},co=class{route;type=De.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},lo=class{snapshot;type=De.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},uo=class{snapshot;type=De.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ho=class{snapshot;type=De.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mo=class{snapshot;type=De.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Qi=class{},$r=class{},Ji=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function W_(n){return!(n instanceof Qi)&&!(n instanceof Ji)&&!(n instanceof $r)}var po=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new nr(this.rootInjector)}},nr=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new po(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||n)(ki(_t))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fo=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Cc(t,this._root);return e?e.children.map(i=>i.value):[]}firstChild(t){let e=Cc(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=xc(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return xc(t,this._root).map(e=>e.value)}};function Cc(n,t){if(n===t.value)return t;for(let e of t.children){let i=Cc(n,e);if(i)return i}return null}function xc(n,t){if(n===t.value)return[t];for(let e of t.children){let i=xc(n,e);if(i.length)return i.unshift(t),i}return[]}var lt=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function qi(n){let t={};return n&&n.children.forEach(e=>t[e.value.outlet]=e),t}var Wr=class extends fo{snapshot;constructor(t,e){super(t),this.snapshot=e,Nc(this,t)}toString(){return this.snapshot.toString()}};function am(n,t){let e=G_(n,t),i=new ft([new Sn("",{})]),r=new ft({}),a=new ft({}),o=new ft({}),s=new ft(""),c=new xt(i,r,o,s,a,U,n,e.root);return c.snapshot=e.root,new Wr(new lt(c,[]),e)}function G_(n,t){let e={},i={},r={},o=new Xi([],e,r,"",i,U,n,null,{},t);return new Gr("",new lt(o,[]))}var xt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,i,r,a,o,s,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ne(d=>d[Yr]))??F(void 0),this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ne(t=>ti(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ne(t=>ti(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Pc(n,t,e="emptyOnly"){let i,{routeConfig:r}=n;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?i={params:v(v({},t.params),n.params),data:v(v({},t.data),n.data),resolve:v(v(v(v({},n.data),t.data),r?.data),n._resolvedData)}:i={params:v({},n.params),data:v({},n.data),resolve:v(v({},n.data),n._resolvedData??{})},r&&sm(r)&&(i.resolve[Yr]=r.title),i}var Xi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Yr]}constructor(t,e,i,r,a,o,s,c,d,f){this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ti(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ti(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},Gr=class extends fo{url;constructor(t,e){super(e),this.url=t,Nc(this,e)}toString(){return om(this._root)}};function Nc(n,t){t.value._routerState=n,t.children.forEach(e=>Nc(n,e))}function om(n){let t=n.children.length>0?` { ${n.children.map(om).join(", ")} } `:"";return`${n.value}${t}`}function vc(n){if(n.snapshot){let t=n.snapshot,e=n._futureSnapshot;n.snapshot=e,jt(t.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),jt(t.params,e.params)||n.paramsSubject.next(e.params),y_(t.url,e.url)||n.urlSubject.next(e.url),jt(t.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Sc(n,t){let e=jt(n.params,t.params)&&C_(n.url,t.url),i=!n.parent!=!t.parent;return e&&!i&&(!n.parent||Sc(n.parent,t.parent))}function sm(n){return typeof n.title=="string"||n.title===null}var cm=new V(""),Qr=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=U;activateEvents=new ue;deactivateEvents=new ue;attachEvents=new ue;detachEvents=new ue;routerOutletData=Ai();parentContexts=l(nr);location=l(Uu);changeDetector=l(Oe);inputBinder=l(Jr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ye(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new ye(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Tc(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Nt]})}return n})(),Tc=class{route;childContexts;parent;outletData;constructor(t,e,i,r){this.route=t,this.childContexts=e,this.parent=i,this.outletData=r}get(t,e){return t===xt?this.route:t===nr?this.childContexts:t===cm?this.outletData:this.parent.get(t,e)}},Jr=new V(""),Lc=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=ac([i.queryParams,i.params,i.data]).pipe(me(([a,o,s],c)=>(s=v(v(v({},a),o),s),c===0?F(s):Promise.resolve(s)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let o=th(i.component);if(!o){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of o.inputs)e.activatedComponentRef.setInput(s,a[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Fc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&x(0,"router-outlet")},dependencies:[Qr],encapsulation:2})}return n})();function Uc(n){let t=n.children&&n.children.map(Uc),e=t?B(v({},n),{children:t}):v({},n);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==U&&(e.component=Fc),e}function q_(n,t,e){let i=qr(n,t._root,e?e._root:void 0);return new Wr(i,t)}function qr(n,t,e){if(e&&n.shouldReuseRoute(t.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=t.value;let r=K_(n,t,e);return new lt(i,r)}else{if(n.shouldAttach(t.value)){let a=n.retrieve(t.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=t.value,o.children=t.children.map(s=>qr(n,s)),o}}let i=Y_(t.value),r=t.children.map(a=>qr(n,a));return new lt(i,r)}}function K_(n,t,e){return t.children.map(i=>{for(let r of e.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return qr(n,i,r);return qr(n,i)})}function Y_(n){return new xt(new ft(n.url),new ft(n.params),new ft(n.queryParams),new ft(n.fragment),new ft(n.data),n.outlet,n.component,n)}var Zi=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},lm="ngNavigationCancelingError";function go(n,t){let{redirectTo:e,navigationBehaviorOptions:i}=An(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=dm(!1,$e.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function dm(n,t){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[lm]=!0,e.cancellationCode=t,e}function Q_(n){return um(n)&&An(n.url)}function um(n){return!!n&&n[lm]}var Ac=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,i,r,a){this.routeReuseStrategy=t,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=a}activate(t){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,t),vc(this.futureState.root),this.activateChildRoutes(e,i,t)}deactivateChildRoutes(t,e,i){let r=qi(e);t.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],i),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,i)})}deactivateRoutes(t,e,i){let r=t.value,a=e?e.value:null;if(r===a)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(t,e,o.children)}else this.deactivateChildRoutes(t,e,i);else a&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,a=qi(t);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:s})}}deactivateRouteAndOutlet(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,a=qi(t);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(t,e,i){let r=qi(e);t.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],i),this.forwardEvent(new mo(a.value.snapshot))}),t.children.length&&this.forwardEvent(new uo(t.value.snapshot))}activateRoutes(t,e,i){let r=t.value,a=e?e.value:null;if(vc(r),r===a)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,o.children)}else this.activateChildRoutes(t,e,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),vc(s.route.value),this.activateChildRoutes(t,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}else this.activateChildRoutes(t,null,i)}},_o=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Yi=class{component;route;constructor(t,e){this.component=t,this.route=e}};function J_(n,t,e){let i=n._root,r=t?t._root:null;return Fr(i,r,e,[i.value])}function X_(n){let t=n.routeConfig?n.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:n,guards:t}}function ir(n,t){let e=Symbol(),i=t.get(n,e);return i===e?typeof n=="function"&&!Ru(n)?n:t.get(n):i}function Fr(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=qi(t);return n.children.forEach(o=>{Z_(o,a[o.value.outlet],e,i.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>zr(s,e.getContext(o),r)),r}function Z_(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=n.value,o=t?t.value:null,s=e?e.getContext(n.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=ev(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new _o(i)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Fr(n,t,s?s.children:null,i,r):Fr(n,t,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Yi(s.outlet.component,o))}else o&&zr(t,s,r),r.canActivateChecks.push(new _o(i)),a.component?Fr(n,null,s?s.children:null,i,r):Fr(n,null,e,i,r);return r}function ev(n,t,e){if(typeof e=="function")return ie(t._environmentInjector,()=>e(n,t));switch(e){case"pathParamsChange":return!ei(n.url,t.url);case"pathParamsOrQueryParamsChange":return!ei(n.url,t.url)||!jt(n.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Sc(n,t)||!jt(n.queryParams,t.queryParams);default:return!Sc(n,t)}}function zr(n,t,e){let i=qi(n),r=n.value;Object.entries(i).forEach(([a,o])=>{r.component?t?zr(o,t.children.getContext(a),e):zr(o,null,e):zr(o,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Yi(t.outlet.component,r)):e.canDeactivateChecks.push(new Yi(null,r)):e.canDeactivateChecks.push(new Yi(null,r))}function Xr(n){return typeof n=="function"}function tv(n){return typeof n=="boolean"}function nv(n){return n&&Xr(n.canLoad)}function iv(n){return n&&Xr(n.canActivate)}function rv(n){return n&&Xr(n.canActivateChild)}function av(n){return n&&Xr(n.canDeactivate)}function ov(n){return n&&Xr(n.canMatch)}function hm(n){return n instanceof Eu||n?.name==="EmptyError"}var Qa=Symbol("INITIAL_VALUE");function er(){return me(n=>ac(n.map(t=>t.pipe(ke(1),Ze(Qa)))).pipe(ne(t=>{for(let e of t)if(e!==!0){if(e===Qa)return Qa;if(e===!1||sv(e))return e}return!0}),je(t=>t!==Qa),ke(1)))}function sv(n){return An(n)||n instanceof Zi}function mm(n){return n.aborted?F(void 0).pipe(ke(1)):new pt(t=>{let e=()=>{t.next(),t.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function pm(n){return _e(mm(n))}function cv(n){return gn(t=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:a}}=t;return a.length===0&&r.length===0?F(B(v({},t),{guardsResult:!0})):lv(a,e,i).pipe(gn(o=>o&&tv(o)?dv(e,r,n):F(o)),ne(o=>B(v({},t),{guardsResult:o})))})}function lv(n,t,e){return de(n).pipe(gn(i=>fv(i.component,i.route,e,t)),_n(i=>i!==!0,!0))}function dv(n,t,e){return de(t).pipe(oc(i=>Cu(hv(i.route.parent,e),uv(i.route,e),pv(n,i.path),mv(n,i.route))),_n(i=>i!==!0,!0))}function uv(n,t){return n!==null&&t&&t(new ho(n)),F(!0)}function hv(n,t){return n!==null&&t&&t(new lo(n)),F(!0)}function mv(n,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return F(!0);let i=e.map(r=>Ne(()=>{let a=t._environmentInjector,o=ir(r,a),s=iv(o)?o.canActivate(t,n):ie(a,()=>o(t,n));return ri(s).pipe(_n())}));return F(i).pipe(er())}function pv(n,t){let e=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(a=>X_(a)).filter(a=>a!==null).map(a=>Ne(()=>{let o=a.guards.map(s=>{let c=a.node._environmentInjector,d=ir(s,c),f=rv(d)?d.canActivateChild(e,n):ie(c,()=>d(e,n));return ri(f).pipe(_n())});return F(o).pipe(er())}));return F(r).pipe(er())}function fv(n,t,e,i){let r=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!r||r.length===0)return F(!0);let a=r.map(o=>{let s=t._environmentInjector,c=ir(o,s),d=av(c)?c.canDeactivate(n,t,e,i):ie(s,()=>c(n,t,e,i));return ri(d).pipe(_n())});return F(a).pipe(er())}function gv(n,t,e,i,r){let a=t.canLoad;if(a===void 0||a.length===0)return F(!0);let o=a.map(s=>{let c=ir(s,n),d=nv(c)?c.canLoad(t,e):ie(n,()=>c(t,e)),f=ri(d);return r?f.pipe(pm(r)):f});return F(o).pipe(er(),fm(i))}function fm(n){return wu(It(t=>{if(typeof t!="boolean")throw go(n,t)}),ne(t=>t===!0))}function _v(n,t,e,i,r,a){let o=t.canMatch;if(!o||o.length===0)return F(!0);let s=o.map(c=>{let d=ir(c,n),f=ov(d)?d.canMatch(t,e,r):ie(n,()=>d(t,e,r));return ri(f).pipe(pm(a))});return F(s).pipe(er(),fm(i))}var tn=class n extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,n.prototype)}},Kr=class n extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,n.prototype)}};function vv(n){throw new ye(4e3,!1)}function bv(n){throw dm(!1,$e.GuardRejected)}var Rc=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}async lineralizeSegments(t,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[U])throw vv(`${t.redirectTo}`);r=r.children[U]}}async applyRedirectCommands(t,e,i,r,a){let o=await yv(e,r,a);if(o instanceof dt)throw new Kr(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),t,i);if(o[0]==="/")throw new Kr(s);return s}applyRedirectCreateUrlTree(t,e,i,r){let a=this.createSegmentGroup(t,e.root,i,r);return new dt(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let i={};return Object.entries(t).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);i[r]=e[s]}else i[r]=a}),i}createSegmentGroup(t,e,i,r){let a=this.createSegments(t,e.segments,i,r),o={};return Object.entries(e.children).forEach(([s,c])=>{o[s]=this.createSegmentGroup(t,c,i,r)}),new Q(a,o)}createSegments(t,e,i,r){return e.map(a=>a.path[0]===":"?this.findPosParam(t,a,r):this.findOrReturn(a,i))}findPosParam(t,e,i){let r=i[e.path.substring(1)];if(!r)throw new ye(4001,!1);return r}findOrReturn(t,e){let i=0;for(let r of e){if(r.path===t.path)return e.splice(i),r;i++}return t}};function yv(n,t,e){if(typeof n=="string")return Promise.resolve(n);let i=n;return eo(ri(ie(e,()=>i(t))))}function wv(n,t){return n.providers&&!n._injector&&(n._injector=lc(n.providers,t,`Route: ${n.path}`)),n._injector??t}function Ct(n){return n.outlet||U}function kv(n,t){let e=n.filter(i=>Ct(i)===t);return e.push(...n.filter(i=>Ct(i)!==t)),e}var Oc={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function gm(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Iv(n,t,e,i,r,a,o){let s=_m(n,t,e);if(!s.matched)return F(s);let c=gm(a(s));return i=wv(t,i),_v(i,t,e,r,c,o).pipe(ne(d=>d===!0?s:v({},Oc)))}function _m(n,t,e){if(t.path==="")return t.pathMatch==="full"&&(n.hasChildren()||e.length>0)?v({},Oc):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||Bh)(e,n,t);if(!r)return v({},Oc);let a={};Object.entries(r.posParams??{}).forEach(([s,c])=>{a[s]=c.path});let o=r.consumed.length>0?v(v({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Vh(n,t,e,i,r){return e.length>0&&xv(n,e,i,r)?{segmentGroup:new Q(t,Cv(i,new Q(e,n.children))),slicedSegments:[]}:e.length===0&&Sv(n,e,i)?{segmentGroup:new Q(n.segments,Ev(n,e,i,n.children)),slicedSegments:e}:{segmentGroup:new Q(n.segments,n.children),slicedSegments:e}}function Ev(n,t,e,i){let r={};for(let a of e)if(bo(n,t,a)&&!i[Ct(a)]){let o=new Q([],{});r[Ct(a)]=o}return v(v({},i),r)}function Cv(n,t){let e={};e[U]=t;for(let i of n)if(i.path===""&&Ct(i)!==U){let r=new Q([],{});e[Ct(i)]=r}return e}function xv(n,t,e,i){return e.some(r=>!bo(n,t,r)||!(Ct(r)!==U)?!1:!(i!==void 0&&Ct(r)===i))}function Sv(n,t,e){return e.some(i=>bo(n,t,i))}function bo(n,t,e){return(n.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Tv(n,t,e){return t.length===0&&!n.children[e]}var Dc=class{};async function Av(n,t,e,i,r,a,o="emptyOnly",s){return new Mc(n,t,e,i,r,o,a,s).recognize()}var Rv=31,Mc=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,i,r,a,o,s,c){this.injector=t,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Rc(this.urlSerializer,this.urlTree)}noMatchError(t){return new ye(4002,`'${t.segmentGroup}'`)}async recognize(){let t=Vh(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(t),r=new lt(i,e),a=new Gr("",r),o=Zh(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(t){let e=new Xi([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),U,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,U,e),rootSnapshot:e}}catch(i){if(i instanceof Kr)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof tn?this.noMatchError(i):i}}async processSegmentGroup(t,e,i,r,a){if(i.segments.length===0&&i.hasChildren())return this.processChildren(t,e,i,a);let o=await this.processSegment(t,e,i,i.segments,r,!0,a);return o instanceof lt?[o]:[]}async processChildren(t,e,i,r){let a=[];for(let c of Object.keys(i.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let d=i.children[c],f=kv(e,c),g=await this.processSegmentGroup(t,f,d,c,r);o.push(...g)}let s=vm(o);return Ov(s),s}async processSegment(t,e,i,r,a,o,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??t,e,c,i,r,a,o,s)}catch(d){if(d instanceof tn||hm(d))continue;throw d}if(Tv(i,r,a))return new Dc;throw new tn(i)}async processSegmentAgainstRoute(t,e,i,r,a,o,s,c){if(Ct(i)!==o&&(o===U||!bo(r,a,i)))throw new tn(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,r,i,a,o,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(t,r,e,i,a,o,c);throw new tn(r)}async expandSegmentAgainstRouteUsingRedirect(t,e,i,r,a,o,s){let{matched:c,parameters:d,consumedSegments:f,positionalParamSegments:g,remainingSegments:_}=_m(e,r,a);if(!c)throw new tn(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Rv&&(this.allowRedirects=!1));let R=this.createSnapshot(t,r,a,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let O=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,g,gm(R),t),le=await this.applyRedirects.lineralizeSegments(r,O);return this.processSegment(t,i,e,le.concat(_),o,!1,s)}createSnapshot(t,e,i,r,a){let o=new Xi(i,r,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Mv(e),Ct(e),e.component??e._loadedComponent??null,e,Pv(e),t),s=Pc(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(t,e,i,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Xe=>this.createSnapshot(t,i,Xe.consumedSegments,Xe.parameters,o),c=await eo(Iv(e,i,r,t,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new tn(e);t=i._injector??t;let{routes:d}=await this.getChildConfig(t,i,r),f=i._loadedInjector??t,{parameters:g,consumedSegments:_,remainingSegments:R}=c,O=this.createSnapshot(t,i,_,g,o),{segmentGroup:le,slicedSegments:Pe}=Vh(e,_,R,d,a);if(Pe.length===0&&le.hasChildren()){let Xe=await this.processChildren(f,d,le,O);return new lt(O,Xe)}if(d.length===0&&Pe.length===0)return new lt(O,[]);let ze=Ct(i)===a,Te=await this.processSegment(f,d,le,Pe,ze?U:a,!0,O);return new lt(O,Te instanceof lt?[Te]:[])}async getChildConfig(t,e,i){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await eo(gv(t,e,i,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(t,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw bv(e)}return{routes:[],injector:t}}};function Ov(n){n.sort((t,e)=>t.value.outlet===U?-1:e.value.outlet===U?1:t.value.outlet.localeCompare(e.value.outlet))}function Dv(n){let t=n.value.routeConfig;return t&&t.path===""}function vm(n){let t=[],e=new Set;for(let i of n){if(!Dv(i)){t.push(i);continue}let r=t.find(a=>i.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):t.push(i)}for(let i of e){let r=vm(i.children);t.push(new lt(i.value,r))}return t.filter(i=>!e.has(i))}function Mv(n){return n.data||{}}function Pv(n){return n.resolve||{}}function Nv(n,t,e,i,r,a,o){return gn(async s=>{let{state:c,tree:d}=await Av(n,t,e,i,s.extractedUrl,r,a,o);return B(v({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Lv(n){return gn(t=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=t;if(!i.length)return F(t);let r=new Set(i.map(s=>s.route)),a=new Set;for(let s of r)if(!a.has(s))for(let c of bm(s))a.add(c);let o=0;return de(a).pipe(oc(s=>r.has(s)?Fv(s,e,n):(s.data=Pc(s,s.parent,n).resolve,F(void 0))),It(()=>o++),cc(1),gn(s=>o===a.size?F(t):gt))})}function bm(n){let t=n.children.map(e=>bm(e)).flat();return[n,...t]}function Fv(n,t,e){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!sm(i)&&(r[Yr]=i.title),Ne(()=>(n.data=Pc(n,n.parent,e).resolve,Uv(r,n,t).pipe(ne(a=>(n._resolvedData=a,n.data=v(v({},n.data),a),null)))))}function Uv(n,t,e){let i=yc(n);if(i.length===0)return F({});let r={};return de(i).pipe(gn(a=>Vv(n[a],t,e).pipe(_n(),It(o=>{if(o instanceof Zi)throw go(new Tn,o);r[a]=o}))),cc(1),ne(()=>r),ot(a=>hm(a)?gt:Be(a)))}function Vv(n,t,e){let i=t._environmentInjector,r=ir(n,i),a=r.resolve?r.resolve(t,e):ie(i,()=>r(t,e));return ri(a)}function zh(n){return me(t=>{let e=n(t);return e?de(e).pipe(ne(()=>t)):F(t)})}var Vc=(()=>{class n{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(a=>a.outlet===U);return i}getResolvedTitleForRoute(e){return e.data[Yr]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:()=>l(ym),providedIn:"root"})}return n})(),ym=(()=>{class n extends Vc{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(ki(oh))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),rr=new V("",{factory:()=>({})}),Zr=new V(""),wm=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Xu);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await Hh(ie(e,()=>i.loadComponent())),o=await Em(Im(a));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await km(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function km(n,t,e,i){let r=await Hh(ie(e,()=>n.loadChildren())),a=await Em(Im(r)),o;a instanceof Vu||Array.isArray(a)?o=a:o=await t.compileModuleAsync(a),i&&i(n);let s,c,d=!1,f;return Array.isArray(o)?(c=o,d=!0):(s=o.create(e).injector,f=o,c=s.get(Zr,[],{optional:!0,self:!0}).flat()),{routes:c.map(Uc),injector:s,factory:f}}function zv(n){return n&&typeof n=="object"&&"default"in n}function Im(n){return zv(n)?n.default:n}async function Em(n){return n}var yo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:()=>l(Bv),providedIn:"root"})}return n})(),Bv=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cm=new V("");var jv=()=>{},xm=new V(""),Sm=(()=>{class n{currentNavigation=y(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=y(null);events=new te;transitionAbortWithErrorSubject=new te;configLoader=l(wm);environmentInjector=l(_t);destroyRef=l(Gn);urlSerializer=l(tr);rootContexts=l(nr);location=l(wn);inputBindingEnabled=l(Jr,{optional:!0})!==null;titleStrategy=l(Vc);options=l(rr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(yo);createViewTransition=l(Cm,{optional:!0});navigationErrorHandler=l(xm,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>F(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new so(r)),i=r=>this.events.next(new co(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;he(()=>{this.transitions?.next(B(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ft(null),this.transitions.pipe(je(i=>i!==null),me(i=>{let r=!1,a=new AbortController,o=()=>!r&&this.currentTransition?.id===i.id;return F(i).pipe(me(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",$e.SupersededByNewNavigation),gt;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?B(v({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new nn(s.id,this.urlSerializer.serialize(s.rawUrl),"",jr.IgnoredSameUrlNavigation)),s.resolve(!1),gt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return F(s).pipe(me(g=>(this.events.next(new ni(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?gt:Promise.resolve(g))),Nv(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),It(g=>{i.targetSnapshot=g.targetSnapshot,i.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=g.urlAfterRedirects,_)),this.events.next(new $r)}),me(g=>de(i.routesRecognizeHandler.deferredHandle??F(void 0)).pipe(ne(()=>g))),It(()=>{let g=new Hr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:_,source:R,restoredState:O,extras:le}=s,Pe=new ni(g,this.urlSerializer.serialize(_),R,O);this.events.next(Pe);let ze=am(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=B(v({},s),{targetSnapshot:ze,urlAfterRedirects:_,extras:B(v({},le),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Te=>(Te.finalUrl=_,Te)),F(i)}else return this.events.next(new nn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",jr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),gt}),ne(s=>{let c=new io(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=B(v({},s),{guards:J_(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),cv(s=>this.events.next(s)),me(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw go(this.urlSerializer,s.guardsResult);let c=new ro(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!o())return gt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",$e.GuardRejected),gt;if(s.guards.canActivateChecks.length===0)return F(s);let d=new ao(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!o())return gt;let f=!1;return F(s).pipe(Lv(this.paramsInheritanceStrategy),It({next:()=>{f=!0;let g=new oo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{f||this.cancelNavigationTransition(s,"",$e.NoDataFromResolver)}}))}),zh(s=>{let c=f=>{let g=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let _=f._environmentInjector;g.push(this.configLoader.loadComponent(_,f.routeConfig).then(R=>{f.component=R}))}for(let _ of f.children)g.push(...c(_));return g},d=c(s.targetSnapshot.root);return d.length===0?F(s):de(Promise.all(d).then(()=>s))}),zh(()=>this.afterPreactivation()),me(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?de(d).pipe(ne(()=>i)):F(i)}),ke(1),me(s=>{let c=q_(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=B(v({},s),{targetRouterState:c}),this.currentNavigation.update(f=>(f.targetRouterState=c,f)),this.events.next(new Qi);let d=i.beforeActivateHandler.deferredHandle;return d?de(d.then(()=>s)):F(s)}),It(s=>{new Ac(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=jv,c)),this.lastSuccessfulNavigation.set(he(this.currentNavigation)),this.events.next(new Ht(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),_e(mm(a.signal).pipe(je(()=>!r&&!i.targetRouterState),It(()=>{this.cancelNavigationTransition(i,a.signal.reason+"",$e.Aborted)}))),It({complete:()=>{r=!0}}),_e(this.transitionAbortWithErrorSubject.pipe(It(s=>{throw s}))),Ta(()=>{a.abort(),r||this.cancelNavigationTransition(i,"",$e.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ot(s=>{if(r=!0,this.destroyed)return i.resolve(!1),gt;if(um(s))this.events.next(new wt(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),Q_(s)?this.events.next(new Ji(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new ii(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=ie(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Zi){let{message:f,cancellationCode:g}=go(this.urlSerializer,d);this.events.next(new wt(i.id,this.urlSerializer.serialize(i.extractedUrl),f,g)),this.events.next(new Ji(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return gt}))}))}cancelNavigationTransition(e,i,r){let a=new wt(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=he(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Hv(n){return n!==Vr}var Tm=new V("");var Am=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:()=>l($v),providedIn:"root"})}return n})(),vo=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}},$v=(()=>{class n extends vo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wo=(()=>{class n{urlSerializer=l(tr);options=l(rr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(wn);urlHandlingStrategy=l(yo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new dt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,o=r??a;return o instanceof dt?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=am(null,l(_t));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:()=>l(Wv),providedIn:"root"})}return n})(),Wv=(()=>{class n extends wo{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof ni?this.updateStateMemento():e instanceof nn?this.commitTransition(i):e instanceof Hr?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Qi?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof wt&&!rm(e)?this.restoreHistory(i):e instanceof ii?this.restoreHistory(i,!0):e instanceof Ht&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:a}=i,{replaceUrl:o,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||o){let c=this.browserPageId,d=v(v({},s),this.generateNgRouterState(a,c,i));this.location.replaceState(e,"",d)}else{let c=v(v({},s),this.generateNgRouterState(a,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?v({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):v({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function zc(n,t){n.events.pipe(je(e=>e instanceof Ht||e instanceof wt||e instanceof ii||e instanceof nn),ne(e=>e instanceof Ht||e instanceof nn?0:(e instanceof wt?e.code===$e.Redirect||e.code===$e.SupersededByNewNavigation:!1)?2:1),je(e=>e!==2),ke(1)).subscribe(()=>{t()})}var nt=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(ju);stateManager=l(wo);options=l(rr,{optional:!0})||{};pendingTasks=l(Ou);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Sm);urlSerializer=l(tr);location=l(wn);urlHandlingStrategy=l(yo);injector=l(_t);_events=new te;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Am);injectorCleanup=l(Tm,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Zr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Jr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new xa;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,a=he(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(i,a),i instanceof wt&&i.code!==$e.Redirect&&i.code!==$e.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ht)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ji){let o=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=v({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Hv(r.source)},o);this.scheduleNavigation(s,Vr,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}W_(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,a)=>{this.navigateToSyncWithBrowser(e,r,i,a)})}navigateToSyncWithBrowser(e,i,r,a){let o=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(a=B(v({},a),{browserUrl:e})),r){let d=v({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(a.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,o,a).catch(d=>{this.disposed||this.injector.get(Aa)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return he(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Uc),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:c}=i,d=c?this.currentUrlTree.fragment:o,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=v(v({},this.currentUrlTree.queryParams),a);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=a||null}f!==null&&(f=this.removeEmptyProps(f));let g;try{let _=r?r.snapshot:this.routerState.snapshot.root;g=em(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return tm(g,e,f,d??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=An(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Vr,null,i)}navigate(e,i={skipLocationChange:!1}){return Gv(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Au(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=v({},Wh):i===!1?r=v({},wc):r=v(v({},wc),i),An(e))return Ph(this.currentUrlTree,e,r);let a=this.parseUrl(e);return Ph(this.currentUrlTree,a,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,a])=>(a!=null&&(i[r]=a),i),{})}scheduleNavigation(e,i,r,a,o){if(this.disposed)return Promise.resolve(!1);let s,c,d;o?(s=o.resolve,c=o.reject,d=o.promise):d=new Promise((g,_)=>{s=g,c=_});let f=this.pendingTasks.add();return zc(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Gv(n){for(let t=0;t<n.length;t++)if(n[t]==null)throw new ye(4008,!1)}var Yv=(()=>{class n{router=l(nt);stateManager=l(wo);fragment=y("");queryParams=y({});path=y("");serializer=l(tr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ht&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new dt(i)))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ar=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Ti("href"),{optional:!0});reactiveHref=Zu(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return he(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return he(this._target)}_target=y(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return he(this._queryParams)}_queryParams=y(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return he(this._fragment)}_fragment=y(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return he(this._queryParamsHandling)}_queryParamsHandling=y(void 0);set state(e){this._state.set(e)}get state(){return he(this._state)}_state=y(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return he(this._info)}_info=y(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return he(this._relativeTo)}_relativeTo=y(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return he(this._preserveFragment)}_preserveFragment=y(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return he(this._skipLocationChange)}_skipLocationChange=y(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return he(this._replaceUrl)}_replaceUrl=y(!1);isAnchorElement;onChanges=new te;applicationErrorHandler=l(Aa);options=l(rr,{optional:!0});reactiveRouterState=l(Yv);constructor(e,i,r,a,o,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=y(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(An(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,a,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,a=this.el.nativeElement;i!==null?r.setAttribute(a,e,i):r.removeAttribute(a,e)}_urlTree=P(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:An(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return he(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||n)(Ei(nt),Ei(xt),Mu("tabindex"),Ei(Ft),Ei(re),Ei(nh))};static \u0275dir=ee({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&w("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&Y("href",r.reactiveHref(),Lu)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",G],skipLocationChange:[2,"skipLocationChange","skipLocationChange",G],replaceUrl:[2,"replaceUrl","replaceUrl",G],routerLink:"routerLink"},features:[Nt]})}return n})();var Qv=new V("");function Bc(n,...t){return Ii([{provide:Zr,multi:!0,useValue:n},[],{provide:xt,useFactory:Jv},{provide:$u,multi:!0,useFactory:Zv},t.map(e=>e.\u0275providers)])}function Jv(){return l(nt).routerState.root}function Xv(n,t){return{\u0275kind:n,\u0275providers:t}}function Zv(){let n=l(Z);return t=>{let e=n.get(Wu);if(t!==e.components[0])return;let i=n.get(nt),r=n.get(eb);n.get(tb)===1&&i.initialNavigation(),n.get(nb,null,{optional:!0})?.setUpPreloading(),n.get(Qv,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var eb=new V("",{factory:()=>new te}),tb=new V("",{factory:()=>1});var nb=new V("");function jc(){return Xv(8,[Lc,{provide:Jr,useExisting:Lc}])}var Rm=()=>{};var Mm=function(n){let t=[],e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},ib=function(n){let t=[],e=0,i=0;for(;e<n.length;){let r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let a=n[e++];t[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){let a=n[e++],o=n[e++],s=n[e++],c=((r&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{let a=n[e++],o=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return t.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){let a=n[r],o=r+1<n.length,s=o?n[r+1]:0,c=r+2<n.length,d=c?n[r+2]:0,f=a>>2,g=(a&3)<<4|s>>4,_=(s&15)<<2|d>>6,R=d&63;c||(R=64,o||(_=64)),i.push(e[f],e[g],e[_],e[R])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Mm(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ib(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();let e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){let a=e[n.charAt(r++)],s=r<n.length?e[n.charAt(r)]:0;++r;let d=r<n.length?e[n.charAt(r)]:64;++r;let g=r<n.length?e[n.charAt(r)]:64;if(++r,a==null||s==null||d==null||g==null)throw new $c;let _=a<<2|s>>4;if(i.push(_),d!==64){let R=s<<4&240|d>>2;if(i.push(R),g!==64){let O=d<<6&192|g;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},$c=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},rb=function(n){let t=Mm(n);return ko.encodeByteArray(t,!0)},Gc=function(n){return rb(n).replace(/\./g,"")},Io=function(n){try{return ko.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Pm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ab=()=>Pm().__FIREBASE_DEFAULTS__,ob=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=n&&Io(n[1]);return t&&JSON.parse(t)},qc=()=>{try{return Rm()||ab()||ob()||sb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nm=n=>{var t,e;return(e=(t=qc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]};var Kc=()=>{var n;return(n=qc())===null||n===void 0?void 0:n.config},Yc=n=>{var t;return(t=qc())===null||t===void 0?void 0:t[`_${n}`]};var ai=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}};function ta(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lm(n){return(await fetch(n,{credentials:"include"})).ok}var ea={};function cb(){let n={prod:[],emulator:[]};for(let t of Object.keys(ea))ea[t]?n.emulator.push(t):n.prod.push(t);return n}function lb(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}var Om=!1;function Fm(n,t){if(typeof window>"u"||typeof document>"u"||!ta(window.location.host)||ea[n]===t||ea[n]||Om)return;ea[n]=t;function e(_){return`__firebase__banner__${_}`}let i="__firebase__banner",a=cb().prod.length>0;function o(){let _=document.getElementById(i);_&&_.remove()}function s(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,R){_.setAttribute("width","24"),_.setAttribute("id",R),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){let _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Om=!0,o()},_}function f(_,R){_.setAttribute("id",R),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){let _=lb(i),R=e("text"),O=document.getElementById(R)||document.createElement("span"),le=e("learnmore"),Pe=document.getElementById(le)||document.createElement("a"),ze=e("preprendIcon"),Te=document.getElementById(ze)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){let Xe=_.element;s(Xe),f(Pe,le);let yi=d();c(Te,ze),Xe.append(Te,O,Pe,yi),document.body.appendChild(Xe)}a?(O.innerText="Preview backend disconnected.",Te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zm(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jm(){let n=We();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Eo(){try{return typeof indexedDB=="object"}catch{return!1}}function Hm(){return new Promise((n,t)=>{try{let e=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var a;t(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(e){t(e)}})}var db="FirebaseError",St=class n extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=db,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}},Tt=class{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){let i=e[0]||{},r=`${this.service}/${t}`,a=this.errors[t],o=a?ub(a,i):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new St(r,s,i)}};function ub(n,t){return n.replace(hb,(e,i)=>{let r=t[i];return r!=null?String(r):`<${i}?>`})}var hb=/\{\$([^}]+)}/g;function $m(n){for(let t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Rn(n,t){if(n===t)return!0;let e=Object.keys(n),i=Object.keys(t);for(let r of e){if(!i.includes(r))return!1;let a=n[r],o=t[r];if(Dm(a)&&Dm(o)){if(!Rn(a,o))return!1}else if(a!==o)return!1}for(let r of i)if(!e.includes(r))return!1;return!0}function Dm(n){return n!==null&&typeof n=="object"}function or(n){let t=[];for(let[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function sr(n){let t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){let[r,a]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(a)}}),t}function cr(n){let t=n.indexOf("?");if(!t)return"";let e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Wm(n,t){let e=new Wc(n,t);return e.subscribe.bind(e)}var Wc=class{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let r;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");mb(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:i},r.next===void 0&&(r.next=Hc),r.error===void 0&&(r.error=Hc),r.complete===void 0&&(r.complete=Hc);let a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function mb(n,t){if(typeof n!="object"||n===null)return!1;for(let e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Hc(){}var BT=14400*1e3;function it(n){return n&&n._delegate?n._delegate:n}var ht=class{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var oi="[DEFAULT]";var Qc=class{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let i=new ai;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let i=this.normalizeInstanceIdentifier(t?.identifier),r=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fb(t))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(let[e,i]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let a=this.getOrInitializeService({instanceIdentifier:r});i.resolve(a)}catch{}}}}clearInstance(t=oi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oi){return this.instances.has(t)}getOptions(t=oi){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:e});for(let[a,o]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(a);i===s&&o.resolve(r)}return r}onInit(t,e){var i;let r=this.normalizeInstanceIdentifier(e),a=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;a.add(t),this.onInitCallbacks.set(r,a);let o=this.instances.get(r);return o&&t(o,r),()=>{a.delete(t)}}invokeOnInitCallbacks(t,e){let i=this.onInitCallbacks.get(e);if(i)for(let r of i)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pb(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=oi){return this.component?this.component.multipleInstances?t:oi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function pb(n){return n===oi?void 0:n}function fb(n){return n.instantiationMode==="EAGER"}var Co=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new Qc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}};var gb=[],se=(function(n){return n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT",n})(se||{}),_b={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vb=se.INFO,bb={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},yb=(n,t,...e)=>{if(t<n.logLevel)return;let i=new Date().toISOString(),r=bb[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},On=class{constructor(t){this.name=t,this._logLevel=vb,this._logHandler=yb,this._userLogHandler=null,gb.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}};var wb=(n,t)=>t.some(e=>n instanceof e),Gm,qm;function kb(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Km=new WeakMap,Xc=new WeakMap,Ym=new WeakMap,Jc=new WeakMap,el=new WeakMap;function Eb(n){let t=new Promise((e,i)=>{let r=()=>{n.removeEventListener("success",a),n.removeEventListener("error",o)},a=()=>{e($t(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",a),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Km.set(e,n)}).catch(()=>{}),el.set(t,n),t}function Cb(n){if(Xc.has(n))return;let t=new Promise((e,i)=>{let r=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",o),n.removeEventListener("abort",o)},a=()=>{e(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",a),n.addEventListener("error",o),n.addEventListener("abort",o)});Xc.set(n,t)}var Zc={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Xc.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ym.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Qm(n){Zc=n(Zc)}function xb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){let i=n.call(xo(this),t,...e);return Ym.set(i,t.sort?t.sort():[t]),$t(i)}:Ib().includes(n)?function(...t){return n.apply(xo(this),t),$t(Km.get(this))}:function(...t){return $t(n.apply(xo(this),t))}}function Sb(n){return typeof n=="function"?xb(n):(n instanceof IDBTransaction&&Cb(n),wb(n,kb())?new Proxy(n,Zc):n)}function $t(n){if(n instanceof IDBRequest)return Eb(n);if(Jc.has(n))return Jc.get(n);let t=Sb(n);return t!==n&&(Jc.set(n,t),el.set(t,n)),t}var xo=n=>el.get(n);function So(n,t,{blocked:e,upgrade:i,blocking:r,terminated:a}={}){let o=indexedDB.open(n,t),s=$t(o);return i&&o.addEventListener("upgradeneeded",c=>{i($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),s.then(c=>{a&&c.addEventListener("close",()=>a()),r&&c.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),s}var Tb=["get","getKey","getAll","getAllKeys","count"],Ab=["put","add","delete","clear"],tl=new Map;function Jm(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(tl.get(t))return tl.get(t);let e=t.replace(/FromIndex$/,""),i=t!==e,r=Ab.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Tb.includes(e)))return;let a=async function(o,...s){let c=this.transaction(o,r?"readwrite":"readonly"),d=c.store;return i&&(d=d.index(s.shift())),(await Promise.all([d[e](...s),r&&c.done]))[0]};return tl.set(t,a),a}Qm(n=>B(v({},n),{get:(t,e,i)=>Jm(t,e)||n.get(t,e,i),has:(t,e)=>!!Jm(t,e)||n.has(t,e)}));var il=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rb(e)){let i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}};function Rb(n){let t=n.getComponent();return t?.type==="VERSION"}var rl="@firebase/app",Xm="0.13.2";var rn=new On("@firebase/app"),Ob="@firebase/app-compat",Db="@firebase/analytics-compat",Mb="@firebase/analytics",Pb="@firebase/app-check-compat",Nb="@firebase/app-check",Lb="@firebase/auth",Fb="@firebase/auth-compat",Ub="@firebase/database",Vb="@firebase/data-connect",zb="@firebase/database-compat",Bb="@firebase/functions",jb="@firebase/functions-compat",Hb="@firebase/installations",$b="@firebase/installations-compat",Wb="@firebase/messaging",Gb="@firebase/messaging-compat",qb="@firebase/performance",Kb="@firebase/performance-compat",Yb="@firebase/remote-config",Qb="@firebase/remote-config-compat",Jb="@firebase/storage",Xb="@firebase/storage-compat",Zb="@firebase/firestore",e0="@firebase/ai",t0="@firebase/firestore-compat",n0="firebase",i0="11.10.0";var al="[DEFAULT]",r0={[rl]:"fire-core",[Ob]:"fire-core-compat",[Mb]:"fire-analytics",[Db]:"fire-analytics-compat",[Nb]:"fire-app-check",[Pb]:"fire-app-check-compat",[Lb]:"fire-auth",[Fb]:"fire-auth-compat",[Ub]:"fire-rtdb",[Vb]:"fire-data-connect",[zb]:"fire-rtdb-compat",[Bb]:"fire-fn",[jb]:"fire-fn-compat",[Hb]:"fire-iid",[$b]:"fire-iid-compat",[Wb]:"fire-fcm",[Gb]:"fire-fcm-compat",[qb]:"fire-perf",[Kb]:"fire-perf-compat",[Yb]:"fire-rc",[Qb]:"fire-rc-compat",[Jb]:"fire-gcs",[Xb]:"fire-gcs-compat",[Zb]:"fire-fst",[t0]:"fire-fst-compat",[e0]:"fire-vertex","fire-js":"fire-js",[n0]:"fire-js-all"};var na=new Map,a0=new Map,ol=new Map;function Zm(n,t){try{n.container.addComponent(t)}catch(e){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function an(n){let t=n.name;if(ol.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;ol.set(t,n);for(let e of na.values())Zm(e,n);for(let e of a0.values())Zm(e,n);return!0}function To(n,t){let e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function mt(n){return n==null?!1:n.settings!==void 0}var o0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new Tt("app","Firebase",o0);var sl=class{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}};var lr=i0;function dl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});let i=Object.assign({name:al,automaticDataCollectionEnabled:!0},t),r=i.name;if(typeof r!="string"||!r)throw Dn.create("bad-app-name",{appName:String(r)});if(e||(e=Kc()),!e)throw Dn.create("no-options");let a=na.get(r);if(a){if(Rn(e,a.options)&&Rn(i,a.config))return a;throw Dn.create("duplicate-app",{appName:r})}let o=new Co(r);for(let c of ol.values())o.addComponent(c);let s=new sl(e,i,o);return na.set(r,s),s}function ra(n=al){let t=na.get(n);if(!t&&n===al&&Kc())return dl();if(!t)throw Dn.create("no-app",{appName:n});return t}function Ao(){return Array.from(na.values())}function Fe(n,t,e){var i;let r=(i=r0[n])!==null&&i!==void 0?i:n;e&&(r+=`-${e}`);let a=r.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let s=[`Unable to register library "${r}" with version "${t}":`];a&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(s.join(" "));return}an(new ht(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}var s0="firebase-heartbeat-database",c0=1,ia="firebase-heartbeat-store",nl=null;function ip(){return nl||(nl=So(s0,c0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ia)}catch(e){console.warn(e)}}}}).catch(n=>{throw Dn.create("idb-open",{originalErrorMessage:n.message})})),nl}async function l0(n){try{let e=(await ip()).transaction(ia),i=await e.objectStore(ia).get(rp(n));return await e.done,i}catch(t){if(t instanceof St)rn.warn(t.message);else{let e=Dn.create("idb-get",{originalErrorMessage:t?.message});rn.warn(e.message)}}}async function ep(n,t){try{let i=(await ip()).transaction(ia,"readwrite");await i.objectStore(ia).put(t,rp(n)),await i.done}catch(e){if(e instanceof St)rn.warn(e.message);else{let i=Dn.create("idb-set",{originalErrorMessage:e?.message});rn.warn(i.message)}}}function rp(n){return`${n.name}!${n.options.appId}`}var d0=1024,u0=30,cl=class{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new ll(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=tp();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>u0){let o=m0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){rn.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=tp(),{heartbeatsToSend:i,unsentEntries:r}=h0(this._heartbeatsCache.heartbeats),a=Gc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return rn.warn(e),""}}};function tp(){return new Date().toISOString().substring(0,10)}function h0(n,t=d0){let e=[],i=n.slice();for(let r of n){let a=e.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),np(e)>t){a.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),np(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}var ll=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eo()?Hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await l0(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){let r=await this.read();return ep(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){let r=await this.read();return ep(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}};function np(n){return Gc(JSON.stringify({version:2,heartbeats:n})).length}function m0(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}function p0(n){an(new ht("platform-logger",t=>new il(t),"PRIVATE")),an(new ht("heartbeat",t=>new cl(t),"PRIVATE")),Fe(rl,Xm,n),Fe(rl,Xm,"esm2017"),Fe("fire-js","")}p0("");var f0="firebase",g0="11.10.0";Fe(f0,g0,"app");function ap(n,t){let e=t?.injector??l(Z),i=new Rr(1),r=Le(()=>{let a;try{a=n()}catch(o){he(()=>i.error(o));return}he(()=>i.next(a))},{injector:e,manualCleanup:!0});return e.get(Gn).onDestroy(()=>{r.destroy(),i.complete()}),i.asObservable()}function op(n,t){let i=!t?.manualCleanup?t?.injector?.get(Gn)??l(Gn):null,r=_0(t?.equal),a;t?.requireSync?a=y({kind:0},{equal:r}):a=y({kind:1,value:t?.initialValue},{equal:r});let o,s=n.subscribe({next:c=>a.set({kind:1,value:c}),error:c=>{a.set({kind:2,error:c}),o?.()},complete:()=>{o?.()}});if(t?.requireSync&&a().kind===0)throw new ye(601,!1);return o=i?.onDestroy(s.unsubscribe.bind(s)),P(()=>{let c=a();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new ye(601,!1)}},{equal:t?.equal})}function _0(n=Object.is){return(t,e)=>t.kind===1&&e.kind===1&&n(t.value,e.value)}function sp(n){n===void 0&&(n=l(Z));let t=n.get(Ra);return e=>new pt(i=>{let r=t.add(),a=!1;function o(){a||(r(),a=!0)}let s=e.subscribe({next:c=>{i.next(c),o()},complete:()=>{i.complete(),o()},error:c=>{i.error(c),o()}});return s.add(()=>{i.unsubscribe(),o()}),s})}var ur=new Su("ANGULARFIRE2_VERSION");function ul(n,t,e){if(t){if(t.length===1)return t[0];let a=t.filter(o=>o.app===e);if(a.length===1)return a[0]}return e.container.getProvider(n).getImmediate({optional:!0})}var Oo=(n,t)=>{let e=t?[t]:Ao(),i=[];return e.forEach(r=>{r.container.getProvider(n).instances.forEach(o=>{i.includes(o)||i.push(o)})}),i},dr=(function(n){return n[n.SILENT=0]="SILENT",n[n.WARN=1]="WARN",n[n.VERBOSE=2]="VERBOSE",n})(dr||{}),cp=hc()&&typeof Zone<"u"?dr.WARN:dr.SILENT;var Ro=class{zone;delegate;constructor(t,e=Iu){this.zone=t,this.delegate=e}now(){return this.delegate.now()}schedule(t,e,i){let r=this.zone,a=function(o){r?r.runGuarded(()=>{t.apply(this,[o])}):t.apply(this,[o])};return this.delegate.schedule(a,e,i)}},hr=(()=>{class n{outsideAngular;insideAngular;constructor(){let e=l(pe);this.outsideAngular=e.runOutsideAngular(()=>new Ro(typeof Zone>"u"?void 0:Zone.current)),this.insideAngular=e.run(()=>new Ro(typeof Zone>"u"?void 0:Zone.current,ku))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lp=!1;function v0(n,t){!lp&&(cp>dr.SILENT||hc())&&(lp=!0,console.warn("Calling Firebase APIs outside of an Injection context may destabilize your application leading to subtle change-detection and hydration bugs. Find more at https://github.com/angular/angularfire/blob/main/docs/zones.md")),cp>=t&&console.warn(`Firebase API called outside injection context: ${n.name}`)}function b0(n){let t=l(pe,{optional:!0});return t?t.runOutsideAngular(()=>n()):n()}function si(n){let t=l(pe,{optional:!0});return t?t.run(()=>n()):n()}var y0=(n,t,e)=>(...i)=>(t&&setTimeout(t,0),ie(e,()=>si(()=>n.apply(void 0,i)))),Ue=(n,t,e)=>(e||=t?dr.WARN:dr.VERBOSE,function(){let i,r=arguments,a,o,s;try{a=l(hr),o=l(Ra),s=l(_t)}catch{return v0(n,e),n.apply(this,r)}for(let d=0;d<arguments.length;d++)typeof r[d]=="function"&&(t&&(i||=si(()=>o.add())),r[d]=y0(r[d],i,s));let c=b0(()=>n.apply(this,r));return t?c instanceof pt?c.pipe(ic(a.outsideAngular),nc(a.insideAngular),sp(s)):c instanceof Promise?si(()=>{let d=o.add();return new Promise((f,g)=>{c.then(_=>ie(s,()=>si(()=>f(_))),_=>ie(s,()=>si(()=>g(_)))).finally(d)})}):typeof c=="function"&&i?function(){return setTimeout(i,0),c.apply(this,arguments)}:si(()=>c):c instanceof pt?c.pipe(ic(a.outsideAngular),nc(a.insideAngular)):si(()=>c)});var ci=class{constructor(t){return t}},aa=class{constructor(){return Ao()}};function w0(n){return n&&n.length===1?n[0]:new ci(ra())}var hl=new V("angularfire2._apps"),k0={provide:ci,useFactory:w0,deps:[[new qn,hl]]},I0={provide:aa,deps:[[new qn,hl]]};function E0(n){return(t,e)=>{let i=e.get(Pu);Fe("angularfire",ur.full,"core"),Fe("angularfire",ur.full,"app"),Fe("angular",Tu.full,i.toString());let r=t.runOutsideAngular(()=>n(e));return new ci(r)}}function dp(n,...t){return Ii([k0,I0,{provide:hl,useFactory:E0(n),multi:!0,deps:[pe,Z,hr,...t]}])}var up=Ue(dl,!0);var C0=new Map,x0={activated:!1,tokenObservers:[]},S0={initialized:!1,enabled:!1};function At(n){return C0.get(n)||Object.assign({},x0)}function fp(){return S0}var T0="https://content-firebaseappcheck.googleapis.com/v1";var A0="exchangeDebugToken",hp={OFFSET_DURATION:300*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},$A=1440*60*1e3;var fl=class{constructor(t,e,i,r,a){if(this.operation=t,this.retryPolicy=e,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=a,this.pending=null,this.nextErrorWaitInterval=r,r>a)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new ai,this.pending.promise.catch(e=>{}),await R0(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new ai,this.pending.promise.catch(e=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}};function R0(n){return new Promise(t=>{setTimeout(t,n)})}var O0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Mn=new Tt("appCheck","AppCheck",O0);function gp(n){if(!At(n).activated)throw Mn.create("use-before-activation",{appName:n.name})}async function _p({url:n,body:t},e){let i={"Content-Type":"application/json"},r=e.getImmediate({optional:!0});if(r){let g=await r.getHeartbeatsHeader();g&&(i["X-Firebase-Client"]=g)}let a={method:"POST",body:JSON.stringify(t),headers:i},o;try{o=await fetch(n,a)}catch(g){throw Mn.create("fetch-network-error",{originalErrorMessage:g?.message})}if(o.status!==200)throw Mn.create("fetch-status-error",{httpStatus:o.status});let s;try{s=await o.json()}catch(g){throw Mn.create("fetch-parse-error",{originalErrorMessage:g?.message})}let c=s.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Mn.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${s.ttl}`});let d=Number(c[1])*1e3,f=Date.now();return{token:s.token,expireTimeMillis:f+d,issuedAtTimeMillis:f}}function vp(n,t){let{projectId:e,appId:i,apiKey:r}=n.options;return{url:`${T0}/projects/${e}/apps/${i}:${A0}?key=${r}`,body:{debug_token:t}}}var D0="firebase-app-check-database",M0=1,gl="firebase-app-check-store";var Do=null;function P0(){return Do||(Do=new Promise((n,t)=>{try{let e=indexedDB.open(D0,M0);e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var r;t(Mn.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},e.onupgradeneeded=i=>{let r=i.target.result;i.oldVersion===0&&r.createObjectStore(gl,{keyPath:"compositeKey"})}}catch(e){t(Mn.create("storage-open",{originalErrorMessage:e?.message}))}}),Do)}function N0(n,t){return L0(F0(n),t)}async function L0(n,t){let i=(await P0()).transaction(gl,"readwrite"),a=i.objectStore(gl).put({compositeKey:n,value:t});return new Promise((o,s)=>{a.onsuccess=c=>{o()},i.onerror=c=>{var d;s(Mn.create("storage-set",{originalErrorMessage:(d=c.target.error)===null||d===void 0?void 0:d.message}))}})}function F0(n){return`${n.options.appId}-${n.name}`}var oa=new On("@firebase/app-check");function ml(n,t){return Eo()?N0(n,t).catch(e=>{oa.warn(`Failed to write token to IndexedDB. Error: ${e}`)}):Promise.resolve()}function bp(){return fp().enabled}async function yp(){let n=fp();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}var U0={error:"UNKNOWN_ERROR"};function V0(n){return ko.encodeString(JSON.stringify(n),!1)}async function _l(n,t=!1,e=!1){let i=n.app;gp(i);let r=At(i),a=r.token,o;if(a&&!sa(a)&&(r.token=void 0,a=void 0),!a){let d=await r.cachedTokenPromise;d&&(sa(d)?a=d:await ml(i,void 0))}if(!t&&a&&sa(a))return{token:a.token};let s=!1;if(bp())try{r.exchangeTokenPromise||(r.exchangeTokenPromise=_p(vp(i,await yp()),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),s=!0);let d=await r.exchangeTokenPromise;return await ml(i,d),r.token=d,{token:d.token}}catch(d){return d.code==="appCheck/throttled"||d.code==="appCheck/initial-throttle"?oa.warn(d.message):e&&oa.error(d),pl(d)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),s=!0),a=await At(i).exchangeTokenPromise}catch(d){d.code==="appCheck/throttled"||d.code==="appCheck/initial-throttle"?oa.warn(d.message):e&&oa.error(d),o=d}let c;return a?o?sa(a)?c={token:a.token,internalError:o}:c=pl(o):(c={token:a.token},r.token=a,await ml(i,a)):c=pl(o),s&&H0(i,c),c}async function z0(n){let t=n.app;gp(t);let{provider:e}=At(t);if(bp()){let i=await yp(),{token:r}=await _p(vp(t,i),n.heartbeatServiceProvider);return{token:r}}else{let{token:i}=await e.getToken();return{token:i}}}function B0(n,t,e,i){let{app:r}=n,a=At(r),o={next:e,error:i,type:t};if(a.tokenObservers=[...a.tokenObservers,o],a.token&&sa(a.token)){let s=a.token;Promise.resolve().then(()=>{e({token:s.token}),mp(n)}).catch(()=>{})}a.cachedTokenPromise.then(()=>mp(n))}function wp(n,t){let e=At(n),i=e.tokenObservers.filter(r=>r.next!==t);i.length===0&&e.tokenRefresher&&e.tokenRefresher.isRunning()&&e.tokenRefresher.stop(),e.tokenObservers=i}function mp(n){let{app:t}=n,e=At(t),i=e.tokenRefresher;i||(i=j0(n),e.tokenRefresher=i),!i.isRunning()&&e.isTokenAutoRefreshEnabled&&i.start()}function j0(n){let{app:t}=n;return new fl(async()=>{let e=At(t),i;if(e.token?i=await _l(n,!0):i=await _l(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{let e=At(t);if(e.token){let i=e.token.issuedAtTimeMillis+(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)*.5+3e5,r=e.token.expireTimeMillis-300*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},hp.RETRIAL_MIN_WAIT,hp.RETRIAL_MAX_WAIT)}function H0(n,t){let e=At(n).tokenObservers;for(let i of e)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function sa(n){return n.expireTimeMillis-Date.now()>0}function pl(n){return{token:V0(U0),error:n}}var vl=class{constructor(t,e){this.app=t,this.heartbeatServiceProvider=e}_delete(){let{tokenObservers:t}=At(this.app);for(let e of t)wp(this.app,e.next);return Promise.resolve()}};function $0(n,t){return new vl(n,t)}function W0(n){return{getToken:t=>_l(n,t),getLimitedUseToken:()=>z0(n),addTokenListener:t=>B0(n,"INTERNAL",t),removeTokenListener:t=>wp(n.app,t)}}var G0="@firebase/app-check",q0="0.10.1";var K0="app-check",pp="app-check-internal";function Y0(){an(new ht(K0,n=>{let t=n.getProvider("app").getImmediate(),e=n.getProvider("heartbeat");return $0(t,e)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,t,e)=>{n.getProvider(pp).initialize()})),an(new ht(pp,n=>{let t=n.getProvider("app-check").getImmediate();return W0(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Fe(G0,q0)}Y0();var Q0="app-check";var Mo=class{constructor(){return Oo(Q0)}};var J0=["localhost","0.0.0.0","127.0.0.1"],nR=typeof window<"u"&&J0.includes(window.location.hostname);var kp=()=>{};var Ip=function(n){let t=[],e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},X0=function(n){let t=[],e=0,i=0;for(;e<n.length;){let r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let a=n[e++];t[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){let a=n[e++],o=n[e++],s=n[e++],c=((r&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{let a=n[e++],o=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){let a=n[r],o=r+1<n.length,s=o?n[r+1]:0,c=r+2<n.length,d=c?n[r+2]:0,f=a>>2,g=(a&3)<<4|s>>4,_=(s&15)<<2|d>>6,R=d&63;c||(R=64,o||(_=64)),i.push(e[f],e[g],e[_],e[R])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ip(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):X0(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();let e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){let a=e[n.charAt(r++)],s=r<n.length?e[n.charAt(r)]:0;++r;let d=r<n.length?e[n.charAt(r)]:64;++r;let g=r<n.length?e[n.charAt(r)]:64;if(++r,a==null||s==null||d==null||g==null)throw new yl;let _=a<<2|s>>4;if(i.push(_),d!==64){let R=s<<4&240|d>>2;if(i.push(R),g!==64){let O=d<<6&192|g;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},yl=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Z0=function(n){let t=Ip(n);return Ep.encodeByteArray(t,!0)},kl=function(n){return Z0(n).replace(/\./g,"")},Po=function(n){try{return Ep.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ty=()=>ey().__FIREBASE_DEFAULTS__,ny=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=n&&Po(n[1]);return t&&JSON.parse(t)},ry=()=>{try{return kp()||ty()||ny()||iy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}};var Cp=n=>ry()?.[`_${n}`];function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function Sp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tp(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rp(){try{return typeof indexedDB=="object"}catch{return!1}}function Op(){return new Promise((n,t)=>{try{let e=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{t(r.error?.message||"")}}catch(e){t(e)}})}var ay="FirebaseError",Wt=class n extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=ay,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}},on=class{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){let i=e[0]||{},r=`${this.service}/${t}`,a=this.errors[t],o=a?oy(a,i):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new Wt(r,s,i)}};function oy(n,t){return n.replace(sy,(e,i)=>{let r=t[i];return r!=null?String(r):`<${i}?>`})}var sy=/\{\$([^}]+)}/g;function Il(n){let t=[];for(let[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Dp(n,t){let e=new wl(n,t);return e.subscribe.bind(e)}var wl=class{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let r;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");cy(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:i},r.next===void 0&&(r.next=bl),r.error===void 0&&(r.error=bl),r.complete===void 0&&(r.complete=bl);let a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function cy(n,t){if(typeof n!="object"||n===null)return!1;for(let e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function bl(){}var sR=14400*1e3;function Pn(n){return n&&n._delegate?n._delegate:n}function El(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}var sn=class{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var ly=[],ce=(function(n){return n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT",n})(ce||{}),dy={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},uy=ce.INFO,hy={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},my=(n,t,...e)=>{if(t<n.logLevel)return;let i=new Date().toISOString(),r=hy[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},mr=class{constructor(t){this.name=t,this._logLevel=uy,this._logHandler=my,this._userLogHandler=null,ly.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}};var xl=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(fy(e)){let i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}};function fy(n){return n.getComponent()?.type==="VERSION"}var Sl="@firebase/app",Mp="0.14.10";var cn=new mr("@firebase/app"),gy="@firebase/app-compat",_y="@firebase/analytics-compat",vy="@firebase/analytics",by="@firebase/app-check-compat",yy="@firebase/app-check",wy="@firebase/auth",ky="@firebase/auth-compat",Iy="@firebase/database",Ey="@firebase/data-connect",Cy="@firebase/database-compat",xy="@firebase/functions",Sy="@firebase/functions-compat",Ty="@firebase/installations",Ay="@firebase/installations-compat",Ry="@firebase/messaging",Oy="@firebase/messaging-compat",Dy="@firebase/performance",My="@firebase/performance-compat",Py="@firebase/remote-config",Ny="@firebase/remote-config-compat",Ly="@firebase/storage",Fy="@firebase/storage-compat",Uy="@firebase/firestore",Vy="@firebase/ai",zy="@firebase/firestore-compat",By="firebase",jy="12.11.0";var Hy={[Sl]:"fire-core",[gy]:"fire-core-compat",[vy]:"fire-analytics",[_y]:"fire-analytics-compat",[yy]:"fire-app-check",[by]:"fire-app-check-compat",[wy]:"fire-auth",[ky]:"fire-auth-compat",[Iy]:"fire-rtdb",[Ey]:"fire-data-connect",[Cy]:"fire-rtdb-compat",[xy]:"fire-fn",[Sy]:"fire-fn-compat",[Ty]:"fire-iid",[Ay]:"fire-iid-compat",[Ry]:"fire-fcm",[Oy]:"fire-fcm-compat",[Dy]:"fire-perf",[My]:"fire-perf-compat",[Py]:"fire-rc",[Ny]:"fire-rc-compat",[Ly]:"fire-gcs",[Fy]:"fire-gcs-compat",[Uy]:"fire-fst",[zy]:"fire-fst-compat",[Vy]:"fire-vertex","fire-js":"fire-js",[By]:"fire-js-all"};var $y=new Map,Wy=new Map,Pp=new Map;function Np(n,t){try{n.container.addComponent(t)}catch(e){cn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function fr(n){let t=n.name;if(Pp.has(t))return cn.debug(`There were multiple attempts to register component ${t}.`),!1;Pp.set(t,n);for(let e of $y.values())Np(e,n);for(let e of Wy.values())Np(e,n);return!0}function li(n){return n==null?!1:n.settings!==void 0}var Gy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rl=new on("app","Firebase",Gy);var No=jy;function pr(n,t,e){let i=Hy[n]??n;e&&(i+=`-${e}`);let r=i.match(/\s|\//),a=t.match(/\s|\//);if(r||a){let o=[`Unable to register library "${i}" with version "${t}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cn.warn(o.join(" "));return}fr(new sn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}var qy="firebase-heartbeat-database",Ky=1,ca="firebase-heartbeat-store",Cl=null;function Vp(){return Cl||(Cl=So(qy,Ky,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ca)}catch(e){console.warn(e)}}}}).catch(n=>{throw Rl.create("idb-open",{originalErrorMessage:n.message})})),Cl}async function Yy(n){try{let e=(await Vp()).transaction(ca),i=await e.objectStore(ca).get(zp(n));return await e.done,i}catch(t){if(t instanceof Wt)cn.warn(t.message);else{let e=Rl.create("idb-get",{originalErrorMessage:t?.message});cn.warn(e.message)}}}async function Lp(n,t){try{let i=(await Vp()).transaction(ca,"readwrite");await i.objectStore(ca).put(t,zp(n)),await i.done}catch(e){if(e instanceof Wt)cn.warn(e.message);else{let i=Rl.create("idb-set",{originalErrorMessage:e?.message});cn.warn(i.message)}}}function zp(n){return`${n.name}!${n.options.appId}`}var Qy=1024,Jy=30,Tl=class{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new Al(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{let e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fp();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:e}),this._heartbeatsCache.heartbeats.length>Jy){let r=Zy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){cn.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Fp(),{heartbeatsToSend:e,unsentEntries:i}=Xy(this._heartbeatsCache.heartbeats),r=kl(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return cn.warn(t),""}}};function Fp(){return new Date().toISOString().substring(0,10)}function Xy(n,t=Qy){let e=[],i=n.slice();for(let r of n){let a=e.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),Up(e)>t){a.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Up(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}var Al=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rp()?Op().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await Yy(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let i=await this.read();return Lp(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let i=await this.read();return Lp(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}};function Up(n){return kl(JSON.stringify({version:2,heartbeats:n})).length}function Zy(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}function ew(n){fr(new sn("platform-logger",t=>new xl(t),"PRIVATE")),fr(new sn("heartbeat",t=>new Tl(t),"PRIVATE")),pr(Sl,Mp,n),pr(Sl,Mp,"esm2020"),pr("fire-js","")}ew("");function Kp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Yp=Kp,Qp=new on("auth","Firebase",Kp());var Vo=new mr("@firebase/auth");function tw(n,...t){Vo.logLevel<=ce.WARN&&Vo.warn(`Auth (${No}): ${n}`,...t)}function Fo(n,...t){Vo.logLevel<=ce.ERROR&&Vo.error(`Auth (${No}): ${n}`,...t)}function Bp(n,...t){throw jl(n,...t)}function Bl(n,...t){return jl(n,...t)}function Jp(n,t,e){let i=B(v({},Yp()),{[t]:e});return new on("auth","Firebase",i).create(t,{appName:n.name})}function Uo(n){return Jp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jl(n,...t){if(typeof n!="string"){let e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return Qp.create(n,...t)}function J(n,t,...e){if(!n)throw jl(t,...e)}function la(n){let t="INTERNAL ASSERTION FAILED: "+n;throw Fo(t),new Error(t)}function zo(n,t){n||la(t)}function nw(){return jp()==="http:"||jp()==="https:"}function jp(){return typeof self<"u"&&self.location?.protocol||null}function iw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nw()||Tp()||"connection"in navigator)?navigator.onLine:!0}function rw(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var hi=class{constructor(t,e){this.shortDelay=t,this.longDelay=e,zo(e>t,"Short delay should be less than long delay!"),this.isMobile=xp()||Ap()}get(){return iw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function aw(n,t){zo(n.emulator,"Emulator should always be set here");let{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}var Bo=class{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;la("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;la("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;la("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var ow={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var sw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cw=new hi(3e4,6e4);function Xp(n,t){return n.tenantId&&!t.tenantId?B(v({},t),{tenantId:n.tenantId}):t}async function Go(n,t,e,i,r={}){return Zp(n,r,async()=>{let a={},o={};i&&(t==="GET"?o=i:a={body:JSON.stringify(i)});let s=Il(v({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);let d=v({method:t,headers:c},a);return Sp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&El(n.emulatorConfig.host)&&(d.credentials="include"),Bo.fetch()(await ef(n,n.config.apiHost,e,s),d)})}async function Zp(n,t,e){n._canInitEmulator=!1;let i=v(v({},ow),t);try{let r=new Ml(n),a=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();let o=await a.json();if("needConfirmation"in o)throw Lo(n,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{let s=a.ok?o.errorMessage:o.error.message,[c,d]=s.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lo(n,"user-disabled",o);let f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Jp(n,f,d);Bp(n,f)}}catch(r){if(r instanceof Wt)throw r;Bp(n,"network-request-failed",{message:String(r)})}}async function ef(n,t,e,i){let r=`${t}${e}?${i}`,a=n,o=a.config.emulator?aw(n.config,r):`${n.config.apiScheme}://${r}`;return sw.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}var Ml=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(Bl(this.auth,"network-request-failed")),cw.get())})}};function Lo(n,t,e){let i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);let r=Bl(n,t,i);return r.customData._tokenResponse=e,r}async function lw(n,t){return Go(n,"POST","/v1/accounts:delete",t)}async function jo(n,t){return Go(n,"POST","/v1/accounts:lookup",t)}function da(n){if(n)try{let t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}function Hl(n,t=!1){return Pn(n).getIdToken(t)}async function tf(n,t=!1){let e=Pn(n),i=await e.getIdToken(t),r=nf(i);J(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");let a=typeof r.firebase=="object"?r.firebase:void 0,o=a?.sign_in_provider;return{claims:r,token:i,authTime:da(Ol(r.auth_time)),issuedAtTime:da(Ol(r.iat)),expirationTime:da(Ol(r.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ol(n){return Number(n)*1e3}function nf(n){let[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{let r=Po(e);return r?JSON.parse(r):(Fo("Failed to decode base64 JWT payload"),null)}catch(r){return Fo("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Hp(n){let t=nf(n);return J(t,"internal-error"),J(typeof t.exp<"u","internal-error"),J(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}async function Pl(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof Wt&&dw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function dw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Nl=class{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){let e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;let i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;let e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ha=class{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Ho(n){let t=n.auth,e=await n.getIdToken(),i=await Pl(n,jo(t,{idToken:e}));J(i?.users.length,t,"internal-error");let r=i.users[0];n._notifyReloadListener(r);let a=r.providerUserInfo?.length?af(r.providerUserInfo):[],o=uw(n.providerData,a),s=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!o?.length,d=s?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ha(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function rf(n){let t=Pn(n);await Ho(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uw(n,t){return[...n.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function af(n){return n.map(i=>{var r=i,{providerId:t}=r,e=tc(r,["providerId"]);return{providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}})}async function hw(n,t){let e=await Zp(n,{},async()=>{let i=Il({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=n.config,o=await ef(n,r,"/v1/token",`key=${a}`),s=await n._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:s,body:i};return n.emulatorConfig&&El(n.emulatorConfig.host)&&(c.credentials="include"),Bo.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function mw(n,t){return Go(n,"POST","/v2/accounts:revokeToken",Xp(n,t))}var ua=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){J(t.idToken,"internal-error"),J(typeof t.idToken<"u","internal-error"),J(typeof t.refreshToken<"u","internal-error");let e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Hp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){J(t.length!==0,"internal-error");let e=Hp(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){let{accessToken:i,refreshToken:r,expiresIn:a}=await hw(t,e);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){let{refreshToken:i,accessToken:r,expirationTime:a}=e,o=new n;return i&&(J(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(J(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),a&&(J(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return la("not implemented")}};function Nn(n,t){J(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}var di=class n{constructor(a){var o=a,{uid:t,auth:e,stsTokenManager:i}=o,r=tc(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ha(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){let e=await Pl(this,this.stsTokenManager.getToken(this.auth,t));return J(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return tf(this,t)}reload(){return rf(this)}_assign(t){this!==t&&(J(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>v({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){let e=new n(B(v({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Ho(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(li(this.auth.app))return Promise.reject(Uo(this.auth));let t=await this.getIdToken();return await Pl(this,lw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return B(v({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>v({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){let i=e.displayName??void 0,r=e.email??void 0,a=e.phoneNumber??void 0,o=e.photoURL??void 0,s=e.tenantId??void 0,c=e._redirectEventId??void 0,d=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:R,providerData:O,stsTokenManager:le}=e;J(g&&le,t,"internal-error");let Pe=ua.fromJSON(this.name,le);J(typeof g=="string",t,"internal-error"),Nn(i,t.name),Nn(r,t.name),J(typeof _=="boolean",t,"internal-error"),J(typeof R=="boolean",t,"internal-error"),Nn(a,t.name),Nn(o,t.name),Nn(s,t.name),Nn(c,t.name),Nn(d,t.name),Nn(f,t.name);let ze=new n({uid:g,auth:t,email:r,emailVerified:_,displayName:i,isAnonymous:R,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:Pe,createdAt:d,lastLoginAt:f});return O&&Array.isArray(O)&&(ze.providerData=O.map(Te=>v({},Te))),c&&(ze._redirectEventId=c),ze}static async _fromIdTokenResponse(t,e,i=!1){let r=new ua;r.updateFromServerResponse(e);let a=new n({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await Ho(a),a}static async _fromGetAccountInfoResponse(t,e,i){let r=e.users[0];J(r.localId!==void 0,"internal-error");let a=r.providerUserInfo!==void 0?af(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!a?.length,s=new ua;s.updateFromIdToken(i);let c=new n({uid:r.localId,auth:t,stsTokenManager:s,isAnonymous:o}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ha(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(c,d),c}};var $p=new Map;function ui(n){zo(n instanceof Function,"Expected a class definition");let t=$p.get(n);return t?(zo(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,$p.set(n,t),t)}var pw=(()=>{class n{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){let i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}return n.type="NONE",n})(),Ll=pw;function Dl(n,t,e){return`firebase:${n}:${t}:${e}`}var $o=class n{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;let{config:r,name:a}=this.auth;this.fullUserKey=Dl(this.userKey,r.apiKey,a),this.fullPersistenceKey=Dl("persistence",r.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){let t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){let e=await jo(this.auth,{idToken:t}).catch(()=>{});return e?di._fromGetAccountInfoResponse(this.auth,e,t):null}return di._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;let e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new n(ui(Ll),t,i);let r=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),a=r[0]||ui(Ll),o=Dl(i,t.config.apiKey,t.name),s=null;for(let d of e)try{let f=await d._get(o);if(f){let g;if(typeof f=="string"){let _=await jo(t,{idToken:f}).catch(()=>{});if(!_)break;g=await di._fromGetAccountInfoResponse(t,_,f)}else g=di._fromJSON(t,f);d!==a&&(s=g),a=d;break}}catch{}let c=r.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new n(a,t,i):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(e.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new n(a,t,i))}};function Wp(n){let t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vw(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fw(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yw(t))return"Blackberry";if(ww(t))return"Webos";if(gw(t))return"Safari";if((t.includes("chrome/")||_w(t))&&!t.includes("edge/"))return"Chrome";if(bw(t))return"Android";{let e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if(i?.length===2)return i[1]}return"Other"}function fw(n=Rt()){return/firefox\//i.test(n)}function gw(n=Rt()){let t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _w(n=Rt()){return/crios\//i.test(n)}function vw(n=Rt()){return/iemobile/i.test(n)}function bw(n=Rt()){return/android/i.test(n)}function yw(n=Rt()){return/blackberry/i.test(n)}function ww(n=Rt()){return/webos/i.test(n)}function of(n,t=[]){let e;switch(n){case"Browser":e=Wp(Rt());break;case"Worker":e=`${Wp(Rt())}-${n}`;break;default:e=n}let i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${No}/${i}`}var Fl=class{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){let i=a=>new Promise((o,s)=>{try{let c=t(a);o(c)}catch(c){s(c)}});i.onAbort=e,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;let e=[];try{for(let i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(let r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}};async function kw(n,t={}){return Go(n,"GET","/v2/passwordPolicy",Xp(n,t))}var Iw=6,Ul=class{constructor(t){let e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??Iw,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){let e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}};var Vl=class{constructor(t,e,i,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wo(this),this.idTokenSubscription=new Wo(this),this.beforeStateQueue=new Fl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ui(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await $o.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{let e=await jo(this,{idToken:t}),i=await di._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(li(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}let e=await this.assertedPersistence.getCurrentUser(),i=e,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=this.redirectUser?._redirectEventId,o=i?._redirectEventId,s=await this.tryRedirectSignIn(t);(!a||a===o)&&s?.user&&(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ho(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(li(this.app))return Promise.reject(Uo(this));let e=t?Pn(t):null;return e&&J(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&J(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return li(this.app)?Promise.reject(Uo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return li(this.app)?Promise.reject(Uo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ui(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let t=await kw(this),e=new Ul(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new on("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{let i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){let e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await mw(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){let i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){let e=t&&ui(t)||this._popupRedirectResolver;J(e,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[ui(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,r){if(this._deleted)return()=>{};let a=typeof e=="function"?e:e.next.bind(e),o=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof e=="function"){let c=t.addObserver(e,i,r);return()=>{o=!0,c()}}else{let c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(li(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&tw(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Ew(n){return Pn(n)}var Wo=class{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dp(e=>this.observer=e)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Cw={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xw(n){Cw=n}function Sw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}function Tw(n,t){let e=t?.persistence||[],i=(Array.isArray(e)?e:[e]).map(ui);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t?.popupRedirectResolver)}function $l(n,t,e,i){return Pn(n).onIdTokenChanged(t,e,i)}function Wl(n,t,e,i){return Pn(n).onAuthStateChanged(t,e,i)}var VR=Sw("rcb"),zR=new hi(3e4,6e4);var BR=new hi(2e3,1e4);var jR=600*1e3;var HR=new hi(3e4,6e4);var $R=new hi(5e3,15e3);var WR=encodeURIComponent("fac");var Gp="@firebase/auth",qp="1.12.2";var zl=class{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;let e=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();let e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Aw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rw(n){fr(new sn("auth",(t,{options:e})=>{let i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});let c={apiKey:o,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:of(n)},d=new Vl(i,r,a,c);return Tw(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),fr(new sn("auth-internal",t=>{let e=Ew(t.getProvider("auth").getImmediate());return(i=>new zl(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Gp,qp,Aw(n)),pr(Gp,qp,"esm2020")}var Ow=300,GR=Cp("authIdTokenMaxAge")||Ow;function Dw(){return document.getElementsByTagName("head")?.[0]??document}xw({loadJS(n){return new Promise((t,e)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=r=>{let a=Bl("internal-error");a.customData=r,e(a)},i.type="text/javascript",i.charset="UTF-8",Dw().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rw("Browser");function sf(n){return new pt(function(t){var e=Wl(n,t.next.bind(t),t.error.bind(t),t.complete.bind(t));return{unsubscribe:e}})}function cf(n){return new pt(function(t){var e=$l(n,t.next.bind(t),t.error.bind(t),t.complete.bind(t));return{unsubscribe:e}})}function lf(n){return cf(n).pipe(me(function(t){return t?de(Hl(t)):F(null)}))}function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var xf=Cf,Sf=new Tt("auth","Firebase",Cf());var Xo=new On("@firebase/auth");function Mw(n,...t){Xo.logLevel<=se.WARN&&Xo.warn(`Auth (${lr}): ${n}`,...t)}function Ko(n,...t){Xo.logLevel<=se.ERROR&&Xo.error(`Auth (${lr}): ${n}`,...t)}function kt(n,...t){throw md(n,...t)}function Ot(n,...t){return md(n,...t)}function hd(n,t,e){let i=Object.assign(Object.assign({},xf()),{[t]:e});return new Tt("auth","Firebase",i).create(t,{appName:n.name})}function un(n){return hd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pw(n,t,e){let i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&kt(n,"argument-error"),hd(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function md(n,...t){if(typeof n!="string"){let e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return Sf.create(n,...t)}function A(n,t,...e){if(!n)throw md(t,...e)}function ln(n){let t="INTERNAL ASSERTION FAILED: "+n;throw Ko(t),new Error(t)}function hn(n,t){n||ln(t)}function Kl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Nw(){return df()==="http:"||df()==="https:"}function df(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Lw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nw()||zm()||"connection"in navigator)?navigator.onLine:!0}function Fw(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var mi=class{constructor(t,e){this.shortDelay=t,this.longDelay=e,hn(e>t,"Short delay should be less than long delay!"),this.isMobile=Um()||Bm()}get(){return Lw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function pd(n,t){hn(n.emulator,"Emulator should always be set here");let{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}var Zo=class{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Uw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Vw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zw=new mi(3e4,6e4);function mn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function qt(n,t,e,i,r={}){return Tf(n,r,async()=>{let a={},o={};i&&(t==="GET"?o=i:a={body:JSON.stringify(i)});let s=or(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:t,headers:c},a);return Vm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&ta(n.emulatorConfig.host)&&(d.credentials="include"),Zo.fetch()(await Af(n,n.config.apiHost,e,s),d)})}async function Tf(n,t,e){n._canInitEmulator=!1;let i=Object.assign(Object.assign({},Uw),t);try{let r=new Yl(n),a=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();let o=await a.json();if("needConfirmation"in o)throw qo(n,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{let s=a.ok?o.errorMessage:o.error.message,[c,d]=s.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw qo(n,"user-disabled",o);let f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw hd(n,f,d);kt(n,f)}}catch(r){if(r instanceof St)throw r;kt(n,"network-request-failed",{message:String(r)})}}async function ya(n,t,e,i,r={}){let a=await qt(n,t,e,i,r);return"mfaPendingCredential"in a&&kt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Af(n,t,e,i){let r=`${t}${e}?${i}`,a=n,o=a.config.emulator?pd(n.config,r):`${n.config.apiScheme}://${r}`;return Vw.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}function Bw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Yl=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(Ot(this.auth,"network-request-failed")),zw.get())})}};function qo(n,t,e){let i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);let r=Ot(n,t,i);return r.customData._tokenResponse=e,r}function uf(n){return n!==void 0&&n.enterprise!==void 0}var Ql=class{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Bw(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function jw(n,t){return qt(n,"GET","/v2/recaptchaConfig",mn(n,t))}async function Hw(n,t){return qt(n,"POST","/v1/accounts:delete",t)}async function es(n,t){return qt(n,"POST","/v1/accounts:lookup",t)}function pa(n){if(n)try{let t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fd(n,t=!1){let e=it(n),i=await e.getIdToken(t),r=gd(i);A(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");let a=typeof r.firebase=="object"?r.firebase:void 0,o=a?.sign_in_provider;return{claims:r,token:i,authTime:pa(Gl(r.auth_time)),issuedAtTime:pa(Gl(r.iat)),expirationTime:pa(Gl(r.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Gl(n){return Number(n)*1e3}function gd(n){let[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{let r=Io(e);return r?JSON.parse(r):(Ko("Failed to decode base64 JWT payload"),null)}catch(r){return Ko("Caught error parsing JWT payload as JSON",r?.toString()),null}}function hf(n){let t=gd(n);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}async function _r(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof St&&$w(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function $w({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Jl=class{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){let i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;let r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;let e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ga=class{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ts(n){var t;let e=n.auth,i=await n.getIdToken(),r=await _r(n,es(e,{idToken:i}));A(r?.users.length,e,"internal-error");let a=r.users[0];n._notifyReloadListener(a);let o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?Rf(a.providerUserInfo):[],s=Ww(n.providerData,o),c=n.isAnonymous,d=!(n.email&&a.passwordHash)&&!s?.length,f=c?d:!1,g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new ga(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function ms(n){let t=it(n);await ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ww(n,t){return[...n.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Rf(n){return n.map(t=>{var{providerId:e}=t,i=Sa(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}async function Gw(n,t){let e=await Tf(n,{},async()=>{let i=or({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=n.config,o=await Af(n,r,"/v1/token",`key=${a}`),s=await n._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:s,body:i};return n.emulatorConfig&&ta(n.emulatorConfig.host)&&(c.credentials="include"),Zo.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function qw(n,t){return qt(n,"POST","/v2/accounts:revokeToken",mn(n,t))}var fa=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");let e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){A(t.length!==0,"internal-error");let e=hf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){let{accessToken:i,refreshToken:r,expiresIn:a}=await Gw(t,e);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){let{refreshToken:i,accessToken:r,expirationTime:a}=e,o=new n;return i&&(A(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(A(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),a&&(A(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return ln("not implemented")}};function Ln(n,t){A(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}var Fn=class n{constructor(t){var{uid:e,auth:i,stsTokenManager:r}=t,a=Sa(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ga(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){let e=await _r(this,this.stsTokenManager.getToken(this.auth,t));return A(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return fd(this,t)}reload(){return ms(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){let e=new n(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(un(this.auth));let t=await this.getIdToken();return await _r(this,Hw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,r,a,o,s,c,d,f;let g=(i=e.displayName)!==null&&i!==void 0?i:void 0,_=(r=e.email)!==null&&r!==void 0?r:void 0,R=(a=e.phoneNumber)!==null&&a!==void 0?a:void 0,O=(o=e.photoURL)!==null&&o!==void 0?o:void 0,le=(s=e.tenantId)!==null&&s!==void 0?s:void 0,Pe=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,ze=(d=e.createdAt)!==null&&d!==void 0?d:void 0,Te=(f=e.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Xe,emailVerified:yi,isAnonymous:wi,providerData:Qt,stsTokenManager:yu}=e;A(Xe&&yu,t,"internal-error");let v_=fa.fromJSON(this.name,yu);A(typeof Xe=="string",t,"internal-error"),Ln(g,t.name),Ln(_,t.name),A(typeof yi=="boolean",t,"internal-error"),A(typeof wi=="boolean",t,"internal-error"),Ln(R,t.name),Ln(O,t.name),Ln(le,t.name),Ln(Pe,t.name),Ln(ze,t.name),Ln(Te,t.name);let ec=new n({uid:Xe,auth:t,email:_,emailVerified:yi,displayName:g,isAnonymous:wi,photoURL:O,phoneNumber:R,tenantId:le,stsTokenManager:v_,createdAt:ze,lastLoginAt:Te});return Qt&&Array.isArray(Qt)&&(ec.providerData=Qt.map(b_=>Object.assign({},b_))),Pe&&(ec._redirectEventId=Pe),ec}static async _fromIdTokenResponse(t,e,i=!1){let r=new fa;r.updateFromServerResponse(e);let a=new n({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await ts(a),a}static async _fromGetAccountInfoResponse(t,e,i){let r=e.users[0];A(r.localId!==void 0,"internal-error");let a=r.providerUserInfo!==void 0?Rf(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!a?.length,s=new fa;s.updateFromIdToken(i);let c=new n({uid:r.localId,auth:t,stsTokenManager:s,isAnonymous:o}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ga(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(c,d),c}};var mf=new Map;function dn(n){hn(n instanceof Function,"Expected a class definition");let t=mf.get(n);return t?(hn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,mf.set(n,t),t)}var Kw=(()=>{class n{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){let i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}return n.type="NONE",n})(),Xl=Kw;function Yo(n,t,e){return`firebase:${n}:${t}:${e}`}var ns=class n{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;let{config:r,name:a}=this.auth;this.fullUserKey=Yo(this.userKey,r.apiKey,a),this.fullPersistenceKey=Yo("persistence",r.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){let t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){let e=await es(this.auth,{idToken:t}).catch(()=>{});return e?Fn._fromGetAccountInfoResponse(this.auth,e,t):null}return Fn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;let e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new n(dn(Xl),t,i);let r=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),a=r[0]||dn(Xl),o=Yo(i,t.config.apiKey,t.name),s=null;for(let d of e)try{let f=await d._get(o);if(f){let g;if(typeof f=="string"){let _=await es(t,{idToken:f}).catch(()=>{});if(!_)break;g=await Fn._fromGetAccountInfoResponse(t,_,f)}else g=Fn._fromJSON(t,f);d!==a&&(s=g),a=d;break}}catch{}let c=r.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new n(a,t,i):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(e.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new n(a,t,i))}};function pf(n){let t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Of(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Lf(t))return"Blackberry";if(Ff(t))return"Webos";if(Df(t))return"Safari";if((t.includes("chrome/")||Mf(t))&&!t.includes("edge/"))return"Chrome";if(Nf(t))return"Android";{let e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if(i?.length===2)return i[1]}return"Other"}function Of(n=We()){return/firefox\//i.test(n)}function Df(n=We()){let t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mf(n=We()){return/crios\//i.test(n)}function Pf(n=We()){return/iemobile/i.test(n)}function Nf(n=We()){return/android/i.test(n)}function Lf(n=We()){return/blackberry/i.test(n)}function Ff(n=We()){return/webos/i.test(n)}function _d(n=We()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yw(n=We()){var t;return _d(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Qw(){return jm()&&document.documentMode===10}function Uf(n=We()){return _d(n)||Nf(n)||Ff(n)||Lf(n)||/windows phone/i.test(n)||Pf(n)}function Vf(n,t=[]){let e;switch(n){case"Browser":e=pf(We());break;case"Worker":e=`${pf(We())}-${n}`;break;default:e=n}let i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${lr}/${i}`}var Zl=class{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){let i=a=>new Promise((o,s)=>{try{let c=t(a);o(c)}catch(c){s(c)}});i.onAbort=e,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;let e=[];try{for(let i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(let r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}};async function Jw(n,t={}){return qt(n,"GET","/v2/passwordPolicy",mn(n,t))}var Xw=6,ed=class{constructor(t){var e,i,r,a;let o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:Xw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,r,a,o,s;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsUppercaseLetter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),c}validatePasswordLengthOptions(t,e){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}};var td=class{constructor(t,e,i,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new is(this),this.idTokenSubscription=new is(this),this.beforeStateQueue=new Zl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=dn(e)),this._initializationPromise=this.queue(async()=>{var i,r,a;if(!this._deleted&&(this.persistenceManager=await ns.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{let e=await es(this,{idToken:t}),i=await Fn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(mt(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(s,s))}):this.directlySetCurrentUser(null)}let i=await this.assertedPersistence.getCurrentUser(),r=i,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,s=r?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===s)&&c?.user&&(r=c.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ts(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Fw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mt(this.app))return Promise.reject(un(this));let e=t?it(t):null;return e&&A(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let t=await Jw(this),e=new ed(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Tt("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{let i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){let e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await qw(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){let i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){let e=t&&dn(t)||this._popupRedirectResolver;A(e,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[dn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,r){if(this._deleted)return()=>{};let a=typeof e=="function"?e:e.next.bind(e),o=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof e=="function"){let c=t.addObserver(e,i,r);return()=>{o=!0,c()}}else{let c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);let r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e?.error&&Mw(`Error while retrieving App Check token: ${e.error}`),e?.token}};function pn(n){return it(n)}var is=class{constructor(t){this.auth=t,this.observer=null,this.addObserver=Wm(e=>this.observer=e)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zw(n){ps=n}function zf(n){return ps.loadJS(n)}function ek(){return ps.recaptchaEnterpriseScript}function tk(){return ps.gapiScript}function Bf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var nd=class{constructor(){this.enterprise=new id}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}},id=class{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}};var nk="recaptcha-enterprise",jf="NO_RECAPTCHA",rd=class{constructor(t){this.type=nk,this.auth=pn(t)}async verify(t="verify",e=!1){async function i(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{jw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{let d=new Ql(c);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(c=>{s(c)})})}function r(a,o,s){let c=window.grecaptcha;uf(c)?c.enterprise.ready(()=>{c.enterprise.execute(a,{action:t}).then(d=>{o(d)}).catch(()=>{o(jf)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nd().execute("siteKey",{action:"verify"}):new Promise((a,o)=>{i(this.auth).then(s=>{if(!e&&uf(window.grecaptcha))r(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ek();c.length!==0&&(c+=s),zf(c).then(()=>{r(s,a,o)}).catch(d=>{o(d)})}}).catch(s=>{o(s)})})}};async function ma(n,t,e,i=!1,r=!1){let a=new rd(n),o;if(r)o=jf;else try{o=await a.verify(e)}catch{o=await a.verify(e,!0)}let s=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in s){let c=s.phoneEnrollmentInfo.phoneNumber,d=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){let c=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function rs(n,t,e,i,r){var a,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await ma(n,t,e,e==="getOobCode");return i(n,s)}else return i(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let c=await ma(n,t,e,e==="getOobCode");return i(n,c)}else return Promise.reject(s)});else if(r==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let s=await ma(n,t,e);return i(n,s).catch(async c=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${e} flow.`);let f=await ma(n,t,e,!1,!0);return i(n,f)}return Promise.reject(c)})}else{let s=await ma(n,t,e,!1,!0);return i(n,s)}else return Promise.reject(r+" provider is not supported.")}function vd(n,t){let e=To(n,"auth");if(e.isInitialized()){let r=e.getImmediate(),a=e.getOptions();if(Rn(a,t??{}))return r;kt(r,"already-initialized")}return e.initialize({options:t})}function ik(n,t){let e=t?.persistence||[],i=(Array.isArray(e)?e:[e]).map(dn);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t?.popupRedirectResolver)}function bd(n,t,e){let i=pn(n);A(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");let r=!!e?.disableWarnings,a=Hf(t),{host:o,port:s}=rk(t),c=s===null?"":`:${s}`,d={url:`${a}//${o}${c}/`},f=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){A(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),A(Rn(d,i.config.emulator)&&Rn(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,ta(o)?(Lm(`${a}//${o}${c}`),Fm("Auth",!0)):r||ak()}function Hf(n){let t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function rk(n){let t=Hf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};let i=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let a=r[1];return{host:a,port:ff(i.substr(a.length+1))}}else{let[a,o]=i.split(":");return{host:a,port:ff(o)}}}function ff(n){if(!n)return null;let t=Number(n);return isNaN(t)?null:t}function ak(){function n(){let t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var vr=class{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ln("not implemented")}_getIdTokenResponse(t){return ln("not implemented")}_linkToIdToken(t,e){return ln("not implemented")}_getReauthenticationResolver(t){return ln("not implemented")}};async function ok(n,t){return qt(n,"POST","/v1/accounts:signUp",t)}async function sk(n,t){return ya(n,"POST","/v1/accounts:signInWithPassword",mn(n,t))}async function $f(n,t){return qt(n,"POST","/v1/accounts:sendOobCode",mn(n,t))}async function ck(n,t){return $f(n,t)}async function lk(n,t){return $f(n,t)}async function dk(n,t){return ya(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,t))}async function uk(n,t){return ya(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,t))}var _a=class n extends vr{constructor(t,e,i,r=null){super("password",i),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new n(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new n(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){let e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":let e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rs(t,e,"signInWithPassword",sk,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dk(t,{email:this._email,oobCode:this._password});default:kt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":let i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rs(t,i,"signUpPassword",ok,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return uk(t,{idToken:e,email:this._email,oobCode:this._password});default:kt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}};async function gr(n,t){return ya(n,"POST","/v1/accounts:signInWithIdp",mn(n,t))}var hk="http://localhost",as=class n extends vr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let e=new n(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):kt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=e,a=Sa(e,["providerId","signInMethod"]);if(!i||!r)return null;let o=new n(i,r);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){let e=this.buildRequest();return gr(t,e)}_linkToIdToken(t,e){let i=this.buildRequest();return i.idToken=e,gr(t,i)}_getReauthenticationResolver(t){let e=this.buildRequest();return e.autoCreate=!1,gr(t,e)}buildRequest(){let t={requestUri:hk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{let e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=or(e)}return t}};function mk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pk(n){let t=sr(cr(n)).link,e=t?sr(cr(t)).deep_link_id:null,i=sr(cr(n)).deep_link_id;return(i?sr(cr(i)).link:null)||i||e||t||n}var os=class n{constructor(t){var e,i,r,a,o,s;let c=sr(cr(t)),d=(e=c.apiKey)!==null&&e!==void 0?e:null,f=(i=c.oobCode)!==null&&i!==void 0?i:null,g=mk((r=c.mode)!==null&&r!==void 0?r:null);A(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(a=c.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(s=c.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){let e=pk(t);try{return new n(e)}catch{return null}}};var Wf=(()=>{class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,i){return _a._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){let r=os.parseLink(i);return A(r,"argument-error"),_a._fromEmailAndCode(e,r.code,r.tenantId)}}n.PROVIDER_ID="password",n.EMAIL_PASSWORD_SIGN_IN_METHOD="password",n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";return n})(),va=class{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}};var ss=class extends va{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}};var yd=(()=>{class n extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return as._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return n.credential(i,r)}catch{return null}}}n.GOOGLE_SIGN_IN_METHOD="google.com",n.PROVIDER_ID="google.com";return n})();async function fk(n,t){return ya(n,"POST","/v1/accounts:signUp",mn(n,t))}var br=class n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,r=!1){let a=await Fn._fromIdTokenResponse(t,i,r),o=gf(i);return new n({user:a,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);let r=gf(i);return new n({user:t,providerId:r,_tokenResponse:i,operationType:e})}};function gf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var ad=class n extends St{constructor(t,e,i,r){var a;super(e.code,e.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,n.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,r){return new n(t,e,i,r)}};function Gf(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ad._fromErrorAndOperation(n,a,t,i):a})}async function gk(n,t,e=!1){let i=await _r(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return br._forOperation(n,"link",i)}async function _k(n,t,e=!1){let{auth:i}=n;if(mt(i.app))return Promise.reject(un(i));let r="reauthenticate";try{let a=await _r(n,Gf(i,r,t,n),e);A(a.idToken,i,"internal-error");let o=gd(a.idToken);A(o,i,"internal-error");let{sub:s}=o;return A(n.uid===s,i,"user-mismatch"),br._forOperation(n,r,a)}catch(a){throw a?.code==="auth/user-not-found"&&kt(i,"user-mismatch"),a}}async function qf(n,t,e=!1){if(mt(n.app))return Promise.reject(un(n));let i="signIn",r=await Gf(n,i,t),a=await br._fromIdTokenResponse(n,i,r);return e||await n._updateCurrentUser(a.user),a}async function wd(n,t){return qf(pn(n),t)}function Kf(n,t,e){var i;A(((i=e.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),A(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),A(typeof e.linkDomain>"u"||e.linkDomain.length>0,n,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(A(e.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(A(e.android.packageName.length>0,n,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}async function Yf(n){let t=pn(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function kd(n,t,e){let i=pn(n),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};e&&Kf(i,r,e),await rs(i,r,"getOobCode",lk,"EMAIL_PASSWORD_PROVIDER")}async function Id(n,t,e){if(mt(n.app))return Promise.reject(un(n));let i=pn(n),o=await rs(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fk,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Yf(n),c}),s=await br._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(s.user),s}function Ed(n,t,e){return mt(n.app)?Promise.reject(un(n)):wd(it(n),Wf.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Yf(n),i})}async function Cd(n,t){let e=it(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};t&&Kf(e.auth,r,t);let{email:a}=await ck(e.auth,r);a!==n.email&&await n.reload()}async function vk(n,t){return qt(n,"POST","/v1/accounts:update",t)}async function xd(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;let i=it(n),a={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await _r(i,vk(i.auth,a));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;let s=i.providerData.find(({providerId:c})=>c==="password");s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Sd(n,t,e,i){return it(n).onIdTokenChanged(t,e,i)}function Td(n,t,e){return it(n).beforeAuthStateChanged(t,e)}function Ad(n,t,e,i){return it(n).onAuthStateChanged(t,e,i)}function Rd(n){return it(n).signOut()}async function Od(n){return it(n).delete()}var cs="__sak";var ls=class{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){let e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}};var bk=1e3,yk=10,wk=(()=>{class n extends ls{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let i of Object.keys(this.listeners)){let r=this.storage.getItem(i),a=this.localCache[i];r!==a&&e(i,a,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((s,c,d)=>{this.notifyListeners(s,d)});return}let r=e.key;i?this.detachListener():this.stopPolling();let a=()=>{let s=this.storage.getItem(r);!i&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Qw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,yk):a()}notifyListeners(e,i){this.localCache[e]=i;let r=this.listeners[e];if(r)for(let a of Array.from(r))a(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){let i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}return n.type="LOCAL",n})(),Qf=wk;var kk=(()=>{class n extends ls{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}return n.type="SESSION",n})(),Dd=kk;function Ik(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}var Ek=(()=>{class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let i=this.receivers.find(a=>a.isListeningto(e));if(i)return i;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let i=e,{eventId:r,eventType:a,data:o}=i.data,s=this.handlersMap[a];if(!s?.size)return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:a});let c=Array.from(s).map(async f=>f(i.origin,o)),d=await Ik(c);i.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:d})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}n.receivers=[];return n})();function Md(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}var od=class{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){let r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,o;return new Promise((s,c)=>{let d=Md("",20);r.port1.start();let f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(g){let _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(_.data.response);break;default:clearTimeout(f),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function Gt(){return window}function Ck(n){Gt().location.href=n}function Jf(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function xk(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sk(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tk(){return Jf()?self:null}var Xf="firebaseLocalStorageDb",Ak=1,ds="firebaseLocalStorage",Zf="fbase_key",pi=class{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}};function fs(n,t){return n.transaction([ds],t?"readwrite":"readonly").objectStore(ds)}function Rk(){let n=indexedDB.deleteDatabase(Xf);return new pi(n).toPromise()}function sd(){let n=indexedDB.open(Xf,Ak);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{let i=n.result;try{i.createObjectStore(ds,{keyPath:Zf})}catch(r){e(r)}}),n.addEventListener("success",async()=>{let i=n.result;i.objectStoreNames.contains(ds)?t(i):(i.close(),await Rk(),t(await sd()))})})}async function _f(n,t,e){let i=fs(n,!0).put({[Zf]:t,value:e});return new pi(i).toPromise()}async function Ok(n,t){let e=fs(n,!1).get(t),i=await new pi(e).toPromise();return i===void 0?null:i.value}function vf(n,t){let e=fs(n,!0).delete(t);return new pi(e).toPromise()}var Dk=800,Mk=3,Pk=(()=>{class n{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let i=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(i++>Mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ek._getInstance(Tk()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new od(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await sd();return await _f(e,cs,"1"),await vf(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>_f(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){let i=await this._withRetries(r=>Ok(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>vf(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(a=>{let o=fs(a,!1).getAll();return new pi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let i=[],r=new Set;if(e.length!==0)for(let{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),i.push(a));for(let a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),i.push(a));return i}notifyListeners(e,i){this.localCache[e]=i;let r=this.listeners[e];if(r)for(let a of Array.from(r))a(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}return n.type="LOCAL",n})(),eg=Pk;var LO=Bf("rcb"),FO=new mi(3e4,6e4);function tg(n,t){return t?dn(t):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var ba=class extends vr{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gr(t,this._buildIdpRequest())}_buildIdpRequest(t){let e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}};function Nk(n){return qf(n.auth,new ba(n),n.bypassAuthState)}function Lk(n){let{auth:t,user:e}=n;return A(e,t,"internal-error"),_k(e,new ba(n),n.bypassAuthState)}async function Fk(n){let{auth:t,user:e}=n;return A(e,t,"internal-error"),gk(e,new ba(n),n.bypassAuthState)}var us=class{constructor(t,e,i,r,a=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){let{urlResponse:e,sessionId:i,postBody:r,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:e,sessionId:i,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(c))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nk;case"linkViaPopup":case"linkViaRedirect":return Fk;case"reauthViaPopup":case"reauthViaRedirect":return Lk;default:kt(this.auth,"internal-error")}}resolve(t){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Uk=new mi(2e3,1e4);async function Pd(n,t,e){if(mt(n.app))return Promise.reject(Ot(n,"operation-not-supported-in-this-environment"));let i=pn(n);Pw(n,t,va);let r=tg(i,e);return new Vk(i,"signInViaPopup",t,r).executeNotNull()}var Vk=(()=>{class n extends us{constructor(e,i,r,a,o){super(e,i,a,o),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");let e=Md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Uk.get())};e()}}n.currentPopupAction=null;return n})(),zk="pendingRedirect",Qo=new Map,cd=class extends us{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Qo.get(this.auth._key());if(!t){try{let i=await Bk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Qo.set(this.auth._key(),t)}return this.bypassAuthState||Qo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){let e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Bk(n,t){let e=$k(t),i=Hk(n);if(!await i._isAvailable())return!1;let r=await i._get(e)==="true";return await i._remove(e),r}function jk(n,t){Qo.set(n._key(),t)}function Hk(n){return dn(n._redirectPersistence)}function $k(n){return Yo(zk,n.config.apiKey,n.name)}async function Wk(n,t,e=!1){if(mt(n.app))return Promise.reject(un(n));let i=pn(n),r=tg(i,t),o=await new cd(i,r,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}var Gk=600*1e3,ld=class{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!ng(t)){let r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(Ot(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){let i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Gk&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(t))}saveEventToCache(t){this.cachedEventUids.add(bf(t)),this.lastProcessedEventTime=Date.now()}};function bf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function ng({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function qk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ng(n);default:return!1}}async function Kk(n,t={}){return qt(n,"GET","/v1/projects",t)}var Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qk=/^https?/;async function Jk(n){if(n.config.emulator)return;let{authorizedDomains:t}=await Kk(n);for(let e of t)try{if(Xk(e))return}catch{}kt(n,"unauthorized-domain")}function Xk(n){let t=Kl(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!Qk.test(e))return!1;if(Yk.test(n))return i===n;let r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}var Zk=new mi(3e4,6e4);function yf(){let n=Gt().___jsl;if(n?.H){for(let t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function eI(n){return new Promise((t,e)=>{var i,r,a;function o(){yf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yf(),e(Ot(n,"network-request-failed"))},timeout:Zk.get()})}if(!((r=(i=Gt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((a=Gt().gapi)===null||a===void 0)&&a.load)o();else{let s=Bf("iframefcb");return Gt()[s]=()=>{gapi.load?o():e(Ot(n,"network-request-failed"))},zf(`${tk()}?onload=${s}`).catch(c=>e(c))}}).catch(t=>{throw Jo=null,t})}var Jo=null;function tI(n){return Jo=Jo||eI(n),Jo}var nI=new mi(5e3,15e3),iI="__/auth/iframe",rI="emulator/auth/iframe",aI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(n){let t=n.config;A(t.authDomain,n,"auth-domain-config-required");let e=t.emulator?pd(t,rI):`https://${n.config.authDomain}/${iI}`,i={apiKey:t.apiKey,appName:n.name,v:lr},r=oI.get(n.config.apiHost);r&&(i.eid=r);let a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${e}?${or(i).slice(1)}`}async function cI(n){let t=await tI(n),e=Gt().gapi;return A(e,n,"internal-error"),t.open({where:document.body,url:sI(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aI,dontclear:!0},i=>new Promise(async(r,a)=>{await i.restyle({setHideOnLeave:!1});let o=Ot(n,"network-request-failed"),s=Gt().setTimeout(()=>{a(o)},nI.get());function c(){Gt().clearTimeout(s),r(i)}i.ping(c).then(c,()=>{a(o)})}))}var lI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dI=500,uI=600,hI="_blank",mI="http://localhost",hs=class{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function pI(n,t,e,i=dI,r=uI){let a=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),s="",c=Object.assign(Object.assign({},lI),{width:i.toString(),height:r.toString(),top:a,left:o}),d=We().toLowerCase();e&&(s=Mf(d)?hI:e),Of(d)&&(t=t||mI,c.scrollbars="yes");let f=Object.entries(c).reduce((_,[R,O])=>`${_}${R}=${O},`,"");if(Yw(d)&&s!=="_self")return fI(t||"",s),new hs(null);let g=window.open(t||"",s,f);A(g,n,"popup-blocked");try{g.focus()}catch{}return new hs(g)}function fI(n,t){let e=document.createElement("a");e.href=n,e.target=t;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}var gI="__/auth/handler",_I="emulator/auth/handler",vI=encodeURIComponent("fac");async function wf(n,t,e,i,r,a){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:lr,eventId:r};if(t instanceof va){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",$m(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(let[f,g]of Object.entries(a||{}))o[f]=g}if(t instanceof ss){let f=t.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);let s=o;for(let f of Object.keys(s))s[f]===void 0&&delete s[f];let c=await n._getAppCheckToken(),d=c?`#${vI}=${encodeURIComponent(c)}`:"";return`${bI(n)}?${or(s).slice(1)}${d}`}function bI({config:n}){return n.emulator?pd(n,_I):`https://${n.authDomain}/${gI}`}var ql="webStorageSupport",dd=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dd,this._completeRedirectFn=Wk,this._overrideRedirectResult=jk}async _openPopup(t,e,i,r){var a;hn((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");let o=await wf(t,e,i,Kl(),r);return pI(t,o,Md())}async _openRedirect(t,e,i,r){await this._originValidation(t);let a=await wf(t,e,i,Kl(),r);return Ck(a),new Promise(()=>{})}_initialize(t){let e=t._key();if(this.eventManagers[e]){let{manager:r,promise:a}=this.eventManagers[e];return r?Promise.resolve(r):(hn(a,"If manager is not set, promise should be"),a)}let i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){let e=await cI(t),i=new ld(t);return e.register("authEvent",r=>(A(r?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ql,{type:ql},r=>{var a;let o=(a=r?.[0])===null||a===void 0?void 0:a[ql];o!==void 0&&e(!!o),kt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){let e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Jk(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Uf()||Df()||_d()}},ig=dd;var kf="@firebase/auth",If="1.10.8";var ud=class{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;let e=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();let e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function yI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wI(n){an(new ht("auth",(t,{options:e})=>{let i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=i.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});let c={apiKey:o,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vf(n)},d=new td(i,r,a,c);return ik(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),an(new ht("auth-internal",t=>{let e=pn(t.getProvider("auth").getImmediate());return(i=>new ud(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(kf,If,yI(n)),Fe(kf,If,"esm2017")}var kI=300,II=Yc("authIdTokenMaxAge")||kI,Ef=null,EI=n=>async t=>{let e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>II)return;let r=e?.token;Ef!==r&&(Ef=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Nd(n=ra()){let t=To(n,"auth");if(t.isInitialized())return t.getImmediate();let e=vd(n,{popupRedirectResolver:ig,persistence:[eg,Qf,Dd]}),i=Yc("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){let a=new URL(i,location.origin);if(location.origin===a.origin){let o=EI(a.toString());Td(e,o,()=>o(e.currentUser)),Sd(e,s=>o(s))}}let r=Nm("auth");return r&&bd(e,`http://${r}`),e}function CI(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Zw({loadJS(n){return new Promise((t,e)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=r=>{let a=Ot("internal-error");a.customData=r,e(a)},i.type="text/javascript",i.charset="UTF-8",CI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wI("Browser");var rg="auth",fn=class{constructor(t){return t}},Ld=class{constructor(){return Oo(rg)}};var Fd=new V("angularfire2.auth-instances");function cE(n,t){let e=ul(rg,n,t);return e&&new fn(e)}function lE(n){return(t,e)=>{let i=t.runOutsideAngular(()=>n(e));return new fn(i)}}var dE={provide:Ld,deps:[[new qn,Fd]]},uE={provide:fn,useFactory:cE,deps:[[new qn,Fd],ci]};function ag(n,...t){return Fe("angularfire",ur.full,"auth"),Ii([uE,dE,{provide:Fd,useFactory:lE(n),multi:!0,deps:[pe,Z,hr,aa,[new qn,Mo],...t]}])}var og=Ue(sf,!0),sg=Ue(lf,!0);var cg=Ue(Id,!0,2),lg=Ue(Od,!0,2);var dg=Ue(Nd,!0);var ug=Ue(Ad,!0);var hg=Ue(ms,!0,2);var mg=Ue(Cd,!0,2),pg=Ue(kd,!0,2);var fg=Ue(Ed,!0,2);var gg=Ue(Pd,!0,2);var _g=Ue(Rd,!0,2);var vg=Ue(xd,!0,2);var Ig=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Eg=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function hE(n,t){n&1&&(u(0,"span",3),K(1,1),h())}function mE(n,t){n&1&&(u(0,"span",6),K(1,2),h())}function pE(n,t){n&1&&(u(0,"span",3),K(1,1),u(2,"span",7),Pt(),u(3,"svg",8),x(4,"path",9),h()()())}function fE(n,t){n&1&&(u(0,"span",6),K(1,2),h())}var gE=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var Cg=["*"],_E=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,Bd=new V("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Ud=new V("MatChipAvatar"),bg=new V("MatChipTrailingIcon"),yg=new V("MatChipEdit"),wg=new V("MatChipRemove"),jd=new V("MatChip"),xg=(()=>{class n{_elementRef=l(re);_parentChip=l(jd);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){l(Zt).load(en),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(Y("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),z("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:yn(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Sg=(()=>{class n extends xg{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275dir=ee({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&w("click",function(o){return r._handleClick(o)})("keydown",function(o){return r._handleKeydown(o)}),i&2&&(Y("tabindex",r._getTabindex()),z("mdc-evolution-chip__action--presentational",!1))},features:[Re]})}return n})(),Tg=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["mat-chip-avatar"],["","matChipAvatar",""]],hostAttrs:["role","img",1,"mat-mdc-chip-avatar","mdc-evolution-chip__icon","mdc-evolution-chip__icon--primary"],features:[Qe([{provide:Ud,useExisting:n}])]})}return n})();var Vd=(()=>{class n{_changeDetectorRef=l(Oe);_elementRef=l(re);_tagName=l(eh);_ngZone=l(pe);_focusMonitor=l(In);_globalRippleOptions=l(Va,{optional:!0});_document=l(Xt);_onFocus=new te;_onBlur=new te;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ct();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=l(vt).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ue;destroyed=new ue;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=l(_h);_injector=l(Z);constructor(){let e=l(Zt);e.load(en),e.load(lh),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Jt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,a){if(i&1&&et(a,Ud,5)(a,yg,5)(a,bg,5)(a,wg,5)(a,Ud,5)(a,bg,5)(a,yg,5)(a,wg,5),i&2){let o;$(o=W())&&(r.leadingIcon=o.first),$(o=W())&&(r.editIcon=o.first),$(o=W())&&(r.trailingIcon=o.first),$(o=W())&&(r.removeIcon=o.first),$(o=W())&&(r._allLeadingIcons=o),$(o=W())&&(r._allTrailingIcons=o),$(o=W())&&(r._allEditIcons=o),$(o=W())&&(r._allRemoveIcons=o)}},viewQuery:function(i,r){if(i&1&&st(Sg,5),i&2){let a;$(a=W())&&(r.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&w("keydown",function(o){return r._handleKeydown(o)}),i&2&&(Et("id",r.id),Y("role",r.role)("aria-label",r.ariaLabel),Si("mat-"+(r.color||"primary")),z("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",G],highlighted:[2,"highlighted","highlighted",G],disableRipple:[2,"disableRipple","disableRipple",G],disabled:[2,"disabled","disabled",G]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Qe([{provide:jd,useExisting:n}])],ngContentSelectors:Eg,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(ve(Ig),x(0,"span",0),u(1,"span",1)(2,"span",2),I(3,hE,2,0,"span",3),u(4,"span",4),K(5),x(6,"span",5),h()()(),I(7,mE,2,0,"span",6)),i&2&&(m(3),E(r.leadingIcon?3:-1),m(4),E(r._hasTrailingIcon()?7:-1))},dependencies:[xg],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Hd=(()=>{class n extends Vd{_defaultOptions=l(Bd,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new ue;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,r){i&2&&(Et("id",r.id),Y("tabindex",null)("aria-label",null)("aria-description",null)("role",r.role),z("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--filter",!r._isBasicChip)("mdc-evolution-chip--selectable",!r._isBasicChip)("mat-mdc-chip-selected",r.selected)("mat-mdc-chip-multiple",r._chipListMultiple)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-with-avatar",r.leadingIcon)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--selected",r.selected)("mdc-evolution-chip--selecting",!r._animationsDisabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-primary-graphic",r._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",G],selected:[2,"selected","selected",G]},outputs:{selectionChange:"selectionChange"},features:[Qe([{provide:Vd,useExisting:n},{provide:jd,useExisting:n}]),Re],ngContentSelectors:Eg,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,r){i&1&&(ve(Ig),x(0,"span",0),u(1,"span",1)(2,"button",2),I(3,pE,5,0,"span",3),u(4,"span",4),K(5),x(6,"span",5),h()()(),I(7,fE,2,0,"span",6)),i&2&&(m(2),M("_allowFocusWhenDisabled",!0),Y("aria-description",r.ariaDescription)("aria-label",r.ariaLabel)("aria-selected",r.ariaSelected),m(),E(r._hasLeadingGraphic()?3:-1),m(4),E(r._hasTrailingIcon()?7:-1))},dependencies:[Sg],styles:[gE],encapsulation:2,changeDetection:0})}return n})();var vE=(()=>{class n{_elementRef=l(re);_changeDetectorRef=l(Oe);_dir=l(Xn,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new te;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Oa;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Ze(null),me(()=>Jt(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Ze(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new ph(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(_e(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(_e(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Ze(null),_e(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(_e(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=a||o;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-chip-set"]],contentQueries:function(i,r,a){if(i&1&&et(a,Vd,5),i&2){let o;$(o=W())&&(r._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&w("keydown",function(o){return r._handleKeydown(o)}),i&2&&Y("role",r.role)},inputs:{disabled:[2,"disabled","disabled",G],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:yn(e)]},ngContentSelectors:Cg,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(ve(),oe(0,"div",0),K(1),fe())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),zd=class{source;value;constructor(t,e){this.source=t,this.value=e}},bE={provide:Mi,useExisting:Wn(()=>$d),multi:!0},$d=(()=>{class n extends vE{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=l(Bd,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new ue;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Ze(null),_e(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(_e(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(_e(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(r=>this._selectValue(r,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new zd(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let r=this._chips.find(a=>a.value!=null&&this.compareWith(a.value,e));return r&&(i?r.selectViaInteraction():r.select()),r}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-chip-listbox"]],contentQueries:function(i,r,a){if(i&1&&et(a,Hd,5),i&2){let o;$(o=W())&&(r._chips=o)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,r){i&1&&w("focus",function(){return r.focus()})("blur",function(){return r._blur()})("keydown",function(o){return r._keydown(o)}),i&2&&(Et("tabIndex",r.disabled||r.empty?-1:r.tabIndex),Y("role",r.role)("aria-required",r.role?r.required:null)("aria-disabled",r.disabled.toString())("aria-multiselectable",r.multiple)("aria-orientation",r.ariaOrientation),z("mat-mdc-chip-list-disabled",r.disabled)("mat-mdc-chip-list-required",r.required))},inputs:{multiple:[2,"multiple","multiple",G],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",G],compareWith:"compareWith",required:[2,"required","required",G],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",G],value:"value"},outputs:{change:"change"},features:[Qe([bE]),Re],ngContentSelectors:Cg,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(ve(),oe(0,"div",0),K(1),fe())},styles:[_E],encapsulation:2,changeDetection:0})}return n})();var Ag=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({providers:[vh,{provide:Bd,useValue:{separatorKeyCodes:[13]}}],imports:[$i,He]})}return n})();function yE(n,t){}var Un=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Gd=(()=>{class n extends kh{_elementRef=l(re);_focusTrapFactory=l(Ua);_config;_interactivityChecker=l(Fa);_ngZone=l(pe);_focusMonitor=l(In);_renderer=l(Ft);_changeDetectorRef=l(Oe);_injector=l(Z);_platform=l(Ut);_document=l(Xt);_portalOutlet;_focusTrapped=new te;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(Un,{optional:!0})||new Un,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),o=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||Lt(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=Mr(),a=this._elementRef.nativeElement;(!r||r===this._document.body||r===a||a.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Mr();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Mr()))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&st(Pr,7),i&2){let a;$(a=W())&&(r._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&Y("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Re],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&Kn(0,yE,0,0,"ng-template",0)},dependencies:[Pr],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),wa=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new te;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(t,e){this.overlayRef=t,this.config=e,this.disableClose=e.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Di(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=t.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(t,e){if(this._canClose(t)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(t),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t="",e=""){return this.overlayRef.updateSize({width:t,height:e}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}_canClose(t){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(t,e,this.componentInstance))}},wE=new V("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(Z);return()=>ja(n)}}),kE=new V("DialogData"),IE=new V("DefaultDialogConfig");function EE(n){let t=y(n),e=new ue;return{valueSignal:t,get value(){return t()},change:e,ngOnDestroy(){e.complete()}}}var qd=(()=>{class n{_injector=l(Z);_defaultOptions=l(IE,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(Eh);_idGenerator=l(vt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new te;_afterOpenedAtThisLevel=new te;_ariaHiddenElements=new Map;_scrollStrategy=l(wE);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ne(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ze(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Un;i=v(v({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let a=this._getOverlayConfig(i),o=xh(this._injector,a),s=new wa(o,i),c=this._attachContainer(o,s,i);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(ke(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,c,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Wd(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Wd(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Wd(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new Ih({positionStrategy:e.positionStrategy||Ha().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let a=r.injector||r.viewContainerRef?.injector,o=[{provide:Un,useValue:r},{provide:wa,useValue:i},{provide:Ch,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,o.push(...r.container.providers(r))):s=Gd;let c=new pc(s,r.viewContainerRef,Z.create({parent:a||this._injector,providers:o}));return e.attach(c).instance}_attachDialogContent(e,i,r,a){if(e instanceof Fu){let o=this._createInjector(a,i,r,void 0),s={$implicit:a.data,dialogRef:i};a.templateContext&&(s=v(v({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),r.attachTemplatePortal(new wh(e,null,s,o))}else{let o=this._createInjector(a,i,r,this._injector),s=r.attachComponentPortal(new pc(e,a.viewContainerRef,o));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,a){let o=e.injector||e.viewContainerRef?.injector,s=[{provide:kE,useValue:e.data},{provide:wa,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!o||!o.get(Xn,null,{optional:!0}))&&s.push({provide:Xn,useValue:EE(e.direction)}),Z.create({parent:o||a,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,o)=>{a?o.setAttribute("aria-hidden",a):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let a=i[r];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Wd(n,t){let e=n.length;for(;e--;)t(n[e])}var Rg=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({providers:[qd],imports:[$a,Nr,mh,Nr]})}return n})();function CE(n,t){}var vs=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Kd="mdc-dialog--open",Og="mdc-dialog--opening",Dg="mdc-dialog--closing",xE=150,SE=75,TE=(()=>{class n extends Gd{_animationStateChanged=new ue;_animationsEnabled=!ct();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Pg(this._config.enterAnimationDuration)??xE:0;_exitAnimationDuration=this._animationsEnabled?Pg(this._config.exitAnimationDuration)??SE:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Mg,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Og,Kd)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Kd),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Kd),this._animationsEnabled?(this._hostElement.style.setProperty(Mg,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Dg)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Og,Dg)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(Et("id",r._config.id),Y("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),z("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Re],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(u(0,"div",0)(1,"div",1),Kn(2,CE,0,0,"ng-template",2),h()())},dependencies:[Pr],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Mg="--mat-dialog-transition-duration";function Pg(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?zi(n.substring(0,n.length-2)):n.endsWith("s")?zi(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var _s=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(_s||{}),Ve=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Rr(1);_beforeClosed=new Rr(1);_result;_closeFallbackTimeout;_state=_s.OPEN;_closeInteractionType;constructor(t,e,i){this._ref=t,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(je(r=>r.state==="opened"),ke(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(je(r=>r.state==="closed"),ke(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Jt(this.backdropClick(),this.keydownEvents().pipe(je(r=>r.keyCode===27&&!this.disableClose&&!Di(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Ng(this,r.type==="keydown"?"keyboard":"mouse"))})}close(t){let e=this._config.closePredicate;e&&!e(t,this._config,this.componentInstance)||(this._result=t,this._containerInstance._animationStateChanged.pipe(je(i=>i.state==="closing"),ke(1)).subscribe(i=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=_s.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let e=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",e=""){return this._ref.updateSize(t,e),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=_s.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ng(n,t,e){return n._closeInteractionType=t,n.close(e)}var Yd=new V("MatMdcDialogData"),AE=new V("mat-mdc-dialog-default-options"),RE=new V("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(Z);return()=>ja(n)}}),be=(()=>{class n{_defaultOptions=l(AE,{optional:!0});_scrollStrategy=l(RE);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(vt);_injector=l(Z);_dialog=l(qd);_animationsDisabled=ct();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new te;_afterOpenedAtThisLevel=new te;dialogConfigClass=vs;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ne(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ze(void 0)));constructor(){this._dialogRefConstructor=Ve,this._dialogContainerType=TE,this._dialogDataToken=Yd}open(e,i){let r;i=v(v({},this._defaultOptions||new vs),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,B(v({},i),{positionStrategy:Ha(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Un,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(o,s,c)=>(r=new this._dialogRefConstructor(o,i,c),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=a.componentRef,r.componentInstance=a.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(r);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yr=(()=>{class n{dialogRef=l(Ve,{optional:!0});_elementRef=l(re);_dialog=l(be);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Ug(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose||e._matDialogCloseResult;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){Ng(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,r){i&1&&w("click",function(o){return r._onButtonClick(o)}),i&2&&Y("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Nt]})}return n})(),Lg=(()=>{class n{_dialogRef=l(Ve,{optional:!0});_elementRef=l(re);_dialog=l(be);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Ug(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n})}return n})(),Fg=(()=>{class n extends Lg{id=l(vt).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275dir=ee({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,r){i&2&&Et("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Re]})}return n})(),wr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Bu([Zn])]})}return n})(),kr=(()=>{class n extends Lg{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275dir=ee({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,r){i&2&&z("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[Re]})}return n})();function Ug(n,t){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?t.find(i=>i.id===e.id):null}var Ir=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({providers:[be],imports:[Rg,$a,Nr,He]})}return n})();var Er=class n{configService=l(bt);recognition;isStarting=!1;textResult=y("");isRecording=y(!1);errorMsg=y(null);constructor(){this.initSpeechRecognition()}initSpeechRecognition(){let t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){console.error("\u274C Speech Recognition no soportado"),this.errorMsg.set("Navegador no soportado");return}this.recognition=new t,this.recognition.lang=this.configService.recognitionLang()??"es-ES",this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.onstart=()=>{this.isRecording.set(!0),this.errorMsg.set(null)},this.recognition.onresult=e=>{let i="";for(let r=e.resultIndex;r<e.results.length;r++)e.results[r].isFinal&&(i+=e.results[r][0].transcript+" ");i.trim()&&this.textResult.update(r=>r+i)},this.recognition.onerror=e=>{this.errorMsg.set(`Error: ${e.error}`),this.isRecording.set(!1),this.isStarting=!1},this.recognition.onend=()=>{this.isRecording.set(!1),this.isStarting=!1}}startSpeech(){if(this.recognition&&!(this.isRecording()||this.isStarting)){this.isStarting=!0;try{this.recognition.start()}catch(t){console.error("Error al iniciar:",t.message)}}}stopSpeech(){if(this.recognition)try{this.recognition.stop(),this.isRecording.set(!1),this.isStarting=!1}catch(t){console.warn("Error al detener:",t)}}clearText(){this.textResult.set("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var zg={es:{INTRO:"Hola, \xBFEn que te puedo ayudar?",LOGIN:"Iniciar Sesi\xF3n",SIGNIN_WITH_GOOGLE:"Iniciar Sesi\xF3n con Google",OR:"o",REGISTER:"Crear Cuenta",LOGOUT:"Cerrar Sesi\xF3n",OTHER:"",NEW_CHAT:"Nuevo chat",MODELS:"Modelos",SETTINGS:"Ajustes",CONVERSATIONS:"Conversaciones",FILTER_INTERVIEWS:"Entrevistas",FILTER_BY:"Filtrar por",SELECT_MODEL:"Seleccionar modelo",INFORMATION:"Informaci\xF3n",INPUT_PLACEHOLDER:"Escribe algo brillante.",EPHEMERAL:"Temporal",INTERVIEWS:"Generar entrevistas",PERSISTENT_CHAT:"Chat Persistente",LOGOUT_MESSAGE:"Para ingresar debes volver a iniciar sesi\xF3n.",CANCEL_LOGOUT:"Cancelar",ACCEPT_LOGOUT:"Aceptar",UPDATE_PASSWORD:"Actualizar contrase\xF1a",VERIFY_USER:"Verificar cuenta",THINKING:"Pensando",CHAT_RESPONSE_ERROR:"Error al obtener la respuesta del servidor.",EPHEMERAL_CONVERSATION:"Conversaci\xF3n Ef\xEDmera",INTERVIEW_CONVERSATION:"Entrevista",SESSION_LOGOUT_MESSAGE:"Se ha cerrado la sesi\xF3n.",LOADING:"Iniciando...",ERROR_SIGNIN_MESSAGE:"Error al iniciar sesi\xF3n.",CLOSE:"Cerrar",WELCOME:"\xA1Bienvenido",EMAIL:"Correo electr\xF3nico",EMAIL_REQUIRED:"El correo electr\xF3nico es requerido.",EMAIL_INVALID:"Por favor, introduce un correo v\xE1lido.",PASSWORD:"Contrase\xF1a",PASSWORD_REQUIRED:"El correo electr\xF3nico es requerido.",PASSWORD_LENGTH:"Debe tener al menos 6 caracteres.",INVALID_CREDENTIALS:"\xA1Correo o contrase\xF1a no v\xE1lidos!",FORGOT_PASSWORD:"\xBFOlvidaste tu contrase\xF1a?",CONFIRM_PASSWORD:"Confirme la contrase\xF1a",PASSWORD_DO_NOT_MATCH:"Las contrase\xF1as no coinciden.",CANCEL:"Cancelar",ACCEPT:"Aceptar",SENT_CONFIRMATION_MESSAGE:"Se ha enviado un enlace de confirmaci\xF3n a tu correo electr\xF3nico.",RECOVER_ACCOUNT:"Recuperar usuario",ENTER_EMAIL:"Ingrese el correo electr\xF3nico de la cuenta a recuperar.",SEND_LINK:"Enviar enlace de verificaci\xF3n.",SENDING:"Enviando...",RECOVERY_EMAIL_SENT:"\xA1Correo de recuperaci\xF3n enviado!",CHECK_INBOX:"Revisa tu bandeja de entrada para verificar tu cuenta y continuar.",CAN_REQUEST_ANOTHER:"Podr\xE1s pedir otro en",UNDERSTOOD:"Entendido",VERIFY_YOUR_ACCOUNT:"Verifica tu cuenta",VERIFY_ACCOUNT_MESSAGE:"Para una mejor experiencia en la p\xE1gina, debes confirmar tu direcci\xF3n de correo electr\xF3nico",VERIFY_ACCOUNT_MESSAGE_2:"Si ya verificaste tu cuenta, cierra sesi\xF3n y vuelve a iniciar sesi\xF3n con tu correo y contrase\xF1a.",ERROR_GENERIC:"Ha ocurrido un error. Int\xE9ntalo de nuevo m\xE1s tarde.",USER_ALREADY_VERIFIED:"El usuario ya se encuentra verificado.",EMAIL_SENT:"\xA1Correo enviado!",USER_ALREADY_REGISTERED:"El usuario ya se encuentra registrado.",STOP:"Detener",VOICE_SEARCH_TITLE:"B\xFAsqueda por voz",ARIA_START_RECORDING:"Iniciar grabaci\xF3n",ARIA_STOP_RECORDING:"Detener grabaci\xF3n",VOICE_LISTENING:"Escuchando\u2026",VOICE_TAP_MIC:"Toca el micr\xF3fono para hablar",CONFIRM_DELETE_TITLE:"\xBFEliminar conversaci\xF3n?",CONFIRM_DELETE_MESSAGE:"Esta operaci\xF3n es irreversible.",CONFIRM_DELETE_BUTTON:"Eliminar",CHAT_DELETED:"La conversaci\xF3n ha sido eliminada.",LINK_SEND_ERROR:"No se pudo enviar el enlace.",COPIED_TO_CLIPBOARD:"Copiado al portapapeles",UPDATED:"Updated.",ALREADY_IN_NATIVE_VOICE:"Ya se encuentra en voz nativa.",NOT_AVAILABLE:"No disponible",LANGUAGE_TITLE:"Idioma",LANGUAGE_DESCRIPTION:"Ajuste de idiomas disponibles:",TEXT_TO_SPEECH_TITLE:"Texto a voz",AUTO_MODE:"Modo autom\xE1tico:",GENERATE_VOICE_WITH:"Generar voz con:",DELETE:"Eliminar",NATIVE_VOICE:"Voz nativa",DELETE_ALL_CHATS:"Eliminar todos los chats",DELETE_INTERVIEWS_ONLY:"Eliminar solo entrevistas",DELETE_CHATS_ONLY:"Eliminar solo chats",ACTIVE:"Activo",DELETED:"Eliminado",TOO_MANY_REQUEST:"L\xEDmite de solicitudes excedido",PLEASE_TRY_AGAIN:"Vu\xE9lvalo a intentar en",MINUTES:"minutos",ABOUT_APP_TITLE:"Sobre la aplicaci\xF3n",ABOUT_APP_DESCRIPTION:"SweetOnion es una herramienta que permite interactuar con una inteligencia artificial en dos modalidades: Chat y Entrevista. Su caracter\xEDstica principal es permitir al usuario seleccionar el modelo de inteligencia artificial con el que desea interactuar durante las conversaciones.",AVAILABLE_MODES_TITLE:"Modos disponibles",EPHEMERAL_MODE_TITLE:"Modo ef\xEDmero",EPHEMERAL_MODE_DESCRIPTION:"Permite realizar consultas a la inteligencia artificial sin necesidad de registrarse. Las conversaciones no se almacenan.",CONVERSATIONAL_MODE_TITLE:"Modo conversacional",CONVERSATIONAL_MODE_DESCRIPTION:"Permite interactuar con la inteligencia artificial mediante consultas de texto. Adem\xE1s, utiliza como contexto los \xFAltimos mensajes de la conversaci\xF3n para generar respuestas m\xE1s coherentes. En este modo las conversaciones se almacenan. Para acceder a esta funci\xF3n es necesario registrarse y verificar la cuenta.",INTERVIEW_MODE_TITLE:"Modo entrevista",INTERVIEW_MODE_DESCRIPTION:"En este modo, la inteligencia artificial genera una pregunta para que el usuario la responda. Posteriormente, analiza la respuesta, proporciona retroalimentaci\xF3n y formula una nueva pregunta para continuar la entrevista. Para acceder a esta funci\xF3n es necesario registrarse y verificar la cuenta.",DATA_TITLE:"Acerca de los datos",DATA_DESCRIPTION:"Los datos almacenados por la aplicaci\xF3n se limitan a la informaci\xF3n de la cuenta del usuario, los chats y los mensajes. Esta informaci\xF3n no se utiliza para fines distintos al funcionamiento del servicio. Adem\xE1s, el usuario puede eliminar sus conversaciones cuando lo desee.",ADMIN:"Administrador",NO_CHATS_AVAIBLES:"No tienes chats disponibles"},en:{INTRO:"Hi, how can I help you?",LOGIN:"Login",SIGNIN_WITH_GOOGLE:"Continue with Google",OR:"or",REGISTER:"Sign Up",LOGOUT:"Log out",OTHER:"",NEW_CHAT:"New chat",MODELS:"Models",SETTINGS:"Settings",CONVERSATIONS:"Conversations",FILTER_INTERVIEWS:"Interviews",FILTER_BY:"Filter by",SELECT_MODEL:"Select model",INFORMATION:"Information",INPUT_PLACEHOLDER:"Type something...",EPHEMERAL:"Ephemeral",INTERVIEWS:"Generate Interviews",PERSISTENT_CHAT:"Persistent Chat",LOGOUT_MESSAGE:"To log in, you must sign in again.",CANCEL_LOGOUT:"Cancel",ACCEPT_LOGOUT:"Ok",UPDATE_PASSWORD:"Update password",VERIFY_USER:"Verify user",THINKING:"Thinking",CHAT_RESPONSE_ERROR:"Error getting the server response.",EPHEMERAL_CONVERSATION:"Ephemeral Chat",INTERVIEW_CONVERSATION:"Interview",SESSION_LOGOUT_MESSAGE:"The session has been closed.",LOADING:"Loading...",ERROR_SIGNIN_MESSAGE:"Error Sign In.",CLOSE:"Close",WELCOME:"Welcome",EMAIL:"Email",EMAIL_REQUIRED:"Email is required.",EMAIL_INVALID:"Please enter a valid email.",PASSWORD:"Password",PASSWORD_REQUIRED:"Password is required.",PASSWORD_LENGTH:"Must be at least 6 characters long.",INVALID_CREDENTIALS:"Invalid email or password!",FORGOT_PASSWORD:"Forgot your password?",CONFIRM_PASSWORD:"Confirm password",PASSWORD_DO_NOT_MATCH:"Passwords do not match.",CANCEL:"Cancel",ACCEPT:"Ok",SENT_CONFIRMATION_MESSAGE:"A confirmation link has been sent to your email.",RECOVER_ACCOUNT:"Recover account",ENTER_EMAIL:"Enter the email address of the account you want to recover.",SEND_LINK:"Send verification link.",SENDING:"Sending...",RECOVERY_EMAIL_SENT:"Recovery email sent!",CHECK_INBOX:"Check your inbox to verify your account and continue.",CAN_REQUEST_ANOTHER:"You can request another one in",UNDERSTOOD:"Understood",VERIFY_YOUR_ACCOUNT:"Verify your account",VERIFY_ACCOUNT_MESSAGE:"For a better experience on the site, you must confirm your email address",VERIFY_ACCOUNT_MESSAGE_2:"If you have already verified your account, sign out and sign in again with your email and password.",ERROR_GENERIC:"An error occurred. Please try again later.",USER_ALREADY_VERIFIED:"The user is already verified.",EMAIL_SENT:"Email sent!",USER_ALREADY_REGISTERED:"The user is already registered.",STOP:"Stop",VOICE_SEARCH_TITLE:"Voice search",ARIA_START_RECORDING:"Start recording",ARIA_STOP_RECORDING:"Stop recording",VOICE_LISTENING:"Listening\u2026",VOICE_TAP_MIC:"Tap the microphone to speak",CONFIRM_DELETE_TITLE:"Delete conversation?",CONFIRM_DELETE_MESSAGE:"This action cannot be undone.",CONFIRM_DELETE_BUTTON:"Delete",CHAT_DELETED:"The conversation has been deleted.",LINK_SEND_ERROR:"The link could not be sent.",COPIED_TO_CLIPBOARD:"Copied to clipboard",UPDATED:"Actualizado.",ALREADY_IN_NATIVE_VOICE:"Already in native voice.",NOT_AVAILABLE:"Not available",LANGUAGE_TITLE:"Language",LANGUAGE_DESCRIPTION:"Available language settings:",TEXT_TO_SPEECH_TITLE:"Text to speech",AUTO_MODE:"Automatic mode:",GENERATE_VOICE_WITH:"Generate voice with:",DELETE:"Delete",NATIVE_VOICE:"Native voice",DELETE_ALL_CHATS:"Delete all chats",DELETE_INTERVIEWS_ONLY:"Delete interviews only",DELETE_CHATS_ONLY:"Delete chats only",ACTIVE:"Active",DELETED:"De\xF1eted",TOO_MANY_REQUEST:"Too many request",PLEASE_TRY_AGAIN:"Please try again in",MINUTES:"minutes",ABOUT_APP_TITLE:"About the Application",ABOUT_APP_DESCRIPTION:"SweetOnion is a tool that allows users to interact with artificial intelligence in two modes: Chat and Interview. Its main feature is the ability to choose the AI model used during conversations.",AVAILABLE_MODES_TITLE:"Available Modes",EPHEMERAL_MODE_TITLE:"Ephemeral Mode",EPHEMERAL_MODE_DESCRIPTION:"Allows users to interact with the AI without creating an account. Conversations are not stored.",CONVERSATIONAL_MODE_TITLE:"Conversational Mode",CONVERSATIONAL_MODE_DESCRIPTION:"Allows users to interact with the AI through text-based conversations. The AI uses recent messages as context to generate more coherent responses. Conversations are stored in this mode. Access to this feature requires account registration and email verification.",INTERVIEW_MODE_TITLE:"Interview Mode",INTERVIEW_MODE_DESCRIPTION:"In this mode, the AI generates a question for the user to answer. It then analyzes the response, provides feedback, and generates a new question to continue the interview. Access to this feature requires account registration and email verification.",DATA_TITLE:"About the Data",DATA_DESCRIPTION:"The data stored by the application is limited to user account information, chats, and messages. This information is used solely for operating the service. Additionally, users can delete their conversations at any time.",ADMIN:"Admin",NO_CHATS_AVAIBLES:"No available chats"}};var j=class n{configService=l(bt);onLanguageChanged;currentLang=y("en");constructor(){Le(()=>{this.currentLang.set(this.configService.translation())})}translate(t){return zg[this.currentLang()][t]}changeLang(t){this.configService.translation.set(t),this.onLanguageChanged?.()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};function OE(n,t){if(n&1){let e=H();u(0,"button",13),w("click",function(){N(e);let r=b();return L(r.close())}),p(1),h()}if(n&2){let e=b();m(),T(" ",e.languageService.translate("CANCEL")," ")}}function DE(n,t){if(n&1){let e=H();u(0,"button",14),w("click",function(){N(e);let r=b();return L(r.toggleListening())}),p(1),h()}if(n&2){let e=b();z("active",e.speechToText.isRecording()),m(),T(" ",e.languageService.translate("STOP")," ")}}var bs=class n{dialogRef=l(Ve);speechToText=l(Er);languageService=l(j);transcribedText=this.speechToText.textResult;accept=Qn();onAccept(){this.accept.emit(!0),this.close()}ngAfterViewInit(){this.speechToText.clearText(),this.speechToText.startSpeech()}ngOnDestroy(){this.speechToText.stopSpeech()}toggleListening(){this.speechToText.isRecording()?this.speechToText.stopSpeech():this.speechToText.startSpeech()}close(){this.speechToText.stopSpeech(),this.dialogRef.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-voice-search-modal"]],outputs:{accept:"accept"},decls:23,vars:11,consts:[[1,"voice-modal"],["aria-label","Cerrar",1,"close-btn",3,"click"],[1,"header"],[1,"title"],[1,"mic-container"],[1,"mic-button",3,"click"],[2,"color","white !important"],[1,"feedback"],[1,"actions"],[1,"btn","cancel"],[1,"btn","stop",3,"active"],[1,"btn","accept",2,"background-color","black","color","white",3,"click"],[1,"material-icons",2,"font-size","15px","vertical-align","middle","margin-right","1px","color","white !important"],[1,"btn","cancel",3,"click"],[1,"btn","stop",3,"click"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div")(2,"button",1),w("click",function(){return i.close()}),u(3,"mat-icon"),p(4,"close"),h()()(),u(5,"div",2)(6,"h3",3),p(7),h()(),u(8,"div",4)(9,"button",5),w("click",function(){return i.toggleListening()}),u(10,"mat-icon",6),p(11),h()()(),u(12,"p",7),p(13),h(),u(14,"span"),p(15),h(),u(16,"div",8),I(17,OE,2,1,"button",9)(18,DE,2,3,"button",10),u(19,"button",11),w("click",function(){return i.onAccept()}),u(20,"span",12),p(21," arrow_upward "),h(),p(22),h()()()),e&2&&(m(7),k(i.languageService.translate("VOICE_SEARCH_TITLE")),m(2),z("listening",i.speechToText.isRecording()),Y("aria-label",i.speechToText.isRecording()?i.languageService.translate("ARIA_STOP_RECORDING"):i.languageService.translate("ARIA_START_RECORDING")),m(2),k(i.speechToText.isRecording()?"mic":"mic_none"),m(),z("active",i.speechToText.isRecording()),m(),T(" ",i.speechToText.isRecording()?i.languageService.translate("VOICE_LISTENING"):i.languageService.translate("VOICE_TAP_MIC")," "),m(2),k(i.speechToText.textResult()),m(2),E(i.speechToText.isRecording()?18:17),m(5),T(" ",i.languageService.translate("ACCEPT")," "))},dependencies:[Ir,Vt,ae],styles:['@charset "UTF-8";.voice-modal[_ngcontent-%COMP%]{background:#fff;border-radius:20px;padding:clamp(16px,4vw,28px) clamp(16px,5vw,28px);max-width:400px;width:100%;margin:0 auto;text-align:center;display:flex;flex-direction:column;box-sizing:border-box;padding-top:10px;padding-right:8px;padding-left:8px}@media(max-width:480px){.voice-modal[_ngcontent-%COMP%]{border-radius:16px;max-width:100%}}.header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:20px}.title[_ngcontent-%COMP%]{font-size:clamp(15px,4vw,17px);font-weight:600;color:#1f2937;margin:0}.close-btn[_ngcontent-%COMP%]{background:transparent;border:none;cursor:pointer;color:#9ca3af;padding:6px;border-radius:50%;margin-left:auto;display:flex;align-items:center;justify-content:center;transition:background .2s,color .2s}.close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;height:20px;width:20px}.close-btn[_ngcontent-%COMP%]:hover{background:#f3f4f6;color:#4b5563}.mic-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:clamp(120px,25vw,156px);position:relative}.mic-button[_ngcontent-%COMP%]{position:relative;z-index:10;width:clamp(64px,15vw,80px);height:clamp(64px,15vw,80px);border-radius:50%;border:none;background-color:#f3f4f6;color:#4b5563;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background-color .3s,color .3s,box-shadow .3s,transform .2s;box-shadow:0 4px 12px #00000014}.mic-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:clamp(26px,6vw,32px);height:clamp(26px,6vw,32px);width:clamp(26px,6vw,32px)}.mic-button[_ngcontent-%COMP%]:hover{transform:scale(1.05);background-color:#e4e7eb}.mic-button.listening[_ngcontent-%COMP%]{background-color:#4f46e5;color:#fff;box-shadow:0 8px 22px #4f46e561}.mic-button.listening[_ngcontent-%COMP%]:before, .mic-button.listening[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;border-radius:50%;background-color:#4f46e559;z-index:-1;animation:_ngcontent-%COMP%_audioPulse 2s infinite ease-in-out}.mic-button.listening[_ngcontent-%COMP%]:after{animation-delay:.65s}@keyframes _ngcontent-%COMP%_audioPulse{0%{transform:scale(1);opacity:1}to{transform:scale(1.85);opacity:0}}.feedback[_ngcontent-%COMP%]{font-size:clamp(12px,3vw,13px);min-height:38px;color:#6b7280;padding:0 16px;display:flex;align-items:center;justify-content:center;transition:color .3s;margin:0}.feedback.active[_ngcontent-%COMP%]{color:#4f46e5;font-weight:500}.actions[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:8px;margin-top:24px;flex-wrap:wrap}@media(max-width:320px){.actions[_ngcontent-%COMP%]{justify-content:stretch}.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1;justify-content:center}}.btn[_ngcontent-%COMP%]{padding:8px 35px;font-size:13px;font-weight:500;border-radius:10px;border:none;cursor:pointer;transition:background .2s,opacity .2s,transform .2s}.btn.cancel[_ngcontent-%COMP%]{background:#f3f4f6;color:#6b7280}.btn.cancel[_ngcontent-%COMP%]:hover{background:#e5e7eb}.btn.stop[_ngcontent-%COMP%]{background:#4f46e5;color:#fff;opacity:0;transform:scale(.85);pointer-events:none;width:0;padding:0;overflow:hidden}.btn.stop.active[_ngcontent-%COMP%]{opacity:1;transform:scale(1);pointer-events:auto;width:auto;padding:8px 35px}']})};var Ge=class n{_view=y("startChat");view=this._view.asReadonly();setView(t){this._view()!==t&&this._view.set(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var ME=["textarea"],Cr=class n{onSendText=Qn();onMode=Qn();searchQuery=y("");languageService=l(j);speechToText=l(Er);isVoiceSearchModalOpen=y(!1);text=P(()=>{let t=this.speechToText.textResult();return t.length>500?t.substring(0,500)+"...":t});textareaRef=Ri.required("textarea");chatViewService=l(Ge);dialog=l(be);autoResize(t){t.style.height="auto",t.style.height=t.scrollHeight+"px"}openVoiceModal(){this.isVoiceSearchModalOpen.set(!0),this.speechToText.startSpeech();let t=this.dialog.open(bs,{width:"400px",maxWidth:"90vw",disableClose:!1});t.componentInstance.accept.subscribe(e=>{e&&(this.send(),this.speechToText.clearText())}),t.afterClosed().subscribe(e=>{e&&this.searchQuery.set(e),this.isVoiceSearchModalOpen.set(!1)})}send(){let t=this.textareaRef().nativeElement,e=t.value.trim();e&&(this.chatViewService.view()==="startChat"&&this.chatViewService.setView("newChat"),this.onSendText.emit(e),t.value="",t.style.height="auto")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-chat-input-component"]],viewQuery:function(e,i){e&1&&Ci(i.textareaRef,ME,5),e&2&&xi()},outputs:{onSendText:"onSendText",onMode:"onMode"},decls:14,vars:2,consts:[["textarea",""],[1,"chat-wrapper"],[1,"chat-input-container"],["type","button",1,"action-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"],["d","M19 10v2a7 7 0 0 1-14 0v-2"],["x1","12","y1","19","x2","12","y2","22"],["x1","8","y1","22","x2","16","y2","22"],["rows","1",1,"elegant-textarea",3,"input","value","placeholder"],[1,"send-btn-elegant",3,"click"],[1,"icon-wrapper"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"]],template:function(e,i){if(e&1){let r=H();oe(0,"div",1)(1,"div",2)(2,"button",3),Yn("click",function(){return i.openVoiceModal()}),Pt(),oe(3,"svg",4),dc(4,"path",5)(5,"path",6)(6,"line",7)(7,"line",8),fe()(),Or(),oe(8,"textarea",9,0),Yn("input",function(){N(r);let o=Ce(9);return L(i.autoResize(o))}),fe(),oe(10,"button",10),Yn("click",function(){return i.send()}),oe(11,"div",11),Pt(),oe(12,"svg",12),dc(13,"path",13),fe()()()()()}e&2&&(m(8),Et("value",i.text())("placeholder",i.languageService.translate("INPUT_PLACEHOLDER")))},styles:[".chat-wrapper[_ngcontent-%COMP%]{padding:20px;background:transparent!important;display:flex;justify-content:center;width:100%;box-sizing:border-box}.chat-input-container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:8px;width:100%;max-width:800px;background:#fffc;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid rgba(229,231,235,.5);border-radius:28px;padding:10px 14px;box-shadow:0 10px 25px -5px #0000000d,0 8px 10px -6px #0000000d;transition:box-shadow .3s ease,border-color .3s ease,transform .3s ease;box-sizing:border-box}.chat-input-container[_ngcontent-%COMP%]:focus-within{box-shadow:0 20px 25px -5px #0000001a;border-color:#6366f14d;transform:translateY(-2px)}.action-button[_ngcontent-%COMP%]{background:transparent;border:none;color:#9ca3af;padding:8px;cursor:pointer;border-radius:50%;transition:background .2s ease,color .2s ease;display:flex;align-items:center;justify-content:center;flex-shrink:0}.action-button[_ngcontent-%COMP%]:hover{color:#6366f1;background:#6366f11a}.elegant-textarea[_ngcontent-%COMP%]{flex:1;border:none;background:transparent;padding:10px 4px;font-size:16px;line-height:1.5;color:#1f2937;resize:none;outline:none;overflow-y:auto;min-height:40px;max-height:200px;font-family:Inter,system-ui,sans-serif;box-sizing:border-box}.elegant-textarea[_ngcontent-%COMP%]::placeholder{color:#9ca3af;font-weight:300}.send-btn-elegant[_ngcontent-%COMP%]{position:relative;width:42px;height:42px;border:none;border-radius:50%;background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;transition:transform .3s ease,box-shadow .3s ease,background .3s ease}.send-btn-elegant[_ngcontent-%COMP%]:hover:not(:disabled){transform:rotate(-10deg) scale(1.08);box-shadow:0 4px 15px #6366f166}.send-btn-elegant[_ngcontent-%COMP%]:disabled{background:#e5e7eb;color:#9ca3af;cursor:not-allowed}.send-btn-elegant[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{width:18px;height:18px;display:flex;align-items:center;justify-content:center;margin-right:2px}.send-btn-elegant[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.elegant-textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}.elegant-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#0000001a;border-radius:10px}.elegant-textarea[_ngcontent-%COMP%]{flex:1;padding-left:12px;padding-right:12px;scrollbar-width:none}.elegant-textarea[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}@media(max-width:768px){body[_ngcontent-%COMP%]{padding-bottom:110px}.chat-wrapper[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:100%;padding:10px;z-index:999;background:#fff;box-sizing:border-box}.chat-input-container[_ngcontent-%COMP%]{width:100%;max-width:100%;border-radius:20px;padding:10px 12px}.elegant-textarea[_ngcontent-%COMP%]{max-height:7.5em;font-size:16px}.send-btn-elegant[_ngcontent-%COMP%]{width:40px;height:40px}.action-button[_ngcontent-%COMP%]{padding:6px}}"]})};var ys=class n{isPlaying=y(!1);play(t,e="es-ES"){if(!t)return;window.speechSynthesis.cancel();let i=new SpeechSynthesisUtterance(t);i.lang=e,i.onstart=()=>this.isPlaying.set(!0),i.onend=()=>this.isPlaying.set(!1),i.onerror=()=>this.isPlaying.set(!1),window.speechSynthesis.speak(i)}stop(){window.speechSynthesis.cancel(),this.isPlaying.set(!1)}playAudio(t,e="es-ES"){let i=new SpeechSynthesisUtterance(t);i.lang=e,window.speechSynthesis.speak(i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var ws=class n{http=l(Oi);apiUrl=yt.apiUrl;httpOptions={headers:{accept:"*/*","Content-Type":"application/json"},withCredentials:!0};generateCompletion(t,e="EPHEMERAL"){switch(e){case"EPHEMERAL":return this.requestEphemeral(t);case"CONVERSATION":return this.requestConversation(t);case"INTERVIEW":return this.requestInterview(t);case"OTHER":throw new Error(`Chat mode ${e} not implemented yet.`);default:throw new Error("Chat mode does not exist.")}}requestEphemeral(t){return this.http.post(`${this.apiUrl}/completions/temp/${t.provider}`,{content:t.content,model:t.model,language:t.language,context:t.context},this.httpOptions)}requestConversation(t){let e=t.isFirst?`${this.apiUrl}/completions/chat/${t.provider}/init`:`${this.apiUrl}/completions/chat/${t.provider}`;return this.http.post(e,{content:t.content,chatId:t.chatId,model:t.model,userId:t.userId,language:t.language},this.httpOptions)}requestInterview(t){let e=t.isFirst?`${this.apiUrl}/completions/interview/${t.provider}/init`:`${this.apiUrl}/completions/interview/${t.provider}/evaluate`;return this.http.post(e,{content:t.content,chatId:t.chatId,model:t.model,userId:t.userId,language:t.language},this.httpOptions)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};function eu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _i=eu();function Kg(n){_i=n}var fi={exec:()=>null};function q(n,t=""){let e=typeof n=="string"?n:n.source,i={replace:(r,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(qe.caret,"$1"),e=e.replace(r,o),i},getRegex:()=>new RegExp(e,t)};return i}var PE=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),qe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},NE=/^(?:[ \t]*(?:\n|$))+/,LE=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,FE=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ea=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,UE=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Yg=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Qg=q(Yg).replace(/bull/g,tu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),VE=q(Yg).replace(/bull/g,tu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),nu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,zE=/^[^\n]+/,iu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,BE=q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",iu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),jE=q(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,tu).getRegex(),xs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ru=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,HE=q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ru).replace("tag",xs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Jg=q(nu).replace("hr",Ea).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex(),$E=q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Jg).getRegex(),au={blockquote:$E,code:LE,def:BE,fences:FE,heading:UE,hr:Ea,html:HE,lheading:Qg,list:jE,newline:NE,paragraph:Jg,table:fi,text:zE},Bg=q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ea).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex(),WE=B(v({},au),{lheading:VE,table:Bg,paragraph:q(nu).replace("hr",Ea).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Bg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex()}),GE=B(v({},au),{html:q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ru).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:fi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:q(nu).replace("hr",Ea).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Qg).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),qE=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,KE=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Xg=/^( {2,}|\\)\n(?!\s*$)/,YE=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xr=/[\p{P}\p{S}]/u,Ss=/[\s\p{P}\p{S}]/u,ou=/[^\s\p{P}\p{S}]/u,QE=q(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ss).getRegex(),Zg=/(?!~)[\p{P}\p{S}]/u,JE=/(?!~)[\s\p{P}\p{S}]/u,XE=/(?:[^\s\p{P}\p{S}]|~)/u,ZE=q(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",PE?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),e_=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,eC=q(e_,"u").replace(/punct/g,xr).getRegex(),tC=q(e_,"u").replace(/punct/g,Zg).getRegex(),t_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",nC=q(t_,"gu").replace(/notPunctSpace/g,ou).replace(/punctSpace/g,Ss).replace(/punct/g,xr).getRegex(),iC=q(t_,"gu").replace(/notPunctSpace/g,XE).replace(/punctSpace/g,JE).replace(/punct/g,Zg).getRegex(),rC=q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ou).replace(/punctSpace/g,Ss).replace(/punct/g,xr).getRegex(),aC=q(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,xr).getRegex(),oC="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",sC=q(oC,"gu").replace(/notPunctSpace/g,ou).replace(/punctSpace/g,Ss).replace(/punct/g,xr).getRegex(),cC=q(/\\(punct)/,"gu").replace(/punct/g,xr).getRegex(),lC=q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dC=q(ru).replace("(?:-->|$)","-->").getRegex(),uC=q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dC).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Is=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,hC=q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Is).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),n_=q(/^!?\[(label)\]\[(ref)\]/).replace("label",Is).replace("ref",iu).getRegex(),i_=q(/^!?\[(ref)\](?:\[\])?/).replace("ref",iu).getRegex(),mC=q("reflink|nolink(?!\\()","g").replace("reflink",n_).replace("nolink",i_).getRegex(),jg=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,su={_backpedal:fi,anyPunctuation:cC,autolink:lC,blockSkip:ZE,br:Xg,code:KE,del:fi,delLDelim:fi,delRDelim:fi,emStrongLDelim:eC,emStrongRDelimAst:nC,emStrongRDelimUnd:rC,escape:qE,link:hC,nolink:i_,punctuation:QE,reflink:n_,reflinkSearch:mC,tag:uC,text:YE,url:fi},pC=B(v({},su),{link:q(/^!?\[(label)\]\((.*?)\)/).replace("label",Is).getRegex(),reflink:q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Is).getRegex()}),Jd=B(v({},su),{emStrongRDelimAst:iC,emStrongLDelim:tC,delLDelim:aC,delRDelim:sC,url:q(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",jg).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:q(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",jg).getRegex()}),fC=B(v({},Jd),{br:q(Xg).replace("{2,}","*").getRegex(),text:q(Jd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),ks={normal:au,gfm:WE,pedantic:GE},ka={normal:su,gfm:Jd,breaks:fC,pedantic:pC},gC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hg=n=>gC[n];function Kt(n,t){if(t){if(qe.escapeTest.test(n))return n.replace(qe.escapeReplace,Hg)}else if(qe.escapeTestNoEncode.test(n))return n.replace(qe.escapeReplaceNoEncode,Hg);return n}function $g(n){try{n=encodeURI(n).replace(qe.percentDecode,"%")}catch{return null}return n}function Wg(n,t){let e=n.replace(qe.findPipe,(a,o,s)=>{let c=!1,d=o;for(;--d>=0&&s[d]==="\\";)c=!c;return c?"|":" |"}),i=e.split(qe.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(qe.slashPipe,"|");return i}function Vn(n,t,e){let i=n.length;if(i===0)return"";let r=0;for(;r<i;){let a=n.charAt(i-r-1);if(a===t&&!e)r++;else if(a!==t&&e)r++;else break}return n.slice(0,i-r)}function Gg(n){let t=n.split(`
`),e=t.length-1;for(;e>=0&&qe.blankLine.test(t[e]);)e--;return t.length-e<=2?n:t.slice(0,e+1).join(`
`)}function _C(n,t){if(n.indexOf(t[1])===-1)return-1;let e=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===t[0])e++;else if(n[i]===t[1]&&(e--,e<0))return i;return e>0?-2:-1}function vC(n,t=0){let e=t,i="";for(let r of n)if(r==="	"){let a=4-e%4;i+=" ".repeat(a),e+=a}else i+=r,e++;return i}function qg(n,t,e,i,r){let a=t.href,o=t.title||null,s=n[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let c={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:a,title:o,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,c}function bC(n,t,e){let i=n.match(e.other.indentCodeCompensation);if(i===null)return t;let r=i[1];return t.split(`
`).map(a=>{let o=a.match(e.other.beginningSpace);if(o===null)return a;let[s]=o;return s.length>=r.length?a.slice(r.length):a}).join(`
`)}var Es=class{options;rules;lexer;constructor(n){this.options=n||_i}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let e=this.options.pedantic?t[0]:Gg(t[0]),i=e.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e,codeBlockStyle:"indented",text:i}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let e=t[0],i=bC(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let i=Vn(e,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(e=i.trim())}return{type:"heading",raw:Vn(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:Vn(t[0],`
`)}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let e=Vn(t[0],`
`).split(`
`),i="",r="",a=[];for(;e.length>0;){let o=!1,s=[],c;for(c=0;c<e.length;c++)if(this.rules.other.blockquoteStart.test(e[c]))s.push(e[c]),o=!0;else if(!o)s.push(e[c]);else break;e=e.slice(c);let d=s.join(`
`),f=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${d}`:d,r=r?`${r}
${f}`:f;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,a,!0),this.lexer.state.top=g,e.length===0)break;let _=a.at(-1);if(_?.type==="code")break;if(_?.type==="blockquote"){let R=_,O=R.raw+`
`+e.join(`
`),le=this.blockquote(O);a[a.length-1]=le,i=i.substring(0,i.length-R.raw.length)+le.raw,r=r.substring(0,r.length-R.text.length)+le.text;break}else if(_?.type==="list"){let R=_,O=R.raw+`
`+e.join(`
`),le=this.list(O);a[a.length-1]=le,i=i.substring(0,i.length-_.raw.length)+le.raw,r=r.substring(0,r.length-R.raw.length)+le.raw,e=O.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:r}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e=t[1].trim(),i=e.length>1,r={type:"list",raw:"",ordered:i,start:i?+e.slice(0,-1):"",loose:!1,items:[]};e=i?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=i?e:"[*+-]");let a=this.rules.other.listItemRegex(e),o=!1;for(;n;){let c=!1,d="",f="";if(!(t=a.exec(n))||this.rules.block.hr.test(n))break;d=t[0],n=n.substring(d.length);let g=vC(t[2].split(`
`,1)[0],t[1].length),_=n.split(`
`,1)[0],R=!g.trim(),O=0;if(this.options.pedantic?(O=2,f=g.trimStart()):R?O=t[1].length+1:(O=g.search(this.rules.other.nonSpaceChar),O=O>4?1:O,f=g.slice(O),O+=t[1].length),R&&this.rules.other.blankLine.test(_)&&(d+=_+`
`,n=n.substring(_.length+1),c=!0),!c){let le=this.rules.other.nextBulletRegex(O),Pe=this.rules.other.hrRegex(O),ze=this.rules.other.fencesBeginRegex(O),Te=this.rules.other.headingBeginRegex(O),Xe=this.rules.other.htmlBeginRegex(O),yi=this.rules.other.blockquoteBeginRegex(O);for(;n;){let wi=n.split(`
`,1)[0],Qt;if(_=wi,this.options.pedantic?(_=_.replace(this.rules.other.listReplaceNesting,"  "),Qt=_):Qt=_.replace(this.rules.other.tabCharGlobal,"    "),ze.test(_)||Te.test(_)||Xe.test(_)||yi.test(_)||le.test(_)||Pe.test(_))break;if(Qt.search(this.rules.other.nonSpaceChar)>=O||!_.trim())f+=`
`+Qt.slice(O);else{if(R||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ze.test(g)||Te.test(g)||Pe.test(g))break;f+=`
`+_}R=!_.trim(),d+=wi+`
`,n=n.substring(wi.length+1),g=Qt.slice(O)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(o=!0)),r.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),r.raw+=d}let s=r.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c of r.items){this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]);let d=c.tokens[0];if(c.task&&(d?.type==="text"||d?.type==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),d.raw=d.raw.replace(this.rules.other.listReplaceTask,""),d.text=d.text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}let f=this.rules.other.listTaskCheckbox.exec(c.raw);if(f){let g={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};c.checked=g.checked,r.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=g.raw+c.tokens[0].raw,c.tokens[0].text=g.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(g)):c.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):c.tokens.unshift(g)}}else c.task&&(c.task=!1);if(!r.loose){let f=c.tokens.filter(_=>_.type==="space"),g=f.length>0&&f.some(_=>this.rules.other.anyLine.test(_.raw));r.loose=g}}if(r.loose)for(let c of r.items){c.loose=!0;for(let d of c.tokens)d.type==="text"&&(d.type="paragraph")}return r}}html(n){let t=this.rules.block.html.exec(n);if(t){let e=Gg(t[0]);return{type:"html",block:!0,raw:e,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:e}}}def(n){let t=this.rules.block.def.exec(n);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:Vn(t[0],`
`),href:i,title:r}}}table(n){let t=this.rules.block.table.exec(n);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let e=Wg(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:Vn(t[0],`
`),header:[],align:[],rows:[]};if(e.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<e.length;o++)a.header.push({text:e[o],tokens:this.lexer.inline(e[o]),header:!0,align:a.align[o]});for(let o of r)a.rows.push(Wg(o,a.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:a.align[c]})));return a}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t){let e=t[1].trim();return{type:"heading",raw:Vn(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(n){let t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){let t=this.rules.inline.link.exec(n);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let a=Vn(e.slice(0,-1),"\\");if((e.length-a.length)%2===0)return}else{let a=_C(t[2],"()");if(a===-2)return;if(a>-1){let o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],r="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(i);a&&(i=a[1],r=a[3])}else r=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i=i.slice(1):i=i.slice(1,-1)),qg(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let i=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[i.toLowerCase()];if(!r){let a=e[0].charAt(0);return{type:"text",raw:a,text:a}}return qg(e,r,e[0],this.lexer,this.rules)}}emStrong(n,t,e=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!e||this.rules.inline.punctuation.exec(e))){let r=[...i[0]].length-1,a,o,s=r,c=0,d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*n.length+r);(i=d.exec(t))!==null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(o=[...a].length,i[3]||i[4]){s+=o;continue}else if((i[5]||i[6])&&r%3&&!((r+o)%3)){c+=o;continue}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let f=[...i[0]][0].length,g=n.slice(0,r+i.index+f+o);if(Math.min(r,o)%2){let R=g.slice(1,-1);return{type:"em",raw:g,text:R,tokens:this.lexer.inlineTokens(R)}}let _=g.slice(2,-2);return{type:"strong",raw:g,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n,t,e=""){let i=this.rules.inline.delLDelim.exec(n);if(i&&(!i[1]||!e||this.rules.inline.punctuation.exec(e))){let r=[...i[0]].length-1,a,o,s=r,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*n.length+r);(i=c.exec(t))!==null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a||(o=[...a].length,o!==r))continue;if(i[3]||i[4]){s+=o;continue}if(s-=o,s>0)continue;o=Math.min(o,o+s);let d=[...i[0]][0].length,f=n.slice(0,r+i.index+d+o),g=f.slice(r,-r);return{type:"del",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}autolink(n){let t=this.rules.inline.autolink.exec(n);if(t){let e,i;return t[2]==="@"?(e=t[1],i="mailto:"+e):(e=t[1],i=e),{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let e,i;if(t[2]==="@")e=t[0],i="mailto:"+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);e=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(n){let t=this.rules.inline.text.exec(n);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},Dt=class Xd{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||_i,this.options.tokenizer=this.options.tokenizer||new Es,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:qe,block:ks.normal,inline:ka.normal};this.options.pedantic?(e.block=ks.pedantic,e.inline=ka.pedantic):this.options.gfm&&(e.block=ks.gfm,this.options.breaks?e.inline=ka.breaks:e.inline=ka.gfm),this.tokenizer.rules=e}static get rules(){return{block:ks,inline:ka}}static lex(t,e){return new Xd(e).lex(t)}static lexInline(t,e){return new Xd(e).inlineTokens(t)}lex(t){t=t.replace(qe.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let i=this.inlineQueue[e];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(qe.tabCharGlobal,"    ").replace(qe.spaceLine,""));let r=1/0;for(;t;){if(t.length<r)r=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let a;if(this.options.extensions?.block?.some(s=>(a=s.call({lexer:this},t,e))?(t=t.substring(a.raw.length),e.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let s=e.at(-1);a.raw.length===1&&s!==void 0?s.raw+=`
`:e.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let s=e.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.at(-1).src=s.text):e.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let s=e.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},e.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),e.push(a);continue}let o=t;if(this.options.extensions?.startBlock){let s=1/0,c=t.slice(1),d;this.options.extensions.startBlock.forEach(f=>{d=f.call({lexer:this},c),typeof d=="number"&&d>=0&&(s=Math.min(s,d))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let s=e.at(-1);i&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):e.push(a),i=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let s=e.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):e.push(a);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){this.tokenizer.lexer=this;let i=t,r=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)d.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)a=r[2]?r[2].length:0,i=i.slice(0,r.index+a)+"["+"a".repeat(r[0].length-a-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,s="",c=1/0;for(;t;){if(t.length<c)c=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}o||(s=""),o=!1;let d;if(this.options.extensions?.inline?.some(g=>(d=g.call({lexer:this},t,e))?(t=t.substring(d.raw.length),e.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let g=e.at(-1);d.type==="text"&&g?.type==="text"?(g.raw+=d.raw,g.text+=d.text):e.push(d);continue}if(d=this.tokenizer.emStrong(t,i,s)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.del(t,i,s)){t=t.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),e.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),e.push(d);continue}let f=t;if(this.options.extensions?.startInline){let g=1/0,_=t.slice(1),R;this.options.extensions.startInline.forEach(O=>{R=O.call({lexer:this},_),typeof R=="number"&&R>=0&&(g=Math.min(g,R))}),g<1/0&&g>=0&&(f=t.substring(0,g+1))}if(d=this.tokenizer.inlineText(f)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(s=d.raw.slice(-1)),o=!0;let g=e.at(-1);g?.type==="text"?(g.raw+=d.raw,g.text+=d.text):e.push(d);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return e}infiniteLoopError(t){let e="Infinite loop on byte: "+t;if(this.options.silent)console.error(e);else throw new Error(e)}},Cs=class{options;parser;constructor(n){this.options=n||_i}space(n){return""}code({text:n,lang:t,escaped:e}){let i=(t||"").match(qe.notSpaceStart)?.[0],r=n.replace(qe.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Kt(i)+'">'+(e?r:Kt(r,!0))+`</code></pre>
`:"<pre><code>"+(e?r:Kt(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){let t=n.ordered,e=n.start,i="";for(let o=0;o<n.items.length;o++){let s=n.items[o];i+=this.listitem(s)}let r=t?"ol":"ul",a=t&&e!==1?' start="'+e+'"':"";return"<"+r+a+`>
`+i+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",e="";for(let r=0;r<n.header.length;r++)e+=this.tablecell(n.header[r]);t+=this.tablerow({text:e});let i="";for(let r=0;r<n.rows.length;r++){let a=n.rows[r];e="";for(let o=0;o<a.length;o++)e+=this.tablecell(a[o]);i+=this.tablerow({text:e})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let t=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+t+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Kt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:e}){let i=this.parser.parseInline(e),r=$g(n);if(r===null)return i;n=r;let a='<a href="'+n+'"';return t&&(a+=' title="'+Kt(t)+'"'),a+=">"+i+"</a>",a}image({href:n,title:t,text:e,tokens:i}){i&&(e=this.parser.parseInline(i,this.parser.textRenderer));let r=$g(n);if(r===null)return Kt(e);n=r;let a=`<img src="${n}" alt="${Kt(e)}"`;return t&&(a+=` title="${Kt(t)}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Kt(n.text)}},cu=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},Mt=class Zd{options;renderer;textRenderer;constructor(t){this.options=t||_i,this.options.renderer=this.options.renderer||new Cs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new cu}static parse(t,e){return new Zd(e).parse(t)}static parseInline(t,e){return new Zd(e).parseInline(t)}parse(t){this.renderer.parser=this;let e="";for(let i=0;i<t.length;i++){let r=t[i];if(this.options.extensions?.renderers?.[r.type]){let o=r,s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){e+=s||"";continue}}let a=r;switch(a.type){case"space":{e+=this.renderer.space(a);break}case"hr":{e+=this.renderer.hr(a);break}case"heading":{e+=this.renderer.heading(a);break}case"code":{e+=this.renderer.code(a);break}case"table":{e+=this.renderer.table(a);break}case"blockquote":{e+=this.renderer.blockquote(a);break}case"list":{e+=this.renderer.list(a);break}case"checkbox":{e+=this.renderer.checkbox(a);break}case"html":{e+=this.renderer.html(a);break}case"def":{e+=this.renderer.def(a);break}case"paragraph":{e+=this.renderer.paragraph(a);break}case"text":{e+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return e}parseInline(t,e=this.renderer){this.renderer.parser=this;let i="";for(let r=0;r<t.length;r++){let a=t[r];if(this.options.extensions?.renderers?.[a.type]){let s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){i+=s||"";continue}}let o=a;switch(o.type){case"escape":{i+=e.text(o);break}case"html":{i+=e.html(o);break}case"link":{i+=e.link(o);break}case"image":{i+=e.image(o);break}case"checkbox":{i+=e.checkbox(o);break}case"strong":{i+=e.strong(o);break}case"em":{i+=e.em(o);break}case"codespan":{i+=e.codespan(o);break}case"br":{i+=e.br(o);break}case"del":{i+=e.del(o);break}case"text":{i+=e.text(o);break}default:{let s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return i}},Ia=class{options;block;constructor(n){this.options=n||_i}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?Dt.lex:Dt.lexInline}provideParser(n=this.block){return n?Mt.parse:Mt.parseInline}},yC=class{defaults=eu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Mt;Renderer=Cs;TextRenderer=cu;Lexer=Dt;Tokenizer=Es;Hooks=Ia;constructor(...n){this.use(...n)}walkTokens(n,t){let e=[];for(let i of n)switch(e=e.concat(t.call(this,i)),i.type){case"table":{let r=i;for(let a of r.header)e=e.concat(this.walkTokens(a.tokens,t));for(let a of r.rows)for(let o of a)e=e.concat(this.walkTokens(o.tokens,t));break}case"list":{let r=i;e=e.concat(this.walkTokens(r.items,t));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(a=>{let o=r[a].flat(1/0);e=e.concat(this.walkTokens(o,t))}):r.tokens&&(e=e.concat(this.walkTokens(r.tokens,t)))}}return e}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{let i=v({},e);if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let a=t.renderers[r.name];a?t.renderers[r.name]=function(...o){let s=r.renderer.apply(this,o);return s===!1&&(s=a.apply(this,o)),s}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[r.level];a?a.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),i.extensions=t),e.renderer){let r=this.defaults.renderer||new Cs(this.defaults);for(let a in e.renderer){if(!(a in r))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,s=e.renderer[o],c=r[o];r[o]=(...d)=>{let f=s.apply(r,d);return f===!1&&(f=c.apply(r,d)),f||""}}i.renderer=r}if(e.tokenizer){let r=this.defaults.tokenizer||new Es(this.defaults);for(let a in e.tokenizer){if(!(a in r))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,s=e.tokenizer[o],c=r[o];r[o]=(...d)=>{let f=s.apply(r,d);return f===!1&&(f=c.apply(r,d)),f}}i.tokenizer=r}if(e.hooks){let r=this.defaults.hooks||new Ia;for(let a in e.hooks){if(!(a in r))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,s=e.hooks[o],c=r[o];Ia.passThroughHooks.has(a)?r[o]=d=>{if(this.defaults.async&&Ia.passThroughHooksRespectAsync.has(a))return(async()=>{let g=await s.call(r,d);return c.call(r,g)})();let f=s.call(r,d);return c.call(r,f)}:r[o]=(...d)=>{if(this.defaults.async)return(async()=>{let g=await s.apply(r,d);return g===!1&&(g=await c.apply(r,d)),g})();let f=s.apply(r,d);return f===!1&&(f=c.apply(r,d)),f}}i.hooks=r}if(e.walkTokens){let r=this.defaults.walkTokens,a=e.walkTokens;i.walkTokens=function(o){let s=[];return s.push(a.call(this,o)),r&&(s=s.concat(r.call(this,o))),s}}this.defaults=v(v({},this.defaults),i)}),this}setOptions(n){return this.defaults=v(v({},this.defaults),n),this}lexer(n,t){return Dt.lex(n,t??this.defaults)}parser(n,t){return Mt.parse(n,t??this.defaults)}parseMarkdown(n){return(t,e)=>{let i=v({},e),r=v(v({},this.defaults),i),a=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let o=r.hooks?await r.hooks.preprocess(t):t,s=await(r.hooks?await r.hooks.provideLexer(n):n?Dt.lex:Dt.lexInline)(o,r),c=r.hooks?await r.hooks.processAllTokens(s):s;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let d=await(r.hooks?await r.hooks.provideParser(n):n?Mt.parse:Mt.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(d):d})().catch(a);try{r.hooks&&(t=r.hooks.preprocess(t));let o=(r.hooks?r.hooks.provideLexer(n):n?Dt.lex:Dt.lexInline)(t,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let s=(r.hooks?r.hooks.provideParser(n):n?Mt.parse:Mt.parseInline)(o,r);return r.hooks&&(s=r.hooks.postprocess(s)),s}catch(o){return a(o)}}}onError(n,t){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let i="<p>An error occurred:</p><pre>"+Kt(e.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(e);throw e}}},gi=new yC;function X(n,t){return gi.parse(n,t)}X.options=X.setOptions=function(n){return gi.setOptions(n),X.defaults=gi.defaults,Kg(X.defaults),X};X.getDefaults=eu;X.defaults=_i;X.use=function(...n){return gi.use(...n),X.defaults=gi.defaults,Kg(X.defaults),X};X.walkTokens=function(n,t){return gi.walkTokens(n,t)};X.parseInline=gi.parseInline;X.Parser=Mt;X.parser=Mt.parse;X.Renderer=Cs;X.TextRenderer=cu;X.Lexer=Dt;X.lexer=Dt.lex;X.Tokenizer=Es;X.Hooks=Ia;X.parse=X;var kP=X.options,IP=X.setOptions,EP=X.use,CP=X.walkTokens,xP=X.parseInline;var SP=Mt.parse,TP=Dt.lex;var Ts=class n{constructor(){X.setOptions({gfm:!0,breaks:!0})}transform(t){return t?X.parse(t):""}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=zu({name:"markdown",type:n,pure:!0})};var As=class n{apiUrl=yt.apiUrl;http=l(Oi);getMessages(t){return this.http.get(`${this.apiUrl}/chats/${t}/messages`,{headers:{accept:"*/*","Content-Type":"application/json"},withCredentials:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var Yt=class n{messageService=l(As);_messages=y([]);_loading=y(!1);_totalMessages=y(0);messages=this._messages.asReadonly();isLoading=this._loading.asReadonly();totalMessages=this._totalMessages.asReadonly();loadMessages(t){this._loading()||(this.resetMessages(),this._loading.set(!0),this._totalMessages.set(0),this.messageService.getMessages(t).subscribe({next:e=>{this._messages.set(e),this._totalMessages.set(e.length),this._loading.set(!1)},error:()=>{this.resetMessages(),this._loading.set(!1)}}))}resetMessages(){this._messages.set([])}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var Sr=class n{apiUrl=yt.apiUrl;http=l(Oi);getChatsWithCursor(t,e="",i=10,r="conversation"){return this.http.get(`${this.apiUrl}/users/${t}/chats?cursor=${e}&limit=${i}&type=${r}`,{headers:{accept:"*/*","Content-Type":"application/json"},withCredentials:!0})}deleteChat(t){return this.http.delete(`${this.apiUrl}/chats/${t}`,{headers:{accept:"*/*","Content-Type":"application/json"},withCredentials:!0})}getChat(t){return this.http.get(`${this.apiUrl}/chats/${t}`,{withCredentials:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var Rs=class n{auth=l(fn);injector=l(_t);login(t,e){return Ne(()=>ie(this.injector,()=>de(fg(this.auth,t,e)))).pipe(ne(i=>({uid:i.user.uid,email:i.user.email??"",displayName:i.user.displayName??void 0})),ot(i=>Be(()=>i)))}loginWithProvider(){let t=new yd;return t.setCustomParameters({prompt:"select_account"}),ie(this.injector,()=>de(gg(this.auth,t)).pipe(ne(()=>{})))}register(t,e,i){return Ne(()=>ie(this.injector,()=>de(cg(this.auth,t,e)).pipe(me(r=>i?de(vg(r.user,{displayName:i})).pipe(ne(()=>r)):F(r))))).pipe(ne(r=>({uid:r.user.uid,email:r.user.email??"",displayName:r.user.displayName??void 0})),ot(r=>Be(()=>r)))}logout(){return Ne(()=>ie(this.injector,()=>de(_g(this.auth))))}getCurrentUser(){return Ne(()=>ie(this.injector,()=>og(this.auth))).pipe(ne(t=>t?{uid:t.uid,email:t.email??"",displayName:t.displayName??void 0}:null))}onAuthStateChange(){return new pt(t=>{let e=ug(this.auth,i=>{i?t.next({uid:i.uid,email:i.email??"",displayName:i.displayName??void 0,emailVerified:i.emailVerified??!1}):t.next(null)},i=>{t.error(i)});return()=>e()})}handleRedirectResult(){return F(null)}async getIdToken(){let t=this.auth.currentUser;return t?await t.getIdToken():null}sendEmailVerification(){return Ne(()=>{let t=this.auth.currentUser;return t?ie(this.injector,()=>de(mg(t))):Be(()=>"No hay un usuario autenticado para verificar.")}).pipe(ot(t=>Be(()=>t)))}refreshAuthStatus(){let t=this.auth.currentUser;return t?Ne(()=>{let e=ie(this.injector,async()=>(await hg(t),await t.getIdToken(!0),t.emailVerified));return de(e)}).pipe(ot(e=>(console.error("Error al refrescar estado:",e),F(!1)))):F(!1)}sendPasswordResetEmail(t){return Ne(()=>ie(this.injector,()=>de(pg(this.auth,t)))).pipe(ot(e=>Be(()=>e)))}deleteAccount(){return Ne(()=>{let t=this.auth.currentUser;return t?ie(this.injector,()=>de(lg(t))):Be(()=>"No hay usuario autenticado.")}).pipe(ot(t=>t.code==="auth/requires-recent-login"?Be(()=>"Re-authentication required before deleting account."):Be(()=>"Error al eliminar la cuenta.")))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var ge=class n{provider=l(Rs);_user=y(null);_initializing=y(!0);authSubscription=null;user=P(()=>this._user());isLoggedIn=P(()=>!!this._user());isInitializing=P(()=>this._initializing());_token=y(null);token=P(()=>this._token());constructor(){this.authSubscription=this.provider.onAuthStateChange().subscribe({next:async t=>{if(this._user.set(t),t){let e=await this.provider.getIdToken();this._token.set(e)}else this._token.set(null);this._initializing.set(!1)}})}ngOnDestroy(){this.authSubscription?.unsubscribe()}loginWithProvider(){return this.provider.loginWithProvider()}register(t,e,i){return this.provider.register(t,e,i)}login(t,e){return this.provider.login(t,e)}logout(){return this.provider.logout()}async getTokenAsync(){return this._user()?await this.provider.getIdToken():null}sendEmailVerification(){return this.provider.sendEmailVerification().pipe(ot(t=>Be(()=>t)))}refreshAuthStatus(){return this.provider.refreshAuthStatus().pipe(me(t=>t?de(this.provider.getIdToken()).pipe(ne(e=>(this._token.set(e),!0))):F(!1)),ot(t=>(console.error("Error en el refresh del servicio:",t),Be(()=>t))))}sendPasswordResetEmail(t){return this.provider.sendPasswordResetEmail(t)}deleteAccount(){return this.provider.deleteAccount()}updateDisplayName(t){this._user.update(e=>e?B(v({},e),{displayName:t}):null)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ke=class n{constructor(t){this.authService=t;Le(()=>{this.authService.user()||this._chats.set([])})}chatService=l(Sr);_chats=y([]);_loading=y(!1);_totalChats=y(0);_hasMore=y(!1);_nextCursor=y("");_limit=y(10);_selectedChat=y(null);hasMore=P(()=>this._hasMore());nextCursor=P(()=>this._nextCursor());limit=P(()=>this._limit());chats=P(()=>this._chats());isLoading=P(()=>this._loading());totalChats=P(()=>this._totalChats());selectedChat=P(()=>this._selectedChat());snackBar=l(we);languageService=l(j);loadChatsWithCursor(t,e,i,r="conversation"){if(this._loading())return;this._loading.set(!0);let a=!e||e==="";this.chatService.getChatsWithCursor(t,e,i,r).subscribe({next:o=>{a?this._chats.set(o.data):this._chats.update(s=>[...s,...o.data]),this._hasMore.set(o.pagination.hasMore),this._nextCursor.set(o.pagination.nextCursor??""),this._limit.set(o.pagination.limit),this._loading.set(!1)},error:()=>this._loading.set(!1)})}loadNextPage(t){if(this._loading()||!this._hasMore())return;let e=this._nextCursor(),i=this._limit()||15;this.loadChatsWithCursor(t,e,i)}deleteChat(t){this.chatService.deleteChat(t).subscribe({next:e=>{this._chats.update(i=>i.filter(r=>r.id!==t)),this._totalChats.update(i=>Math.max(0,i-1)),this.snackBar.show(this.languageService.translate("CHAT_DELETED"),"Ok")},error:e=>{this.snackBar.show("Error al intentar eliminar el chat desde el Store:","Ok")}})}selectChat(t){this._selectedChat.set(t)}addChat(t){this._chats.update(e=>[t,...e]),this._totalChats.update(e=>e+1),this.selectChat({creatorId:t.creatorId,id:t.id,type:t.type,visibility:t.visibility,status:t.status,title:t.title})}resetStore(){this._chats.set([]),this._loading.set(!1),this._totalChats.set(0),this._hasMore.set(!1),this._nextCursor.set("")}static \u0275fac=function(e){return new(e||n)(ki(ge))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var rt=class n{_chatMode=y("EPHEMERAL");currentMode=this._chatMode.asReadonly();isEphemeral=P(()=>this._chatMode()==="EPHEMERAL");isInterview=P(()=>this._chatMode()==="INTERVIEW");IsConersation=P(()=>this._chatMode()==="CONVERSATION");languageService=l(j);modeTitle=P(()=>{switch(this._chatMode()){case"INTERVIEW":return this.languageService.translate("INTERVIEW_CONVERSATION");case"EPHEMERAL":return this.languageService.translate("EPHEMERAL_CONVERSATION");case"CONVERSATION":return this.languageService.translate("PERSISTENT_CHAT");default:return""}});setMode(t){this._chatMode.set(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var Me=class n{userService=l(Ga);authService=l(ge);injector=l(Z);_isLoading=y(!1);isLoading=this._isLoading.asReadonly();_userSyncData=y(null);userSyncData=P(()=>this._userSyncData());isVerified=P(()=>this._userSyncData()?.user.status.toUpperCase()==="VERIFIED");initSync(){ie(this.injector,()=>{ap(this.authService.user).subscribe(t=>{if(!t){this.clearUserData();return}this.userService.authUser().subscribe({next:e=>{this._userSyncData.set(e)},error:e=>console.error("Error en Store Sync:",e)})})})}clearUserData(){this._userSyncData.set(null)}getUserName(){let t=this.userSyncData()?.user;return t?`${t.name??""}`.trim():""}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var kC=["chatContainer"],IC=(n,t)=>t.id;function EC(n,t){n&1&&(u(0,"div",6),x(1,"mat-spinner",11),h())}function CC(n,t){n&1&&(u(0,"div",13)(1,"span",17),p(2,"smart_toy"),h()())}function xC(n,t){if(n&1){let e=H();u(0,"div",16)(1,"button",18),w("click",function(){N(e);let r=b().$implicit,a=b();return L(a.copyText(r.text))}),u(2,"span",17),p(3,"content_copy"),h()(),u(4,"button",18),w("click",function(){N(e);let r=b().$implicit,a=b();return L(a.onSpeechControl(r.text))}),u(5,"span",17),p(6),h()()()}if(n&2){let e=b(2);m(6),T(" ",e.speechService.isPlaying()?"stop":"volume_up"," ")}}function SC(n,t){if(n&1&&(u(0,"div",12),I(1,CC,3,0,"div",13),u(2,"div",14),x(3,"div",15),Qu(4,"markdown"),I(5,xC,7,1,"div",16),h()()),n&2){let e=t.$implicit;z("user-row",e.role==="user")("bot-row",e.role==="bot"),m(),E(e.role==="bot"?1:-1),m(2),M("innerHTML",Ju(4,7,e.text),Nu),m(2),E(e.role==="bot"?5:-1)}}function TC(n,t){if(n&1&&(u(0,"div",8)(1,"div",19)(2,"span",17),p(3,"smart_toy"),h()(),u(4,"div",20)(5,"div",21)(6,"div",22),x(7,"mat-spinner",23),h(),u(8,"span",24),p(9),h()()()()),n&2){let e=b();m(9),T(" ",e.languageService.translate("THINKING"),"... ")}}var Os=class n{messages=y([]);hasMessages=P(()=>this.messages().length>0);speechService=l(ys);chatContainer=Ri("chatContainer");chatModeService=l(rt);isLoading=y(!1);messageStore=l(Yt);chatViewService=l(Ge);messageData=P(()=>this.messageStore.messages());firstMessage=Ai();snackBarService=l(we);completionService=l(ws);configService=l(bt);chatStore=l(Ke);authUserStore=l(Me);languageService=l(j);location=l(wn);lastTwoMessages=P(()=>this.messages().slice(-2));lastTwoMessagesString=P(()=>{let t=this.lastTwoMessages();return t.length===0?"":t.map(i=>`${i.role==="user"?"User":"Bot"}: ${i.text}`).join(`
`)});constructor(){Le(()=>{this.loadConversation()}),Le(()=>{let t=this.firstMessage(),e=this.chatViewService.view();t?.isFirst&&e==="newChat"&&he(()=>{this.ask(t.text)})}),Le(()=>{this.messages(),this.scrollToBottom()})}ask(t){let e=this.messages().length===0,i=`${this.lastTwoMessagesString().trim()}`,r={provider:this.configService.model().provider??"google",content:t,system:!0,language:this.configService.recognitionLang(),context:i,model:this.configService.model().model,chatId:this.chatStore.selectedChat()?.id,userId:this.authUserStore.userSyncData()?.user.id,isFirst:e};this.isLoading.set(!0),this.addMessage("user",t,crypto.randomUUID()),this.completionService.generateCompletion(r,this.chatModeService.currentMode()).subscribe({next:a=>{e&&a.type!=="EPHEMERAL"&&(this.chatStore.addChat(a.result),this.location.go(`/chat/${a.result.id}`)),this.processCompletionResponse(a),this.isLoading.set(!1)},error:a=>{let o=a.error;a.status==429?this.addMessage("bot",`${this.languageService.translate("TOO_MANY_REQUEST")}. ${this.languageService.translate("PLEASE_TRY_AGAIN")}: ${o.resetTime.toFixed(1)} ${this.languageService.translate("MINUTES")}.`,crypto.randomUUID()):this.addMessage("bot",this.languageService.translate("CHAT_RESPONSE_ERROR"),crypto.randomUUID()),this.isLoading.set(!1)}})}extractMessageFromResponse(t){switch(t.type){case"EPHEMERAL":return t.result;case"CONVERSATION":return typeof t.result=="string"?t.result:t.result?.context??"";case"INTERVIEW":return t.reply.content??"";default:return""}}processCompletionResponse(t){let e=this.extractMessageFromResponse(t);e&&(this.addMessage("bot",e,crypto.randomUUID()),this.onPlay(e))}addMessage(t,e,i){this.messages.update(r=>r.some(a=>a.id===i)?r:[...r,{id:i,role:t,text:e}])}loadConversation(){if(this.messageData().length===0){this.messages.set([]);return}let t=this.messageData().map(e=>({id:e.id,role:e.senderRole.toLocaleLowerCase(),text:e.content}));this.messages.set(t)}scrollToBottom(){let t=this.chatContainer()?.nativeElement;t&&requestAnimationFrame(()=>{t.scrollTo({top:t.scrollHeight,behavior:"smooth"})})}onPlay(t){this.configService.isTextToSpeechActive()&&(this.speechService.stop(),this.speechService.play(t,this.configService.recognitionLang()))}sendPrompt(t){this.ask(t)}copyText(t){navigator.clipboard.writeText(t),this.snackBarService.show(this.languageService.translate("COPIED_TO_CLIPBOARD"),"Ok")}onSpeechControl(t){this.speechService.isPlaying()?this.speechService.stop():this.speechService.play(t,this.configService.recognitionLang())}getChatTitle(){let t=this.chatStore.selectedChat()?.title,e=this.chatModeService.modeTitle();return t?`${e}: ${t}`:e}sendMessage(t){t&&(this.messages.update(e=>[...e,{id:crypto.randomUUID(),role:"user",text:t}]),setTimeout(()=>{this.messages.update(e=>[...e,{id:crypto.randomUUID(),role:"bot",text:"Recibido: "+t}])},600))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-conversation"]],viewQuery:function(e,i){e&1&&Ci(i.chatContainer,kC,5),e&2&&xi()},inputs:{firstMessage:[1,"firstMessage"]},decls:14,vars:3,consts:[["chatContainer",""],[1,"chat-container"],[1,"chat-header"],[1,"bot-info"],[1,"status-dot"],[1,"chat-messages"],[1,"spinner-container"],[1,"message-row",3,"user-row","bot-row"],[1,"message-row","bot-row",2,"display","flex","justify-content","flex-start","width","100%"],[1,"chat-footer"],[3,"onSendText"],["diameter","50",1,"spinner-indigo"],[1,"message-row"],[1,"avatar"],[1,"message-content"],[1,"bubble","markdown-body","prose","prose-sm","max-w-none",3,"innerHTML"],[1,"message-actions"],[1,"material-icons"],[1,"action-btn",3,"click"],[1,"avatar",2,"margin-right","8px","display","flex","align-items","center"],[1,"message-content",2,"display","flex","flex-direction","column","align-items","flex-start","max-width","80%"],[1,"bubble",2,"display","inline-flex","align-items","center","gap","10px","padding","10px 14px","border-radius","12px","width","max-content"],[2,"display","flex","align-items","center","justify-content","center","width","20px","height","20px"],["diameter","20",1,"spinner-indigo"],[2,"font-size","0.875rem","color","#6b7280","font-weight","500","line-height","1"]],template:function(e,i){e&1&&(u(0,"div",1)(1,"header",2)(2,"div",3),x(3,"div",4),u(4,"span"),p(5),h()()(),u(6,"main",5,0),I(8,EC,2,0,"div",6),vn(9,SC,6,9,"div",7,IC),I(11,TC,10,1,"div",8),h(),u(12,"footer",9)(13,"app-chat-input-component",10),w("onSendText",function(a){return i.sendPrompt(a)}),h()()()),e&2&&(m(5),k(i.getChatTitle()),m(3),E(i.messageStore.isLoading()?8:-1),m(),bn(i.messages()),m(2),E(i.isLoading()?11:-1))},dependencies:[La,Cr,Th,Bt,Ts],styles:['@charset "UTF-8";[_ngcontent-%COMP%]:root{--primary-color: #4f46e5;--bg-main: #ffffff;--bg-chat: #f9fafb;--text-dark: #111827;--text-muted: #6b7280;--user-bubble-bg: #4f46e5;--border-color: #e5e7eb}.chat-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;background:#fff!important;font-family:Inter,sans-serif}.chat-header[_ngcontent-%COMP%]{padding:8px 10px 15px;border-bottom:1px solid var(--border-color);background:#fff}.bot-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-weight:600;color:var(--text-dark)}.status-dot[_ngcontent-%COMP%]{width:8px;height:8px;background:#10b981;border-radius:50%}.chat-messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:24px 10px 120px;padding-left:0!important;display:flex;flex-direction:column;gap:24px}.message-row[_ngcontent-%COMP%]{display:flex;gap:12px;width:100%}.message-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:min(700px,85%)}.user-row[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{align-items:flex-end}.user-row[_ngcontent-%COMP%]{align-self:flex-end;flex-direction:row-reverse;padding-right:15px}.bubble[_ngcontent-%COMP%]{overflow-wrap:break-word;word-break:break-word!important;white-space:pre-wrap!important}.user-row[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]{background:var(--user-bubble-bg);color:#000;padding:12px 18px;border-radius:20px 20px 4px;box-shadow:0 4px 12px #4f46e533;font-size:14px;line-height:1.5}.bot-row[_ngcontent-%COMP%]{align-self:flex-start;width:100%}.bot-row[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:36px;height:36px;background:#fff;border:1px solid var(--border-color);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--primary-color)}.bot-row[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]{background:transparent;color:var(--text-dark);padding:8px 0;font-size:15px;line-height:1.7;width:100%;max-width:100%;display:block}.message-actions[_ngcontent-%COMP%]{display:flex;gap:4px;margin-top:4px;opacity:0;transition:opacity .2s ease}.message-row[_ngcontent-%COMP%]:hover   .message-actions[_ngcontent-%COMP%]{opacity:1}.action-btn[_ngcontent-%COMP%]{background:transparent;border:none;padding:6px;cursor:pointer;border-radius:6px;color:var(--text-muted);display:flex;align-items:center;transition:all .2s}.action-btn[_ngcontent-%COMP%]:hover{background:#f3f4f6;color:var(--primary-color)}.action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:18px}.chat-footer[_ngcontent-%COMP%]{flex-shrink:0;background:#fff;padding:16px;position:sticky;bottom:0;z-index:10}[_nghost-%COMP%]     .spinner-indigo circle{stroke:#4f46e5!important}.bubble[_ngcontent-%COMP%]     p{margin:0!important;padding:0!important;line-height:1.5!important;display:inline}.bubble[_ngcontent-%COMP%]     p+p{display:block;margin-top:8px!important}.bubble[_ngcontent-%COMP%]     ul, .bubble[_ngcontent-%COMP%]     ol{margin-top:6px!important;margin-bottom:0!important;padding-left:20px!important}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}@media(max-width:640px){.chat-messages[_ngcontent-%COMP%]{padding:16px 16px 100px 0!important}.message-content[_ngcontent-%COMP%]{max-width:80%!important}.message-row[_ngcontent-%COMP%]{gap:8px!important}.bot-row[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]{padding:6px 0!important;font-size:14px!important}}']})};var at=class n{breakpointObserver=l(dh);drawerInstance;isMobile=op(this.breakpointObserver.observe(fh.Handset).pipe(ne(t=>t.matches)),{initialValue:!1});isExpanded=y(!0);drawerMode=P(()=>this.isMobile()?"over":"side");setDrawer(t){this.drawerInstance=t}toggle(){this.drawerInstance?.toggle()}toggleMenu(){this.isExpanded.update(t=>!t)}closeMenu(){this.isExpanded.set(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var vi=class n{messageStore=l(Yt);chatStore=l(Ke);chatNavDrawerService=l(at);chatViewService=l(Ge);chatModeService=l(rt);selectChat(t){this.chatViewService.setView("oldChat"),this.chatStore.selectChat(t),this.messageStore.loadMessages(t.id),this.chatModeService.setMode(t.type?.toUpperCase()??"NEW"),this.chatNavDrawerService.isMobile()&&this.chatNavDrawerService.toggle()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};function AC(n,t){if(n&1){let e=H();u(0,"div",3)(1,"mat-chip-listbox",4),w("change",function(r){N(e);let a=b(2);return L(a.onModeChange(r.value))}),u(2,"mat-chip-option",5)(3,"mat-icon",6),p(4,"auto_delete"),h(),p(5),h(),u(6,"mat-chip-option",7)(7,"mat-icon",6),p(8,"list_alt_add"),h(),p(9),h(),u(10,"mat-chip-option",8)(11,"mat-icon",6),p(12,"save"),h(),p(13),h()()()}if(n&2){let e=b(2);m(),M("value",e.chatMode()),m(4),T(" ",e.languageService.translate("EPHEMERAL")," "),m(4),T(" ",e.languageService.translate("INTERVIEWS")," "),m(4),T(" ",e.languageService.translate("PERSISTENT_CHAT")," ")}}function RC(n,t){if(n&1){let e=H();u(0,"div",0)(1,"h1"),p(2),h(),u(3,"app-chat-input-component",2),w("onSendText",function(r){N(e);let a=b();return L(a.sendFistText(r))}),h(),I(4,AC,14,4,"div",3),h()}if(n&2){let e,i=b();m(2),k(i.displayedText()),m(2),E(i.authService.isLoggedIn()&&((e=i.authService.user())!=null&&e.emailVerified)?4:-1)}}function OC(n,t){if(n&1&&x(0,"app-conversation",1),n&2){let e=b();M("firstMessage",e.message())}}var Ca=class n{authService=l(ge);chatService=l(Sr);displayedText=y("");speed=y(10);index=y(0);languageService=l(j);chatModeService=l(rt);chatMode=this.chatModeService.currentMode;chatViewService=l(Ge);modelService=l(Ah);messageStore=l(Yt);chatStore=l(Ke);chatNavDrawerService=l(at);selectChatService=l(vi);configService=l(bt);selectedModel=this.configService.model;text=P(()=>this.languageService.translate("INTRO"));message=y({role:"user",text:"",isFirst:!1});route=l(xt);snackbarService=l(we);ngOnInit(){this.setChatByParam(),this.setModelByParam(),this.chatViewService.view()&&this.restartStreaming()}restartStreaming(){this.startStreaming(),this.languageService.onLanguageChanged=()=>{this.displayedText.set(""),this.index.set(0),this.startStreaming()}}startStreaming(){let t=0,e=i=>{t||(t=i);let r=this.text();i-t>=this.speed()&&(this.displayedText.update(o=>o+r.charAt(this.index())),this.index.update(o=>o+1),t=i),this.index()<r.length&&requestAnimationFrame(e)};requestAnimationFrame(e)}sendFistText(t){this.messageStore.resetMessages(),this.chatStore.selectChat(null),this.message.set({role:"user",text:t,isFirst:!0})}onModeChange(t){let e=t||"EPHEMERAL";this.chatModeService.setMode(e)}getChatById(t){this.chatService.getChat(t).subscribe({next:e=>{this.selectChatService.selectChat(e)},error:e=>{console.error("Error al cargar el chat:",e),this.snackbarService.show(this.languageService.translate("NOT_AVAILABLE"),"ok")}})}getModelById(t){this.modelService.getModelById(t).subscribe({next:e=>{this.selectedModel.set(e)},error:e=>{console.error("Error al cargar el chat:",e)}})}setModelByParam(){this.route.queryParams.subscribe(t=>{let e=t.model||"default";e!=="default"&&this.getModelById(e)})}setChatByParam(){this.route.paramMap.subscribe(t=>{let e=t.get("id");if(!e)return;let i=this.chatStore.chats().find(r=>r.id===e);if(i){this.chatStore.selectChat(i);return}this.getChatById(e)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-chat-container"]],decls:2,vars:1,consts:[[1,"mat-font",2,"display","flex","flex-direction","column","justify-content","flex-start","align-items","center","min-height","50vh","text-align","center","padding-top","15vh"],[3,"firstMessage"],[2,"width","100%","max-width","800px",3,"onSendText"],[1,"container-chips-responsive"],[3,"change","value"],["value","EPHEMERAL",2,"margin-bottom","15px !important"],["matChipAvatar",""],["value","INTERVIEW",2,"margin-bottom","15px !important"],["value","CONVERSATION",2,"margin-bottom","15px !important"]],template:function(e,i){e&1&&I(0,RC,5,2,"div",0)(1,OC,1,1,"app-conversation",1),e&2&&E(i.chatViewService.view()==="startChat"?0:1)},dependencies:[Hd,$d,ae,Tg,Cr,Os],styles:['@charset "UTF-8";.container-chips-responsive[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;align-items:center!important;width:100%!important;padding:10px 0!important;box-sizing:border-box}mat-chip-option[_ngcontent-%COMP%]{display:inline-flex!important;width:auto!important;margin:0 10px 15px 0!important;cursor:pointer!important;--mdc-chip-container-height: 48px}[_nghost-%COMP%]     .mat-mdc-chip-option .mdc-evolution-chip__action--primary{width:100%!important;height:100%!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;padding:0 16px!important;flex-grow:1!important}[_nghost-%COMP%]     .mdc-evolution-chip__graphic{flex:0 0 auto!important;margin-right:10px!important}[_nghost-%COMP%]     .mdc-evolution-chip__text-label{pointer-events:none!important;flex:1 1 auto!important;text-align:left!important;margin-right:auto!important}[_nghost-%COMP%]     .mdc-evolution-chip__cell--primary{width:100%!important;display:flex!important;align-items:center!important}@media(max-width:769px){mat-chip-option[_ngcontent-%COMP%]{display:flex!important;width:85%!important;height:35px!important;margin:0 auto 15px!important}}']})};var Ds=class n{languageService=l(j);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-information-container"]],decls:23,vars:11,consts:[[1,"container"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"h2"),p(2),fe(),oe(3,"p"),p(4),fe(),oe(5,"h2"),p(6),fe(),oe(7,"h3"),p(8),fe(),oe(9,"p"),p(10),fe(),oe(11,"h3"),p(12),fe(),oe(13,"p"),p(14),fe(),oe(15,"h3"),p(16),fe(),oe(17,"p"),p(18),fe(),oe(19,"h2"),p(20),fe(),oe(21,"p"),p(22),fe()()),e&2&&(m(2),k(i.languageService.translate("ABOUT_APP_TITLE")),m(2),T(" ",i.languageService.translate("ABOUT_APP_DESCRIPTION")," "),m(2),k(i.languageService.translate("AVAILABLE_MODES_TITLE")),m(2),k(i.languageService.translate("EPHEMERAL_MODE_TITLE")),m(2),T(" ",i.languageService.translate("EPHEMERAL_MODE_DESCRIPTION")," "),m(2),k(i.languageService.translate("CONVERSATIONAL_MODE_TITLE")),m(2),T(" ",i.languageService.translate("CONVERSATIONAL_MODE_DESCRIPTION")," "),m(2),k(i.languageService.translate("INTERVIEW_MODE_TITLE")),m(2),T(" ",i.languageService.translate("INTERVIEW_MODE_DESCRIPTION")," "),m(2),k(i.languageService.translate("DATA_TITLE")),m(2),T(" ",i.languageService.translate("DATA_DESCRIPTION")," "))},styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:5px 20px 80px;box-sizing:border-box}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:left;margin-top:10px;margin-bottom:10px}']})};var r_=(n,t)=>{let e=l(Me),i=l(nt);return e.userSyncData()?.user.role==="admin"?!0:(i.navigate(["/"]),!1)};var a_=[{path:"chat/:id",component:Ca},{path:"chat",component:Ca},{path:"information",component:Ds},{path:"admin",canActivate:[r_],children:[{path:"users",loadComponent:()=>import("./chunk-AHWOLYSI.js").then(n=>n.UserTable)},{path:"models",loadComponent:()=>import("./chunk-SJ2HZYR4.js").then(n=>n.ModelTable)},{path:"",redirectTo:"models",pathMatch:"full"}]},{path:"**",redirectTo:"chat"}];var o_=(n,t)=>{let e=l(fn),i=yt.apiUrl;return[{path:"/completions/google",methods:["GET"]},{path:"/completions/chat",methods:["POST"]},{path:"/completions/interview",methods:["POST"]},{path:"/users/auth",methods:["POST"]},{path:"/users",methods:["GET","DELETE","PUT"]},{path:"/chats",methods:["GET","DELETE"]},{path:"/messages",methods:["GET"]},{path:"/models",methods:["GET","PUT","POST","DELETE"]}].some(o=>{let s=n.url.includes(i+o.path),c=o.methods.includes(n.method.toUpperCase());return s&&c})?sg(e).pipe(ke(1),me(o=>{if(o){let s=n.clone({setHeaders:{Authorization:`Bearer ${o}`}});return t(s)}return t(n)})):t(n)};var s_={providers:[rh(ah([o_])),dp(()=>up(yt.firebaseConfig)),ag(()=>dg()),Du(),Bc(a_,jc())]};var lu=["*"],DC=["content"],MC=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],PC=["mat-drawer","mat-drawer-content","*"];function NC(n,t){if(n&1){let e=H();u(0,"div",1),w("click",function(){N(e);let r=b();return L(r._onBackdropClicked())}),h()}if(n&2){let e=b();z("mat-drawer-shown",e._isShowingBackdrop())}}function LC(n,t){n&1&&(u(0,"mat-drawer-content"),K(1,2),h())}var FC=new V("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),c_=new V("MAT_DRAWER_CONTAINER"),Ms=(()=>{class n extends Zn{_platform=l(Ut);_changeDetectorRef=l(Oe);_container=l(uu);constructor(){let e=l(re),i=l(bh),r=l(pe);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Dr("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),z("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Qe([{provide:Zn,useExisting:n}]),Re],ngContentSelectors:lu,decls:1,vars:0,template:function(i,r){i&1&&(ve(),K(0))},encapsulation:2,changeDetection:0})}return n})(),du=(()=>{class n{_elementRef=l(re);_focusTrapFactory=l(Ua);_focusMonitor=l(In);_platform=l(Ut);_ngZone=l(pe);_renderer=l(Ft);_interactivityChecker=l(Fa);_doc=l(Xt);_container=l(c_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Je(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Je(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Je(e))}_opened=y(!1);_openedVia=null;_animationStarted=new te;_animationEnd=new te;openedChange=new ue(!0);_openedStream=this.openedChange.pipe(je(e=>e),ne(()=>{}));openedStart=this._animationStarted.pipe(je(()=>this.opened),sc(void 0));_closedStream=this.openedChange.pipe(je(e=>!e),ne(()=>{}));closedStart=this._animationStarted.pipe(je(()=>!this.opened),sc(void 0));_destroyed=new te;onPositionChanged=new ue;_content;_modeChanged=new te;_injector=l(Z);_changeDetectorRef=l(Oe);constructor(){this.openedChange.pipe(_e(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Di(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),o=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Lt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(ke(1)).subscribe(o=>a(o?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&st(DC,5),i&2){let a;$(a=W())&&(r._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(Y("align",null)("tabIndex",r.mode!=="side"?"-1":null),Dr("visibility",!r._container&&!r.opened?"hidden":null),z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:lu,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ve(),u(0,"div",1,0),K(2),h())},dependencies:[Zn],encapsulation:2,changeDetection:0})}return n})(),uu=(()=>{class n{_dir=l(Xn,{optional:!0});_element=l(re);_ngZone=l(pe);_changeDetectorRef=l(Oe);_animationDisabled=ct();_transitionsEnabled=!1;_allDrawers;_drawers=new Oa;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Je(e)}_autosize=l(FC);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Je(e)}_backdropOverride=null;backdropClick=new ue;_start=null;_end=null;_left=null;_right=null;_destroyed=new te;_doCheckSubject=new te;_contentMargins={left:null,right:null};_contentMarginChanges=new te;get scrollable(){return this._userContent||this._content}_injector=l(Z);constructor(){let e=l(Ut),i=l(yh);this._dir?.change.pipe(_e(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(_e(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ze(this._allDrawers),_e(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ze(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(xu(10),_e(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(_e(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(_e(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(_e(this._drawers.changes)).subscribe(()=>{Lt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(_e(Jt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,a){if(i&1&&et(a,Ms,5)(a,du,5),i&2){let o;$(o=W())&&(r._content=o.first),$(o=W())&&(r._allDrawers=o)}},viewQuery:function(i,r){if(i&1&&st(Ms,5),i&2){let a;$(a=W())&&(r._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Qe([{provide:c_,useExisting:n}])],ngContentSelectors:PC,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ve(MC),I(0,NC,1,2,"div",0),K(1),K(2,1),I(3,LC,2,0,"mat-drawer-content")),i&2&&(E(r.hasBackdrop?0:-1),m(3),E(r._content?-1:3))},dependencies:[Ms],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),l_=(()=>{class n extends Ms{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Qe([{provide:Zn,useExisting:n}]),Re],ngContentSelectors:lu,decls:1,vars:0,template:function(i,r){i&1&&(ve(),K(0))},encapsulation:2,changeDetection:0})}return n})();var Ps=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({imports:[mc,He,mc]})}return n})();var VC=["*",[["mat-toolbar-row"]]],zC=["*","mat-toolbar-row"],BC=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),d_=(()=>{class n{_elementRef=l(re);_platform=l(Ut);_document=l(Xt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-toolbar"]],contentQueries:function(i,r,a){if(i&1&&et(a,BC,5),i&2){let o;$(o=W())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Si(r.color?"mat-"+r.color:""),z("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:zC,decls:2,vars:0,template:function(i,r){i&1&&(ve(VC),K(0),K(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ns=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({imports:[He]})}return n})();var u_=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=Je(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Je(e)}_inset=!1;static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(Y("aria-orientation",r.vertical?"vertical":"horizontal"),z("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ls=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({imports:[He]})}return n})();var jC=["*"],HC=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,$C=["unscopedContent"],WC=["text"],GC=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],qC=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var KC=new V("ListOption"),mu=(()=>{class n{_elementRef=l(re);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),YC=(()=>{class n{_elementRef=l(re);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),pu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),h_=(()=>{class n{_listOption=l(KC,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,hostVars:4,hostBindings:function(i,r){i&2&&z("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return n})(),QC=(()=>{class n extends h_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275dir=ee({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Re]})}return n})(),bi=(()=>{class n extends h_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275dir=ee({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Re]})}return n})(),JC=new V("MAT_LIST_CONFIG"),hu=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Je(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Je(e))}_disabled=y(!1);_defaultOptions=l(JC,{optional:!0});static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,hostVars:1,hostBindings:function(i,r){i&2&&Y("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),XC=(()=>{class n{_elementRef=l(re);_ngZone=l(pe);_listBase=l(hu,{optional:!0});_platform=l(Ut);_hostElement;_isButtonElement;_noopAnimations=ct();_avatars;_icons;set lines(e){this._explicitLines=zi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Je(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Je(e))}_disabled=y(!1);_subscriptions=new xa;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(Zt).load(en);let e=l(Va,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new gh(this,this._ngZone,this._hostElement,this._platform,l(Z)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Jt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",a),r.classList.toggle("mdc-list-item__secondary-text",!a)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,contentQueries:function(i,r,a){if(i&1&&et(a,QC,4)(a,bi,4),i&2){let o;$(o=W())&&(r._avatars=o),$(o=W())&&(r._icons=o)}},hostVars:4,hostBindings:function(i,r){i&2&&(Y("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),z("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var zn=(()=>{class n extends XC{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Je(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,a){if(i&1&&et(a,YC,5)(a,mu,5)(a,pu,5),i&2){let o;$(o=W())&&(r._lines=o),$(o=W())&&(r._titles=o),$(o=W())&&(r._meta=o)}},viewQuery:function(i,r){if(i&1&&st($C,5)(WC,5),i&2){let a;$(a=W())&&(r._unscopedContent=a.first),$(a=W())&&(r._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(Y("aria-current",r._getAriaCurrent()),z("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Re],ngContentSelectors:qC,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(ve(GC),K(0),u(1,"span",1),K(2,1),K(3,2),u(4,"span",2,0),w("cdkObserveContent",function(){return r._updateItemLines(!0)}),K(6,3),h()(),K(7,4),K(8,5),x(9,"div",3))},dependencies:[uh],encapsulation:2,changeDetection:0})}return n})();var m_=(()=>{class n extends hu{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ae(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Qe([{provide:hu,useExisting:n}]),Re],ngContentSelectors:jC,decls:1,vars:0,template:function(i,r){i&1&&(ve(),K(0))},styles:[HC],encapsulation:2,changeDetection:0})}return n})();var Fs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({imports:[hh,$i,Mh,He,Ls]})}return n})();var Bn=class n{authModeState=y("LOGIN");authMode=this.authModeState.asReadonly();setAuthMode(t){this.authModeState.set(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};var jn=class n{STORAGE_PREFIX="shapper_cooldown_";timers=y({});ngZone=l(pe);constructor(){this.restoreExistingTimers()}ngOnDestroy(){Object.values(this.timers()).forEach(t=>{t.intervalId&&clearInterval(t.intervalId)})}start(t,e=10){let i=Date.now()+e*60*1e3;localStorage.setItem(`${this.STORAGE_PREFIX}${t}`,i.toString()),this.runTimerLoop(t,i)}clear(t){localStorage.removeItem(`${this.STORAGE_PREFIX}${t}`);let e=v({},this.timers());e[t]&&(e[t].intervalId&&clearInterval(e[t].intervalId),delete e[t],this.timers.set(e))}isActive(t){return(this.timers()[t]?.timeRemaining??0)>0}getLabel(t,e="10:00"){let i=this.timers()[t]?.timeRemaining??0;if(i<=0)return e;let r=Math.floor(i/6e4),a=Math.floor(i%6e4/1e3);return`${r}:${a.toString().padStart(2,"0")}`}restoreExistingTimers(){for(let t=0;t<localStorage.length;t++){let e=localStorage.key(t);if(e&&e.startsWith(this.STORAGE_PREFIX)){let i=e.replace(this.STORAGE_PREFIX,""),r=localStorage.getItem(e);if(r){let a=parseInt(r,10);a>Date.now()?this.runTimerLoop(i,a):localStorage.removeItem(e)}}}}runTimerLoop(t,e){let i=v({},this.timers());i[t]?.intervalId&&clearInterval(i[t].intervalId);let r=e-Date.now();if(r<=0){this.clear(t);return}this.timers.update(a=>B(v({},a),{[t]:B(v({},a[t]),{targetTime:e,timeRemaining:r})})),this.ngZone.runOutsideAngular(()=>{let o=setInterval(()=>{let s=e-Date.now();if(s<=0){this.ngZone.run(()=>this.clear(t));return}this.ngZone.run(()=>{this.timers.update(c=>B(v({},c),{[t]:B(v({},c[t]),{targetTime:e,timeRemaining:s})}))})},1e3);this.ngZone.run(()=>{this.timers.update(s=>B(v({},s),{[t]:B(v({},s[t]),{intervalId:o})}))})})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})};function tx(n,t){if(n&1&&(u(0,"mat-error"),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("EMAIL_REQUIRED"))}}function nx(n,t){if(n&1&&(u(0,"mat-error"),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("EMAIL_INVALID"))}}function ix(n,t){if(n&1&&(u(0,"div",13)(1,"span"),p(2),h(),x(3,"mat-spinner",14),h()),n&2){let e=b(2);m(2),k(e.languageService.translate("SENDING"))}}function rx(n,t){if(n&1&&p(0),n&2){let e=b(2);T(" ",e.languageService.translate("SEND_LINK")," ")}}function ax(n,t){if(n&1){let e=H();u(0,"div",4)(1,"div",5)(2,"mat-icon",6),p(3,"mail"),h()(),u(4,"h2",7),p(5),h(),u(6,"p",8),p(7),h()(),u(8,"form",9),w("ngSubmit",function(){N(e);let r=b();return L(r.sendForgotPassword())}),u(9,"mat-form-field",10)(10,"mat-label"),p(11),h(),x(12,"input",11),I(13,tx,2,1,"mat-error"),I(14,nx,2,1,"mat-error"),h(),u(15,"button",12),I(16,ix,4,1,"div",13)(17,rx,1,1),h()()}if(n&2){let e=b(),i=Ku(0);m(5),k(e.languageService.translate("RECOVER_ACCOUNT")),m(2),k(e.languageService.translate("ENTER_EMAIL")),m(),M("formGroup",e.form),m(3),k(e.languageService.translate("EMAIL")),m(2),E(i!=null&&i.hasError("required")?13:-1),m(),E(i!=null&&i.hasError("email")?14:-1),m(),M("disabled",!e.form.valid||e.isLoading()),m(),E(e.isLoading()?16:17)}}function ox(n,t){if(n&1&&(u(0,"div",4)(1,"div",15)(2,"mat-icon",6),p(3,"mark_email_read"),h()(),u(4,"h2",7),p(5),h(),u(6,"p",8),p(7),h()(),u(8,"div",16)(9,"div",17)(10,"span"),p(11),h()(),u(12,"div",18)(13,"span",19),p(14),h()(),u(15,"button",20),p(16),h()()),n&2){let e=b();m(5),k(e.languageService.translate("RECOVERY_EMAIL_SENT")),m(2),T(" ",e.languageService.translate("CHECK_INBOX")," "),m(4),T(" ",e.languageService.translate("CAN_REQUEST_ANOTHER")," "),m(3),T(" ",e.countdown()," "),m(2),k(e.languageService.translate("UNDERSTOOD"))}}var Hn=class n{authService=l(ge);snackBarService=l(we);dialogRef=l(Ve);countdownService=l(jn);dialog=l(be);isLoading=y(!1);TIMER_KEY="forgot";COOLDOWN_MINUTES=10;fb=l(Ui);form=this.createForm();languageService=l(j);createForm(){return this.fb.group({email:["",[xe.required,xe.email]]})}step=P(()=>this.countdownService.isActive(this.TIMER_KEY)?"sent":"initial");countdown=P(()=>this.countdownService.getLabel(this.TIMER_KEY,"10:00"));sendForgotPassword(){if(this.form.valid){let{email:t}=this.form.value;this.onForgotPassword(t)}else this.form.markAllAsTouched()}onForgotPassword(t){this.isLoading.set(!0),this.authService.sendPasswordResetEmail(t).subscribe({next:()=>{this.isLoading.set(!1),this.countdownService.start(this.TIMER_KEY,this.COOLDOWN_MINUTES),this.snackBarService.show(this.languageService.translate("RECOVERY_EMAIL_SENT"),"Ok")},error:e=>{this.isLoading.set(!1),this.snackBarService.show(this.languageService.translate("LINK_SEND_ERROR"),"Ok")}})}close(){this.form.reset(),this.dialogRef.close(),this.authService.isLoggedIn()||this.openLogin()}openLogin(){this.dialog.open(Tr,{width:"420px",maxWidth:"95vw",panelClass:"custom-dialog-login-container",disableClose:!1})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-forgot-dialog"]],decls:8,vars:2,consts:[[1,"modal-overlay"],[1,"modal-card"],[1,"modal-close-btn",3,"click"],[1,"modal-body"],[1,"modal-header-content"],[1,"modal-icon-wrapper"],[1,"modal-icon"],[1,"modal-title"],[1,"modal-description"],[1,"modal-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width-field"],["formControlName","email","matInput","","type","email","placeholder","ejemplo@correo.com"],["type","submit",1,"modal-submit-btn",3,"disabled"],[2,"display","flex","align-items","center","justify-content","center","gap","8px"],["diameter","20"],[1,"modal-icon-wrapper","modal-icon-wrapper--success"],[1,"modal-success-countdown-area"],[1,"divider-countdown"],[1,"modal-countdown-box"],[1,"modal-countdown-timer"],["mat-dialog-close","",1,"modal-submit-btn"]],template:function(e,i){e&1&&(Gu(0),u(1,"div",0)(2,"div",1)(3,"button",2),w("click",function(){return i.close()}),p(4,"\xD7"),h(),u(5,"div",3),I(6,ax,18,8)(7,ox,17,5),h()()()),e&2&&(qu(i.form.get("email")),m(6),E(i.step()==="initial"?6:7))},dependencies:[ae,yr,ji,Bi,Hi,Vi,Li,Pi,kn,Ni,Jn,Fi,Gi,Wi,Bt],styles:['@keyframes _ngcontent-%COMP%_modalEntrance{0%{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}.full-width-field[_ngcontent-%COMP%]{width:100%!important}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#0f172a66;display:flex;justify-content:center;align-items:center;z-index:1000;padding:16px;box-sizing:border-box}.modal-card[_ngcontent-%COMP%]{position:relative;background-color:#fff;width:100%;max-width:380px;height:auto;border-radius:16px;border:1px solid #dadce0;box-shadow:0 4px 24px #00000014;display:flex;flex-direction:column;overflow:hidden;animation:_ngcontent-%COMP%_modalEntrance .25s cubic-bezier(.4,0,.2,1) forwards;box-sizing:border-box}.modal-close-btn[_ngcontent-%COMP%]{position:absolute;top:14px;right:14px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:none;background:transparent;color:#70757a;font-size:22px;cursor:pointer;z-index:20;transition:background-color .2s ease}.modal-close-btn[_ngcontent-%COMP%]:hover{background-color:#f3f4f6}.modal-body[_ngcontent-%COMP%]{padding:32px 24px 24px;display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center;width:100%;box-sizing:border-box}.modal-header-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.modal-icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background-color:#f0f4f9;margin-bottom:16px;color:#1a73e8}.modal-icon-wrapper--success[_ngcontent-%COMP%]{background-color:#e6f4ea;color:#137333}.modal-icon[_ngcontent-%COMP%]{font-size:26px!important;width:26px!important;height:26px!important;display:flex;align-items:center;justify-content:center}.modal-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:#1f2937;margin:0 0 10px}.modal-description[_ngcontent-%COMP%]{font-size:14px;color:#70757a;line-height:1.5;margin:0;padding:0 8px}.modal-form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:16px}.modal-success-countdown-area[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;gap:16px}.divider-countdown[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;width:100%;color:#70757a;font-size:13px}.divider-countdown[_ngcontent-%COMP%]:before, .divider-countdown[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:1px solid #dadce0}.divider-countdown[_ngcontent-%COMP%]:before{margin-right:12px}.divider-countdown[_ngcontent-%COMP%]:after{margin-left:12px}.modal-countdown-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.modal-countdown-timer[_ngcontent-%COMP%]{font-family:monospace;font-size:18px;font-weight:600;color:#c5221f;letter-spacing:.1em}.modal-submit-btn[_ngcontent-%COMP%]{width:100%;height:48px;padding:10px 16px;border-radius:14px;font-size:15px;font-weight:500;background:transparent!important;border:1px solid #e0e0e0!important;color:#1f2937;cursor:pointer;transition:background-color .2s ease,transform .1s ease;box-sizing:border-box}.modal-submit-btn[_ngcontent-%COMP%]:hover{background-color:#f3f4f6!important}.modal-submit-btn[_ngcontent-%COMP%]:active{transform:scale(.99)}']})};function sx(n,t){if(n&1&&(u(0,"span"),p(1),h(),x(2,"mat-spinner",17)),n&2){let e=b();m(),k(e.languageService.translate("LOADING"))}}function cx(n,t){if(n&1&&(u(0,"span"),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("SIGNIN_WITH_GOOGLE"))}}function lx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("EMAIL_REQUIRED"))}}function dx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("EMAIL_INVALID"))}}function ux(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("PASSWORD_REQUIRED"))}}function hx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("PASSWORD_LENGTH"))}}function mx(n,t){if(n&1&&(u(0,"div",16)(1,"span"),p(2),h(),x(3,"mat-spinner",17),h()),n&2){let e=b();m(2),T("",e.languageService.translate("LOADING"),"...")}}function px(n,t){if(n&1&&p(0),n&2){let e=b();T(" ",e.languageService.translate("LOGIN")," ")}}var Us=class n{dialogRef=Ai.required();fb=l(Ui);form=this.createForm();dialog=l(be);hidePassword=y(!0);isLoading=y(!1);authService=l(ge);isLoadingWithProvider=y(!1);snackBar=l(we);authModeService=l(Bn);languageService=l(j);createForm(){return this.fb.group({email:["",[xe.required,xe.email]],password:["",[xe.required,xe.minLength(6),xe.maxLength(50)]]})}loginWithGoogle(){this.isLoadingWithProvider.set(!0),this.authService.loginWithProvider().pipe(Ta(()=>this.isLoadingWithProvider.set(!1))).subscribe({next:()=>{this.snackBar.show(`${this.languageService.translate("WELCOME")} ${this.authService.user()?.email}!`,"Ok"),this.close()},error:t=>{this.snackBar.show(this.languageService.translate("ERROR_SIGNIN_MESSAGE"),this.languageService.translate("CLOSE"))}})}onLogin(){if(this.form.invalid)return;this.isLoading.set(!0);let{email:t,password:e}=this.form.value;this.authService.login(t,e).subscribe({next:i=>{this.isLoading.set(!1),this.snackBar.show(`${this.languageService.translate("WELCOME")} ${this.authService.user()?.email}!`,"Ok"),this.close()},error:i=>{this.isLoading.set(!1),i.code==="auth/invalid-credential"?this.snackBar.show(`${this.languageService.translate("INVALID_CREDENTIALS")}`,"Ok"):this.snackBar.show(this.languageService.translate("ERROR_SIGNIN_MESSAGE"),"Ok")}})}togglePassword(t){this.hidePassword.update(e=>!e),t.stopPropagation()}openForgotPasswordDialog(){this.close(),this.dialog.open(Hn,{width:"100%",maxWidth:"380px",disableClose:!0,autoFocus:!1,restoreFocus:!1,enterAnimationDuration:"0ms",exitAnimationDuration:"0ms"})}close(){this.dialog.closeAll(),this.dialogRef().close(),this.authModeService.setAuthMode("LOGIN")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-login"]],inputs:{dialogRef:[1,"dialogRef"]},decls:36,vars:15,consts:[[3,"ngSubmit","formGroup"],[1,"auth-content"],["type","button",1,"auth-btn",3,"click"],[1,"google-content"],["src","google.svg","alt","Google"],["type","button",1,"auth-btn","register",3,"click"],[1,"divider-o"],["appearance","outline",2,"width","100% !important"],[2,"font-family","'Times New Roman', Times, serif"],["formControlName","email","matInput","","type","email","placeholder","ejemplo@correo.com",2,"font-family","'Times New Roman', Times, serif"],[2,"width","100%"],["formControlName","password","matInput","",3,"type"],["matSuffix","",2,"cursor","pointer",3,"click"],[1,"dialog-actions",2,"padding-top","0"],[1,"forgot-password",3,"click"],["mat-flat-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"],[2,"display","flex","align-items","center","justify-content","center","gap","8px"],["diameter","20"]],template:function(e,i){if(e&1&&(u(0,"form",0),w("ngSubmit",function(){return i.onLogin()}),u(1,"mat-dialog-content",1)(2,"button",2),w("click",function(){return i.loginWithGoogle()}),u(3,"div",3),x(4,"img",4),I(5,sx,3,1)(6,cx,2,1,"span"),h()(),u(7,"button",5),w("click",function(){return i.authModeService.setAuthMode("REGISTER")}),u(8,"mat-icon"),p(9,"person_add"),h(),u(10,"span"),p(11),h()(),u(12,"div",6)(13,"span"),p(14),h()(),u(15,"mat-form-field",7)(16,"mat-label",8),p(17),h(),x(18,"input",9),I(19,lx,2,1,"mat-error",10),I(20,dx,2,1,"mat-error",10),h(),u(21,"mat-form-field",7)(22,"mat-label"),p(23),h(),x(24,"input",11),u(25,"mat-icon",12),w("click",function(a){return i.togglePassword(a)}),p(26),h(),I(27,ux,2,1,"mat-error",10),I(28,hx,2,1,"mat-error",10),h()(),u(29,"mat-dialog-actions",13)(30,"div",14),w("click",function(){return i.openForgotPasswordDialog()}),u(31,"span"),p(32),h()(),u(33,"button",15),I(34,mx,4,1,"div",16)(35,px,1,1),h()()()),e&2){let r,a;M("formGroup",i.form),m(5),E(i.isLoadingWithProvider()?5:6),m(6),k(i.languageService.translate("REGISTER")),m(3),k(i.languageService.translate("OR")),m(3),k(i.languageService.translate("EMAIL"));let o=i.form.get("email");m(2),E(o!=null&&o.hasError("required")?19:-1),m(),E(o!=null&&o.hasError("email")?20:-1),m(3),k(i.languageService.translate("PASSWORD")),m(),M("type",i.hidePassword()?"password":"text"),m(2),k(i.hidePassword()?"visibility_off":"visibility"),m(),E((r=i.form.get("password"))!=null&&r.hasError("required")?27:-1),m(),E((a=i.form.get("password"))!=null&&a.hasError("minlength")?28:-1),m(4),k(i.languageService.translate("FORGOT_PASSWORD")),m(),M("disabled",!i.form.valid||i.isLoading()),m(),E(i.isLoading()?34:35)}},dependencies:[Na,Vi,Li,Pi,kn,Ni,Jn,Fi,Ir,kr,wr,tt,Sh,Dh,Hi,Bi,ji,Ba,Gi,Wi,Vt,ae,Ls,Bt],styles:['@charset "UTF-8";.auth-content[_ngcontent-%COMP%]{padding:15px 15px 0}.auth-btn[_ngcontent-%COMP%]{width:100%;font-size:15px;font-weight:500;height:48px;padding:10px 16px;border-radius:14px;background:transparent!important;border:1px solid #e0e0e0!important;margin-bottom:8px}.auth-btn[_ngcontent-%COMP%]:hover{background-color:#f3f4f6!important}.google-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px;width:100%}.google-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;display:block}.dialog-actions[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;gap:12px;padding-bottom:0!important}.divider-o[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;margin:24px 0;color:#70757a;font-size:14px;font-family:Roboto,sans-serif}.divider-o[_ngcontent-%COMP%]:before, .divider-o[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:1px solid #dadce0}.divider-o[_ngcontent-%COMP%]:before{margin-right:16px}.divider-o[_ngcontent-%COMP%]:after{margin-left:16px}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-transition:background-color 9999s ease-out 0s!important;transition:background-color 9999s ease-out 0s!important;-webkit-text-fill-color:#1f2937!important}.submit-btn[_ngcontent-%COMP%]{border-radius:10px!important;height:40px;width:100%}.forgot-password[_ngcontent-%COMP%]{text-align:center}.forgot-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;cursor:pointer;transition:color .2s ease}.forgot-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#2563eb;text-decoration:underline}.register[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;height:48px;border:none;font-size:15px;font-weight:500;cursor:pointer;transition:.2s ease}.register[_ngcontent-%COMP%]:hover{opacity:.92}.register[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}mat-error[_ngcontent-%COMP%]{font-size:12px}']})};var p_=n=>{let t=n.get("password"),e=n.get("confirmPassword");if(!t||!e)return null;if(t.value&&e.value&&t.value!==e.value)return e.setErrors(B(v({},e.errors),{mustMatch:!0})),{mustMatch:!0};if(e.hasError("mustMatch")){let i=v({},e.errors);delete i.mustMatch,e.setErrors(Object.keys(i).length?i:null)}return null};function fx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("EMAIL_REQUIRED"))}}function gx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("EMAIL_INVALID"))}}function _x(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("PASSWORD_REQUIRED"))}}function vx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("PASSWORD_LENGTH"))}}function bx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("CONFIRM_PASSWORD"))}}function yx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("PASSWORD_LENGTH"))}}function wx(n,t){if(n&1&&(u(0,"mat-error",10),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("PASSWORD_DO_NOT_MATCH"))}}function kx(n,t){if(n&1){let e=H();u(0,"mat-form-field",7)(1,"mat-label",8),p(2),h(),x(3,"input",9),I(4,fx,2,1,"mat-error",10),I(5,gx,2,1,"mat-error",10),h(),u(6,"mat-form-field",7)(7,"mat-label"),p(8),h(),x(9,"input",11),u(10,"mat-icon",12),w("click",function(r){N(e);let a=b();return L(a.togglePassword(r))}),p(11),h(),I(12,_x,2,1,"mat-error",10),I(13,vx,2,1,"mat-error",10),h(),u(14,"mat-form-field",7)(15,"mat-label"),p(16),h(),x(17,"input",13),u(18,"mat-icon",12),w("click",function(r){N(e);let a=b();return L(a.togglePasswordConfirm(r))}),p(19),h(),I(20,bx,2,1,"mat-error",10),I(21,yx,2,1,"mat-error",10),I(22,wx,2,1,"mat-error",10),h()}if(n&2){let e,i,r,a,o=b();m(2),k(o.languageService.translate("EMAIL"));let s=o.form.get("email");m(2),E(s!=null&&s.hasError("required")?4:-1),m(),E(s!=null&&s.hasError("email")?5:-1),m(3),k(o.languageService.translate("PASSWORD")),m(),M("type",o.hidePassword()?"password":"text"),m(2),k(o.hidePassword()?"visibility_off":"visibility"),m(),E((e=o.form.get("password"))!=null&&e.hasError("required")?12:-1),m(),E((i=o.form.get("password"))!=null&&i.hasError("minlength")?13:-1),m(3),k(o.languageService.translate("CONFIRM_PASSWORD")),m(),M("type",o.hidePasswordConfirm()?"password":"text"),m(2),k(o.hidePasswordConfirm()?"visibility_off":"visibility"),m(),E((r=o.form.get("confirmPassword"))!=null&&r.hasError("required")?20:-1),m(),E((a=o.form.get("confirmPassword"))!=null&&a.hasError("minlength")?21:-1),m(),E(o.form.hasError("mustMatch")?22:-1)}}function Ix(n,t){if(n&1&&(u(0,"div",2)(1,"span"),p(2),u(3,"b"),p(4),h()(),u(5,"div",14)(6,"mat-icon",15),p(7,"email"),h()()()),n&2){let e,i=b();m(2),T("",i.languageService.translate("SENT_CONFIRMATION_MESSAGE")," "),m(2),k((e=i.authService.user())==null?null:e.email)}}function Ex(n,t){if(n&1&&(u(0,"div",17)(1,"span"),p(2),h(),x(3,"mat-spinner",18),h()),n&2){let e=b(2);m(2),T(" ",e.languageService.translate("LOADING")," ")}}function Cx(n,t){if(n&1&&p(0),n&2){let e=b(2);T(" ",e.languageService.translate("REGISTER")," ")}}function xx(n,t){if(n&1){let e=H();u(0,"button",16),w("click",function(){N(e);let r=b();return L(r.onRegister())}),I(1,Ex,4,1,"div",17)(2,Cx,1,1),h()}if(n&2){let e=b();M("disabled",!e.form.valid||e.isLoading()),m(),E(e.isLoading()?1:2)}}var zs=class n{fb=l(Ui);form=this.createForm();hidePassword=y(!0);hidePasswordConfirm=y(!0);isLoading=y(!1);authModeService=l(Bn);authService=l(ge);snackBar=l(we);isRegistered=y(!1);TIMER_KEY="verify";COOLDOWN_MINUTES=10;countdownService=l(jn);dialog=l(be);languageService=l(j);createForm(){return this.fb.group({email:["",[xe.required,xe.email]],password:["",[xe.required,xe.minLength(6),xe.maxLength(50)]],confirmPassword:["",[xe.required,xe.minLength(6),xe.maxLength(50)]]},{validators:p_})}togglePassword(t){this.hidePassword.update(e=>!e),t.stopPropagation()}togglePasswordConfirm(t){this.hidePasswordConfirm.update(e=>!e),t.stopPropagation()}onRegister(){if(this.isRegistered.set(!1),this.form.valid){this.isLoading.set(!0);let{email:t,password:e}=this.form.value;this.authService.register(t,e,t).pipe(me(()=>this.authService.sendEmailVerification())).subscribe({next:()=>{this.isLoading.set(!1),this.isRegistered.set(!0),this.countdownService.start(this.TIMER_KEY,this.COOLDOWN_MINUTES)},error:i=>{this.isRegistered.set(!1),this.isLoading.set(!1),this.snackBar.show(this.languageService.translate("USER_ALREADY_REGISTERED"),"Ok")}})}else this.form.markAllAsTouched()}openForgotPasswordDialog(){this.dialog.closeAll(),this.dialog.open(Hn,{width:"100%",maxWidth:"380px",disableClose:!0,autoFocus:!1,restoreFocus:!1,enterAnimationDuration:"0ms",exitAnimationDuration:"0ms"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-register"]],decls:11,vars:5,consts:[[3,"formGroup"],[1,"auth-content"],[2,"height","300px"],[1,"dialog-actions",2,"padding-top","0"],[1,"forgot-password",3,"click"],["mat-flat-button","",1,"cancel-btn",2,"background-color","rgb(209, 209, 209)","color","black",3,"click"],["mat-flat-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"],["appearance","outline",2,"width","100% !important"],[2,"font-family","'Times New Roman', Times, serif"],["formControlName","email","matInput","","type","email","placeholder","ejemplo@correo.com",2,"font-family","'Times New Roman', Times, serif"],[2,"width","100%"],["formControlName","password","matInput","",3,"type"],["matSuffix","",2,"cursor","pointer",3,"click"],["formControlName","confirmPassword","matInput","",3,"type"],[2,"display","flex","text-align","center","align-items","center","padding","90px 0px"],[2,"font-size","80px","height","80px","width","100%"],["mat-flat-button","","color","primary","type","submit",1,"submit-btn",3,"click","disabled"],[2,"display","flex","align-items","center","justify-content","center","gap","8px"],["diameter","20"]],template:function(e,i){e&1&&(u(0,"form",0)(1,"mat-dialog-content",1),I(2,kx,23,14)(3,Ix,8,2,"div",2),h(),u(4,"mat-dialog-actions",3)(5,"div",4),w("click",function(){return i.openForgotPasswordDialog()}),u(6,"span"),p(7),h()(),u(8,"button",5),w("click",function(){return i.authModeService.setAuthMode("LOGIN")}),p(9),h(),I(10,xx,3,2,"button",6),h()()),e&2&&(M("formGroup",i.form),m(2),E(i.isRegistered()?3:2),m(5),k(i.languageService.translate("FORGOT_PASSWORD")),m(2),T(" ",i.isRegistered()?i.languageService.translate("ACCEPT"):i.languageService.translate("CANCEL")," "),m(),E(i.isRegistered()?-1:10))},dependencies:[wr,Hi,Bi,ji,ae,Bt,kr,Vi,Li,Pi,kn,Ni,Jn,Fi,Wi,Ba,Wa],styles:[".auth-content[_ngcontent-%COMP%]{padding:15px 15px 0}.dialog-actions[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;gap:12px;padding-bottom:0!important}.submit-btn[_ngcontent-%COMP%], .cancel-btn[_ngcontent-%COMP%]{border-radius:10px!important;height:40px;width:100%}.forgot-password[_ngcontent-%COMP%]{text-align:center;padding-bottom:14px}.forgot-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;cursor:pointer;transition:color .2s ease}.forgot-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#2563eb;text-decoration:underline}mat-form-field[_ngcontent-%COMP%]{margin-bottom:5px!important}"]})};function Sx(n,t){if(n&1&&x(0,"app-login",4),n&2){let e=b();M("dialogRef",e.dialogRef)}}function Tx(n,t){n&1&&x(0,"app-register")}var Tr=class n{dialogRef=l(Ve);authModeService=l(Bn);languageService=l(j);title=P(()=>{switch(this.authModeService.authMode()){case"LOGIN":return this.languageService.translate("LOGIN");case"REGISTER":return this.languageService.translate("REGISTER");default:return""}});static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-auth"]],decls:9,vars:2,consts:[[1,"dialog"],[1,"dialog-header"],["mat-dialog-title",""],["mat-icon-button","","type","button","aria-label","Cerrar",3,"click"],[3,"dialogRef"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1)(2,"h2",2),p(3),h(),u(4,"button",3),w("click",function(){return i.dialogRef.close(),i.authModeService.setAuthMode("LOGIN")}),u(5,"mat-icon"),p(6,"close"),h()()(),I(7,Sx,1,1,"app-login",4)(8,Tx,1,0,"app-register"),h()),e&2&&(m(3),k(i.title()),m(4),E(i.authModeService.authMode()==="LOGIN"?7:8))},dependencies:[Us,ae,Fg,zs],styles:['.dialog[_ngcontent-%COMP%]{width:100%;height:520px;max-width:600px;padding:1rem;box-sizing:border-box;border-radius:32px;background:linear-gradient(180deg,#fff,#f8fafc);box-shadow:0 10px 30px #0f172a14,0 4px 12px #0f172a0d;overflow:hidden;position:relative}.dialog[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-120px;right:-120px;width:240px;height:240px;border-radius:50%;background:#3b82f614}.dialog[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-100px;left:-100px;width:220px;height:220px;border-radius:50%;background:#6366f114}.dialog-header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;font-weight:700;color:#111827;text-align:center}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:36px;height:36px;border:none;border-radius:10px;background:transparent;color:#6b7280;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s ease,color .2s ease}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#f3f4f6;color:#111827}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}']})};function Ax(n,t){if(n&1){let e=H();u(0,"div",4)(1,"div",5)(2,"mat-icon",6),p(3,"mail"),h()(),u(4,"h2",7),p(5),h(),u(6,"p",8),p(7),u(8,"b"),p(9),h(),p(10),h()(),u(11,"button",9),w("click",function(){N(e);let r=b();return L(r.sendVerification())}),p(12),h()}if(n&2){let e,i=b();m(5),k(i.languageService.translate("VERIFY_YOUR_ACCOUNT")),m(2),T(" ",i.languageService.translate("VERIFY_ACCOUNT_MESSAGE")," "),m(2),k((e=i.authService.user())==null?null:e.email),m(),T(". ",i.languageService.translate("VERIFY_ACCOUNT_MESSAGE_2")," "),m(2),T(" ",i.languageService.translate("SEND_LINK")," ")}}function Rx(n,t){if(n&1&&(u(0,"div",4)(1,"div",10)(2,"mat-icon",6),p(3,"mark_email_read"),h()(),u(4,"h2",7),p(5),h(),u(6,"p",8),p(7),h(),u(8,"div",11)(9,"span"),p(10),h()(),u(11,"div",12)(12,"span",13),p(13),h()()(),u(14,"button",14),p(15),h()),n&2){let e=b();m(5),k(e.languageService.translate("EMAIL_SENT")),m(2),T(" ",e.languageService.translate("CHECK_INBOX")," "),m(3),T(" ",e.languageService.translate("CAN_REQUEST_ANOTHER")," "),m(3),T(" ",e.countdown()," "),m(2),T(" ",e.languageService.translate("UNDERSTOOD")," ")}}var Ar=class n{authService=l(ge);snackBarService=l(we);dialogRef=l(Ve);countdownService=l(jn);languageService=l(j);TIMER_KEY="verify";COOLDOWN_MINUTES=10;step=P(()=>this.countdownService.isActive(this.TIMER_KEY)?"sent":"initial");countdown=P(()=>this.countdownService.getLabel(this.TIMER_KEY,"10:00"));sendVerification(){this.authService.refreshAuthStatus().pipe(ke(1),me(t=>t?Be(()=>"USER_ALREADY_VERIFIED"):this.authService.sendEmailVerification().pipe(ke(1)))).subscribe({next:()=>{this.countdownService.start(this.TIMER_KEY,this.COOLDOWN_MINUTES)},error:t=>{t==="USER_ALREADY_VERIFIED"?(this.snackBarService.show(this.languageService.translate("USER_ALREADY_VERIFIED"),"ok"),this.dialogRef.close()):(console.error("Error en el proceso de verificaci\xF3n:",t),this.snackBarService.show(this.languageService.translate("ERROR_GENERIC"),"ok"))}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-verify"]],decls:7,vars:1,consts:[[1,"modal-overlay"],[1,"modal-card"],["mat-dialog-close","",1,"modal-close-btn"],[1,"modal-body"],[1,"modal-content"],[1,"modal-icon-wrapper"],[1,"modal-icon"],[1,"modal-title"],[1,"modal-description"],[1,"modal-submit-btn",3,"click"],[1,"modal-icon-wrapper","modal-icon-wrapper--success"],[1,"divider-countdown"],[1,"modal-countdown-box"],[1,"modal-countdown-timer"],["mat-dialog-close","",1,"modal-submit-btn"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1)(2,"button",2),p(3,"\xD7"),h(),u(4,"div",3),I(5,Ax,13,5)(6,Rx,16,5),h()()()),e&2&&(m(5),E(i.step()==="initial"?5:6))},dependencies:[Na,Vt,ae,Ir,yr],styles:['@keyframes _ngcontent-%COMP%_modalEntrance{0%{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#0f172a66;display:flex;justify-content:center;align-items:center;z-index:1000;padding:16px;font-family:Roboto,sans-serif}.modal-card[_ngcontent-%COMP%]{position:relative;background-color:#fff;width:100%;max-width:380px;height:420px;border-radius:16px;border:1px solid #dadce0;box-shadow:0 4px 24px #00000014;display:flex;flex-direction:column;overflow:hidden;animation:_ngcontent-%COMP%_modalEntrance .25s cubic-bezier(.4,0,.2,1) forwards}.modal-close-btn[_ngcontent-%COMP%]{position:absolute;top:14px;right:14px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:none;background:transparent;color:#70757a;font-size:22px;cursor:pointer;z-index:20;transition:background-color .2s ease}.modal-close-btn[_ngcontent-%COMP%]:hover{background-color:#f3f4f6}.modal-body[_ngcontent-%COMP%]{padding:32px 24px 24px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:100%;text-align:center;box-sizing:border-box}.modal-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;flex:1;justify-content:center;width:100%}.modal-icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background-color:#f0f4f9;margin-bottom:20px;color:#1a73e8}.modal-icon-wrapper--success[_ngcontent-%COMP%]{background-color:#e6f4ea;color:#137333}.modal-icon[_ngcontent-%COMP%]{font-size:26px!important;width:26px!important;height:26px!important;display:flex;align-items:center;justify-content:center}.modal-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:#1f2937;margin:0 0 12px}.modal-description[_ngcontent-%COMP%]{font-size:14px;color:#70757a;line-height:1.5;margin:0;padding:0 8px}.divider-countdown[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;width:100%;margin:20px 0 12px;color:#70757a;font-size:13px}.divider-countdown[_ngcontent-%COMP%]:before, .divider-countdown[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:1px solid #dadce0}.divider-countdown[_ngcontent-%COMP%]:before{margin-right:12px}.divider-countdown[_ngcontent-%COMP%]:after{margin-left:12px}.modal-countdown-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:8px}.modal-countdown-timer[_ngcontent-%COMP%]{font-family:monospace;font-size:18px;font-weight:600;color:#c5221f;letter-spacing:.1em}.modal-submit-btn[_ngcontent-%COMP%]{width:100%;height:48px;padding:10px 16px;border-radius:14px;font-size:15px;font-weight:500;background:transparent!important;border:1px solid #e0e0e0!important;color:#1f2937;cursor:pointer;transition:background-color .2s ease,transform .1s ease;box-sizing:border-box}.modal-submit-btn[_ngcontent-%COMP%]:hover{background-color:#f3f4f6!important}.modal-submit-btn[_ngcontent-%COMP%]:active{transform:scale(.99)}']})};function Dx(n,t){if(n&1){let e=H();u(0,"button",16),w("click",function(){N(e);let r=b();return L(r.drawerService.toggle())}),u(1,"mat-icon"),p(2,"menu"),h()()}}function Mx(n,t){if(n&1){let e=H();u(0,"button",17),w("click",function(){N(e);let r=b();return L(r.openLogin())}),u(1,"mat-icon"),p(2,"login"),h()()}}function Px(n,t){if(n&1&&(u(0,"button",10)(1,"mat-icon"),p(2,"person"),h()()),n&2){b();let e=Ce(14);M("matMenuTriggerFor",e)}}function Nx(n,t){if(n&1){let e=H();u(0,"button",15),w("click",function(){N(e);let r=b(2);return L(r.openVerificationDialog())}),u(1,"mat-icon",18),p(2,"email"),h(),u(3,"span"),p(4),h()()}if(n&2){let e=b(2);m(4),k(e.languageService.translate("VERIFY_USER"))}}function Lx(n,t){if(n&1){let e=H();u(0,"button",15),w("click",function(){N(e);let r=b();return L(r.openForgotPasswordDialog())}),u(1,"mat-icon",18),p(2,"edit"),h(),u(3,"span"),p(4),h()(),I(5,Nx,5,1,"button",19),u(6,"button",15),w("click",function(){N(e);let r=b();return L(r.onLogout())}),u(7,"mat-icon",18),p(8,"logout"),h(),u(9,"span"),p(10),h()()}if(n&2){let e,i=b();m(4),k(i.languageService.translate("UPDATE_PASSWORD")),m(),E(((e=i.authService.user())==null?null:e.emailVerified)===!1?5:-1),m(5),k(i.languageService.translate("LOGOUT"))}}function Fx(n,t){n&1&&(u(0,"mat-icon"),p(1,"check"),h())}function Ux(n,t){n&1&&x(0,"mat-icon")}function Vx(n,t){n&1&&(u(0,"mat-icon"),p(1,"check"),h())}function zx(n,t){n&1&&x(0,"mat-icon")}var Bs=class n{drawerService=l(at);authService=l(ge);snackBar=l(we);dialog=l(be);languageService=l(j);authUserStore=l(Me);chatService=l(rt);chatViewService=l(Ge);location=l(wn);openLogin(){this.dialog.closeAll(),this.dialog.open(Tr,{width:"420px",maxWidth:"95vw",panelClass:"custom-dialog-login-container",disableClose:!1}).afterClosed().subscribe(e=>{e&&console.log("Datos devueltos por el di\xE1logo:",e)})}onLogout(){this.authService.logout().subscribe({next:t=>{this.snackBar.show(this.languageService.translate("SESSION_LOGOUT_MESSAGE"),"Ok"),this.chatViewService.setView("startChat"),this.location.go("/")}})}openVerificationDialog(){this.dialog.open(Ar,{width:"100%",maxWidth:"380px",disableClose:!0,autoFocus:!1,restoreFocus:!1,enterAnimationDuration:"0ms",exitAnimationDuration:"0ms"})}openForgotPasswordDialog(){this.dialog.closeAll(),this.dialog.open(Hn,{width:"100%",maxWidth:"380px",disableClose:!0,autoFocus:!1,restoreFocus:!1,enterAnimationDuration:"0ms",exitAnimationDuration:"0ms"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-toolbar"]],decls:30,vars:6,consts:[["menu","matMenu"],["languageMenu","matMenu"],["color","primary",2,"padding-left","0px","background-color","white"],["mat-icon-button",""],[1,"logo-container"],["src","logo.png","alt","BinAI",1,"logo-app"],[1,"app-name"],[1,"spacer"],[2,"margin-left","auto"],["type","button","matIconButton","","aria-label","Example icon-button with share icon"],["type","button","matIconButton","","aria-label","Example icon-button with share icon",3,"matMenuTriggerFor"],["matIconButton","","aria-label","Example icon-button with share icon",3,"matMenuTriggerFor"],[1,"minimal-menu"],[1,"menu-title"],["matMenuContent",""],["mat-menu-item","",3,"click"],["mat-icon-button","",3,"click"],["type","button","matIconButton","","aria-label","Example icon-button with share icon",3,"click"],["color","warn"],["mat-menu-item",""]],template:function(e,i){if(e&1&&(u(0,"mat-toolbar",2),I(1,Dx,3,0,"button",3),u(2,"div",4),x(3,"img",5),u(4,"span",6),p(5,"SweetOnion"),h()(),x(6,"span",7),u(7,"div",8),I(8,Mx,3,0,"button",9)(9,Px,3,1,"button",10),u(10,"button",11)(11,"mat-icon"),p(12,"language"),h()(),u(13,"mat-menu",12,0)(15,"div",13),p(16),h(),Kn(17,Lx,11,3,"ng-template",14),h(),u(18,"mat-menu",12,1)(20,"button",15),w("click",function(){return i.languageService.changeLang("es")}),I(21,Fx,2,0,"mat-icon")(22,Ux,1,0,"mat-icon"),u(23,"span"),p(24,"Espa\xF1ol"),h()(),u(25,"button",15),w("click",function(){return i.languageService.changeLang("en")}),I(26,Vx,2,0,"mat-icon")(27,zx,1,0,"mat-icon"),u(28,"span"),p(29,"English"),h()()()()()),e&2){let r,a=Ce(19);m(),E(i.drawerService.isMobile()?1:-1),m(7),E(i.authService.isLoggedIn()?9:8),m(2),M("matMenuTriggerFor",a),m(6),k(((r=i.authService.user())==null?null:r.email)??"user"),m(5),E(i.languageService.currentLang()==="es"?21:22),m(5),E(i.languageService.currentLang()==="en"?26:27)}},dependencies:[d_,ae,tt,zt,qa,Cn,En,Rh,xn],styles:[".logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.logo-app[_ngcontent-%COMP%]{height:25px;object-fit:contain}.app-name[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.menu-title[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.75rem;color:#343f57;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})};var js=class n{el=l(re);observer;scrolledToEnd=Qn();ngAfterViewInit(){this.observer=new IntersectionObserver(([t])=>{t.isIntersecting&&this.scrolledToEnd.emit()},{rootMargin:"150px",threshold:.1}),this.observer.observe(this.el.nativeElement)}ngOnDestroy(){this.observer?.disconnect()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=ee({type:n,selectors:[["","appInfiniteScroll",""]],outputs:{scrolledToEnd:"scrolledToEnd"}})};var $n=class n{data=l(Yd);dialogRef=l(Ve);close(t=!1){this.dialogRef.close(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-confirm-dialog"]],decls:12,vars:4,consts:[[1,"modal-card"],[1,"modal-body"],[1,"modal-header-content"],[1,"modal-title"],[1,"modal-description"],[1,"modal-form"],[1,"modal-submit-btn","danger-btn",3,"click"],[1,"modal-submit-btn",3,"click"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4),fe(),oe(5,"p",4),p(6),fe()(),oe(7,"div",5)(8,"button",6),Yn("click",function(){return i.close(!0)}),p(9),fe(),oe(10,"button",7),Yn("click",function(){return i.close(!1)}),p(11),fe()()()()),e&2&&(m(4),k(i.data.title),m(2),k(i.data.message),m(3),T(" ",i.data.confirmText||"Eliminar"," "),m(2),T(" ",i.data.cancelText||"Cancelar"," "))},styles:[".modal-card[_ngcontent-%COMP%]{background-color:#fff;width:100%;max-width:380px;border-radius:16px;padding:32px 24px;display:flex;flex-direction:column;gap:24px;text-align:center;box-sizing:border-box}.modal-header-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.modal-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:#1f2937;margin:0 0 10px}.modal-description[_ngcontent-%COMP%]{font-size:14px;color:#70757a;line-height:1.5;margin:0}.modal-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-top:10px}.modal-submit-btn[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:14px;border:1px solid #dadce0;background:#fff;cursor:pointer;font-weight:500;transition:.2s}.modal-submit-btn[_ngcontent-%COMP%]:hover{background-color:#f3f4f6}.modal-submit-btn.danger-btn[_ngcontent-%COMP%]{border-color:#d93025;color:#d93025}.modal-submit-btn.danger-btn[_ngcontent-%COMP%]:hover{background-color:#fce8e6}"]})};var Bx=n=>["/chat",n],jx=(n,t)=>t.id;function Hx(n,t){n&1&&(u(0,"div",0),x(1,"mat-spinner",1),h())}function $x(n,t){if(n&1){let e=H();u(0,"a",5),w("click",function(){let r=N(e).$implicit,a=b(2);return L(a.selectChat(r))}),u(1,"span",6),p(2),h(),u(3,"button",7),w("click",function(r){let a=N(e).$implicit,o=b(2);return L(o.onDelete(a.id,r))}),u(4,"mat-icon"),p(5,"delete"),h()()()}if(n&2){let e,i=t.$implicit,r=b(2);z("active-chat",((e=r.chatStore.selectedChat())==null?null:e.id)===i.id),M("routerLink",Yu(4,Bx,i.id)),m(2),k(i.title)}}function Wx(n,t){if(n&1&&(u(0,"p",3),p(1),h()),n&2){let e=b(2);m(),T(" ",e.languageService.translate("NO_CHATS_AVAIBLES"),".")}}function Gx(n,t){n&1&&x(0,"mat-spinner",9)}function qx(n,t){if(n&1){let e=H();u(0,"div",8),w("scrolledToEnd",function(){N(e);let r=b(2);return L(r.chatStore.loadNextPage(r.userId()))}),I(1,Gx,1,0,"mat-spinner",9),h()}if(n&2){let e=b(2);m(),E(e.chatStore.isLoading()?1:-1)}}function Kx(n,t){if(n&1&&(vn(0,$x,6,6,"a",2,jx,!1,Wx,2,1,"p",3),I(3,qx,2,1,"div",4)),n&2){let e=b();bn(e.chatStore.chats()),m(3),E(e.chatStore.hasMore()?3:-1)}}var Hs=class n{authUserStore=l(Me);chatStore=l(Ke);userId=y("");chatModeService=l(rt);chatNavDrawerService=l(at);chatViewService=l(Ge);dialog=l(be);languageService=l(j);router=l(nt);selectChatService=l(vi);constructor(){Le(()=>{this.userId.set(this.authUserStore.userSyncData()?.user.id??""),this.userId()&&he(()=>{this.chatStore.loadChatsWithCursor(this.userId(),"",30)})})}deleteChat(t){this.chatStore.deleteChat(t),this.chatViewService.setView("startChat")}onDelete(t,e){e.stopPropagation(),e.preventDefault(),this.dialog.open($n,{data:{title:this.languageService.translate("CONFIRM_DELETE_TITLE"),message:this.languageService.translate("CONFIRM_DELETE_MESSAGE"),confirmText:this.languageService.translate("CONFIRM_DELETE_BUTTON"),cancelText:this.languageService.translate("CANCEL")},panelClass:"custom-dialog-container",width:"380px"}).afterClosed().subscribe(i=>{i&&this.deleteChat(t)})}selectChat(t){vi,this.selectChatService.selectChat(t),this.router.navigate(["/chat",t.id])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-conversation-list"]],decls:3,vars:1,consts:[[1,"spinner-container"],["diameter","50",1,"spinner-indigo"],["mat-list-item","",1,"chat-item",3,"routerLink","active-chat"],[2,"text-align","center"],["appInfiniteScroll","",1,"scroll-sentinel"],["mat-list-item","",1,"chat-item",3,"click","routerLink"],["matListItemTitle",""],["mat-icon-button","","matListItemMeta","",1,"delete-btn",3,"click"],["appInfiniteScroll","",1,"scroll-sentinel",3,"scrolledToEnd"],["diameter","40"]],template:function(e,i){e&1&&(u(0,"div"),I(1,Hx,2,0,"div",0)(2,Kx,4,2),h()),e&2&&(m(),E(i.chatStore.isLoading()?1:2))},dependencies:[ae,zn,mu,pu,tt,zt,Bt,js,ar],styles:['@charset "UTF-8";a[_ngcontent-%COMP%]{height:45px!important}.conversation-section[_ngcontent-%COMP%]{display:flex;flex-direction:column}.chat-item[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]{opacity:0;pointer-events:none;transition:opacity .2s ease}.chat-item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.scroll-sentinel[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;min-height:60px;padding:16px 0;box-sizing:border-box}.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;min-height:200px}.active-chat[_ngcontent-%COMP%]{background-color:#e0e0e0!important;color:#3f51b5!important;font-weight:700}[_nghost-%COMP%]     .spinner-indigo circle{stroke:#4f46e5!important}']})};var Yx=["mat-internal-form-field",""],Qx=["*"],$s=(()=>{class n{labelPosition="after";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Yx,ngContentSelectors:Qx,decls:1,vars:0,template:function(i,r){i&1&&(ve(),K(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Jx=["input"],Xx=["formField"],Zx=["*"],Ws=class{source;value;constructor(t,e){this.source=t,this.value=e}},eS={provide:Mi,useExisting:Wn(()=>gu),multi:!0},f_=new V("MatRadioGroup"),tS=new V("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),gu=(()=>{class n{_changeDetector=l(Oe);_value=null;_name=l(vt).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ue;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Ws(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ee({type:n,selectors:[["mat-radio-group"]],contentQueries:function(i,r,a){if(i&1&&et(a,Gs,5),i&2){let o;$(o=W())&&(r._radios=o)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",G],required:[2,"required","required",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[Qe([eS,{provide:f_,useExisting:n}])]})}return n})(),Gs=(()=>{class n{_elementRef=l(re);_changeDetector=l(Oe);_focusMonitor=l(In);_radioDispatcher=l(Oh);_defaultOptions=l(tS,{optional:!0});_ngZone=l(pe);_renderer=l(Ft);_uniqueId=l(vt).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ue;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ct();_injector=l(Z);constructor(){l(Zt).load(en);let e=l(f_,{optional:!0}),i=l(new Ti("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=yn(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Ws(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",i+""),this._previousTabIndex=i,Lt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-radio-button"]],viewQuery:function(i,r){if(i&1&&st(Jx,5)(Xx,7,re),i&2){let a;$(a=W())&&(r._inputElement=a.first),$(a=W())&&(r._rippleTrigger=a.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(i,r){i&1&&w("focus",function(){return r._inputElement.nativeElement.focus()}),i&2&&(Y("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),z("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:yn(e)],checked:[2,"checked","checked",G],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",G],required:[2,"required","required",G],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Zx,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(i,r){i&1&&(ve(),u(0,"div",2,0)(2,"div",3)(3,"div",4),w("click",function(o){return r._onTouchTargetClick(o)}),h(),u(4,"input",5,1),w("change",function(o){return r._onInputInteraction(o)}),h(),u(6,"div",6),x(7,"div",7)(8,"div",8),h(),u(9,"div",9),x(10,"div",10),h()(),u(11,"label",11),K(12),h()()),i&2&&(M("labelPosition",r.labelPosition),m(2),z("mdc-radio--disabled",r.disabled),m(2),M("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Y("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),m(5),M("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),m(2),M("for",r.inputId))},dependencies:[za,$s],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),g_=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({imports:[$i,Gs,He]})}return n})();var iS=["input"],rS=["label"],aS=["*"],_u={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},oS=new V("mat-checkbox-default-options",{providedIn:"root",factory:()=>_u}),Ye=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Ye||{}),vu=class{source;checked},bu=(()=>{class n{_elementRef=l(re);_changeDetectorRef=l(Oe);_ngZone=l(pe);_animationsDisabled=ct();_options=l(oS,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new vu;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new ue;indeterminateChange=new ue;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Ye.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(Zt).load(en);let e=l(new Ti("tabindex"),{optional:!0});this._options=this._options||_u,this.color=this._options.color||_u.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=l(vt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Ye.Indeterminate):this._transitionCheckState(this.checked?Ye.Checked:Ye.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=y(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Ye.Checked:Ye.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Ye.Init:if(i===Ye.Checked)return this._animationClasses.uncheckedToChecked;if(i==Ye.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Ye.Unchecked:return i===Ye.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Ye.Checked:return i===Ye.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Ye.Indeterminate:return i===Ye.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&st(iS,5)(rS,5),i&2){let a;$(a=W())&&(r._inputElement=a.first),$(a=W())&&(r._labelElement=a.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(Et("id",r.id),Y("tabindex",null)("aria-label",null)("aria-labelledby",null),Si(r.color?"mat-"+r.color:"mat-accent"),z("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",G],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",G],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:yn(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],indeterminate:[2,"indeterminate","indeterminate",G]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Qe([{provide:Mi,useExisting:Wn(()=>n),multi:!0},{provide:sh,useExisting:n,multi:!0}]),Nt],ngContentSelectors:aS,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ve(),u(0,"div",3),w("click",function(o){return r._preventBubblingFromLabel(o)}),u(1,"div",4,0)(3,"div",5),w("click",function(){return r._onTouchTargetClick()}),h(),u(4,"input",6,1),w("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(o){return r._onInteractionEvent(o)}),h(),x(6,"div",7),u(7,"div",8),Pt(),u(8,"svg",9),x(9,"path",10),h(),Or(),x(10,"div",11),h(),x(11,"div",12),h(),u(12,"label",13,2),K(14),h()()),i&2){let a=Ce(2);M("labelPosition",r.labelPosition),m(4),z("mdc-checkbox--selected",r.checked),M("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),Y("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),m(7),M("matRippleTrigger",a)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),m(),M("for",r.inputId)}},dependencies:[za,$s],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),__=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ee({type:n});static \u0275inj=Ie({imports:[bu,He]})}return n})();function cS(n,t){if(n&1){let e=H();u(0,"section")(1,"h3",4),p(2),h(),u(3,"button",14),w("click",function(){N(e);let r=b();return L(r.onDeleteUserChats("OTHER"))}),p(4),u(5,"mat-icon"),p(6,"delete"),h()(),u(7,"button",14),w("click",function(){N(e);let r=b();return L(r.onDeleteUserChats("INTERVIEW"))}),p(8),u(9,"mat-icon"),p(10,"delete"),h()(),u(11,"button",14),w("click",function(){N(e);let r=b();return L(r.onDeleteUserChats("CONVERSATION"))}),p(12),u(13,"mat-icon"),p(14,"delete"),h()()()}if(n&2){let e=b();m(2),k(e.languageService.translate("DELETE")),m(2),T(" ",e.languageService.translate("DELETE_ALL_CHATS")," "),m(4),T(" ",e.languageService.translate("DELETE_INTERVIEWS_ONLY")," "),m(4),T(" ",e.languageService.translate("DELETE_CHATS_ONLY")," ")}}var qs=class n{dialogRef=l(Ve);configService=l(bt);languageService=l(j);textToSpeechActive=uc(this.configService.isTextToSpeechActive());voice=uc("NATIVE");snackBar=l(we);userService=l(Ga);authUserStore=l(Me);userId=P(()=>this.authUserStore.userSyncData()?.user.id);chatStore=l(Ke);dialog=l(be);authService=l(ge);onChangeVoice(t){t.value==="NATIVE"?this.snackBar.show(this.languageService.translate("ALREADY_IN_NATIVE_VOICE"),"ok"):this.snackBar.show(this.languageService.translate("NOT_AVAILABLE"),"ok")}onChangeLanguage(t){this.languageService.changeLang(t.value),this.snackBar.show(this.languageService.translate("UPDATED"),"ok")}toggleTTS(t){this.snackBar.show(this.languageService.translate("UPDATED"),"ok")}async deleteUserChats(t){let e={};t==="OTHER"?e={}:e={type:t},this.userService.deleteUserChats(this.userId()??"",e).subscribe({next:i=>{this.snackBar.show(`${this.languageService.translate("DELETED")}: ${i.deletedCount} chats.`,"Ok"),this.chatStore.resetStore()},error:i=>{console.error("Ocurri\xF3 un error al borrar:",i.error.message)}})}async onDeleteUserChats(t){this.dialog.open($n,{data:{title:this.languageService.translate("CONVERSATIONS"),message:this.languageService.translate("CONFIRM_DELETE_MESSAGE"),confirmText:this.languageService.translate("CONFIRM_DELETE_BUTTON"),cancelText:this.languageService.translate("CANCEL")},panelClass:"custom-dialog-container",width:"380px"}).afterClosed().subscribe(e=>{e&&this.deleteUserChats(t)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-config-component"]],inputs:{textToSpeechActive:[1,"textToSpeechActive"],voice:[1,"voice"]},outputs:{textToSpeechActive:"textToSpeechActiveChange",voice:"voiceChange"},decls:38,vars:15,consts:[[1,"dialog-container",2,"height","100%"],[1,"dialog-header"],["mat-icon-button","","type","button","aria-label","Cerrar",3,"click"],[1,"dialog-content"],[2,"font-size","18px","color","black"],[2,"font-size","12px","color","black"],[3,"ngModelChange","change","ngModel"],["value","es"],["value","en"],["value","NATIVE"],["disabled","true","value","GOOGLE"],[1,"dialog-actions"],["mat-button","",1,"btn-cancel",3,"mat-dialog-close"],["mat-raised-button","",1,"btn-confirm",3,"mat-dialog-close"],["matButton","outlined",2,"height","30px","margin","5px",3,"click"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1)(2,"button",2),w("click",function(){return i.dialogRef.close()}),u(3,"mat-icon"),p(4,"close"),h()()(),u(5,"mat-dialog-content",3)(6,"section")(7,"h3",4),p(8),h(),u(9,"p",5),p(10),h(),u(11,"mat-radio-group",6),Pa("ngModelChange",function(a){return Ma(i.configService.translation,a)||(i.configService.translation=a),a}),w("change",function(a){return i.onChangeLanguage(a)}),u(12,"mat-radio-button",7),p(13,"Espa\xF1ol"),h(),u(14,"mat-radio-button",8),p(15,"English"),h()()(),x(16,"mat-divider"),u(17,"section")(18,"h3",4),p(19),h(),u(20,"p",5),p(21),h(),u(22,"mat-checkbox",6),Pa("ngModelChange",function(a){return Ma(i.configService.isTextToSpeechActive,a)||(i.configService.isTextToSpeechActive=a),a}),w("change",function(a){return i.toggleTTS(a.checked)}),p(23),h(),u(24,"p",5),p(25),h(),u(26,"mat-radio-group",6),Pa("ngModelChange",function(a){return Ma(i.voice,a)||(i.voice=a),a}),w("change",function(a){return i.onChangeVoice(a)}),u(27,"mat-radio-button",9),p(28),h(),u(29,"mat-radio-button",10),p(30,"Google"),h()()(),x(31,"mat-divider"),I(32,cS,15,4,"section"),h(),u(33,"mat-dialog-actions",11)(34,"button",12),p(35),h(),u(36,"button",13),p(37),h()()()),e&2&&(m(8),T(" ",i.languageService.translate("LANGUAGE_TITLE")," "),m(2),T(" ",i.languageService.translate("LANGUAGE_DESCRIPTION")," "),m(),Da("ngModel",i.configService.translation),m(8),T(" ",i.languageService.translate("TEXT_TO_SPEECH_TITLE")," "),m(2),k(i.languageService.translate("AUTO_MODE")),m(),Da("ngModel",i.configService.isTextToSpeechActive),m(),T(" ",i.languageService.translate("ACTIVE")),m(2),T(" ",i.languageService.translate("GENERATE_VOICE_WITH")," "),m(),Da("ngModel",i.voice),m(2),k(i.languageService.translate("NATIVE_VOICE")),m(4),E(i.authService.isLoggedIn()?32:-1),m(2),M("mat-dialog-close",!1),m(),T(" ",i.languageService.translate("CANCEL")," "),m(),M("mat-dialog-close",!0),m(),T(" ",i.languageService.translate("ACCEPT")," "))},dependencies:[La,kn,ch,wr,kr,yr,Wa,zt,ae,u_,g_,gu,Gs,__,bu],styles:['@charset "UTF-8";.dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%!important;min-height:100%!important;padding:8px 16px;box-sizing:border-box}.dialog-content[_ngcontent-%COMP%]{color:#7f8c8d;font-size:1rem;line-height:1.5;margin-bottom:24px;padding:0;flex-grow:1;overflow-y:auto}.dialog-actions[_ngcontent-%COMP%]{display:flex!important;justify-content:flex-end!important;gap:12px;flex-shrink:0;margin-top:auto!important}.btn-cancel[_ngcontent-%COMP%]{color:#7f8c8d!important;transition:background-color .3s}.btn-cancel[_ngcontent-%COMP%]:hover{background-color:#f5f6fa}.btn-confirm[_ngcontent-%COMP%]{background-color:#4f46e5!important;color:#fff!important;border-radius:8px!important;padding:0 20px!important;box-shadow:0 4px 6px #9257b433;transition:all .3s ease}.btn-confirm[_ngcontent-%COMP%]:hover{background-color:#4f46e5!important;box-shadow:0 6px 12px #803d864d;transform:translateY(-1px)}.dialog-header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.6rem;font-weight:700;color:#111827;text-align:center}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:5px;right:0;width:36px;height:36px;border:none;border-radius:50%;overflow:hidden;background:transparent;color:#6b7280;display:flex!important;align-items:center!important;justify-content:center!important;cursor:pointer;outline:none!important;transition:background .2s ease,color .2s ease}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{outline:none!important;box-shadow:none!important}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#f3f4f6;color:#111827}  .dialog-header button .mat-mdc-button-persistent-ripple,   .dialog-header button .mdc-button__ripple{border-radius:50%!important}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}']})};var lS=(n,t)=>t.id;function dS(n,t){n&1&&(u(0,"mat-icon"),p(1,"check"),h())}function uS(n,t){if(n&1){let e=H();u(0,"button",6),w("click",function(){let r=N(e).$implicit,a=b();return L(a.selectModel(r))}),I(1,dS,2,0,"mat-icon"),u(2,"span"),p(3),h()()}if(n&2){let e=t.$implicit,i=b();m(),E(i.selectedModel().id===e.id?1:-1),m(2),k(e.model)}}var Ks=class n{configService=l(bt);selectedModel=this.configService.model;languageService=l(j);modelStore=l(Ka);ngOnInit(){this.modelStore.loadModels()}selectModel(t){this.selectedModel.set(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-model-menu"]],decls:11,vars:3,consts:[["chatModelMenu","matMenu"],["mat-list-item","",3,"matMenuTriggerFor"],["matListItemIcon",""],[1,"minimal-menu"],[2,"padding","10px 16px","font-weight","bold","color","gray","font-size","13px"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(e,i){if(e&1&&(u(0,"a",1)(1,"mat-icon",2),p(2,"smart_toy"),h(),u(3,"span"),p(4),h()(),u(5,"mat-menu",3,0)(7,"div",4),p(8),h(),vn(9,uS,4,2,"button",5,lS),h()),e&2){let r=Ce(6);M("matMenuTriggerFor",r),m(4),k(i.languageService.translate("MODELS")),m(4),T(" ",i.languageService.translate("SELECT_MODEL")," "),m(),bn(i.modelStore.models())}},dependencies:[ae,Cn,xn,zn,bi,En],encapsulation:2})};var hS=(n,t)=>t.id;function mS(n,t){if(n&1){let e=H();u(0,"button",5),w("click",function(){let r=N(e).$implicit,a=b();return L(a.select(r.id))}),u(1,"mat-icon"),p(2," check "),h(),u(3,"span"),p(4),h()()}if(n&2){let e=t.$implicit,i=b();m(),Dr("visibility",i.filterSelected===e.id?"visible":"hidden"),m(3),k(i.updateLabels(e.label))}}var Ys=class n{authUserStore=l(Me);chatStore=l(Ke);filterSelected="conversation";languageService=l(j);options=[{id:"conversation",label:"CONVERSATIONS"},{id:"interview",label:"FILTER_INTERVIEWS"}];filterChats(t){let e=this.authUserStore.userSyncData()?.user.id??"";this.chatStore.loadChatsWithCursor(e,"",30,t)}updateLabels(t){return t==="CONVERSATIONS"?this.languageService.translate("CONVERSATIONS"):this.languageService.translate("FILTER_INTERVIEWS")}select(t){this.filterSelected=t,this.filterChats(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-chat-filter-menu"]],decls:9,vars:2,consts:[["chatFilterMenu","matMenu"],["mat-icon-button","",1,"menu-btn",3,"matMenuTriggerFor"],[1,"minimal-menu"],[1,"menu-title",2,"padding","8px 16px","font-weight","bold"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(e,i){if(e&1&&(u(0,"button",1)(1,"mat-icon"),p(2,"more_vert"),h()(),u(3,"mat-menu",2,0)(5,"div",3),p(6),h(),vn(7,mS,5,3,"button",4,hS),h()),e&2){let r=Ce(4);M("matMenuTriggerFor",r),m(6),k(i.languageService.translate("FILTER_BY")),m(),bn(i.options)}},dependencies:[Cn,ae,En,tt,zt,xn],styles:[".menu-title[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.75rem;color:#343f57;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})};var Qs=class n{drawerService=l(at);languageService=l(j);router=l(nt);goTo(t="admin"){this.router.navigate([t]),this.drawerService.isMobile()&&this.drawerService.toggle()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-admin-menu"]],decls:20,vars:2,consts:[["adminMenu","matMenu"],["mat-list-item","",3,"matMenuTriggerFor"],["matListItemIcon",""],[1,"minimal-menu"],[1,"menu-title",2,"padding","8px 16px","font-weight","bold"],["mat-menu-item","",3,"click"]],template:function(e,i){if(e&1&&(u(0,"a",1)(1,"mat-icon",2),p(2,"edit"),h(),u(3,"span")(4,"span"),p(5),h()()(),u(6,"mat-menu",3,0)(8,"div",4),p(9,"Opciones"),h(),u(10,"button",5),w("click",function(){return i.goTo("/admin/users")}),u(11,"mat-icon"),p(12," person "),h(),u(13,"span"),p(14,"Usuarios"),h()(),u(15,"button",5),w("click",function(){return i.goTo("/admin/models")}),u(16,"mat-icon"),p(17," smart_toy "),h(),u(18,"span"),p(19,"Modelos"),h()()()),e&2){let r=Ce(7);M("matMenuTriggerFor",r),m(5),k(i.languageService.translate("ADMIN"))}},dependencies:[qa,Cn,En,xn,ae,tt,bi,zn],encapsulation:2})};var pS=["drawer"];function fS(n,t){n&1&&(u(0,"button",9),x(1,"img",11),h())}function gS(n,t){if(n&1){let e=H();u(0,"div",3),I(1,fS,2,0,"button",9),u(2,"button",10),w("click",function(){N(e);let r=b();return L(r.drawerService.toggleMenu())}),u(3,"mat-icon"),p(4),h()()()}if(n&2){let e=b();m(),E(e.drawerService.isExpanded()?1:-1),m(),z("sidenav-burger",e.drawerService.isExpanded()),m(2),k(e.drawerService.isExpanded()?"menu_open":"menu")}}function _S(n,t){if(n&1){let e=H();u(0,"div",3)(1,"button",12),x(2,"img",11),h(),u(3,"button",10),w("click",function(){N(e),b();let r=Ce(2);return L(r.close())}),u(4,"mat-icon"),p(5,"menu_open"),h()()()}if(n&2){let e=b();m(3),z("sidenav-burger",e.drawerService.isMobile())}}function vS(n,t){if(n&1&&(u(0,"span"),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("SETTINGS"))}}function bS(n,t){if(n&1&&(u(0,"span"),p(1),h()),n&2){let e=b();m(),k(e.languageService.translate("INFORMATION"))}}function yS(n,t){n&1&&x(0,"app-admin-menu")}function wS(n,t){if(n&1&&(u(0,"div",16)(1,"span"),p(2),h(),x(3,"app-chat-filter-menu"),h(),x(4,"app-conversation-list")),n&2){let e=b(2);m(2),k(e.languageService.translate("CONVERSATIONS"))}}function kS(n,t){if(n&1&&(u(0,"span",15),p(1),h()),n&2){let e=b(2);m(),k(e.languageService.translate("LOGOUT"))}}function IS(n,t){if(n&1){let e=H();I(0,wS,5,1),x(1,"div",13),u(2,"a",14),w("click",function(){N(e);let r=b();return L(r.onLogout())}),u(3,"mat-icon",5),p(4,"logout"),h(),I(5,kS,2,1,"span",15),h()}if(n&2){let e=b();E(e.drawerService.isExpanded()?0:-1),m(5),E(e.drawerService.isExpanded()||e.drawerService.isMobile()?5:-1)}}var Js=class n{drawerService=l(at);drawer=Ri.required("drawer");chatModeService=l(rt);snackBar=l(we);authService=l(ge);dialog=l(be);messageStore=l(Yt);chatViewService=l(Ge);chatStore=l(Ke);router=l(nt);authUserStore=l(Me);languageService=l(j);constructor(){Le(()=>{this.drawerService.setDrawer(this.drawer())})}logout(){this.authService.logout().subscribe({next:t=>{this.snackBar.show(this.languageService.translate("SESSION_LOGOUT_MESSAGE"),this.languageService.translate("ACCEPT_LOGOUT")),this.chatViewService.setView("startChat"),this.router.navigate(["/chat"])}})}onLogout(){this.dialog.open($n,{data:{title:`${this.languageService.translate("LOGOUT")}?`,message:this.languageService.translate("LOGOUT_MESSAGE"),confirmText:this.languageService.translate("ACCEPT_LOGOUT"),cancelText:this.languageService.translate("CANCEL_LOGOUT")},panelClass:"custom-dialog-container",width:"380px"}).afterClosed().subscribe(t=>{t&&this.logout()})}openConfigDialog(){this.dialog.open(qs,{width:"95%",height:"90%",maxWidth:"800px",disableClose:!0}).afterClosed().subscribe(e=>{})}onNewChat(){this.messageStore.resetMessages(),this.chatStore.selectChat(null),this.chatModeService.setMode("EPHEMERAL"),this.chatViewService.setView("startChat"),this.router.navigate(["/chat"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-navbar"]],viewQuery:function(e,i){e&1&&Ci(i.drawer,pS,5),e&2&&xi()},decls:27,vars:10,consts:[["drawer",""],["autosize","",1,"container"],[1,"sidenav",3,"mode","opened"],[1,"menu-header"],["mat-list-item","",3,"click"],["matListItemIcon",""],["mat-list-item","","routerLink","/information",3,"click"],[2,"margin-left","15px"],[2,"height","100% !important"],["disabled","","mat-icon-button",""],["mat-icon-button","",3,"click"],["src","robot.svg","width","22","height","22"],["mat-icon-button",""],[1,"custom-divider"],["mat-list-item","",1,"logout-item",3,"click"],[2,"font-size","15px","font-weight","600"],[1,"title"]],template:function(e,i){if(e&1){let r=H();u(0,"mat-drawer-container",1)(1,"mat-drawer",2,0)(3,"mat-nav-list"),I(4,gS,5,4,"div",3)(5,_S,6,2,"div",3),u(6,"a",4),w("click",function(){N(r);let o=Ce(2);return i.onNewChat(),L(i.drawerService.isMobile()?o.close():null)}),u(7,"mat-icon",5),p(8,"add"),h(),u(9,"span"),p(10),h()(),x(11,"app-model-menu"),u(12,"a",4),w("click",function(){N(r);let o=Ce(2);return i.openConfigDialog(),L(i.drawerService.isMobile()?o.close():null)}),u(13,"mat-icon",5),p(14,"settings"),h(),I(15,vS,2,1,"span"),h(),u(16,"a",6),w("click",function(){N(r);let o=Ce(2);return L(i.drawerService.isMobile()?o.close():null)}),u(17,"mat-icon",5),p(18,"info"),h(),I(19,bS,2,1,"span"),h(),I(20,yS,1,0,"app-admin-menu"),I(21,IS,6,2),h()(),u(22,"mat-sidenav-content",7)(23,"div"),x(24,"app-toolbar"),h(),u(25,"main",8),x(26,"router-outlet"),h()()()}if(e&2){let r;m(),z("mini-sidebar",!i.drawerService.isExpanded()&&!i.drawerService.isMobile()),M("mode",i.drawerService.drawerMode())("opened",!i.drawerService.isMobile()),m(3),E(i.drawerService.isMobile()?5:4),m(6),k(i.languageService.translate("NEW_CHAT")),m(5),E(i.drawerService.isExpanded()||i.drawerService.isMobile()?15:-1),m(4),E(i.drawerService.isExpanded()||i.drawerService.isMobile()?19:-1),m(),E(((r=i.authUserStore.userSyncData())==null||r.user==null?null:r.user.role)==="admin"?20:-1),m(),E(i.authService.isLoggedIn()?21:-1)}},dependencies:[Ps,du,uu,l_,Ns,Fs,m_,zn,bi,tt,zt,Vt,ae,Bs,Hs,Gi,Ag,Ks,Qr,Ys,ar,Qs],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{overflow:hidden;height:100vh;height:100dvh;background-color:#fff!important;width:100%;box-sizing:border-box}.sidenav[_ngcontent-%COMP%]{width:250px;background-color:#fff!important;transition:width .3s ease;overflow-x:hidden;border-right:1px solid #ddd;border-radius:0!important}.sidenav-burger[_ngcontent-%COMP%]{margin-left:auto}.sidenav.mini-sidebar[_ngcontent-%COMP%]{width:60px}.menu-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:2px 10px;height:40px}.mini-sidebar[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]{justify-content:center;padding:8px 0}.toggle-btn[_ngcontent-%COMP%]{color:#555}.sidenav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap}.mat-drawer-transition[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%], .mat-drawer-transition[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]{transition-timing-function:ease-in-out!important;transition-duration:.5s!important}.section-title[_ngcontent-%COMP%]{padding:16px 16px 8px;font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:1px}mat-nav-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;margin:0;padding:0}.logout-item[_ngcontent-%COMP%]{margin-top:auto}.custom-divider[_ngcontent-%COMP%]{height:1px;background:#e5e7eb}app-conversation-list[_ngcontent-%COMP%]{font-size:13px;flex:1;min-height:0;overflow-y:auto;height:100%}.title[_ngcontent-%COMP%]{padding:16px 16px 8px;font-size:12px;font-weight:700;color:#2e2e2e;display:flex;align-items:center;justify-content:space-between}.conversation-wrapper[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden}mat-sidenav-content[_ngcontent-%COMP%]{overflow:hidden}@media(max-width:599px){.sidenav[_ngcontent-%COMP%]{width:80%}}']})};var Xs=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-chat-component"]],decls:1,vars:0,template:function(e,i){e&1&&x(0,"app-navbar")},dependencies:[Ps,Ns,Fs,tt,Vt,Js],encapsulation:2})};function ES(n,t){n&1&&x(0,"app-chat-component")}function CS(n,t){n&1&&(u(0,"div",0)(1,"div",1),Pt(),u(2,"svg",2),x(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10)(11,"path",11),h()()())}var Zs=class n{title=y("sweet-onion-frontend");authService=l(ge);authUserStore=l(Me);dialog=l(be);modelStore=l(Ka);constructor(){this.authUserStore.initSync(),Le(()=>{let t=this.authUserStore.userSyncData();t&&t&&!this.authUserStore.isVerified()&&this.dialog.openDialogs.length===0&&this.openVerificationDialog()}),Le(async()=>{if(this.authService.user()){let e=await this.authService.getTokenAsync();yt.mockeable&&console.log("\xA1Token recuperado con \xE9xito!:",e)}})}openVerificationDialog(){this.dialog.open(Ar,{width:"100%",maxWidth:"380px",disableClose:!0,panelClass:"custom-dialog-container"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-root"]],decls:2,vars:1,consts:[[1,"loader-container"],[1,"onion-bounce"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 220 240"],["d","M110 20 C105 40,100 55,110 75 C120 55,115 40,110 20 Z","fill","#4CAF50"],["d","M105 75 C75 50,55 30,65 10 C85 30,98 50,105 75 Z","fill","#66BB6A"],["d","M115 75 C145 50,165 30,155 10 C135 30,122 50,115 75 Z","fill","#66BB6A"],["d",`
          M110 70
          C170 70, 205 110, 205 155
          C205 215, 160 235, 110 235
          C60 235, 15 215, 15 155
          C15 110, 50 70, 110 70
          Z`,"fill","#B455C5"],["d",`
          M110 82
          C145 82, 170 115, 170 155
          C170 195, 145 220, 110 228`,"fill","none","stroke","#DFA3EA","stroke-width","3","stroke-linecap","round"],["d",`
          M110 82
          C75 82, 50 115, 50 155
          C50 195, 75 220, 110 228`,"fill","none","stroke","#DFA3EA","stroke-width","3","stroke-linecap","round"],["d",`
          M110 78
          C124 105,130 140,130 190
          C130 210,124 223,110 230`,"fill","none","stroke","#EAC4F2","stroke-width","2"],["d",`
          M110 78
          C96 105,90 140,90 190
          C90 210,96 223,110 230`,"fill","none","stroke","#EAC4F2","stroke-width","2"],["d",`
          M98 232 L88 242
          M110 235 L110 246
          M122 232 L132 242`,"stroke","#A1887F","stroke-width","3","stroke-linecap","round"]],template:function(e,i){e&1&&I(0,ES,1,0,"app-chat-component")(1,CS,12,0,"div",0),e&2&&E(i.authService.isInitializing()?1:0)},dependencies:[Xs],styles:[".loader-container[_ngcontent-%COMP%]{display:flex;height:100vh;width:100%;align-items:center;justify-content:center;position:absolute;top:0;left:0;background-color:#fff;z-index:9999}.loader-container[_ngcontent-%COMP%]{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:#fff;z-index:9999}.onion-bounce[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;transform-origin:center bottom;animation:_ngcontent-%COMP%_bounce 1.2s infinite ease-in-out}.onion-bounce[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100px;height:auto}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:translateY(0) scaleY(.95)}20%{transform:translateY(-40px) scale(.95,1.05)}40%{transform:translateY(0) scale(1.1,.85)}55%{transform:translateY(-20px) scale(.98,1.02)}70%{transform:translateY(0) scale(1.05,.9)}85%{transform:translateY(-8px) scale(1)}}"]})};ih(Zs,s_).catch(n=>console.error(n));
