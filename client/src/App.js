import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import PublicRoute from "./components/routing/PublicRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// Auth
import setAuthToken from "./utils/setAuthToken";
// Actions
import { loadUser } from "./actions/auth";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <PublicRoute exact path='/' component={Landing} />
          {/* <section className='container'> */}
          {/* <Alert /> */}
          <Switch>
            <PublicRoute exact path='/registrar' component={Register} />
            <PublicRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
          {/* </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
