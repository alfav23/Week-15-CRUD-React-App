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
    e.preventDefault();
    const index = watchlist.shows.indexOf(show);
    watchlist.shows.splice(index, 1);
    updateWatchlist(watchlist)
      .then(()=> {
        this.setState(state => {
          for (let w of state.watchlists) {
            if (w.id === watchlist.id) {
              w = watchlist;
              break;
            }
          }
          console.log('Updated Watchlists:', w)
          return state;
        });
      });
  }

  addShow(e, watchlist, show){
    watchlist.shows.push(show);
    updateWatchlist(watchlist)
      .then(()=> {
        this.setState(state => {
          for (let w of state.watchlists) {
            if (w.id === watchlist.id) {
              w = watchlist;
              break;
            }
          }
          console.log('Updated Watchlists:', w)
          return state;
        });
      });
      e.preventDefault();
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
    body: JSON.stringify(watchlist)
    });
}