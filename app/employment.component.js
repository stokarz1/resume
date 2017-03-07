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
var employment_data_1 = require('./employment-data');
var EmploymentComponent = (function () {
    function EmploymentComponent() {
    }
    /*errorMessage: string;
    employmentData: EmploymentData[];
    mode = 'Observable';
    
    constructor (private employmentService: EmploymentService) {}

    ngOnInit() {
    this.getEmployment();
    //console.log(employmentData);

    }

    getEmployment() {
    this.employmentService.getEmployment()
        .subscribe(
        employmentData => this.employmentData = employmentData,
        error =>  this.errorMessage = <any>error);
  }*/
    EmploymentComponent.prototype.ngAfterViewChecked = function () {
        //console.log(this.employmentData); 
    };
    EmploymentComponent.prototype.clickTask = function (jobIndex, taskIndex) {
        console.log(jobIndex);
        console.log(taskIndex);
        console.log(this.employmentData);
        this.employmentData[jobIndex].tasks[taskIndex].showTech = !this.employmentData[jobIndex].tasks[taskIndex].showTech;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employment_data_1.EmploymentData)
    ], EmploymentComponent.prototype, "employmentData", void 0);
    EmploymentComponent = __decorate([
        core_1.Component({
            selector: 'employment',
            templateUrl: 'app/employment.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], EmploymentComponent);
    return EmploymentComponent;
}());
exports.EmploymentComponent = EmploymentComponent;
//# sourceMappingURL=employment.component.js.map