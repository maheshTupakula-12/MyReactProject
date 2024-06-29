import './App.css';
import search from './images/search-icon.png';
import {useEffect,useState} from 'react';
import Component1 from './components/Component1';
//27d34548

const URL = 'http://www.omdbapi.com?apikey=27d34548' 
/*
var movie = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "rating":"8.7",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}*/
const App = ()=>{
  const searchMovies = async(title)=>{
    const response = await fetch(`${URL}&s=${title}`)
    const data = await response.json();
    console.log(data);
    setMovies(data["Search"])
  }

  const [movies,setMovies] = useState([]);
  const [hero,setHero] = useState(''); // batman
  return (
    <div className="main">
      <div className="header">
        MovieLand
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
          <input className="input-search" type="text" placeholder="search a movie name" value={hero} onChange={(e)=>{
              console.log(e.target.value)
              setHero(e.target.value)
          }}></input>

          <button className="search-button"  onClick={()=>{
            searchMovies(hero)
          }}>
            <img  style={{height:"18px",borderRadius:"30px"}} src={search} alt="search"></img>
          </button>   
      </div>
      <div className="super">
        {
          movies?.length>0
          ?(<div className="c">
            {
              movies.map((obj,idx)=>{
                  return  obj.Poster!=="N/A" && <Component1 key={idx} info={obj} />
              })
            }
          </div>):(<div>no results found</div>)
        }
        
      </div>
    </div>
  );
}
export default App;
