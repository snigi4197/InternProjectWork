import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RegisterHereComponent } from './register-here/register-here.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {RouterModule} from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterHereComponent,
    ContactUsComponent,
    CourseComponent,
    AboutUsComponent
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
          {path:'about_us',component:AboutUsComponent},
          {path:'register',component:RegisterHereComponent},
          {path:'course',component:CourseComponent},
          {path:'contact_us', component:ContactUsComponent}
         ]
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
}
