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
var core_2 = require("@angular/core");
var packageDataService_1 = require("../common/packageDataService");
var SimpleSalesforceConnectComponent = (function () {
    function SimpleSalesforceConnectComponent(_packageDataService) {
        this._packageDataService = _packageDataService;
        this.URL_SimpleSalesforceConnect = './app/simplesalesforceconnect/simplesalesforceconnect.json';
    }
    SimpleSalesforceConnectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._packageDataService
            .getExtensionsData(this.URL_SimpleSalesforceConnect)
            .then(function (data) {
            _this.pData = data;
        })
            .catch(function (err) {
            console.log(err); // dont do this, show the user a nice message
        });
    };
    return SimpleSalesforceConnectComponent;
}());
SimpleSalesforceConnectComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'app-simplesalesforceconnect',
        templateUrl: './simplesalesforceconnect.component.html'
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [packageDataService_1.PackageDataService])
], SimpleSalesforceConnectComponent);
exports.SimpleSalesforceConnectComponent = SimpleSalesforceConnectComponent;
//# sourceMappingURL=simplesalesforceconnect.component.js.map