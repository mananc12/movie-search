import React, { useState } from 'react';
import '../App.css'

function AddToFavourites(props){

    const [click, saveClick] = useState(true);
   
    function handleClick(event){
        saveClick(!click);
        if (click) {
          props.onAdd(props.movie);
        } else {
          props.onDelete(props.movie);
        }
      }

    const favouriteIcon = click ?'🤍':'❤️'
    const favourite = click ? 'Add to Favourites' : 'Remove from Favourites'
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

export default AddToFavourites;