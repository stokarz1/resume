import { Component } from '@angular/core';
import { EmploymentService } from './employment.service';
import { EmploymentData } from './employment-data';

@Component({
  selector: 'my-app',
  template: `<header [employmentData]="employmentData"></header>
			<intro></intro>
			<employment [employmentData]="employmentData"></employment>
			<education></education>
			<footer></footer>
			`,
     providers: [EmploymentService]
})
export class AppComponent  { 
	errorMessage: string;
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
	}
		
/*
name = 'Angular'; 
employment: EmploymentData[];

constructor(private employmentService: EmploymentService) { }
  getEmployment(): void {
	 // this.employment = this.employmentService.getEmployment()
    //this.employmentService.getEmployment().then(employment => this.employment = employment);
  }
  
    ngOnInit(): void {
    this.getEmployment();
  }*/
}
