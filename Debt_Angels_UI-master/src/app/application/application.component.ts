import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  private isViewApplicationForm: boolean = false;
  private myControl = new FormControl();
  private options: string[] = ['Call', 'SMS', 'WhatsApp', 'Email'];

  panelOpenState = false;
  
  constructor() { }

  ngOnInit() {
  }

}
