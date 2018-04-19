import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyDataService} from './my-data.service';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
