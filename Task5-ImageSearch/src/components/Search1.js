import React,{useState} from 'react'
import axios from 'axios';

import PhotoContainer from './PhotoContainer';


const Search1 = () => {
    const [photo,setPhoto] = useState([])
    const[searchText,setsearchText] = useState("")
    const onSearchChange = e =>{
        setsearchText(e.target.value)
    }
   const onhandleSubmit =e =>{
        e.preventDefault()
    
        performanceSearch()
          e.currentTarget.reset()
    }
  
     const performanceSearch = (text=searchText) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a36562df0915a6d1d0a6572c73cdd135&text=${text}&per_page=10&format=json&nojsoncallback=1`)
        
        .then(response => {
        setPhoto(response.data.photos.photo)

          });
      }
     


    return (
        <div>
        <form className="search-form" onSubmit={onhandleSubmit} >
          <input type="search" onChange={onSearchChange} id="search" name="search" placeholder="Search" />
          <button type="submit" className="search-button" id="searchButton">search
          </button>
        </form>
        <div>
    
        
      
           <PhotoContainer data={photo} />
          
          </div>
        </div>
    )
}

export default Search1
