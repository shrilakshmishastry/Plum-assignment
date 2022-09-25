import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { FormContext, formPreviewContent } from '../../utils/contextHolder';

import FormPreviewContent from './FormPreviewContent';

import '../../styles/contextStyle.scss';
const FormPreview = ({
  values
}) => {
  const { currentPage } = useContext(FormContext);
  const [openedIndex, setOpenedIndex] = useState(-1);

  useEffect(() => {
  }, [values]);

  if (currentPage >= 4) {
    return null;
  }
  return (
    <Card className='bg-white shadow-sm'>
      <Card.Header className='bg-white title'>
        Form preview
      </Card.Header>
      <Card.Body>
        {
          formPreviewContent.map((value, index) => {
            return (
              <div key={value.id}>
                <div className='d-flex flex-row justify-content-between'>
                  <p className='indiviualTitle mb-0 mt-2'>{value.title}</p>
                  <button
                    className='btn'
                    onClick={() => {
                      if (openedIndex === index) {
                        setOpenedIndex(-1);
                      } else {
                        setOpenedIndex(index);
                      }

                    }}
                  >
                    {
                      openedIndex === index ?
                        <i className="bi bi-dash"></i>
                        : <i className="bi bi-plus"></i>
                    }

                  </button>
                </div>
                {
                  openedIndex === index ?
                    <FormPreviewContent values={values[value.name]} />
                    : null
                }
              </div>
            );
          })
        }
      </Card.Body>
    </Card>
  );
};

FormPreview.propTypes = {
  values: PropTypes.object
};
export default FormPreview;