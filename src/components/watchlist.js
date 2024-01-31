import React from 'react';
import { ShowForm } from './showForm';

export const Watchlist = (props) => {
    const { watchlist, updateWatchlist} = props;

    const deleteShow = (showId) => {
        const updatedWatchlist = {
            ...watchlist,
            shows: watchlist.shows.filter((x) => x.id !== showId)
        };
        updateWatchlist(updatedWatchlist);
    }

    const addShow = (show) => updateWatchlist({...watchlist, shows: [...watchlist.shows, show]});

    const shows = () => {
        <ul>
            {watchlist.shows.map((show, index) => {
                <li key={index}>
                    <label> {`${show.name} Type: ${show.type} Streaming Service: ${show.streamingService} Genre: ${show.genre}`} </label>
                    <button onClick={(e) => deleteShow(show.id)}>
                        Delete Show
                    </button>
                </li>
            })}
        </ul>
    };

    return(
        <div>
            <h1>{watchlist.listName}</h1>
            {shows({shows, watchlistId: watchlist.id, deleteShow})}
            <ShowForm addShow={addShow}/>
        </div>
    )
};