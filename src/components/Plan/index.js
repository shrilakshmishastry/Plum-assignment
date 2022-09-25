import React from 'react';
import { Row } from 'react-bootstrap';

import PropTypes from 'prop-types';

import PersonalInfo from './PersonalInfo';
import PlanDetails from './PlanDetails';

import '../../styles/planDetails.scss';
const Plan = ({
  handleChange,
  values
}) => {
  return (
    <>
      <Row className='mt-5 mb-3' >
        <h2 className='fw-bold'>
          Choose your plan
        </h2>
        <p className='mb-0 mt-3 description'>
          Hello Anisha,
        </p>
        <p className='description'>
          {`Increase yours and your family's health
           insurance cover by ₹20 lakhs with Super top-up`}
        </p>
      </Row>
      <Row >
        <PlanDetails
          values={values?.planSelected}
          handleChange={handleChange} />
      </Row>
      <Row className=" mt-5">
        <PersonalInfo
          values={{
            email: values.email,
            mobileNumber: values.mobileNumber,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            pinCode: values.pinCode,
            state: values.state,
          }}
          handleChange={handleChange} />
      </Row>
    </>
  );
};

Plan.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.object
};
export default Plan;