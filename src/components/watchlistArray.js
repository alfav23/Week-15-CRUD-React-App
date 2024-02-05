import React from "react";
import Watchlist from "./watchlist";
import { WatchlistApi } from "./watchlistApi";
import WatchlistForm from './watchlistForm';
import NavBar from './navBar';

export default class WatchlistArray extends React.Component {
    constructor(props){
        super(props);
        // original state
        this.state = {
            watchlists: []
        };
}

    componentDidMount() {
        this.fetchWatchlists();
    }

    // calling get method to receive data from api and store it in watchlists state object
    fetchWatchlists = async () => {
        const watchlists = await WatchlistApi.get();
        console.log(`text:`, watchlists);
        // setting state to values that come back from api
        this.setState({watchlists});
        return watchlists;
        
    }

    // method to store changes in a variable and then pass those changes to database
    updateWatchlist = async(updatedWatchlist) => {
        // accidentally had .get instead of .put to update watchlist, resolved
        await WatchlistApi.put(updatedWatchlist);
        this.fetchWatchlists();
    }

    // add a new watchlist using post method created in watchlistApi component
    addWatchlist = async(newWatchlist) => {
        console.log(`Adding a watchlist:`, newWatchlist)
        await WatchlistApi.post(newWatchlist)
        this.fetchWatchlists();
    }

    // deleting watchlist by id
    deleteWatchlist = async (watchlistId) => {
        console.log(`Watchlist id:`, watchlistId);
        await WatchlistApi.delete(watchlistId);
        this.fetchWatchlists();

    }

    render(){
        console.log(`Rendering jsx:`, this.state)
        return(
            <div className="watchlist-array text-white">
                <NavBar />
                <WatchlistForm addWatchlist = {this.addWatchlist} />
                {this.state.watchlists.map((watchlist, index) => {
                return(
                    // passing all necessary props to Watchlist component
                    <Watchlist key={index} watchlist = {watchlist} updateWatchlist = {this.updateWatchlist} deleteWatchlist={this.deleteWatchlist}/>
                )}
                )}
               </div> 
        )
    }
}