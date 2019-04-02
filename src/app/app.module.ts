import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ForBusinessesComponent } from './for-businesses/for-businesses.component';
import { ForCouplesComponent } from './for-couples/for-couples.component';
import { ResearchComponent } from './research/research.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ArammuConsultantsComponent } from './arammu-consultants/arammu-consultants.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		WhatWeDoComponent,
		ForBusinessesComponent,
		ForCouplesComponent,
		ResearchComponent,
		WhoWeAreComponent,
		ArammuConsultantsComponent,
		BlogComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		FormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
