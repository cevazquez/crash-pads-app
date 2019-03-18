import React, { Component } from 'react';

import { BannerInfo } from './shared/Header/BannerInfo';
import { Nav } from './shared/Header/Nav';

import { PadList } from './components/PadSection/PadList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="homeBanner">
          <Nav />
          <BannerInfo />
        </div>
        <PadList />
      </div>
    );
  }
}

export default App;
