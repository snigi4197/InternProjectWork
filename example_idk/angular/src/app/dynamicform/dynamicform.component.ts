import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})

export class DynamicformComponent implements OnInit {
 @Input() dataObject;
 form: FormGroup;
 objectProps;
  constructor() { }
  ngOnInit() { 
    
  }

}
