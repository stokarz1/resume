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
var core_1 = require('@angular/core');
var employment_service_1 = require('./employment.service');
var AppComponent = (function () {
    function AppComponent(employmentService) {
        this.employmentService = employmentService;
        this.mode = 'Observable';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getEmployment();
        //console.log(employmentData);
    };
    AppComponent.prototype.getEmployment = function () {
        var _this = this;
        this.employmentService.getEmployment()
            .subscribe(function (employmentData) { return _this.employmentData = employmentData; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<header [employmentData]=\"employmentData\"></header>\n\t\t\t<intro></intro>\n\t\t\t<employment [employmentData]=\"employmentData\"></employment>\n\t\t\t<education></education>\n\t\t\t<footer></footer>\n\t\t\t",
            providers: [employment_service_1.EmploymentService]
        }), 
        __metadata('design:paramtypes', [employment_service_1.EmploymentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map