import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver}from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor( private observer :BreakpointObserver,private router :Router) { }

  ngAfterViewInit(){
    this.observer.observe(['max-width:800px']).subscribe((res) =>{
      if (res.matches){
        this.sidenav.mode="over";
        this.sidenav.close();

      }else{
        this.sidenav.mode="side";
        this.sidenav.open();
      }


    })

  }

  SignOut(){
    localStorage.clear();
 //  clearInterval(this.quizService.second);

    this.router.navigate(['/login'])
    alert("Logged Out");
  }

}

