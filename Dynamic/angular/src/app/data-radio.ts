import {dataFormat} from './dataformat';
export class dataRadio extends dataFormat<string>
{
    controlType='radio';
    type='radio';  
    options=[];
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.options=options['options']||[];
      }
}