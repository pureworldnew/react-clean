import React, { useState } from 'react';
import { Row, CustomInput, Button } from 'reactstrap';
import Select from 'react-select';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import CustomSelectInput from '../../components/common/CustomSelectInput';

const selectCountry = [
  {
    label: 'Canada',
    value: 'canada',
    key: 0,
  },
  {
    label: 'United States',
    value: 'united_states',
    key: 1,
  },
  {
    label: 'Australia',
    value: 'australia',
    key: 2,
  },
  {
    label: 'New Zealand',
    value: 'new_zealand',
    key: 3,
  },
  {
    label: 'Ireland',
    value: 'ireland',
    key: 4,
  },
  {
    label: 'Norway',
    value: 'norway',
    key: 5,
  },
  {
    label: 'United Kingdom',
    value: 'uk',
    key: 6,
  },
];

const selectData = [
  { label: 'Cubic Feet', value: 'cubicFeet', key: 0 },
  { label: 'Cubic Metres', value: 'cubicMetres', key: 1 },
  { label: 'Cubic Yards', value: 'cubicYards', key: 2 },
];

const Settings = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.settings" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.settings" />
          </p>
          <p>
            Use our Email Notification tool to have an automatic email sent to
            you (from Clean Fill Network) whenever the Fill you NEED is posted
            in a HAVE FILL Listing or the fill you HAVE is posted in a NEED FILL
            Listing.
          </p>
          <div className="font-weight-bold mb-4">
            In addition to your private Email Notification, be sure to post a
            free NEED or HAVE fill listing (from Top menu) to allow others to
            see what you NEED or HAVE.
          </div>
          <div className="font-weight-bold mb-4">
            This is a great tool that works for you 24/7!!
          </div>
          <p>Please select the checkbox to begin adding notifications.</p>
          <div>
            <Row>
              <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                <label>
                  <IntlMessages id="forms.general-country" />
                </label>
                <Select
                  components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={selectCountry}
                />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                <label>
                  <IntlMessages id="forms.province-state" />
                </label>
                <Select
                  components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={selectData}
                />
              </Colxx>
            </Row>
            <Row>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Receive E-Mail"
                className="mx-auto mb-4"
                checked="checked"
              />
            </Row>
            <Row>
              <Button color="primary" className="mx-auto">
                <IntlMessages id="forms.accept" />
              </Button>
            </Row>
          </div>
        </Colxx>
      </Row>
    </>
  );
};

export default Settings;
