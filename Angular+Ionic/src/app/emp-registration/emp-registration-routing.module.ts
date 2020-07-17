import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpRegistrationPage } from './emp-registration.page';

const routes: Routes = [
  {
    path: '',
    component: EmpRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpRegistrationPageRoutingModule {}
