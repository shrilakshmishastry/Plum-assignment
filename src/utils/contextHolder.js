import { createContext } from 'react';

const FormContext = createContext({
  currentPage: 1,
  setCurrentPage: () => { },
  errorSetter: true,
  setError: () => { }
});

const inputList = [
  {
    name: 'email',
    label: 'Personal email address',
    type: 'text',
  },
  {
    name: 'mobileNumber',
    label: 'Mobile number',
    type: 'number'
  },
  {
    name: 'addressLine1',
    label: 'Address line 01',
    type: 'text'
  },
  {
    name: 'addressLine2',
    label: 'Address line 02',
    type: 'text'
  },
  {
    name: 'pinCode',
    label: 'Pincode',
    type: 'number'
  },
  {
    name: 'state',
    label: 'State',
    type: 'text'
  },
];

const termsAndCondition = [
  {
    id: 1,
    content: `I hereby declare that none of the 
    proposed members are habitual consumers
     of alcohol, tobacco, gutka or any recreational drugs.`
  },
  {
    id: 2,
    content: `I hereby declare that all 
    proposed members are in good health and entirely free from any mental 
    pf physical impairements or deformities, disease/condition.`
  },
  {
    id: 3,
    content: `I have understood that there is 30 days waiting period for all diseases 
    and 2 years on named ailments. (list of named ailements)`
  },
  {
    id: 4,
    content: `I understand that 
    this policy doesn't cover Pre-existing diseases.`
  }
];

const formPreviewContent = [
  {
    id: 1,
    title: 'Personal email address',
    name: 'email'
  },
  {
    id: 2,
    title: 'Mobile number',
    name: 'mobileNumber'
  },
  {
    id: 3,
    title: 'Address line 01',
    name: 'addressLine1'
  },
  {
    id: 4,
    title: 'Address line 02',
    name: 'addressLine2'
  },
  {
    id: 5,
    title: 'Pincode',
    name: 'pinCode'
  },
  {
    id: 6,
    title: 'State',
    name: 'state'
  },
];

const errorHandler = [
  {
    pageNumber: 1,
    content: [
      'planSelected',
      'email',
      'mobileNumber',
      'addressLine1',
      'addressLine2',
      'pinCode',
      'state'
    ]
  },
  {
    pageNumber: 2,
    content: ['amountInsured', 'acceptAmountDeduction']
  },
  {
    pageNumber: 3,
    content: ['termsAndCondition']
  }
];

export {
  errorHandler,
  FormContext,
  formPreviewContent,
  inputList,
  termsAndCondition
};