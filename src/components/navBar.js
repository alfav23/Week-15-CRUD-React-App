import React from 'react';

export default function NavBar() {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark border border-secondary rounded-2 m-2 p-2">
                <a className="navbar-brand" href="#"> 
                <img src="../download.png" width="40" height="40" className="d-inline-block align-center border border-dark rounded-4" alt="TV clipart"/>
                   &nbsp; CRUD React Watchlist App 2.0
                </a>
            </nav>
        </div>
    )
}