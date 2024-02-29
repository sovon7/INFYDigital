import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersdetailsRoutingModule } from './customersdetails-routing.module';
import { CustomersdetailsComponent } from './customersdetails.component';
import { DigitalIntroductionComponent } from './digital-introduction/digital-introduction.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersdetailsComponent,
    DigitalIntroductionComponent,
    ForgotComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CustomersdetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersdetailsModule { }
