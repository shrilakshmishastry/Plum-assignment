import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { inputList } from '../../utils/contextHolder';

import '../../styles/personalInfo.scss';

const PersonalInfo = ({
  handleChange,
  values
}) => {
  return (
    <Accordion defaultActiveKey={0} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          <p className='mb-0 text-dark fw-bold fs-6'>
            Basic details (required)
          </p>
        </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row >
              {
                inputList.map((value) => {
                  return (
                    <Col key={value.label} md={6}
                      className="d-flex flex-column mt-4 mt-md-3 ">
                      <label>
                        {value.label}
                      </label>
                      <input
                        value={values[value.name]}
                        type={value.type}
                        onChange={handleChange}
                        placeholder='Enter'
                        className='mt-2 ps-2 py-2' name={value.name} />
                    </Col>
                  );
                })
              }

            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

PersonalInfo.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.object
};
export default PersonalInfo;