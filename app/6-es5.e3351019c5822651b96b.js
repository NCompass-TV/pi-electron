!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Kw5A:function(t,i,s){"use strict";s.r(i),s.d(i,"PlayerModule",function(){return L});var o,c,a,l,r,u=s("ofXK"),p=s("tyNb"),f=s("fXoL"),_=((o=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=f.Ab({type:o,selectors:[["app-layout"]],decls:1,vars:0,template:function(e,t){1&e&&f.Hb(0,"router-outlet")},directives:[p.d],styles:[""]}),o),y=s("jifJ"),h=s("AytR"),d=s("IStn"),b=s("TLjN"),g=s("mR6p"),v=function(e){return e[e.webm=1]="webm",e}({}),m=function(e){return e[e.jpeg=1]="jpeg",e[e.jpg=2]="jpg",e[e.jfif=3]="jfif",e[e.png=4]="png",e[e.webp=5]="webp",e}({}),k=function(e){return e[e.feed=1]="feed",e}({}),w=((l=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e){if(e in v)return!0}}]),t}()).\u0275fac=function(e){return new(e||l)},l.\u0275pipe=f.Fb({name:"isVideo",type:l,pure:!0}),l),q=((a=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e){if(e in m)return!0}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275pipe=f.Fb({name:"isImage",type:a,pure:!0}),a),F=((c=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e){if(e in k)return!0}}]),t}()).\u0275fac=function(e){return new(e||c)},c.\u0275pipe=f.Fb({name:"isFeed",type:c,pure:!0}),c),C=s("jhN1"),I=((r=function(){function t(n){e(this,t),this._sanitizer=n}return n(t,[{key:"transform",value:function(e){return this._sanitizer.bypassSecurityTrustResourceUrl(e)}}]),t}()).\u0275fac=function(e){return new(e||r)(f.Gb(C.b))},r.\u0275pipe=f.Fb({name:"sanitize",type:r,pure:!0}),r),O=["video_player"];function j(e,t){if(1&e){var n=f.Mb();f.Jb(0),f.Lb(1,"video",1,2),f.Sb("ended",function(){return f.bc(n),f.Ub().onVideoEnded()})("error",function(e){return f.bc(n),f.Ub().mediaFileError(e)}),f.Kb(),f.Ib()}if(2&e){var i=f.Ub();f.wb(1),f.Xb("src",i.asset_url,f.dc)("muted",!0)("loop",i.one_asset_playlist)}}function x(e,t){if(1&e&&(f.Jb(0),f.Hb(1,"img",3),f.Ib()),2&e){var n=f.Ub();f.wb(1),f.Xb("src",n.asset_url,f.dc)}}function z(e,t){if(1&e&&(f.Jb(0),f.Hb(1,"iframe",4),f.Vb(2,"sanitize"),f.Ib()),2&e){var n=f.Ub();f.wb(1),f.Xb("src",f.Wb(2,1,n.asset_url),f.cc)}}var P,T,X=((P=function(){function t(n){e(this,t),this._player=n,this.playlist_id="",this.is_fullscreen=new f.n,this.playlist_content=[],this.one_asset_playlist=!1,this.asset_url="",this.asset_duration=0,this.asset_filetype="",this.asset_sequence=0}return n(t,[{key:"ngOnInit",value:function(){this.getPlaylistData()}},{key:"getPlaylistData",value:function(){var e=this;this._player.get_playlist_by_id(this.playlist_id).subscribe(function(t){e.playlist_content=t.sort(function(e,t){return e.sequence.toString().localeCompare(t.sequence.toString())}),e.one_asset_playlist=1==e.playlist_content.length,e.checkFileType(e.asset_sequence)})}},{key:"checkFileType",value:function(e){this.playlist_content[e].file_type in v?this.displayVideo(this.playlist_content[e]):this.playlist_content[e].file_type in m?this.displayImage(this.playlist_content[e]):this.playlist_content[e].file_type in k&&this.displayFeed(this.playlist_content[e])}},{key:"displayVideo",value:function(e){this.asset_url="".concat(h.a.local.assets,"/").concat(e.file_name),this.asset_filetype=e.file_type,this.is_fullscreen.emit(1==e.is_fullscreen)}},{key:"displayImage",value:function(e){var t=this;this.asset_url="".concat(h.a.local.assets,"/").concat(e.file_name),this.asset_filetype=e.file_type,this.is_fullscreen.emit(1==e.is_fullscreen),this.one_asset_playlist||setTimeout(function(){t.asset_sequence+=1,t.checkFileType(t.asset_sequence<t.playlist_content.length?t.asset_sequence:t.asset_sequence=0)},1e3*e.duration||2e4)}},{key:"displayFeed",value:function(e){var t=this;this.asset_url="".concat(h.a.local.assets,"/").concat(e.content_id),this.asset_filetype=e.file_type,console.log("Asset Sequence",this.asset_sequence),this.is_fullscreen.emit(1==e.is_fullscreen),this.one_asset_playlist||setTimeout(function(){t.asset_sequence+=1,t.checkFileType(t.asset_sequence<t.playlist_content.length?t.asset_sequence:t.asset_sequence=0)},1e3*e.duration||2e4)}},{key:"onVideoEnded",value:function(){this.one_asset_playlist||(this.asset_sequence+=1,this.checkFileType(this.asset_sequence<this.playlist_content.length?this.asset_sequence:this.asset_sequence=0))}},{key:"mediaFileError",value:function(e){console.log(e)}}]),t}()).\u0275fac=function(e){return new(e||P)(f.Gb(b.a))},P.\u0275cmp=f.Ab({type:P,selectors:[["app-playlist"]],viewQuery:function(e,t){var n;1&e&&f.kc(O,!0),2&e&&f.ac(n=f.Tb())&&(t.video_player=n.first)},inputs:{playlist_id:"playlist_id"},outputs:{is_fullscreen:"is_fullscreen"},decls:6,vars:9,consts:[[4,"ngIf"],["autoplay","",3,"src","muted","loop","ended","error"],["video_player",""],[3,"src"],["frameborder","0",3,"src"]],template:function(e,t){1&e&&(f.fc(0,j,3,3,"ng-container",0),f.Vb(1,"isVideo"),f.fc(2,x,2,1,"ng-container",0),f.Vb(3,"isImage"),f.fc(4,z,3,3,"ng-container",0),f.Vb(5,"isFeed")),2&e&&(f.Xb("ngIf",f.Wb(1,3,t.asset_filetype)),f.wb(2),f.Xb("ngIf",f.Wb(3,5,t.asset_filetype)),f.wb(2),f.Xb("ngIf",f.Wb(5,7,t.asset_filetype)))},directives:[u.j],pipes:[w,q,F,I],styles:["video[_ngcontent-%COMP%]{background-color:#000;-o-object-fit:fill;object-fit:fill}iframe[_ngcontent-%COMP%], img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{width:100%;height:100%}iframe[_ngcontent-%COMP%]{border:0}"]}),P),S=function(e,t,n,i,s,o){return{background:e,"width.px":t,"height.px":n,"left.px":i,"top.px":s,"z-index":o}},V=((T=function(){function t(){e(this,t),this.background="",this.height="",this.order=0,this.playlist_id="",this.playlist_type="",this.pos_x="",this.pos_y="",this.width="",this.is_fullscreen=!1}return n(t,[{key:"ngOnInit",value:function(){}},{key:"toFullscreen",value:function(e){this.is_fullscreen=1==e}}]),t}()).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=f.Ab({type:T,selectors:[["app-zone"]],inputs:{background:"background",height:"height",order:"order",playlist_id:"playlist_id",playlist_type:"playlist_type",pos_x:"pos_x",pos_y:"pos_y",width:"width"},decls:2,vars:10,consts:[[1,"zone",3,"ngStyle","ngClass"],[3,"playlist_id","is_fullscreen"]],template:function(e,t){1&e&&(f.Lb(0,"div",0),f.Lb(1,"app-playlist",1),f.Sb("is_fullscreen",function(e){return t.toFullscreen(e)}),f.Kb(),f.Kb()),2&e&&(f.Xb("ngStyle",f.Zb(3,S,t.background,t.width,t.height,t.pos_x,t.pos_y,t.order))("ngClass",t.is_fullscreen?"fullscreen":""),f.wb(1),f.Xb("playlist_id",t.playlist_id))},directives:[u.k,u.h,X],styles:[".zone[_ngcontent-%COMP%]{position:absolute;overflow:hidden}.fullscreen[_ngcontent-%COMP%]{background-color:#000;position:fixed;height:100%!important;width:100%!important;z-index:9!important;top:0!important;left:0!important}"]}),T);function M(e,t){if(1&e&&(f.Jb(0),f.Hb(1,"app-zone",2),f.Ib()),2&e){var n=t.$implicit;f.wb(1),f.Xb("background",n.background)("height",n.height)("order",n.zone_order)("playlist_id",n.playlist_id)("pos_x",n.x_pos)("pos_y",n.y_pos)("width",n.width)}}var U,A,J=[{path:"",component:_,children:[{path:"",component:(U=function(){function t(n,i,s){var o=this;e(this,t),this._player=n,this._router=i,this._setup=s,this.template_zones=[],this.socket_client=y.io(h.a.local.api,{query:"connecting_as=angular_play_page"}),this._setup.get_player_license().subscribe(function(e){console.log(e),o.pi_license=e[0]})}return n(t,[{key:"ngOnInit",value:function(){this.getTemplate(),this.socket_onConnect(),this.socket_onContentUpdate(),this.socket_onResetPlayer()}},{key:"ngOnDestroy",value:function(){this.socket_client.disconnect()}},{key:"socket_onConnect",value:function(){this.socket_client.on(d.a.connection,function(){console.log("Connected to Local Socket Server")})}},{key:"socket_onContentUpdate",value:function(){var e=this;this.socket_client.on(d.a.content_update,function(){var t;e._router.navigate(["/getting-ready"],{queryParams:{license_key:null===(t=e.pi_license)||void 0===t?void 0:t.license_key}})})}},{key:"socket_onResetPlayer",value:function(){var e=this;this.socket_client.on(d.a.reset,function(){e._router.navigate(["/reset"])})}},{key:"getTemplate",value:function(){var e=this;this._player.get_template().subscribe(function(t){e.template_zones=t})}}]),t}(),U.\u0275fac=function(e){return new(e||U)(f.Gb(b.a),f.Gb(p.b),f.Gb(g.a))},U.\u0275cmp=f.Ab({type:U,selectors:[["app-play"]],decls:2,vars:1,consts:[["id","player",1,"player"],[4,"ngFor","ngForOf"],[3,"background","height","order","playlist_id","pos_x","pos_y","width"]],template:function(e,t){1&e&&(f.Lb(0,"div",0),f.fc(1,M,2,7,"ng-container",1),f.Kb()),2&e&&(f.wb(1),f.Xb("ngForOf",t.template_zones))},directives:[u.i,V],styles:[""]}),U)}]}],L=((A=function t(){e(this,t)}).\u0275mod=f.Eb({type:A}),A.\u0275inj=f.Db({factory:function(e){return new(e||A)},imports:[[u.b,p.c.forChild(J)]]}),A)}}])}();