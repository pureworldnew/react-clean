import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import { MyListingsTableHave } from '../../containers/ui/MyListingsTableHave';
import { MyListingsTableNeed } from '../../containers/ui/MyListingsTableNeed';
import { MyListingsTableContactor } from '../../containers/ui/MyListingsTableContactor';

const MyListings = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.my-listings" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.my-listings" />
          </p>
        </Colxx>
        <Colxx xxs="12">
          <MyListingsTableHave />
        </Colxx>
        <Colxx xxs="12">
          <MyListingsTableNeed />
        </Colxx>
        <Colxx xxs="12">
          <MyListingsTableContactor />
        </Colxx>
      </Row>
    </>
  );
};

export default MyListings;
