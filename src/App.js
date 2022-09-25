import { React, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Formik } from 'formik';

import ErrorAlert from './components/ErrorAlert';
import Footer from './components/Footer';
import FormPreview from './components/FormPreview/FormPreview';
import Header from './components/Header';
import { FormContext } from './utils/contextHolder';
import { userInfoSchema } from './utils/userInputValueSchema';
import Main from './Main';

import './App.css';

const App = () => {
  const [currentPage, setUserCurrentPage] = useState(1);
  const [errorSetter, setErrorSetter] = useState(true);
  const initialValue = useMemo(() => ({
    currentPage,
    setCurrentPage: setUserCurrentPage,
    errorSetter,
    setError: setErrorSetter
  }), [currentPage, errorSetter]);

  const [show, setShow] = useState(true);

  return (
    <FormContext.Provider value={initialValue}>
      <Formik
        initialValues={{
          email: '',
          mobileNumber: '',
          addressLine1: '',
          addressLine2: '',
          pinCode: undefined,
          state: '',
          planSelected: '',
          amountInsured: 1,
          termsAndCondition: [],
          acceptAmountDeduction: false,
        }}
        validate={() => {
          setShow(true);
        }}
        validationSchema={userInfoSchema}
        onSubmit={() => {

        }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit
          }) => (
            <form
              style={{
                height: '90vh',
              }}
              onSubmit={handleSubmit}
            >
              <Container className=' mt-3 pb-5'>

                {
                  Object.keys(errors).length === 0 ?
                    null :
                    <ErrorAlert
                      show={show}
                      setShow={setShow}
                      errors={errors} />
                }
                <Row >
                  <Header />
                </Row>
                <Row className='mb-5'>
                  <Col md={8} >
                    <Main
                      values={values}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col md={4} className='mt-5 ms-0 ps-md-5' >
                    <FormPreview values={values} />
                  </Col>
                </Row>
                <Row>
                  <Footer errors={errors} />
                </Row>
              </Container>
            </form>
          )
        }
      </Formik>

    </FormContext.Provider >
  );
};

export default App;
