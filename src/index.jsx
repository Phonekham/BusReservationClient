import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { IntlProvider } from "react-redux-multilingual";
import { ApolloProvider } from "@apollo/client";

// Import custom components
import "./index.scss";
import store from "./store";
import translations from "./constants/translations";
import App from "./App";
import { client } from "./ApolloProvider";
import { RouteProvider } from "./context/queryRoute/provider";
import reducer, { initialState } from "./context/queryRoute/reducer";

class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RouteProvider routeData={initialState} reducer={reducer}>
            <IntlProvider translations={translations} locale="en">
              <BrowserRouter basename={"/"}>
                <ScrollContext>
                  <App />
                </ScrollContext>
              </BrowserRouter>
            </IntlProvider>
          </RouteProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
