import React from "react";
import { Route, Switch } from "react-router-dom";

// Layout
import Layout from "./components/Layout";
import Vegetables from "./components/layouts/vegetables/main";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </Switch>
  );
};

export default App;
