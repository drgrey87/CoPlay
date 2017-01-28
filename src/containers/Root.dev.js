import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import Vk from '../components/routes/Vk';
import DevTools from './DevTools';
import {Router, Route, browserHistory} from 'react-router';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="vk" component={Vk}/>
              {/*<Route path="sound_cloud" component={Sound_cloud}/>*/}
            {/* Being the dev version of our Root component, we include DevTools below */}
            {/*</Route>*/}
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
};
