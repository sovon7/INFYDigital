import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails.component';
import { AboutComponent } from './about/about.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductdetailsComponent, 
    children:[
      {path:'about',component:AboutComponent},
      {path:'addtocart',component:AddToCartComponent},
      {path:'home',component:HomeComponent},
      {path:'payment',component:PaymentComponent},
      {path:'products',component:ProductsComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdetailsRoutingModule { }
