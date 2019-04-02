import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ForBusinessesComponent } from './for-businesses/for-businesses.component';
import { ForCouplesComponent } from './for-couples/for-couples.component';
import { ResearchComponent } from './research/research.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ArammuConsultantsComponent } from './arammu-consultants/arammu-consultants.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'what-we-do', component: WhatWeDoComponent },
	{ path: 'for-businesses', component: ForBusinessesComponent },
	{ path: 'for-couples', component: ForCouplesComponent },
	{ path: 'research', component: ResearchComponent },
	{ path: 'who-we-are', component: WhoWeAreComponent },
	{ path: 'arammu-consultants', component: ArammuConsultantsComponent },
	{ path: 'blog', component: BlogComponent }
];
	
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
