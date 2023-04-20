import React, { useState } from "react";

function SearchBox(props){

    const [movieName, setMovieName] = useState('')
    function handleChange(event){
        const {value} = event.target;
        setMovieName(value)
        //setMovieName(event.target.value)
        //props.onSearch(movieName);
        props.onSearch(value);
        //The state updates in React are asynchronous, which means that when you call setMovieName to update the movieName state, the update does not happen immediately.
        //Instead, React schedules the state update to be applied on the next render cycle, and until then, the current value of the state variable will remain unchanged.
        //This is done to optimize performance and avoid unnecessary re-renders.
        //So, when you call props.onSearch(movieName) immediately after setMovieName function, 
        //the movieName variable still holds the previous value because the state update has not yet been applied.
        //To pass the current value of the input field to the onSearch function, 
        //you need to extract the value directly from the event object i.e., props.onSearch(value);
    }

return <div>
    <input
    type="search"
    placeholder="Search"
    className="search"
    value={movieName}
    onChange={handleChange}/>
</div>
}

export default SearchBox;