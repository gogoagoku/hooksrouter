import {  useState } from 'react';
import MovieList from './MovieList';
import { v4 as uuidv4 } from 'uuid';
import AddMovie from './AddMovie';
import Filter from './Filter';
import './App.css';
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import Description from './Description';
function App() {
  const [movies, setMovies] = useState([{
        id:uuidv4(),
        title: "be dangerous 1",
        description:"action movie",
        rating:5,
        posteUrl:"data:image/jpeg;base64,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",
        Trailers: "https://www.youtube.com/embed/Ohws8y572KE?si=3u3BB18-bLiMJXoH"
            }, {
        id:uuidv4(),
        title: "mission impossible 2",
        description:"action movie",
        rating:2.3,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        Trailers:"https://www.youtube.com/embed/JkTpZ87Pjw4&ab_channel=IMDb" 
      }]);
    const [rate,setRate]=useState(0);
    const [title,setTitle]=useState("");
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
      <div>
      <AddMovie setMovies={setMovies} movies={movies} />
      <Filter rate={rate} setRate={setRate} setTitle={setTitle} />
      <MovieList  movies={movies.filter((movie)=>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())&& movie.rating>=rate)}/> 
      </div>}/>
      <Route path="/Movies/:description" element={<Description  movies={movies}/>}/>
      
      </Routes>
 

      
    </div>
  );
}

export default App;