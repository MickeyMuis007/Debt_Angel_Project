import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = ["../assets/images/blocks2.jpg",
   "../assets/images/blocks3.jpg",
    "../assets/images/blocks1.jpg",
    "../assets/images/image5.jpg"
  ];
}