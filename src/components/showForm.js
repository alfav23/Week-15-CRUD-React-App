import React, {useState} from "react";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const ShowForm = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [streamingService, setStreamingService] = useState('');
    const [genre, setGenre] = useState('');
    const id = getRandomInt(10000);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, type, streamingService, genre, id)
        props.addShow(name, type, streamingService, genre, id);
        // reset inputs to empty
        setName('');
        setType('');
        setStreamingService('');
        setGenre('');
 }

 return(
    <div className="card bg-dark border border-secondary text-light">
        <h6 className="card-title text-center p-3"> Create New Show </h6>
            <div className="card-body">
                <form className="show-form text-center">
                    <label> Name </label>
                        <input
                        type="text"
                        placeholder="Enter show/movie name..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}>
                        </input>
                        <br></br>
                    <label> Type </label>
                        <input
                        type="text"
                        placeholder="Enter media type..."
                        onChange={(e) => setType(e.target.value)}
                        value={type}>
                        </input>
                        <br></br>
                    <label> Streaming Service</label>
                        <input
                        type="text"
                        placeholder="Enter streaming service..."
                        onChange={(e) => setStreamingService(e.target.value)}
                        value={streamingService}>
                        </input>
                        <br></br>
                    <label>Genre</label>
                        <input
                        type="text"
                        placeholder="Enter genre..."
                        onChange={(e) => setGenre(e.target.value)}
                        value={genre}>
                        </input>
                        <br></br>
                <button className='btn btn-success' onClick={onSubmit}> Add New Show </button>
            </form>
        </div>
    </div>
 )
}