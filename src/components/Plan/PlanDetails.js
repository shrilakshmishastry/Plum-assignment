import React from 'react';
import { Accordion } from 'react-bootstrap';

import PropTypes from 'prop-types';

import Children from '../../images/children.png';
import Parent from '../../images/network.png';
import Single from '../../images/user.png';
import Double from '../../images/users.png';

import '../../styles/planDetails.scss';
const availablePlans = [
  {
    text: 'Self',
    img: Single,
    title: 'One (Individual)',
    price: '₹600'
  },
  {
    text: 'Parents',
    img: Double,
    title: 'Pro (Individual)',
    price: '₹0'
  },
  {
    text: 'Self + Parents',
    img: Parent,
    title: 'Plus(Individual + Individual)',
    price: '₹600'
  },
  {
    text: 'Self + Spouse + Kids',
    img: Children,
    title: 'Plus(Individual + Individual)',
    price: '₹1800'
  },
];

const PlanDetails = ({
  handleChange,
  values
}) => {
  return (
    <Accordion defaultActiveKey={0}>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          <p className='mb-0 text-dark fw-bold'>
            Plan details
          </p>

        </Accordion.Header>
        <Accordion.Body className='d-flex flex-column'>
          <p >Your plan type</p>
          <select name="planSelected"
            onChange={handleChange}
            className='bg-white shadow-sm border-0 flex-fill py-2 px-2'
            id="planSelected">
            <option value={''}
              className='opt' disabled
              selected={values === ''}
            >
              Select your plan
            </option>
            {
              availablePlans.map((value) => {
                return (
                  <optgroup
                    selected={values === value.title}
                    key={value.text} label={value.text}>
                    <option value={value.title}>
                      {value.title}
                    </option>
                  </optgroup>
                );
              })
            }
          </select>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
PlanDetails.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.object
};
export default PlanDetails;