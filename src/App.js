import React from 'react';
import './App.css';
import WatchlistArray from './components/watchlistArray';
import WatchlistForm from './components/watchlistForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// edit App function to be a class and export
export default class App extends React.Component {
  render(){
    return(
      <div>
        <WatchlistArray />
      </div>
    );
  }
}