import React from 'react';
import Photo from './Photo';
import P from "./P.css"
const PhotoContainer = props => {

  const results = props.data;
  let images;
  
  if (results.length > 0) {
    console.log( "Results returned " + results.length + " images.");
    images = results.map(photo =>
     
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} title={photo.title} />
    );
  } 
  return(
    <div class="row">
    <div class="column">
       {images}
         </div>
  </div>
  );
}


export default PhotoContainer;
