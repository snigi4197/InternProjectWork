import { Injectable } from '@angular/core';
import {QuestionBase} from '../app/question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion }  from './question-textbox';
@Injectable()
export class QuestionService {

  constructor() { }
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        required: true,
        value: '',
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        required: true,
        type: 'email',
        order: 2
      }),
      
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
