import React, { Component } from 'react';

import { BannerInfo } from './shared/Header/BannerInfo';
import { Nav } from './shared/Header/Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="homeBanner">
          <Nav />
          <BannerInfo />
        </div>
      </div>
    );
  }
}

export default App;
