import { SingupComponent } from './singup/singup.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
export const appRoutes : Routes =[

{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'dashboard',component:DashboardComponent},
{path:'about',component:AboutComponent},
{path:'singup',component:SingupComponent},
{path:'',redirectTo:'/login',pathMatch:'full'}

]
