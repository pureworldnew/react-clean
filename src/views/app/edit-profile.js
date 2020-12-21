import React from 'react';
import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
} from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';

const EditProfile = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.edit-profile" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.edit-account-membership" />
          </p>
          <Row className="mb-4">
            <Colxx xxs="12">
              <Card>
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="forms.general-information" />
                  </CardTitle>
                  <Form>
                    <FormGroup row>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="nameOrCompany">
                            <IntlMessages id="forms.name-or-company" />
                          </Label>
                          <Input
                            type="text"
                            name="nameOrCompany"
                            id="nameOrCompany"
                          />
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="address">
                            <IntlMessages id="forms.general-address" />
                          </Label>
                          <Input type="text" name="address" id="address" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="city">
                            <IntlMessages id="forms.city" />
                          </Label>
                          <Input type="text" name="city" id="city" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="provinceState">
                            <IntlMessages id="forms.province-state" />
                          </Label>
                          <Input
                            type="text"
                            name="provinceState"
                            id="provinceState"
                          />
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="country">
                            <IntlMessages id="forms.general-country" />
                          </Label>
                          <Input type="text" name="country" id="country" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="postalZipCode">
                            <IntlMessages id="forms.postalZipCode" />
                          </Label>
                          <Input
                            type="text"
                            name="postalZipCode"
                            id="postalZipCode"
                          />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="phoneNumber">
                            <IntlMessages id="forms.phone-number" />
                          </Label>
                          <Input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                          />
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="faxNumber">
                            <IntlMessages id="forms.fax-number" />
                          </Label>
                          <Input type="text" name="faxNumber" id="faxNumber" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="accountType">
                            <IntlMessages id="forms.account-type" />
                          </Label>
                          <Input
                            type="text"
                            name="accountType"
                            id="accountType"
                          />
                        </FormGroup>
                      </Colxx>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="12">
              <Card>
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="forms.login-information" />
                  </CardTitle>
                  <Form>
                    <FormGroup row>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="userName">
                            <IntlMessages id="forms.userName" />
                          </Label>
                          <Input type="text" name="userName" id="userName" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="fullName">
                            <IntlMessages id="forms.full-name" />
                          </Label>
                          <Input type="text" name="fullName" id="fullName" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="emailAddress">
                            <IntlMessages id="forms.email-address" />
                          </Label>
                          <Input
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                          />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup>
                          <Label for="newPassword">
                            <IntlMessages id="forms.new-password" />
                          </Label>
                          <Input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                          />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup>
                          <Label for="oldPassword">
                            <IntlMessages id="forms.old-password" />
                          </Label>
                          <Input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                          />
                        </FormGroup>
                      </Colxx>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="12">
              <Card>
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="forms.contact-information" />
                  </CardTitle>
                  <Form>
                    <FormGroup row>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="fullName">
                            <IntlMessages id="forms.full-name" />
                          </Label>
                          <Input type="text" name="fullName" id="fullName" />
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="phoneNumber">
                            <IntlMessages id="forms.phone-number" />
                          </Label>
                          <Input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                          />
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={4}>
                        <FormGroup>
                          <Label for="extension">
                            <IntlMessages id="forms.extension" />
                          </Label>
                          <Input type="text" name="extension" id="extension" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup>
                          <Label for="faxNumber">
                            <IntlMessages id="forms.fax-number" />
                          </Label>
                          <Input type="text" name="faxNumber" id="faxNumber" />
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup>
                          <Label for="emailAddress">
                            <IntlMessages id="forms.email-address" />
                          </Label>
                          <Input
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                          />
                        </FormGroup>
                      </Colxx>
                    </FormGroup>

                    <Button color="primary">
                      <IntlMessages id="forms.edit-profile-save" />
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default EditProfile;
