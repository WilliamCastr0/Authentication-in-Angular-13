import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      role: ['']
    });
  }

  login(){
    let role = this.loginForm.value.role;
    if ( role === 'administrator' ){
      this.http.get<any>("http://localhost:3000/adminslogin")
      .subscribe({
        next: (res) => {
        const user = res.find((a: any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        })
  
        if( user ){
          alert("Welcome :D");
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        } else {
          alert("Incorrect credentials");
        }
      },
        error: (e) => {
          alert('Something went wrong!!');
        }});
    } else if ( role === 'employee' ){
      this.http.get<any>("http://localhost:3000/employeeslogin")
      .subscribe({
        next: (res) => {
        const user = res.find((b: any)=>{
          return b.email === this.loginForm.value.email && b.password === this.loginForm.value.password;
        })
  
        if( user){
          alert("Welcome :D");
          this.loginForm.reset();
          this.router.navigate(['employeedashboard']);
        } else {
          alert("Incorrect credentials");
        }
      },
        error: (e) => {
          alert('Something went wrong!!');
        }}); 
    } 
  }
}
