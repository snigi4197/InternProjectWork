import {dataFormat} from './dataformat';
export class dataDropdown extends dataFormat<string>
{
    controlType='dropdown';
    options= [];
    values=[];
    
    constructor(options: {} = {}) 
    {
        super(options);
        this.type = options['type'] || '';
        this.options=options['options']||[];
        this.values=options['options']||[];
        
    }
}