import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgRegistrationPageRoutingModule } from './org-registration-routing.module';

import { OrgRegistrationPage } from './org-registration.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    OrgRegistrationPageRoutingModule
  ],
  declarations: [OrgRegistrationPage]
})
export class OrgRegistrationPageModule {}
