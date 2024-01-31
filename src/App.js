import React from 'react';
import './App.css';
import Watchlist from './components/watchlist';

const URL  = "";

// edit App function to be a class and export
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addShow = this.addShow.bind(this);
    this.deleteShow = this.deleteShow.bind(this);
  }

  render() {
    return (
      <div className="App">
        {/* map watchlist list into watchlist component*/}
        {watchlistList.map((watchlist,index) => (
          <Watchlist key = {index} watchlists = {watchlist} addShow = {this.addShow} deleteShow = {this.deleteShow}/>
        ))}
      </div>
    );
  }
// HTTP requests
// grab watchlists data
  componentDidMount(){
    fetch(URL)
      .then (res => res.json())
      .then (data => {
        this.setState({
        // might have to change to 'watchlist'
        watchlists: data
      });
    });
  }
// delete and add show methods 
  deleteShow(e, watchlist, show){
    const index = watchlist.shows.indexOf(show);
    watchlist.shows.splice(index, 1);
    updateWatchlist(watchlist);
  }

  addShow(){

  }

}

// update function to update watchlist after add or delete of show
function updateWatchlist(watchlist) {
  return fetch (`${URL}/${watchlist.id}`, 
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(show)
    });
}