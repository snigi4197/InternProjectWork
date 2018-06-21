export class dataFormat<T>
{
    //initialiasing the variable 
    //with the Datatypes  
    value:T;
    key:string;
    id:string;
    label:string;
    name:string;
    required:boolean;
    order: number;
    controlType:string;
    type:string;
    //options:string;
    //now making a constructor for the dataFormat class

    constructor( 
        //all below are constructor parameters
        options:
        {
            value?: T, //this " ? " will tell that this option is optional which is send via options
            key?: string,
            id?:string,
            label?: string,
            name?:string,
            required?: boolean,
            order?: number,
            controlType?: string,
            type?:string; 
            //options?:string;
        } = {}
    )
  {
    // initialising the values to the values of the class
    this.value = options.value;
    this.name=options.name;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.type=options.type||'';
    this.id=options.id||'';
    //this.options=options.options||'';
  }

}