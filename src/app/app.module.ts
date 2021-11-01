import { DashboardComponent } from './dashboard/dashboard.component';
import { appRoutes } from './routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NavbarComponent } from './navbar/navbar.component';


import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    NavbarComponent,
    HomeComponent,

    FooterComponent,
    AboutComponent,
    DashboardComponent

  ],
 imports: [
 BrowserModule,RouterModule.forRoot(appRoutes),
 FormsModule,
 BrowserAnimationsModule,
MatSidenavModule, AppRoutingModule,
BrowserAnimationsModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatDividerModule,
MatTableModule,
MatSortModule,
MatPaginatorModule,




 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
