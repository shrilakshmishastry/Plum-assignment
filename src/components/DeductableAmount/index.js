import React, { useContext, useState } from 'react';
import { Card, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';

import Single from '../../images/user.png';
import { FormContext } from '../../utils/contextHolder';

import '../../styles/deductableAmount.scss';
const DeductableAmount = ({
  handleChange,
  values
}) => {
  const [rangeValue, setRangeValue] = useState(values.amount);
  const { setCurrentPage, currentPage } = useContext(FormContext);
  return (
    <>
      <Row className=' mt-5'>
        <div className='d-flex '>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className='goBackBtn'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" fill="currentColor"
              className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                // eslint-disable-next-line max-len
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
          <div className='ms-3 ms-md-5'>
            <h2 id="title">
              Select your deductible amount
            </h2>
            <label htmlFor='title'>
              Select the deductible amount for the policy (or policies) below.
              (what is a deductible?)
            </label>
          </div>
        </div>

      </Row>
      <Row className='mt-3'>
        <Card>
          <Card.Header className='bg-white'>
            <p className='fs-4'>Self (Individual)</p>
            <div className='d-flex flex-row align-items-center'>
              <img src={Single} alt={'user avatar'} height='16' width='16' />
              <p className='mb-0 ms-3 subTitle'>
                John Doe
              </p>
            </div>
          </Card.Header>
          <Card.Body>
            <p className='content'>
              Sum insured of ₹20,00,000 with a deductible of &nbsp;
              <span className='text-dark fw-bold'>
                {`₹ ${rangeValue},00,000`}
              </span>
            </p>
            <div className="slider">

              <input type="range" min="1" max="5" value={rangeValue} id="fader"
                step={1}
                list="volsettings" name="amountInsured"
                onChange={(value) => {
                  handleChange(value);
                  setRangeValue(Number(value.target.value));
                }}
              />
              <datalist id="volsettings">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </datalist>
              <div className="containerSlider">
                <p className={
                  rangeValue === 1 ? 'text-dark fw-bold' : 'text-secondary'}>
                  ₹1L
                </p>
                <p className={
                  rangeValue === 2 ? 'text-dark fw-bold' : 'text-secondary'}>
                  ₹2L
                </p>
                <p className={
                  rangeValue === 3 ? 'text-dark fw-bold' : 'text-secondary'}>
                  ₹3L
                </p>
                <p className={
                  rangeValue === 4 ? 'text-dark fw-bold' : 'text-secondary'}>
                  ₹4L
                </p>
                <p className={
                  rangeValue === 5 ? 'text-dark fw-bold' : 'text-secondary'}>
                  ₹5L
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Row>
      <Row className=' mt-3'>
        <div className='d-flex flex-row'>
          <input type={'checkbox'}
            className='me-3'
            checked={values.termsAndCondition}
            name='acceptAmountDeduction'
            onChange={handleChange}
            id='acceptAmountDeduction' />
          <label htmlFor='acceptAmountDeduction'>
            I understand that this insurance will
            not be utilized until ₹3,00,000 (deductible) is exhausted.
          </label>
        </div>

      </Row>
    </>
  );
};

DeductableAmount.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func
};
export default DeductableAmount;