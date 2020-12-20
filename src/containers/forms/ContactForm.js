import React from 'react';
import { FormGroup, Label, Input, FormText, Form } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ContactForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="length">
          <IntlMessages id="landing.cube-dimension-label-length" />
        </Label>
        <Input type="text" name="length" id="length" />
      </FormGroup>

      <FormGroup>
        <Label for="width">
          <IntlMessages id="landing.cube-dimension-label-width" />
        </Label>
        <Input type="text" name="width" id="width" />
      </FormGroup>

      <FormGroup>
        <Label for="Depth">
          <IntlMessages id="landing.cube-dimension-label-depth" />
        </Label>
        <Input type="text" name="depth" id="depth" />
      </FormGroup>
    </Form>
  );
};

export default ContactForm;
