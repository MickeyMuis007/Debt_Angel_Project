import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ],
  declarations: [TermsAndConditionsComponent]
})
export class AppRoutingModule { }

export const RouteComponents = [
  HomeComponent
]
