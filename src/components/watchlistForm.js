import React, {useState} from "react";

// take the information from watchlist form to create and push a new watchlist to watchlist array

export default function WatchlistForm(props) {
    const [listName, setListName] = useState('');

    // on submit function to 
    function onSubmit(e){
        console.log(`data submitted`)
        e.preventDefault();
        console.log(listName);
        props.addWatchlist({listName, shows:[]});

    }
    return(
        <div className="watchlist-form">
            <form className="text-center form-control bg-dark border border-secondary">
                <label className="text-white p-2"> Watchlist Name </label>
                <input placeholder="Enter new watchlist name..." onChange={(e) => setListName(e.target.value)}
                        value={listName}>
                </input>
                <button className="btn btn-outline-success ms-2" onClick = {onSubmit}> Create New Watchlist </button>
            </form>
        </div>
    )
    }