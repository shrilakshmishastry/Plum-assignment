import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { errorHandler, FormContext } from '../utils/contextHolder';

import '../styles/alert.scss';

const ErrorAlert = ({
  errors,
  show,
  setShow
}) => {
  const [data, setData] = useState([]);
  const { currentPage, setError, errorSetter } = useContext(FormContext);

  const handleClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

  useEffect(() => {
    let errorPre;
    let temp = [];
    for (let i = 0; i < errorHandler.length; i++) {
      if (errorHandler[i].pageNumber === currentPage) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        for (let val of errorHandler[i].content) {
          if (Object.keys(errors).includes(val)) {
            errorPre = true;
            temp.push(val);
            setData(temp);
          }
        }
      }
    }
    if (errorPre && temp.length > 0) {
      setError(true);
    } else {
      setError(false);
      handleClose();
      setShow(false);
      setData([]);

    }

  }, [errors, setShow, currentPage, handleClose, setError]);




  if (show && errorSetter && data.length > 0) {
    return (
      <Row className='alertContainer'>
        <Alert
          className='position-relative  top-0  start-0  mt-2 '
          variant={'danger'}
          onClose={() => handleClose()}
          dismissible
        >
          <Alert.Heading className='fs-5'>
            <i className="bi bi-emoji-frown-fill"></i>
          </Alert.Heading>
          {
            data && data.length > 0 &&
            data.map((val, index) => {
              return (
                <>
                  {
                    errors[val] && (
                      <small key={val} className='alertContent'>
                        {val}: {errors[val]}
                        {
                          index > 0 && index !== data.length - 1 ? ',' : null
                        }
                      </small>
                    )
                  }
                </>
              );
            })
          }

        </Alert>
      </Row>

    );
  }
  return null;

};

ErrorAlert.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  errors: PropTypes.object
};
export default ErrorAlert;