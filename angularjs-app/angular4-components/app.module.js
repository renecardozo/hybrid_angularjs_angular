"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var static_1 = require("@angular/upgrade/static");
var app_component_1 = require("./app.component");
var repo_component_1 = require("./components/repo/repo.component");
var AppModule = (function () {
    function AppModule(upgrade) {
        this.upgrade = upgrade;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            static_1.UpgradeModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            repo_component_1.RepoComponent
        ],
        entryComponents: [
            app_component_1.AppComponent,
            repo_component_1.RepoComponent
        ]
    }),
    __metadata("design:paramtypes", [static_1.UpgradeModule])
], AppModule);
exports.AppModule = AppModule;
/*
 * Downgrading component
 */
angular.module('myApp')
    .directive('appComponent', static_1.downgradeComponent({ component: app_component_1.AppComponent }))
    .directive('repoComponent', static_1.downgradeComponent({ component: repo_component_1.RepoComponent }));
//# sourceMappingURL=app.module.js.map