import React from 'react';
import './App.css';
import WatchlistArray from './components/watchlistArray';

// edit App function to be a class and export
export default class App extends React.Component {
  render(){
    return(
      <div>
        <WatchlistArray/>
      </div>
    );
  }
}