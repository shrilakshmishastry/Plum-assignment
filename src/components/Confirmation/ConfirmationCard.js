import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { formPreviewContent } from '../../utils/contextHolder';

import '../../styles/confirmationCard.scss';
const ConfirmationCard = ({
  values
}) => {
  useEffect(() => {
  }, [values]);
  return (
    <Card className='bg-white shadow-sm'>
      <Card.Body>
        <Row>
          <div className='d-flex justify-content-start'>
            <p className='keyStyle'>
              Plan selected
            </p>
            <p className='valueStyle ms-5'>
              {
                values?.planSelected
              }
            </p>
          </div>
        </Row>
        <Row className='mt-4'>
          <div className='d-flex justify-content-start'>
            <p className='keyStyle'>
              Deductable Amount
            </p>
            <p className='valueStyle ms-5'>
              {`₹ ${values?.amountInsured},00,000`}
            </p>
          </div>
        </Row>
        <Row className='mt-4'>
          <Col md={12} className='mb-3'>
            <p className='fw-bold text-center'>
              Personal Info
            </p>
          </Col>
          <Col md={12}>

            <Card>
              <Card.Body>
                <Row>
                  {
                    formPreviewContent.map((value) => {
                      return (
                        <Col key={value.id + value.name}
                          md={6} xs={12}
                          className='mt-2'
                        >
                          <p className='keyStyle'>
                            {value.title}
                          </p>
                          <p className='valueStyle'>
                            {values[value.name]}
                          </p>
                        </Col>
                      );
                    })
                  }
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

ConfirmationCard.propTypes = {
  values: PropTypes.object
};
export default React.memo(ConfirmationCard);