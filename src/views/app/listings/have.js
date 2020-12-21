import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import HaveStep from '../../../containers/wizard/HaveStep';

const Have = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.listings-have-fill" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <p>
          <IntlMessages id="menu.listings-have-fill" />
        </p>
        <div className="mb-4">
          In order to post in the 'have fill' section you must pay per post. As
          a result, your listing will be 'Active/Open' to all registered users,
          including your contact information, making it more convienent for
          customers to reach you!
        </div>
        <div className="mb-4 font-weight-bold">
          We encourage you to post a listing, even if you need service within 24
          hours. It only takes a few minutes to create the listing and it could
          save you thousands of dollars!
        </div>
        <div className="mb-4 font-weight-bold">Payment Information</div>
        <HaveStep />
      </Colxx>
    </Row>
  </>
);
export default Have;
