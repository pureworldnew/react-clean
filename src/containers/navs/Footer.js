import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="container-fluid">
          <Row>
            <Colxx xxs="12" className="d-flex">
              <p className="mb-0 text-muted">Cleanfill.net 2020</p>
              <h2 className="mx-auto">free clean fill dirt</h2>
            </Colxx>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
