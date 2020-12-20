/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import { Colxx } from '../../components/common/CustomBootstrap';

const selectData = [
  { label: 'Metres', value: 'metres', key: 0 },
  { label: 'Feet', value: 'feet', key: 1 },
  { label: 'Yards', value: 'yards', key: 2 },
];

const MeasureSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Row>
      <Colxx xxs="12" md="12" className="mb-5">
        <label>
          <IntlMessages id="landing.select-measurement-system" />
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
  );
};
export default MeasureSelect;
