import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

// import TodoList from './T_redux'
// import TodoList from './T_react-redux'
import TodoList from './T_immutable';
import Hoc from './Hoc'
import Newfeatures from './Newfeatures'
import Hook from './Hook'
import EventEmitter from './eventEmitter'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path='/hoc' component={Hoc} />
          <Route path='/hook' component={Hook} />
          <Route path='/newfeatures' component={Newfeatures} />
          <Route path='/eventEmitter' component={ EventEmitter } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
