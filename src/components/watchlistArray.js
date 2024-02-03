import React from "react";
import Watchlist from "./watchlist";
import { WatchlistApi } from "./watchlistApi";

export default class WatchlistArray extends React.Component {
    constructor(){
        super();
        // original state
        this.state = {
            watchlists: []
        };
}

    componentDidMount() {
        this.fetchWatchlists();
    }

    fetchWatchlists = async () => {
        const watchlists = await WatchlistApi.get();
        console.log(`text:`, watchlists);
        // setting state to values that come back from api
        this.setState({watchlists});
        
    }

    updateWatchlist = async(updatedWatchlist) => {
        await WatchlistApi.get(updatedWatchlist);
        this.fetchWatchlists();
    }

    render(){
        console.log(`Rendering jsx:`, this.state)
        return(
            <div className="watchlist-array text-white">
                {this.state.watchlists.map((watchlist, index) => {
                return(
                    <Watchlist key={index} watchlist = {watchlist} />
                )}
                )}
               </div> 
        )
    }
}