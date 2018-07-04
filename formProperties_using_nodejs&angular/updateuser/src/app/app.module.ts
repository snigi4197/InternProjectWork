import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AuthService } from './auth.service';
import {AuthService} from './auth.service';
import {SecureService} from './secure.service';
import { Http, HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EgComponent } from './eg/eg.component';
import { FinalComponent } from './final/final.component';
import { UpdateComponent } from './update/update.component';
import { AbcComponent } from './abc/abc.component';
import {DoorGuard} from './door.guard';
import {SecuredGuard} from './secured.guard';
import {ExampleGuard} from './example.guard';
import { DefComponent } from './def/def.component';
import { XyzComponent } from './xyz/xyz.component';
import { TestService } from './test.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { DemoComponent } from './demo/demo.component';
import { CookieService } from 'ngx-cookie-service';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { PloginComponent } from './plogin/plogin.component';
import { PComponent } from './p/p.component';
import { NsotableComponent } from './nsotable/nsotable.component';
@NgModule({
  declarations: [
  AppComponent,
    RegisterComponent,
    LoginComponent,
    FormUpdateComponent,
    HomeComponent,
    IndexComponent,
    AddComponent,
    DisplayuserComponent,
    EgComponent,
    FinalComponent,
    UpdateComponent,
    AbcComponent,
    DefComponent,
    XyzComponent,
    DemoComponent,
    TestComponent,
    Test2Component,
    PloginComponent,
    PComponent,
    NsotableComponent
  ],
  imports: [
     BrowserModule,
     JwtModule,
     FormsModule,
     HttpModule,
     RouterModule,
     ReactiveFormsModule,
     RouterModule.forRoot
        (
         [
          {path:'',component:IndexComponent},
          {path:'register',component:RegisterComponent},
          {path:'login',component:LoginComponent},
          {path:'update',component:FormUpdateComponent,canActivate:[DoorGuard]},
          {path:'home',component:HomeComponent,canActivate:[DoorGuard]},
          {path:'abc', component:AbcComponent ,canActivate:[DoorGuard]},
          {path:'demo', component:DemoComponent},
          {path:'test2', component:Test2Component,canActivate:[DoorGuard]},
          {path:'test', component:TestComponent},
          {path:'plogin', component:PloginComponent},
          {path:'p', component:PComponent},
          {path:'nsotable',component:NsotableComponent}

          //{path:'def', component:DefComponent ,canActivate:[SecuredGuard]},
          //{path:'xyz', component:XyzComponent ,canActivate:[ExampleGuard]}
          //{ path: '**', redirectTo: '' }
          ]
      )
  ],
  providers: [AuthService,DoorGuard,SecureService,SecuredGuard,ExampleGuard,TestService,JwtHelperService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
