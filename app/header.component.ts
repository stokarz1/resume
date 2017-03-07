import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';

import { EmploymentData } from './employment-data';

@Component({
  selector: 'header',
  templateUrl: 'app/header.component.html'
})

export class HeaderComponent { 
	@Input() employmentData: EmploymentData;

	
	ngAfterViewChecked() {
		 console.log(this.employmentData); 
	}
	
	searchTech(techName){
		console.log(techName);
		console.log(techName.length);
		_.each(this.employmentData, function(job){
			console.log(job);
			_each(job.task function(task){}
				console.log(task);
			)
		});
	}
	

	
}