import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { BannerInfo } from './shared/Header/BannerInfo';
import { Nav } from './shared/Header/Nav';

import { PadList } from './components/PadSection/PadList';
import { PadDetail } from './components/PadDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="homeBanner">
            <Nav />
            <BannerInfo />
          </div>
          <Route exact path="/" component={PadList} />
          <Route exact path="/test" component={PadDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
