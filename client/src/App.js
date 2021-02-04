import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './services/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/auth.action';

// Redux connect
import { Provider } from 'react-redux';
import store from './store';

// Components
import Navbar from './components/elements/Navbar/Navbar';

// Private route
import PrivateRoute from './private/PrivateRoute';

// Pages
import HomePage from './components/pages/HomePage/HomePage';
import Login from './components/pages/auth/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import DashboardUpdate from './components/pages/DashboardUpdate/DashboardUpdate';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = '/login';
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute
            exact
            path='/dashboard/update'
            component={DashboardUpdate}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
