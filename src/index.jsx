import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { IntlProvider } from "react-redux-multilingual";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import custom components
import "./index.scss";
import store from "./store";
import translations from "./constants/translations";
import App from "./App";
import { client } from "./ApolloProvider";
import { RouteProvider } from "./context/queryRoute/provider";
import { SeatProvider } from "./context/seat/provider";
import routeReducer, {
  initialState as routeInitialState,
} from "./context/queryRoute/reducer";
import seatReducer, {
  initialState as seatInitialState,
} from "./context/seat/reducer";

class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RouteProvider routeData={routeInitialState} reducer={routeReducer}>
            <SeatProvider seatData={seatInitialState} reducer={seatReducer}>
              <IntlProvider translations={translations} locale="en">
                <BrowserRouter basename={"/"}>
                  <ScrollContext>
                    <App />
                  </ScrollContext>
                  <ToastContainer newestOnTop />
                </BrowserRouter>
              </IntlProvider>
            </SeatProvider>
          </RouteProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
