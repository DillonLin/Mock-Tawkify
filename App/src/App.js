import React from "react";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import Store from "./Store.js";

import AboutYourself from "./containers/AboutYourself.js";

const App = (props) => {
  return (
    <Provider store={Store}>
      <Router history={browserHistory}>
        <Route path="/" component={AboutYourself}></Route>
      </Router>
    </Provider>
  );
};

export default App;
