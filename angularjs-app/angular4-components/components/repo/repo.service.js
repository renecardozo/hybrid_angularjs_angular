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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var RepoService = (function () {
    function RepoService(http) {
        this.http = http;
        this.repoUrl = 'https://api.github.com/users';
    }
    RepoService.prototype.getUsers = function () {
        return this.http.get(this.repoUrl)
            .map(this.onSuccessResponse)
            .catch(this.onFailurResponse);
    };
    RepoService.prototype.onSuccessResponse = function (response) {
        return response.json();
    };
    RepoService.prototype.onFailurResponse = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    return RepoService;
}());
RepoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RepoService);
exports.RepoService = RepoService;
//# sourceMappingURL=repo.service.js.map