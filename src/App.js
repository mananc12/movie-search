import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import MovieListHeadings from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToFavourites from "./components/AddToFavourites";
import RemoveFromFavourites from "./components/RemoveFromFavourites";
import Front from "./components/Front";
import MainText from "./components/MainText";

function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [fav,setfav] = useState([])
//--------------------------------------GET Request----------------------------------------------------------------------------------------------//

  //adding api call- get request
  //one method is using fetch() and other is using axios.

//step1. Define an asynchronous function called `getMovieRequest` that takes in a `searchValue` parameter.

const getMovieRequest = async (searchValue) => {

//step2. Construct a URL using the `searchValue` parameter and an API key.
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
  //console.log(searchValue)

//step3. Send a request to the OMDb API using the `fetch` method and wait for the response.
  const response = await fetch(url);

//step4. Convert the response to JSON format using the `json` method and wait for the result.  
  const responseJson = await response.json();

//step5. If the JSON response contains a `Search` property, which is an array of movie objects that match the search query,
         // call `setMovies(responseJson.Search)`.
  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

//   **********************************************************************************
//   * Search is a property of the JSON response returned by the OMDb API.            *
//   * It contains an array of movie objects that match the search query.             *
//   * In the code you provided, setMovies(responseJson.Search) sets the              *
//   * state of the movies variable to the array of movie objects returned by the API.*
//   **********************************************************************************

//step6. Use the `useEffect` hook to call `getMovieRequest` whenever the `searchValue` variable changes.
// This hook is a built-in React hook that allows side effects to be performed in function components.
useEffect(() => {

//step7. Call the `getMovieRequest` function with the current value of `searchValue`.
  getMovieRequest(searchValue);
//step8. Specify `searchValue` as a dependency for `useEffect` so that it only runs when `searchValue` changes.  
}, [searchValue]);

//-----------------------------------------Searching movie---------------------------------------------------------------------------------------//

function setSearch(value){
  setSearchValue(value);
}
//------------------------------------------Adding Fav movies------------------------------------------------------------------------------------//
  
function handlefavMovies(movie){
    setfav((preValue)=>{
      return [...preValue, movie]
     })

}

function deleteFavMovies(movie){
  setfav((preValue)=>{
    return preValue.filter((favourite)=>{
      return favourite.imdbID !== movie.imdbID
    })
  })
}
//---------------------------------------------to update banner at every 5 seconds-----------------------------------------------------------------------
const [imageUrl, setImageUrl] = useState("https://source.unsplash.com/random/?movie");

  useEffect(() => {
    const interval = setInterval(() => {
      setImageUrl(`https://source.unsplash.com/random/?movie&t=${new Date().getTime()}`);
    }, 5000); // update the image every 5 seconds

    return () => clearInterval(interval);
  }, []); // only run once when the component mounts
//-----------------------------------------------------------------------------------------------------------------------------------------------//
return (
    <div className="App">
      <div className="topContainer">
      <div className="logo">  
      <MovieListHeadings heading="Movie🔎Search" style={{color:'red', fontFamily: 'Bebas Neue',fontSize:'250%'}}/>
      <Front 
      text="Unlimited Movies" 
      style={{
        fontWeight:"500",
        fontSize:'12px',
        marginLeft:'170px',
        position:'absolute',
        top:'0',
        marginTop:"46px"

      }}/>
      </div>
      <SearchBox onSearch={setSearch} />
      </div>
      
      <div className="banner">
        <img
          src={imageUrl}
          alt="banner"
        />
      <MainText/>
        </div>
      
      <div className="midContainer">      

      <MovieListHeadings heading='Movies' style={{fontFamily: 'Bebas Neue',fontSize:'3.25rem',}}/>
      <div>   
      <MovieList 
        movies={movies} 
        onAddFav={handlefavMovies}
        onDeleteFav={deleteFavMovies} 
        favouriteComponent={AddToFavourites}
      />
      </div>
      <MovieListHeadings heading='Favourites' style={{fontFamily: 'Bebas Neue',fontSize:'3.25rem'}}/>
      
      <div>
      <MovieList
        movies={fav}
        onDeleteFav={deleteFavMovies} 
        favouriteComponent={RemoveFromFavourites}
      />
      </div>

      </div>
    </div>
    
  );
}

export default App;
