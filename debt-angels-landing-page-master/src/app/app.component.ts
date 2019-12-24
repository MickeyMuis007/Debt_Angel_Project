import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  panelOpenState = false;
  registrationFormGroup: FormGroup;
  myControl = new FormControl();

  options: string[] = ['Call', 'SMS', 'WhatsApp', 'Email'];
  option: string = "Call";

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), , Validators.maxLength(50)]),
      middleName: new FormControl('', [Validators.minLength(2), , Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), , Validators.maxLength(50)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
              Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/)]),
      alternativePhoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10),
              Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/)]),
      methodOfCommunication: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string): boolean => {
    return this.registrationFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(formValue) {

  }

}
