import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AutoComplete from './components/AutoComplete';
import Layout from './components/Layout';

const ROUTES = [{ path: '/', component: AutoComplete }];

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route
              key={`corporation-route-${i}`}
              path={route.path}
              render={routerProps =>
                React.createElement(route.component, {
                  ...routerProps,
                })
              }
              exact
            />
          ))}
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
