import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from "@angular/common/http";
import { MdbDemosModule } from './mdb-demos/mdb-demos.module';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DebtCounsellingComponent } from './components/debt-counselling/debt-counselling.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurProcessComponent } from './components/our-process/our-process.component';
import { DebtReviewComponent } from './components/debt-review/debt-review.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionaireComponent } from './components/questionaire/questionaire.component';
import { WelcomeBackgroundVideoCarouselComponent } from './components/welcome/welcome-background-video-carousel/welcome-background-video-carousel';
import { WelcomeSignUpAdvantageComponent } from './components/welcome/welcome-sign-up-advantage/welcome-sign-up-advantage.component';
import { WelcomeOurServicesComponent } from './components/welcome/welcome-our-services/welcome-our-services.component';
import { WelcomeOurProcessComponent } from './components/welcome/welcome-our-process/welcome-our-process.component';
import { WelcomeMdbProjectOurServicesComponent } from './components/welcome/welcome-mdb-project-our-services/welcome-mdb-project-our-services';
import { WelcomeBlogOurProcessComponent } from './components/welcome/welcome-blog-our-process/welcome-blog-our-process';
import { WelcomeDebtReviewComponent } from './components/welcome/welcome-debt-review/welcome-debt-review.component';
import { AdvertComponent } from './components/advert/advert.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents,
    TabsComponent,
    DebtCounsellingComponent,
    CarouselComponent,
    OurServicesComponent,
    OurProcessComponent,
    DebtReviewComponent,
    WelcomeComponent,
    NotFoundComponent,
    QuestionaireComponent,
    WelcomeBackgroundVideoCarouselComponent,
    WelcomeSignUpAdvantageComponent,
    WelcomeOurServicesComponent,
    WelcomeOurProcessComponent,
    WelcomeMdbProjectOurServicesComponent,
    WelcomeBlogOurProcessComponent,
    WelcomeDebtReviewComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule,
    MdbDemosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [QuestionaireComponent]
})
export class AppModule { }
