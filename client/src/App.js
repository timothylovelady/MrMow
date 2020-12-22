import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Appointments from "./pages/appointments";
import Layout from "./components/layout";

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/appointments">
            <Appointments />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
