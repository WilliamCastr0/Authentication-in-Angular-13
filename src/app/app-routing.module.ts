import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdministratorDashboardComponent } from './administrator-dashboard/administrator-dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: AdministratorDashboardComponent
  },
  {
    path: 'employeedashboard',
    component: EmployeeDashboardComponent
  },
  {
    path: 'viewemployee/:id',
    component: EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
