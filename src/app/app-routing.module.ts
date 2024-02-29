import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'customerdetails/intro',pathMatch:'full'
  },
  { 
    path: 'customerdetails', 
    loadChildren: () => import('./customersdetails/customersdetails.module').then(m => m.CustomersdetailsModule) 
  }, 
  { 
    path: 'productdetails', 
    loadChildren: () => import('./productdetails/productdetails.module').then(m => m.ProductdetailsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
