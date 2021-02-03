import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux connect
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/pages/HomePage/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
