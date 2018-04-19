export class dataFormat<T>
{
    //initialiasing the variable 
    //with the Datatypes  
    value:T;
    key:string;
    label:string;
    required:boolean;
    controlType:string;

    // now making a constructor for the dataFormat class

    constructor( 
        //all below are constructor parameters
        options:
        {
            value?: T, //this " ? " will tell that this option is optional which is send via options
            key?: string,
            label?: string,
            required?: boolean,
            controlType?: string
        } = {}
    )
  {
      // initialising the values to the values of the class
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';

  }

}