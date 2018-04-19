import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentComponent } from './component/component.component';
import {LoginComponent} from './login/login.component';
import {SnigiComponent} from './snigi/snigi.component';
import {FakeComponent} from './fake/fake.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ComponentsComponent,
    ComponentComponent,
    LoginComponent,
    SnigiComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
