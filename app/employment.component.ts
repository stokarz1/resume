import { Component, Input } from '@angular/core';
import { EmploymentData } from './employment-data';

@Component({
  selector: 'employment',
  templateUrl: 'app/employment.component.html',
})
export class EmploymentComponent { 
	@Input() employmentData: EmploymentData;
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

	  ngAfterViewChecked() {
		 //console.log(this.employmentData); 
	  }
	
	clickTask(jobIndex, taskIndex) {
		console.log(jobIndex);
		console.log(taskIndex);
		console.log(this.employmentData);
		this.employmentData[jobIndex].tasks[taskIndex].showTech = !this.employmentData[jobIndex].tasks[taskIndex].showTech;
	}
  
}