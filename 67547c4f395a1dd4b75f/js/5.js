webpackJsonp([5],{157:function(e,t,a){var n,i,l;n=a(2),i=a(5).default,l=n.module("apiReference",[]),e.exports=l.name,a(380)},319:function(e,t,a){t=e.exports=a(4)(),t.push([e.id,"",""])},359:function(e,t,a){e.exports=a.p+"31f35e31646fb79c7efd0be7723a8b12.html"},360:function(e,t,a){e.exports=a.p+"d41d8cd98f00b204e9800998ecf8427e.html"},380:function(e,t,a){var n,i,l,s,o,r;l=a(157),i=angular.module(l),r=a(469),s={en:a(359),ru:a(360)},o="apiReference",n=function(){function e(e,t,a,n){this.rootScope=e,this.scope=t,this.injector=a,e.apiSections=[{name:"Deposit",link:"deposit"},{name:"Withdraw",link:"withdraw"},{name:"Get all items",link:"items"}],t.contentUrl=s[n.use()]}return e}(),i.component(o,{template:r,controller:n,bindings:{}}),e.exports=o,a(520)},469:function(e,t){e.exports="<ol class=\"breadcrumb pull-right\"><li><a href=/dashboard>{{'DASHBOARD' | translate}}</a></li><li><a href=/docs>{{'DOCUMENTATION' | translate}}</a></li><li class=active>{{'API_REFERENCE' | translate}}</li></ol><h1 class=page-header>{{'API_REFERENCE' | translate}} <small>{{'API_REFERENCE' | translate}}</small></h1><div class=row><div class=col-xs-12><div class=panel><div class=panel-body><div ng-include=contentUrl></div></div></div></div></div>"},520:function(e,t,a){var n=a(319);"string"==typeof n&&(n=[[e.id,n,""]]);a(3)(n,{});n.locals&&(e.exports=n.locals)}});