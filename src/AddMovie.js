import React, { useRef , useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import StarRatingComponent from 'react-star-rating-component';


function AddMovie({setMovies,movies}) {
    const title=useRef()
    const description=useRef()
    const posterURL=useRef()
    const [rate,setRate]=useState()
    const addmovie=()=>{
        setMovies([...movies,{
            id:uuidv4(),
            title:title.current.value,
            description:description.current.value,
            posterURL:posterURL.current.value,
            rating:rate,
        }])
    }

  return (
    <div>
        <input type="text" placeholder='Movie Title' ref={title} />
        <input type="text" placeholder='Movie Description' ref={description} />
        <input type="text" placeholder='Movie Poster' ref={posterURL} />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={(value)=>{setRate(value)}}
        />
        <button onClick={addmovie}>add</button>
    </div>
  )
}

export default AddMovie