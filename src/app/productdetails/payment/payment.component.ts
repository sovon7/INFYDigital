import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../products/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  productListToDisplay: Product[] = []
  paymentForm!: FormGroup;
  totalAmount!: number

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    let amount: any = localStorage.getItem('totalAmount');
    this.totalAmount = JSON.parse(amount);
  }

  payment() {
    Swal.fire("Thank You...", this.totalAmount + ' Rupees Payed Successful', 'success');

    /* After Payment, Cart should be Empty  
    *               &
    *  if again hit button then it will go to Product page
    */

    let oldCart: any = localStorage.getItem('cart');
    let cart = JSON.parse(oldCart);
    localStorage.removeItem('cart');

    this.productListToDisplay = cart;
    if (cart == null || this.productListToDisplay.length == 0) {
      Swal.fire('No product', 'Back to product', 'error');
      this.router.navigate(['../../fooddetails/products'])
    }
  }
}
