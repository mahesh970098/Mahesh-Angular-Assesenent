import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { feedback } from './login-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  feed :feedback;
  sumbitted =false;

  constructor() {

    this.feed=new feedback();
   }

  ngOnInit(): void {

     }

     addmessage(form:NgForm){
       alert("added")
     }


}
