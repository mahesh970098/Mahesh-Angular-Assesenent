import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { feedback } from './login-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  feed :feedback;
  sumbitted =false;

  constructor(private router:Router) {

    this.feed=new feedback();
   }

  ngOnInit(): void {

     }

     addmessage(form:NgForm){

       localStorage.clear;
       this.router.navigate(['/home']);
     }


     login()
     {
       localStorage.clear;
       this.router.navigate(['/home']);
       localStorage.clear;
     }


}
