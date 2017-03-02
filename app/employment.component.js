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
var EmploymentComponent = (function () {
    function EmploymentComponent(employmentService) {
        this.employmentService = employmentService;
        this.mode = 'Observable';
    }
    EmploymentComponent.prototype.ngOnInit = function () {
        this.getEmployment();
        //console.log(employmentData);
    };
    EmploymentComponent.prototype.getEmployment = function () {
        var _this = this;
        this.employmentService.getEmployment()
            .subscribe(function (employmentData) { return _this.employmentData = employmentData; }, function (error) { return _this.errorMessage = error; });
    };
    EmploymentComponent.prototype.ngAfterViewChecked = function () {
        console.log(this.employmentData);
    };
    EmploymentComponent.prototype.clickTask = function (jobIndex, taskIndex) {
        console.log(jobIndex);
        console.log(taskIndex);
        console.log(this.employmentData);
        this.employmentData[jobIndex].tasks[taskIndex].showTech = !this.employmentData[jobIndex].tasks[taskIndex].showTech;
    };
    EmploymentComponent = __decorate([
        core_1.Component({
            selector: 'employment',
            templateUrl: 'app/employment.component.html',
            providers: [employment_service_1.EmploymentService]
        }), 
        __metadata('design:paramtypes', [employment_service_1.EmploymentService])
    ], EmploymentComponent);
    return EmploymentComponent;
}());
exports.EmploymentComponent = EmploymentComponent;
//# sourceMappingURL=employment.component.js.map