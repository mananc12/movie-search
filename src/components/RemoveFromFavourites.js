import React, { useState } from 'react';
import '../App.css'

function RemoveFromFavourites(props){

   
    function handleClick(event){
      props.onDelete(props.movie)
    }

    const favouriteIcon = '❤️';
    const favourite = 'Remove from Favourites'
    return (
        <div className='favourites'>
            <span>
                {favourite}
                <span onClick={handleClick}>
                    {favouriteIcon}
                </span>
            </span>
        </div>
    )
}

export default RemoveFromFavourites;