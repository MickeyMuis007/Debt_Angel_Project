import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { AboutComponent } from './about/about.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [TermsAndConditionsComponent]
})
export class AppRoutingModule { }

export const RouteComponents = [
  HomeComponent,
  ApplicationComponent,
  AboutComponent
]
