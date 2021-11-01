import { NgForm } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { singup } from './singup-module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  sinup:singup;

  constructor(private router :Router) {
    this.sinup=new singup;
   }

  ngOnInit(): void {


  }

  addmessage(Nform:NgForm){
    localStorage.clear();
    this.router.navigate(['/login'])
    alert("added");
  }
}



