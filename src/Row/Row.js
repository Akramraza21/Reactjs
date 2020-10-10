import React,{useState,useEffect} from 'react'
import axios from '../axios'
import classes from './row.module.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/"

export default function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("")
    useEffect(() => {
       async function fetchData() {
           const request = await axios.get(fetchUrl)
           setMovies(request.data.results)
        //    console.log(request.data.results);
           return request
        }
        fetchData();
    }, [fetchUrl]); // [] run once when the row loads,and don't run again
    // console.log(movies);
    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
             // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        }
    }
    const clickHandler = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url=>{
                const  urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v")) 
            }).catch(error=>{
                console.log(error);
            })
        }
    }
    return (
        <div className={classes.row}>
               <h2>{title}</h2>
            <div className={classes.row__posters}>
            {movies.map((movie)=>(
                <img 
                key={movie.id}
                onClick={()=>clickHandler(movie)}
                className={isLargeRow? classes.row__posterLarger : classes.row__poster}
                src={`${baseURL}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
            {trailerUrl && <YouTube   videoId={trailerUrl} opts={opts}  />}
            

        </div>
    )
}
