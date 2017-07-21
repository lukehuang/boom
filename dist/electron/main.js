module.exports=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=23)}([function(a){var b=a.exports={version:'2.4.0'};'number'==typeof __e&&(__e=b)},function(a){a.exports=require('path')},function(a){a.exports=function(a){try{return!!a()}catch(a){return!0}}},function(a){a.exports=require('electron')},function(a,b,c){a.exports=!c(2)(function(){return 7!=Object.defineProperty({},'a',{get:function(){return 7}}).a})},function(a){var b=a.exports='undefined'!=typeof window&&window.Math==Math?window:'undefined'!=typeof self&&self.Math==Math?self:Function('return this')();'number'==typeof __g&&(__g=b)},function(a){a.exports=function(a){return'object'==typeof a?null!==a:'function'==typeof a}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default={WIN_WIDTH:1e3,WIN_HEIGHT:600,VIEW_READY:'viewReady',INIT_CONFIG:'initConfig',SAVE_CONFIG:'saveConfig',CURRENT_ID:'currentId',MUSIC_PATH:'musicPath',LIKED_LIST:'likedList',PLAY_STYLE:'playStyle',PREFERENCES:'preferences'}},function(a){a.exports=require('fs')},function(a){a.exports=function(a){if(a==void 0)throw TypeError('Can\'t call method on  '+a);return a}},function(a,b,c){var d=c(5),e=c(0),f=c(32),g=c(36),h='prototype',i=function(a,b,c){var j,k,l,m=a&i.F,n=a&i.G,o=a&i.S,p=a&i.P,q=a&i.B,r=a&i.W,s=n?e:e[b]||(e[b]={}),t=s[h],u=n?d:o?d[b]:(d[b]||{})[h];for(j in n&&(c=b),c)k=!m&&u&&void 0!==u[j],k&&j in s||(l=k?u[j]:c[j],s[j]=n&&'function'!=typeof u[j]?c[j]:q&&k?f(l,d):r&&u[j]==l?function(d){var a=function(e,a,b){if(this instanceof d){switch(arguments.length){case 0:return new d;case 1:return new d(e);case 2:return new d(e,a);}return new d(e,a,b)}return d.apply(this,arguments)};return a[h]=d[h],a}(l):p&&'function'==typeof l?f(Function.call,l):l,p&&((s.virtual||(s.virtual={}))[j]=l,a&i.R&&t&&!t[j]&&g(t,j,l)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,a.exports=i},function(a,b,c){var d=c(31);a.exports=Object('z').propertyIsEnumerable(0)?Object:function(a){return'String'==d(a)?a.split(''):Object(a)}},function(a,b,c){var d=c(41),e=c(34);a.exports=Object.keys||function(a){return d(a,e)}},function(a){var b=Math.ceil,c=Math.floor;a.exports=function(a){return isNaN(a=+a)?0:(0<a?c:b)(a)}},function(a,b,c){var d=c(11),e=c(9);a.exports=function(a){return d(e(a))}},function(a,b,c){var d=c(9);a.exports=function(a){return Object(d(a))}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=function(a){const b=c(3),{app:d,shell:f,Menu:g}=b,h=[{label:'Edit',submenu:[{role:'undo'},{role:'redo'},{type:'separator'},{role:'cut'},{role:'copy'},{role:'paste'},{role:'pasteandmatchstyle'},{role:'delete'},{role:'selectall'}]},{label:'View',submenu:[{type:'separator'},{role:'resetzoom'},{role:'zoomin'},{role:'zoomout'},{type:'separator'},{role:'togglefullscreen'}]},{role:'window',submenu:[{role:'minimize'},{role:'close'}]},{role:'help',submenu:[{label:'Learn More',click(){f.openExternal('https://github.com/whxaxes/boom')}}]}];!1,'darwin'===process.platform&&(h.unshift({label:d.getName(),submenu:[{role:'about'},{type:'separator'},{role:'services',submenu:[]},{type:'separator'},{label:'Preferences',click(){a.webContents.send(e.default.PREFERENCES)}},{role:'hide'},{role:'hideothers'},{role:'unhide'},{type:'separator'},{role:'quit'}]}),h[1].submenu.push({type:'separator'},{label:'Speech',submenu:[{role:'startspeaking'},{role:'stopspeaking'}]}),h[3].submenu=[{role:'close'},{role:'minimize'},{role:'zoom'},{type:'separator'},{role:'front'}]);const i=g.buildFromTemplate(h);g.setApplicationMenu(i)};var d=c(7),e=function(a){return a&&a.__esModule?a:{default:a}}(d)},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}function e(a){if(!k.default.existsSync(a))return{};try{return JSON.parse(k.default.readFileSync(a))}catch(a){return{}}}Object.defineProperty(b,'__esModule',{value:!0});var f=c(24),g=d(f),h=c(1),i=d(h),j=c(8),k=d(j);const l=c(3);b.default=new class{constructor(){const a=(l.app||l.remote.app).getPath('userData');this.path=i.default.join(a,'config.json'),this.config=e(this.path)}get(a){return this.config[a]}set(a,b){this.config[a]=b,clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{try{k.default.writeFileSync(this.path,(0,g.default)(this.config))}catch(a){}},500)}}},function(a,b,c){a.exports={default:c(26),__esModule:!0}},function(a,b,c){a.exports={default:c(27),__esModule:!0}},function(a){a.exports=require('http')},function(a){a.exports=require('mediaserver')},function(a){a.exports=require('url')},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}function e(){y=new m.BrowserWindow({width:s.default.WIN_WIDTH,height:s.default.WIN_HEIGHT,useContentSize:!0,titleBarStyle:'hidden-inset',frame:!1,transparent:!0}),f((a)=>{m.ipcMain.on(s.default.VIEW_READY,(b)=>{b.sender.send(s.default.INIT_CONFIG,(0,j.default)(q.default.config,{port:a,allowKeys:A}))}),m.ipcMain.on(s.default.SAVE_CONFIG,(a,{key:b,value:c})=>{q.default.set(b,c)}),y.loadURL(z)}),y.on('closed',()=>{y=null}),(0,o.default)(y)}function f(a){const b=t.createServer(g).listen(0,()=>{a(b.address().port)});return b}function g(a,b){const c=decodeURIComponent(a.url),d=u.extname(c);if(0>A.indexOf(d))return h(b);const e=u.join(q.default.get(s.default.MUSIC_PATH),c.substring(1));return w.existsSync(e)?void x.pipe(a,b,e):h(b)}function h(a){a.writeHead(404),a.end('not found')}var i=c(18),j=d(i),k=c(19),l=d(k),m=c(3),n=c(16),o=d(n),p=c(17),q=d(p),r=c(7),s=d(r);const t=c(20),u=c(1),v=c(22),w=c(8),x=c(21);global.__static=c(1).join(__dirname,'/static').replace(/\\/g,'\\\\');let y;const z=`file://${__dirname}/index.html`;x.mediaTypes['.flac']='audio/flac';const A=[];(0,l.default)(x.mediaTypes).forEach((a)=>{0===x.mediaTypes[a].indexOf('audio')&&A.push(a)}),m.app.on('ready',e),m.app.on('window-all-closed',()=>{'darwin'!==process.platform&&m.app.quit()}),m.app.on('activate',()=>{null===y&&e()})},function(a,b,c){a.exports={default:c(25),__esModule:!0}},function(a,b,c){var d=c(0),e=d.JSON||(d.JSON={stringify:JSON.stringify});a.exports=function(){return e.stringify.apply(e,arguments)}},function(a,b,c){c(51),a.exports=c(0).Object.assign},function(a,b,c){c(52),a.exports=c(0).Object.keys},function(a){a.exports=function(a){if('function'!=typeof a)throw TypeError(a+' is not a function!');return a}},function(a,b,c){var d=c(6);a.exports=function(a){if(!d(a))throw TypeError(a+' is not an object!');return a}},function(a,b,c){var d=c(14),e=c(48),f=c(47);a.exports=function(a){return function(b,c,g){var h,i=d(b),j=e(i.length),k=f(g,j);if(a&&c!=c){for(;j>k;)if(h=i[k++],h!=h)return!0;}else for(;j>k;k++)if((a||k in i)&&i[k]===c)return a||k||0;return!a&&-1}}},function(a){var b={}.toString;a.exports=function(a){return b.call(a).slice(8,-1)}},function(a,b,c){var d=c(28);a.exports=function(e,f,a){return(d(e),void 0===f)?e:1===a?function(b){return e.call(f,b)}:2===a?function(c,a){return e.call(f,c,a)}:3===a?function(d,a,b){return e.call(f,d,a,b)}:function(){return e.apply(f,arguments)}}},function(a,b,c){var d=c(6),e=c(5).document,f=d(e)&&d(e.createElement);a.exports=function(a){return f?e.createElement(a):{}}},function(a){a.exports=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf']},function(a){var b={}.hasOwnProperty;a.exports=function(a,c){return b.call(a,c)}},function(a,b,c){var d=c(39),e=c(44);a.exports=c(4)?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},function(a,b,c){a.exports=!c(4)&&!c(2)(function(){return 7!=Object.defineProperty(c(33)('div'),'a',{get:function(){return 7}}).a})},function(a,b,c){'use strict';var d=c(12),e=c(40),f=c(42),g=c(15),h=c(11),i=Object.assign;a.exports=!i||c(2)(function(){var a={},b={},c=Symbol(),d='abcdefghijklmnopqrst';return a[c]=7,d.split('').forEach(function(a){b[a]=a}),7!=i({},a)[c]||Object.keys(i({},b)).join('')!=d})?function(a){for(var b=g(a),c=arguments.length,i=1,k=e.f,l=f.f;c>i;)for(var m,n=h(arguments[i++]),o=k?d(n).concat(k(n)):d(n),p=o.length,q=0;p>q;)l.call(n,m=o[q++])&&(b[m]=n[m]);return b}:i},function(a,b,c){var d=c(29),e=c(37),f=c(49),g=Object.defineProperty;b.f=c(4)?Object.defineProperty:function(a,b,c){if(d(a),b=f(b,!0),d(c),e)try{return g(a,b,c)}catch(a){}if('get'in c||'set'in c)throw TypeError('Accessors not supported!');return'value'in c&&(a[b]=c.value),a}},function(a,b){b.f=Object.getOwnPropertySymbols},function(a,b,c){var d=c(35),e=c(14),f=c(30)(!1),g=c(45)('IE_PROTO');a.exports=function(a,b){var c,h=e(a),j=0,i=[];for(c in h)c!=g&&d(h,c)&&i.push(c);for(;b.length>j;)d(h,c=b[j++])&&(~f(i,c)||i.push(c));return i}},function(a,b){b.f={}.propertyIsEnumerable},function(a,b,c){var d=c(10),e=c(0),f=c(2);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),'Object',g)}},function(a){a.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},function(a,b,c){var d=c(46)('keys'),e=c(50);a.exports=function(a){return d[a]||(d[a]=e(a))}},function(a,b,c){var d=c(5),e='__core-js_shared__',f=d[e]||(d[e]={});a.exports=function(a){return f[a]||(f[a]={})}},function(a,b,c){var d=c(13),e=Math.max,f=Math.min;a.exports=function(a,b){return a=d(a),0>a?e(a+b,0):f(a,b)}},function(a,b,c){var d=c(13),e=Math.min;a.exports=function(a){return 0<a?e(d(a),9007199254740991):0}},function(a,b,c){var d=c(6);a.exports=function(a,b){if(!d(a))return a;var c,e;if(b&&'function'==typeof(c=a.toString)&&!d(e=c.call(a)))return e;if('function'==typeof(c=a.valueOf)&&!d(e=c.call(a)))return e;if(!b&&'function'==typeof(c=a.toString)&&!d(e=c.call(a)))return e;throw TypeError('Can\'t convert object to primitive value')}},function(a){var b=0,c=Math.random();a.exports=function(a){return'Symbol('.concat(a===void 0?'':a,')_',(++b+c).toString(36))}},function(a,b,c){var d=c(10);d(d.S+d.F,'Object',{assign:c(38)})},function(a,b,c){var d=c(15),e=c(12);c(43)('keys',function(){return function(a){return e(d(a))}})}]);