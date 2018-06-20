import {dataFormat} from './dataformat';
export class dataCheckbox extends dataFormat<string>
{
    controlType='checkbox';
    options=[];
    values=[];
    constructor(options: {} = {}) 
    {
        super(options);
        this.type = options['type'] || '';
        this.options=options['options']||[];
        this.values=options['options']||[];
    }
}