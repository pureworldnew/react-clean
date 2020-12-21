import React, { useState } from 'react';

import { Row, Input, CustomInput, Button } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import CustomSelectInput from '../../../components/common/CustomSelectInput';

const selectData = [
  { label: 'Cubic Feet', value: 'cubicFeet', key: 0 },
  { label: 'Cubic Metres', value: 'cubicMetres', key: 1 },
  { label: 'Cubic Yards', value: 'cubicYards', key: 2 },
];

const selectFillType = [
  { label: 'Non-Compactable Fill', value: 'nonCompactableFill', key: 0 },
  { label: 'Compactable Fill', value: 'compactableFill', key: 1 },
  { label: 'Compactable Rock', value: 'compactableRock', key: 2 },
  { label: 'TopSoil', value: 'topsoil', key: 3 },
  { label: 'Other', value: 'other', key: 4 },
];

const selectConditions = [
  {
    label: 'Free',
    value: 'free',
    key: 0,
  },
  {
    label: 'Paying/Selling',
    value: 'paying_selling',
    key: 1,
  },
  {
    label: 'Negotiable',
    value: 'negotiable',
    key: 3,
  },
];
const selectSoilReport = [
  {
    label: 'Tested',
    value: 'tested',
    key: 0,
  },
  {
    label: 'Not Tested',
    value: 'not tested',
    key: 1,
  },
];
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

const Need = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedSoilReport, setSelectedSoilReport] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.listings-need-fill" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.listings-need-fill" />
          </p>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="7" className="mb-5">
          <label>
            <IntlMessages id="forms.conditions" />
          </label>
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={selectedCondition}
            onChange={setSelectedCondition}
            options={selectConditions}
          />
        </Colxx>
        <Colxx xxs="12" md="5" className="mb-5">
          <label>
            <IntlMessages id="forms.select-fill-type" />
          </label>
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={selectedOption}
            onChange={setSelectedOption}
            options={selectFillType}
          />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="7" className="mb-5">
          <label>
            <IntlMessages id="forms.soil-report" />
          </label>
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={selectedSoilReport}
            onChange={setSelectedSoilReport}
            options={selectSoilReport}
          />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="7" className="mb-5">
          <label>
            <IntlMessages id="forms.general-address" />
          </label>
          <Input
            type="text"
            name="quantity"
            id="quantity"
            value={inputAddress}
            onChange={setInputAddress}
          />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="7" className="mb-5">
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
        <Colxx xxs="12" md="7" className="mb-5">
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
        <Colxx xxs="12" md="7" className="mb-5">
          <label>
            <IntlMessages id="forms.city" />
          </label>
          <Input type="text" name="quantity" id="quantity" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="7" className="mb-5">
          <label>
            <IntlMessages id="forms.quantity" />
          </label>
          <Input type="text" name="quantity" id="quantity" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="7" className="mb-5">
          <label>
            <IntlMessages id="forms.details" />
          </label>
          <Input type="text" name="details" id="details" />
        </Colxx>
      </Row>
      <Row>
        <CustomInput
          type="checkbox"
          id="exampleCustomCheckbox"
          label="I agree to the Terms of Use of this site. You must agree to the terms to continue."
          className="mx-auto mb-4"
        />
      </Row>
      <Row>
        <Button color="primary" className="mx-auto">
          <IntlMessages id="forms.post-your-need-fill-listing" />
        </Button>
      </Row>
    </>
  );
};
export default Need;
