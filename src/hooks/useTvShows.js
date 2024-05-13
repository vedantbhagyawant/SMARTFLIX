import { useDispatch } from "react-redux";
import {  addTvShows, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Option } from "../utils/constant";

const useTvShows = () => {
    const dispatch = useDispatch();
    const getTvShows = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US',API_Option)
      const json = await data.json();
      
      dispatch(addTvShows(json.results))
    } 
    useEffect(() =>{
      getTvShows();
    },[])

}
export default useTvShows;