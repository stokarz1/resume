import { Component } from '@angular/core';
//import { EmploymentService } from './employment.service';
//import { EmploymentData }                 from './employment-data';


@Component({
  selector: 'my-app',
  template: `<header></header>
			<intro></intro>
			<employment></employment>
			<education></education>
			<footer></footer>
			`,
})
export class AppComponent  { /*
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
