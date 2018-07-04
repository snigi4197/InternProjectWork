import {dataFormat} from './dataformat';

export class dataTextarea extends dataFormat<string>
{
    controlType='textarea';
    type='text';
    
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
      }
}