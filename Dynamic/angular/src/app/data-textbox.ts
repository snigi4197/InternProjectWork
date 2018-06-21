import {dataFormat} from './dataformat';

export class dataTextbox extends dataFormat<string>
{
    controlType='textbox';
    type='text';
    
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
      }
}