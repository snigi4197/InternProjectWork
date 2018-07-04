

export class person{
  getData(){
  return  [
      {
        key: "name",
        label: 'Name',
        value: 'Juri',
        type: 'text',
        validation: {
          required: true
        }
      },
      {
        key:"age",
        label: 'Age',
        value: 32,
        type: 'text'
      },
      {
        key:"gender",
        label: 'Gender',
        value: 'M',
        type: 'radio',
        options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
      },
      {
        key:"city",
        label: 'City',
        value: '39010',
        type: 'select',
        options: [
          { label: '(choose one)', value: '' },
          { label: 'Bolzano', value: '39100' },
          { label: 'Meltina', value: '39010' },
          { label: 'Appiano', value: '39057' }
        ],
        validation: {
          required: true
        }
      }
  ]
  }
}