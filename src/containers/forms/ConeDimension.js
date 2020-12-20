import React from 'react';
import { FormGroup, Label, CustomInput, Form } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ConeDimension = () => {
  return (
    <Form>
      <FormGroup>
        <div>
          <CustomInput
            type="radio"
            id="exCustomRadio"
            name="customRadio"
            label="Select this custom radio"
          />
          <CustomInput
            type="radio"
            id="exCustomRadio2"
            name="customRadio"
            label="Or this one"
          />
          <CustomInput
            type="radio"
            id="exCustomRadio3"
            label="But not this disabled one"
            disabled
          />
        </div>
      </FormGroup>
    </Form>
  );
};

export default ConeDimension;
