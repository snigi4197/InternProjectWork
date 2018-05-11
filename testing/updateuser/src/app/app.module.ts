import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './auth.service';
import { Http, HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
  AppComponent,
  DashboardComponent,
  UpdateComponent,
    
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule,
     RouterModule,
     ReactiveFormsModule,
     RouterModule.forRoot
        (
         [
          {path:'',component:DashboardComponent},
          {path:'update',component:UpdateComponent}        
          ]
      )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
