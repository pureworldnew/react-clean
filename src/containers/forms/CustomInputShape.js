import React from 'react';
import { FormGroup, Label, CustomInput, Form } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const CustomInputShape = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exCustomRadio">
          <IntlMessages id="landing.select-shape" />
        </Label>
        <div>
          <CustomInput type="radio" id="cube" name="volumeShape" label="Cube" />
          <CustomInput
            type="radio"
            id="cubePool"
            name="volumeShape"
            label="Cube (Pool Shaped)"
          />
          <CustomInput type="radio" id="cone" name="volumeShape" label="Cone" />
          <CustomInput
            type="radio"
            id="cylinder"
            name="volumeShape"
            label="Cylinder"
          />
        </div>
      </FormGroup>
    </Form>
  );
};

export default CustomInputShape;
