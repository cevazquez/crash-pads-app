import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import { BannerInfo } from "shared/Header/BannerInfo";
import { Nav } from "shared/Header/Nav";

import PadListing from "components/PadSection/PadListing";
import PadDetail from "components/PadDetail";

import "App.css";

const store = require("./reducers").init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="homeBanner">
              <Route path="/" component={Nav} />
              <Route exact path="/" component={BannerInfo} />
            </div>
            <Route exact path="/" render={() => <Redirect to="/pads" />} />
            <Route exact path="/pads" component={PadListing} />
            <Route exact path="/pads/:id" component={PadDetail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
