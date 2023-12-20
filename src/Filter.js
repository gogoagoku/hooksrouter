import React from 'react'
import  {useRef} from 'react'
import StarRatingComponent from 'react-star-rating-component'


export default function Filter({rate ,setRate,setTitle}) {
    const x=useRef()
  return (
    <div>
        <input type="text" ref={x} onChange={()=>setTitle(x.current.value)} />
        <StarRatingComponent 
          name="rate2" 
          starCount={5}
          value={rate}
          onStarClick={(value)=>setRate(value)}
        />
    </div>
  )
}