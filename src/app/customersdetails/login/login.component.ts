import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isAuthenticated!: boolean;
  submitted = false;
  username!: string;
  signed: boolean = false;
  it!: string;
  localData: any;
  flag = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  show() {
    let data: any = localStorage.getItem('data');
    this.localData = JSON.parse(data);

    for (let i = 0; i < this.localData.length; i++) {
      console.log(this.localData[i]);
    }
  }

  login(name: any, password: any) {
    this.submitted = true;
    this.username = name;

    // if(name=="sm12@gmail.com" && password=="sovon123@")
    // {
    //   Swal.fire("Thank You...",'Login Successful','success');
    //   this.isAuthenticated = true;
    //   this.router.navigate(["../../fooddetails/home"]); 
    // }

    let data: any = localStorage.getItem('data');
    this.localData = JSON.parse(data);

    for (let i = 0; i < this.localData.length; i++) {
      if (name == this.localData[i].emailid && password == this.localData[i].password) {
        Swal.fire("Thank You...", 'Registration Successful', 'success');
        this.isAuthenticated = true;
        this.router.navigate(["../productdetails/home"]);
        this.flag = true
      }
    }

    if (this.flag == false) {
      Swal.fire("Oops...", 'Please Provide Correct Username/Password', 'error');
      this.isAuthenticated = false;
      // this.router.navigate(["../customer/deny"]);
    }

  }

}
