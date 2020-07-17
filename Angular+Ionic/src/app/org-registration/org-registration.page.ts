import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Organization } from '../models/organization';
import { ConfirmedValidator } from '../models/confirmedValidator';

@Component({
  selector: 'app-org-registration',
  templateUrl: './org-registration.page.html',
  styleUrls: ['./org-registration.page.scss'],
})
export class OrgRegistrationPage implements OnInit {

  org = {} as Organization;

  orgRegistrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.orgRegistrationForm = formBuilder.group({
      orgName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      orgType: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      noOfEmployees: ['', Validators.required],
      email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      number: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$'), Validators.required])],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: ConfirmedValidator('password','confirmPassword')
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.org.orgName);
    console.log(this.org.orgType);
    console.log(this.org.noOfEmployees);
    console.log(this.org.email);
    console.log(this.org.firstName);
    console.log(this.org.lastName);
    console.log(this.org.number);
    console.log(this.org.password);
  }

}
