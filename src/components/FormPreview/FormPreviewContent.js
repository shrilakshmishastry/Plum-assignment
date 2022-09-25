import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const FormPreviewContent = ({
  values
}) => {
  useEffect(() => { }, [values]);
  console.log(values);
  return (
    <>
      {
        values ?
          <p className='ms-2 shadow-sm descriptionFormPreview p-3'>
            {values}
          </p>
          :
          <p className='ms-2 error shadow-sm p-3'>
            Please fill the value
          </p>
      }
    </>
  );
};

FormPreviewContent.propTypes = {
  values: PropTypes.string
};
export default FormPreviewContent;