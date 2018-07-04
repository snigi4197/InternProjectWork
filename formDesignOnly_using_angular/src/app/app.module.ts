import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VaalidComponent } from './vaalid/vaalid.component';
@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    YComponent,
    AboutComponent,
    NewsComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    VaalidComponent,
  ], 
  imports: [
    
       BrowserModule,       
       RouterModule.forRoot
        (
         [
            {path:'',component:XComponent},
            {path:'register',component:RegisterComponent},
            {path:'login',component:LoginComponent},
            {path:'**',component:YComponent}
          ]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
