import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { dataFormat } from '../dataformat';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
// Child class to FormComponent 
  @Input() data_format:dataFormat<any>;
  @Input() child_form:FormGroup;
  get isValid()
  {
    return this.child_form.controls[this.data_format.key].valid ;

    // here what r we doing ????
  }
  constructor() { }

  ngOnInit() {
  }

}
