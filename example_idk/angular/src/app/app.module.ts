import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { AppComponent }                 from './app.component';
import { ReactiveFormsModule }          from '@angular/forms';
import { PersonEditComponent }          from './person-edit/person-edit.component';
import { DynamicformComponent }         from './dynamicform/dynamicform.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditComponent,
    DynamicformComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
