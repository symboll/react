import React from 'react';
import { BrowserRouter, Route,Switch, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

// import TodoList from './T_redux'
// import TodoList from './T_react-redux'
import TodoList from './T_immutable';
import Hoc from './Hoc'
import Newfeatures from './Newfeatures'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path='/hoc' component={Hoc} />
          <Route path='/newfeatures' component={Newfeatures} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
