import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import MyProfile from './my-profile';
import EditProfile from './edit-profile';
import Listings from './listings';
import MyListings from './my-listings';
import Settings from './settings';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
// const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));

const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/my-profile`}
            />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/listings`}
              render={(props) => <Listings {...props} />}
            />
            {/* <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            /> */}
            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Route
              path={`${match.url}/my-profile`}
              render={(props) => <MyProfile {...props} />}
            />
            <Route
              path={`${match.url}/edit-profile`}
              render={(props) => <EditProfile {...props} />}
            />
            <Route
              path={`${match.url}/my-listings`}
              render={(props) => <MyListings {...props} />}
            />
            <Route
              path={`${match.url}/settings`}
              render={(props) => <Settings {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
