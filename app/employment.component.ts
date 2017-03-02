import { Component } from '@angular/core';
import { EmploymentService } from './employment.service';
import { EmploymentData }                 from './employment-data';

@Component({
  selector: 'employment',
  templateUrl: 'app/employment.component.html',
  providers: [EmploymentService]
})
export class EmploymentComponent { 
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

  ngAfterViewChecked() {
	 console.log(this.employmentData); 
  }
	
	clickTask(identifier) {
		console.log(identifier);
	}
  
}