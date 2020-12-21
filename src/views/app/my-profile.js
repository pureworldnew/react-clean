import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';

const MyProfile = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.my-profile" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.my-profile" />
          </p>
          <h1>My Account</h1>
          <h3>Account Overview</h3>
          <p>
            Welcome fill Management to your Account page. From here you have
            access to control all aspects of your CleanFILL.net member account.
          </p>
        </Colxx>
      </Row>
    </>
  );
};

export default MyProfile;
