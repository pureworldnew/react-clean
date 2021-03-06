import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import HaveStep from '../../../containers/wizard/HaveStep';

const Contactor = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.listings-contactor" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <p>
          <IntlMessages id="menu.listings-contactor" />
        </p>
        <div className="mb-4 font-weight-bold">Payment Information</div>
        <HaveStep />
      </Colxx>
    </Row>
  </>
);
export default Contactor;
