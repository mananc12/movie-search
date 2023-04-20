import React from 'react';

const MovieListHeadings = (props)=>{
    return (
        <div className='heading' style={props.style}>
            {props.heading}
        </div>
        )
}

export default MovieListHeadings;