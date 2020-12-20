/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import { Colxx } from '../../components/common/CustomBootstrap';

const selectData = [
  { label: 'Cubic Feet', value: 'cubicFeet', key: 0 },
  { label: 'Cubic Metres', value: 'cubicMetres', key: 1 },
  { label: 'Cubic Yards', value: 'cubicYards', key: 2 },
];

const CurrentUnitSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Row>
      <Colxx xxs="12" md="12" className="mb-5">
        <label>
          <IntlMessages id="landing.select-current-unit" />
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
export default CurrentUnitSelect;
