import React from "react";
import { Route, Switch } from "react-router-dom";

// Layout
import Layout from "./components/Layout";
import Vegetables from "./components/layouts/vegetables/main";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/booking" component={Booking} />
      </Layout>
    </Switch>
  );
};

export default App;
