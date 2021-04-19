import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '',pathMatch:'full', redirectTo :'login'},
  {path : 'login' , component : LoginComponent },
  {path : 'admin' , component : AdminComponent ,canActivate: [AuthGuard] },
  {path : 'employee' , component : EmployeeComponent},
  {path : 'CreateEMP', component : CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
