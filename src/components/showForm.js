import React, {useState} from "react";

export const ShowForm = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [streamingService, setStreamingService] = useState('');
    const [genre, setGenre] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.addShow({name, type, streamingService, genre});
        setName('');
        setType('');
        setStreamingService('');
        setGenre('');
 }

 return(
    <div>
        <h4>New Show</h4>
        <form>
            <input
            type="text"
            placeholder="Enter new show/movie name..."
            onChange={(e) => setName(e.target.value)}
            value={name}>
            </input>
            <input
            type="text"
            placeholder="Enter media type (show, movie, short?)..."
            onChange={(e) => setType(e.target.value)}
            value={type}>
            </input>
            <input
            type="text"
            placeholder="Enter streaming service..."
            onChange={(e) => setStreamingService(e.target.value)}
            value={streamingService}>
            </input>
            <input
            type="text"
            placeholder="Enter genre..."
            onChange={(e) => setGenre(e.target.value)}
            value={genre}>
            </input>
            <button onSubmit={onSubmit} type="submit"> Add New Show </button>
        </form>
    </div>
 )
}