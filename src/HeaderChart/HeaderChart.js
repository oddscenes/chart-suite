import React from 'react';
import {Link} from 'react-router';
// import NavigationChart from '../NavigationChart/NavigationChart.js';


// Svg
import logoUrl from './logo.svg';

class HeaderChart extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container chartContainer">
          {/* <NavigationChart /> */}
          <Link className="brand" to="/">
            <img src={logoUrl} width="340" height="75" alt="Chart Suite" />
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderChart;
