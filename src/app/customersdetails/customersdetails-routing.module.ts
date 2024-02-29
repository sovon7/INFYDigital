import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersdetailsComponent } from './customersdetails.component';
import { DigitalIntroductionComponent } from './digital-introduction/digital-introduction.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersdetailsComponent,
    children: [
      { path: 'intro', component: DigitalIntroductionComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersdetailsRoutingModule { }
