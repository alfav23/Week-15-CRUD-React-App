import React from 'react';
import { ShowForm } from './showForm';

export default function Watchlist(props) {
    // update watchlist function is not contained in props object, not being recognized when called ⛔
    console.log(`These are the props`, props)
    const { watchlist, updateWatchlist } = props;

    const deleteShow = (showId) => {
        // creating an updated copy of watchlist which copies watchlist object and filters out the corresponding show by id from shows property within watchlist
        const updatedWatchlist = {
            ...watchlist,
            shows: watchlist.shows.filter((x) => x.id !== showId)
        };
        console.log(updatedWatchlist)
        updateWatchlist(updatedWatchlist);
    }

    const addShow = (show) => updateWatchlist({...watchlist, shows: [...watchlist.shows, show]});

    const renderShows = () => {
        return(
        <ul>
            {watchlist.shows.map((show, index) => (
                <ul key={index}> <h4>{`${show.name}`}</h4>
                     <li>{` Type: ${show.type}`}</li>
                     <li>{`Streaming Service: ${show.streamingService}`}</li> 
                     <li>{`Genre: ${show.genre}`} </li>
                    <button onClick={(e) => deleteShow(show.id)}>
                        Delete Show
                    </button>
                </ul>
            )
            )}
        </ul>
    )};
    

    return(
        <div className='card bg-dark text-white'>
            <h1 className='text-white'>{watchlist.listName}</h1>
            Shows: {renderShows()}
            <ShowForm addShow={addShow}/>
        </div>
    )
};