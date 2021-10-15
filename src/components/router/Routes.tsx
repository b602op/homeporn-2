import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from '../pages/main/Main';
import Settings from '../pages/settings/Setting';
import History from '../pages/history/History';

const Routes = () => (
  <Router>
      <Switch>
        <Route path="/settings" exact={true}>
          <Settings />
        </Route>
        <Route path="/history" exact={true}>
          <History />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
  </Router>
);

export default Routes;