import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';

import { FormContext } from '../utils/contextHolder';

import '../styles/header.scss';

const Header = () => {
  const { currentPage } = useContext(FormContext);
  return (
    <Row >
      {
        Array.from(Array(4).keys()).map((value) => {
          return (
            <Col key={value} xs={3} >
              <div
                className={
                  currentPage >= value + 1 ?
                    'indicatorActive' : 'indicatorInActive'}>
              </div>
            </Col>
          );
        })
      }

    </Row>
  );
};
export default Header;