import React from "react";
function Front(props){
  
  //to convert paragraph into number of sentences & each sentence in new line.

   const sentences = props.text.split('.')

return(
    <div className="Front" style={props.style}>
      {sentences.map((sentence, index) => (
        <span key={index}>{sentence.trim()}{index !== sentences.length - 1 && '.'} <br /></span>
      ))}
    </div>)
}
export default Front;