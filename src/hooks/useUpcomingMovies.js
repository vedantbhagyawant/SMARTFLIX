import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_Option } from "../utils/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_Option)
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    } 
    useEffect(() =>{
      getUpcomingMovies();
    },[])

}
export default useUpcomingMovies;