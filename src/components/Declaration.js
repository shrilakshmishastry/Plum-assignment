import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import { FieldArray } from 'formik';
import PropTypes from 'prop-types';

import { FormContext, termsAndCondition } from '../utils/contextHolder';

const Declaration = ({
  values
}) => {
  const { setCurrentPage, currentPage, setError } = useContext(FormContext);
  const [pushedEle, setPushedEle] = useState(values);
  const [selectedIndex, setSelectedIndex] = useState([]);
  useEffect(() => {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < termsAndCondition; j++) {
        if (values[i].content === termsAndCondition[j].content) {
          setSelectedIndex([...selectedIndex, j]);
        }
      }
    }
  }, [selectedIndex, values]);
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
          <div className='ms-3 mt-3 ms-md-5'>
            <h2 id="title">
              Declaration
            </h2>
          </div>
        </div>
      </Row>
      <Row className=''>
        <FieldArray
          name='termsAndCondition'
          render={({
            push,
            remove
          }) => {
            return (
              <>
                {
                  termsAndCondition.map((value, index) => {
                    return (
                      <div key={value.id} className='d-flex flex-row mt-5'>
                        <input type={'checkbox'}
                          className='me-3'
                          checked={values.includes(index)}
                          name='acceptAmountDeduction'
                          onChange={(eve) => {
                            if (eve.target.checked) {
                              push(index);
                              setPushedEle([...pushedEle, index]);
                              if (pushedEle.length + 1 === 4) {
                                setError(false);
                              }
                            } else {
                              remove(pushedEle.indexOf(index));
                              let temp = [...pushedEle].filter((value) => value !== index);
                              setPushedEle(temp);
                            }
                          }}
                          id='acceptAmountDeduction' />
                        <label htmlFor='acceptAmountDeduction'>
                          {
                            value.content
                          }
                        </label>
                      </div>
                    );
                  })
                }
              </>
            );
          }}
        />


      </Row>
      <Row className='bg-warning'>

      </Row>
    </>
  );
};

Declaration.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.number
  )
};
export default Declaration;