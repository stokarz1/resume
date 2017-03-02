import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { EmploymentData }                 from './employment-data';
import { requestOptionsProvider }   from './default-request-options.service';


import { AppComponent }  from './app.component';
import { EmploymentComponent } from './employment.component';
import {HeaderComponent} from './header.component';
import {IntroComponent} from './intro.component';
import {EducationComponent} from './education.component';
import {FooterComponent} from './footer.component';

@NgModule({
	imports:      [ BrowserModule,
					FormsModule,
					HttpModule,
					JsonpModule	],
	declarations: [ AppComponent,
					EmploymentComponent,
					HeaderComponent,
					IntroComponent,
					EducationComponent,
					FooterComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
