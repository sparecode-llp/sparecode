import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpRegistrationPageRoutingModule } from './emp-registration-routing.module';

import { EmpRegistrationPage } from './emp-registration.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EmpRegistrationPageRoutingModule
  ],
  declarations: [EmpRegistrationPage]
})
export class EmpRegistrationPageModule {}
