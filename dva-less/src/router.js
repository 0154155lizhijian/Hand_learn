import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LessTest from './routes/LessTest'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LessTest} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
