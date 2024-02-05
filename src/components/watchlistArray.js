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

    fetchWatchlists = async () => {
        const watchlists = await WatchlistApi.get();
        console.log(`text:`, watchlists);
        // setting state to values that come back from api
        this.setState({watchlists});
        
    }

    updateWatchlist = async(updatedWatchlist) => {
        // accidentally had .get instead of .put to update watchlist
        await WatchlistApi.put(updatedWatchlist);
        this.fetchWatchlists();
    }

    addWatchlist = async() => {
        console.log(`Adding a watchlist:`, this.state)
        this.updateWatchlist();
        // sets state to values that come back from api 
        this.fetchWatchlists();
    }

    deleteWatchlist = async (watchlistId) => {
        // deleting watchlist by id
        let watchlists = this.fetchWatchlists();
        watchlists.filter((x) => x.id !== watchlistId)
        this.updatedWatchlist();
        console.log(`updated watchlist:`, this.state)
    }

    render(){
        console.log(`Rendering jsx:`, this.state)
        return(
            <div className="watchlist-array text-white">
                <NavBar />
                <WatchlistForm addWatchlist = {this.addWatchlist} />
                {this.state.watchlists.map((watchlist, index) => {
                return(
                    <Watchlist key={index} watchlist = {watchlist} updateWatchlist = {this.updateWatchlist} deleteWatchlist={this.deleteWatchlist}/>
                )}
                )}
               </div> 
        )
    }
}