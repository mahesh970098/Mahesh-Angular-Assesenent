import { Component, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver}from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {


  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  event!:Event

  constructor( private observer :BreakpointObserver,private router :Router) { }


  onToggleColorTheme(event: { detail: { checked: any; }; }) {
    console.log(event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme', 'light');
    }

  }

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
