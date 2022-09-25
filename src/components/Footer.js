import React, { useContext, useEffect } from 'react';

import PropTypes from 'prop-types';

import { FormContext } from '../utils/contextHolder';

import '../styles/footer.scss';

const Footer = ({
  errors

}) => {
  const { setCurrentPage, currentPage, setError, errorSetter } = useContext(FormContext);
  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, errors, setCurrentPage, setError]);

  return (
    <div
      className={`footerContainer pe-3 mt-5 d-flex 
      justify-content-end align-items-center shadow-sm`}>
      {
        currentPage >= 4 ?
          (
            currentPage === 4 ?
              <button
                type='Submit'
                className='nextBtn nextBtnEnabled'
                onClick={() => setCurrentPage(currentPage + 1)}>
                Submit
              </button> : null
          )

          :
          <button
            type='button'
            className={`
            nextBtn ${errorSetter ? 'nextBtnDisabled' : 'nextBtnEnabled'}`}
            disabled={errorSetter}
            onClick={() => setCurrentPage(currentPage + 1)}>
            Next

          </button>

      }

    </div>
  );
};

Footer.propTypes = {
  errors: PropTypes.object
};
export default Footer;