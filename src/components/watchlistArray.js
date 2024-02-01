import React from "react";
import { Watchlist } from "./watchlist";
import { watchlistApi } from "./watchlistApi";

export default class WatchlistArray extends React.Component {
    state = {
        watchlists: [

        ]
    };

    componentDidMount() {
        this.fetchWatchlists();
    }

    fetchWatchlists = async () => {
        const watchlists = await watchlistApi.get();
        this.setState = watchlists
        // values that come back from api
    }

    updateWatchlist = async(updatedWatchlist) => {
        await watchlistApi.get(updatedWatchlist);
        this.fetchWatchlists();
    }

    render(){
        return(
            <div className="watchlist-array">
                {this.state.watchlists.map((watchlist) => (
                    <Watchlist 
                        key={watchlist.id} 
                        watchlist = {watchlist} 
                        updateWatchlist={this.updateWatchlist}
               />
                ))}
               </div> 
        )
    }
}