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
var repo_service_1 = require("./repo.service");
var RepoComponent = (function () {
    function RepoComponent(repoService) {
        this.repoService = repoService;
    }
    RepoComponent.prototype.loadRepos = function () {
        var _this = this;
        this.repoService.getUsers()
            .subscribe(function (repos) { return _this.repos = repos; }, function (error) { return _this.errorMessage = error; });
    };
    RepoComponent.prototype.onFailurLoad = function (error) {
        this.errorMessage = error;
        console.log(error);
    };
    RepoComponent.prototype.onSuccessLoad = function (repos) {
        this.repos = repos;
        console.log(this.repos);
    };
    RepoComponent.prototype.ngOnInit = function () {
        this.loadRepos();
    };
    return RepoComponent;
}());
RepoComponent = __decorate([
    core_1.Component({
        selector: 'repo-component',
        templateUrl: 'app/components/repo/repo.component.html',
        styleUrls: ['app/components/repo/repo.component.css'],
        providers: [repo_service_1.RepoService]
    }),
    __metadata("design:paramtypes", [repo_service_1.RepoService])
], RepoComponent);
exports.RepoComponent = RepoComponent;
//# sourceMappingURL=repo.component.js.map