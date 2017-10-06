webpackJsonp([17],{156:function(t,e,a){var s,l,n;s=a(2),l=a(5).default,n=s.module("bots",[]),t.exports=n.name,a(387)},323:function(t,e,a){e=t.exports=a(4)(),e.push([t.id,"",""])},387:function(t,e,a){var s,l,n,r,c;l=a(156),n=angular.module(l),c=a(484),r="bots",s=function(){function t(t,e,a){"ngInject";this.scope=t,this.rootScope=e,this.injector=a}return t.$inject=["$scope","$rootScope","$injector"],t}(),n.component(r,{template:c,controller:s,bindings:{bots:"<"}}),t.exports=r,a(539)},484:function(t,e){t.exports="<div class=\"container projects-container\"><ol class=\"breadcrumb pull-right\"><li><a href=/dashboard>{{'DASHBOARD' | translate}}</a></li><li class=active>{{'BOTS' | translate}}</li></ol><h1 class=page-header>{{'BOTS' | translate}}</h1><h4 class=\"text-center text-thin\" ng-if=\"!($ctrl.bots.length > 0)\">{{'NO_BOTS' | translate}}</h4><div class=row ng-if=\"$ctrl.bots.length > 0\"><div class=\"col-xs-12 col-sm-6 col-md-4\" ng-repeat=\"bot in $ctrl.bots\"><div class=\"panel panel-default panel-inverse\"><div class=panel-heading><div class=panel-heading-btn><a href=\"javascript://\" class=\"btn btn-success btn-xs not-clickable\" ng-if=bot.online>{{'ONLINE' | translate}}</a> <a href=\"javascript://\" class=\"btn btn-danger btn-xs not-clickable\" ng-if=!bot.online>{{'OFFLINE' | translate}}</a></div><h4 class=panel-title>{{'BOT' | translate}} #{{bot.steam_id}}</h4></div><div class=table-responsive><table class=\"table table-hover text-center\"><tbody><tr><td class=text-left>{{'ACTIVE_TASKS' | translate}}</td><td class=text-right>{{bot.active_tasks}}</td></tr><tr><td class=text-left>CS:GO {{'ITEMS_COUNT' | translate}}</td><td class=text-right>{{bot.items_count['730'] || 0}}</td></tr><tr><td class=text-left>DOTA2 {{'ITEMS_COUNT' | translate}}</td><td class=text-right>{{bot.items_count['570'] || 0}}</td></tr><tr><td class=text-left>TF2 {{'ITEMS_COUNT' | translate}}</td><td class=text-right>{{bot.items_count['440'] || 0}}</td></tr></tbody></table></div></div></div></div><div class=\"row hidden\"><div class=col-xs-12><div class=\"panel panel-inverse\"><div class=panel-heading><h4 class=panel-title>{{'BOTS' | translate}} ({{$ctrl.bots.length}})</h4></div><div class=panel-body><div class=table-responsive ng-if=\"$ctrl.bots.length.length > 0\"><table class=\"table table-hover text-center\"><thead><tr><td>{{'ID' | translate}}</td><td>{{'PROJECT_NAME' | translate}}</td><td>{{'PROJECT_TYPE' | translate}}</td><td>{{'BALANCE' | translate}}</td><td>{{'PLAN' | translate}}</td><td>{{'STATE' | translate}}</td></tr></thead><tbody><tr class=clickable ng-repeat=\"project in $ctrl.projects.projects\" ui-sref=\"app.main.dashboard.projects.details({projectId: project.id, page: null})\"><td>{{project.id}}</td><td>{{project.name}}</td><td>{{'PROJECT_TYPES.' + project.type | translate}}</td><td>{{project.balance}}</td><td><span ng-if=project.plan>{{'PROJECT_PLANS.' + project.plan.name | translate}}</span></td><td>{{'PROJECT_STATES.' + project.state | translate}}</td></tr></tbody></table></div></div></div></div></div></div>"},539:function(t,e,a){var s=a(323);"string"==typeof s&&(s=[[t.id,s,""]]);a(3)(s,{});s.locals&&(t.exports=s.locals)}});