import React from "react";
import { Route, Switch } from "react-router-dom";

// Layout
import Layout from "./components/Layout";
import Vegetables from "./components/layouts/vegetables/main";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BookingDetail from "./pages/BookingDetail";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/search-results" component={SearchResults} />
        <Route path="/booking" component={Booking} />
        <Route path="/booking-detail" component={BookingDetail} />

        {/* Auth Route */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Layout>
    </Switch>
  );
};

export default App;
