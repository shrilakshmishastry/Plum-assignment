import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { FormContext } from '../../utils/contextHolder';

import ConfirmationCard from './ConfirmationCard';
const Confirmation = ({
  values
}) => {
  const { setCurrentPage, currentPage } = useContext(FormContext);
  return (
    <>
      <Row className="">
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
          <div className='ms-3 mt-3 ms-md-5'>
            <h2 id="title">
              Review and confirm payment
            </h2>
          </div>
        </div>
      </Row>
      <Row className="mt-5">
        <ConfirmationCard values={values} />
      </Row>
    </>
  );
};

Confirmation.propTypes = {
  values: PropTypes.object
};
export default Confirmation;