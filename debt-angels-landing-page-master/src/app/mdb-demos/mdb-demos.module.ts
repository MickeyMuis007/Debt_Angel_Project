import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { CarouselVideoMaskCaptionComponent } from './components/carousel-video-mask-caption/carousel-video-mask-caption.component';

@NgModule({
  declarations: [
    CarouselVideoMaskCaptionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  exports: [CarouselVideoMaskCaptionComponent]
})
export class MdbDemosModule { }
