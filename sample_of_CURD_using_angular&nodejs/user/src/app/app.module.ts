import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import {RouterModule} from '@angular/router';

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
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot
    (
     [
        {path:'',component:IndexComponent},
        {path:'register',component:RegisterComponent},
        {path:'login',component:LoginComponent},
        {path:'update',component:FormUpdateComponent},
        {path:'home',component:HomeComponent}
      ]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
