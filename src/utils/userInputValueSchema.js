import * as yup from 'yup';
import { setLocale } from 'yup';


setLocale({
  number: {
    min: 'Field i stoo short',
    max: 'Field is overloaded'
  },
  string: {
    email: 'Not a valid mail',
  },
  array: {
    min: 'You need to accept all condition'
  },
  boolean: {
    oneOf: 'You need to accept deduction'
  }
});

const userInfoSchema = yup.object().shape({
  email: yup.string().required().email(),
  mobileNumber: yup.number().required().integer(),
  addressLine1: yup.string().required(),
  addressLine2: yup.string().required(),
  pinCode: yup.number().required().min(0).max(999999).integer(),
  state: yup.string().required(),
  planSelected: yup.string().required(),
  amountInsured: yup.number().required(),
  termsAndCondition: yup.array().max(4).min(4).required(),
  acceptAmountDeduction: yup.boolean().required().oneOf([true])
});

export {
  userInfoSchema
};