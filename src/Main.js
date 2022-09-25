import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import Confirmation from './components/Confirmation/Confirmation';
import Declaration from './components/Declaration';
import DeductableAmount from './components/DeductableAmount';
import Plan from './components/Plan';
import Success from './components/Success';
import { FormContext } from './utils/contextHolder';

const Main = ({
  values,
  handleChange,

}) => {

  const { currentPage } = useContext(FormContext);
  return (
    <>
      {
        currentPage === 1 ?
          <Plan
            values={values}
            handleChange={handleChange} />
          : currentPage === 2 ?
            <DeductableAmount
              values={{
                amount: values?.amountInsured,
                termsAndCondition: values?.acceptAmountDeduction
              }}
              handleChange={handleChange} />
            : currentPage === 3 ?
              <Declaration values={values.termsAndCondition} />
              : currentPage === 4 ?
                <Confirmation values={values} />
                : <Success />
      }
    </>
  );
};

Main.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func
};
export default Main;