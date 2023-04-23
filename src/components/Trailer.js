import React from 'react';
import { useParams } from "react-router-dom" ;
import ReactStars from "react-rating-stars-component";
function Trailer({movies}) {
const params = useParams();
const movie = movies.filter((el) =>el.name===params.name)[0];
    return (
    <div>
        <img style={{height:550 , width:1350}} src={movie.posterurl}/>
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>

<ReactStars
          count={5}
          size={24}
          activeColor="yellow"
          edit={false}
          value={movie.rating}
        />
      
    </div>
  )
}

export default Trailer