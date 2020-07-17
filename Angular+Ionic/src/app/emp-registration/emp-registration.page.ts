import { Component, OnInit } from '@angular/core';
import { Employees } from '../models/employees';
import { ConfirmedValidator } from '../models/confirmedValidator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.page.html',
  styleUrls: ['./emp-registration.page.scss'],
})
export class EmpRegistrationPage implements OnInit {

  empRegistrationForm: FormGroup;
  emp = {} as Employees;

  constructor(private formBuilder: FormBuilder) {
    this.empRegistrationForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      orgRegCode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.required])],
      empId: ['', Validators.compose([Validators.maxLength(10), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
      number: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$'), Validators.required])],
      designation: [''],
      department: [''],
      reportTo: [''],
      doj: [''],
      salary: [''],
      idProof: ['', Validators.required],
      idProofValue: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: ConfirmedValidator('password','confirmPassword')
    })
   }

  ngOnInit() {
  }

  onNext() {
    console.log(this.emp.firstName);
    console.log(this.emp.lastName);
    console.log(this.emp.orgRegCode);
    console.log(this.emp.empId);
    console.log(this.emp.email);
    console.log(this.emp.designation);
    console.log(this.emp.department);
    console.log(this.emp.reportTo);
    console.log(this.emp.number);
    console.log(this.emp.doj);
    console.log(this.emp.salary);
    console.log(this.emp.idProof);
    console.log(this.emp.idProofValue);
    console.log(this.emp.password);
    console.log(this.emp.confirmPassword)
  }

}
