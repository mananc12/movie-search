import React, {useState} from "react";

function MovieList(props){

  const FavouriteComponent = props.favouriteComponent;

  //next and previous slide button feature
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const previousSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? props.movies.length - 1 : prevSlide - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === props.movies.length - 1 ? 0 : prevSlide + 1
  //   );
  // };

return(
//  <div>
// {props.movies.map(movie=>(
//    <div key={movie.imdbID}> 
//     <img src={movie.Poster}></img>
//     <h2 className="title">{movie.Title}</h2>
//     <p>{movie.Year}</p>
//    </div>
// ))}
      
// </div> 
<div className="container">

{/* <button className="prev" onClick={previousSlide}>Previous</button> */}


{/* 
Currently, the condition: 
if (index < currentSlide || index > currentSlide + 2) 
is used to display only three movies at a time. 
To display more movies, you can adjust this condition to show a larger range of movies.
For example, if you want to display five movies at a time, you can change the condition to :
if (index < currentSlide || index > currentSlide + 4). 
*/}

{props.movies.map((movie, index)=>{


  // if (index < currentSlide || index > currentSlide + 5) {
  //   // only display movies for the current slide index
  //   return null;
  // }


  return(
  <div className="movieCard" key={movie.imdbID}> 
    <div className="imgContainer">
      <FavouriteComponent onAdd={()=>props.onAddFav(movie)} onDelete={()=>props.onDeleteFav(movie)} />
      <img src={movie.Poster}/>
    </div>
    <span className="title">{movie.Title}</span>
  </div>
)})}

{/* <button onClick={nextSlide}>Next</button> */}

</div>
)
}

export default MovieList;