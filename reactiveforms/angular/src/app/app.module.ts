import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionService }              from './question.service';
import { QuestionControlService }       from './question-control.service';
import { FormsModule,FormGroup,ReactiveFormsModule }        from '@angular/forms';
import { FormComponent }                from './form/form.component';
import { DataControlService }           from './data-control.service';
import { DataService }                  from './data.service';
import { DataParentComponent } from './data-parent/data-parent.component';
import { DataChildComponent } from './data-child/data-child.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    FormComponent,
    DataParentComponent,
    DataChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionService,
    QuestionControlService,
    DataService,
    DataControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
