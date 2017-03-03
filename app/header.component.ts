import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';

import { EmploymentData } from './employment-data';

@Component({
  selector: 'header',
  templateUrl: 'app/header.component.html'
})

export class HeaderComponent { 
	@Input() employmentData: employmentData;

	
	ngAfterViewChecked() {
		 console.log(this.employmentData); 
	}
}