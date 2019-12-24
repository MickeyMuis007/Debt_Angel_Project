import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', './welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  ngOnInit() {
    const advert = document.getElementById("advert-display");
    advert.classList.add("advert-display")
  }
  
}