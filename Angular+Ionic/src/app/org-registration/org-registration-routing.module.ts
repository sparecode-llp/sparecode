import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgRegistrationPage } from './org-registration.page';

const routes: Routes = [
  {
    path: '',
    component: OrgRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgRegistrationPageRoutingModule {}
