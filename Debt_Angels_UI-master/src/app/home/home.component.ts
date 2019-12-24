import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onApplication(): void {
   this.router.navigate(['application']);
  }
}
