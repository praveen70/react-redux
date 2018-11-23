import React, { Component } from 'react';
import Searchbar from '../containers/searchBar';
import Weatherlist from '../containers/weatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Weatherlist />
      </div>
    );
  }
}
