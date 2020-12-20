import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Need = React.lazy(() => import(/* webpackChunkName: "need" */ './need'));
const Have = React.lazy(() => import(/* webpackChunkName: "have" */ './have'));
const Contactor = React.lazy(() =>
  import(/* webpackChunkName: "contactor" */ './contactor')
);

const Listings = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/need`} />
      <Route
        path={`${match.url}/need`}
        render={(props) => <Need {...props} />}
      />
      <Route
        path={`${match.url}/have`}
        render={(props) => <Have {...props} />}
      />
      <Route
        path={`${match.url}/contactor`}
        render={(props) => <Contactor {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Listings;
