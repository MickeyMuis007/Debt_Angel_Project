
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { LeadService } from "../services/lead.service";
import { Lead } from '../shared/models/lead.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private leadService: LeadService,
    private router: Router
    ) { }

  panelOpenState = false;
  registrationFormGroup: FormGroup;
  myControl = new FormControl();
  isLoading = false;

  options: string[] = ['Call', 'SMS', 'WhatsApp', 'Email'];
  option: string = "Call";

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), , Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), , Validators.maxLength(50)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
              Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/)]),
      alternativePhoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10),
              Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/)]),
      methodOfCommunication: new FormControl('', []),
      termsAndCondition: new FormControl('', [Validators.pattern("true"), Validators.required])
    });

    const advert = document.getElementById("advert-display");
    advert.classList.remove("advert-display");
  }

  public hasError = (controlName: string, errorName: string): boolean => {
    return this.registrationFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(form) {
    console.log();
    if(form.valid) {
      const lead = form.value as Lead;
      console.log("Lead:", lead);
      
      this.isLoading = true;
      this.leadService.addLead(lead).subscribe(result => {
        console.log("Succesfully added!", result);
        form.resetForm();
        this.isLoading = false;
        this.router.navigate(['/welcome']);
      }, err => {
        console.log("Failed to add lead:", err);
        this.isLoading = false;
      });
    } else {
      console.log("Form not valid");
    }
  }

}
