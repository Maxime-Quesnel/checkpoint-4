import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux connect
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch></Switch>
      </Router>
    </Provider>
  );
};

export default App;
