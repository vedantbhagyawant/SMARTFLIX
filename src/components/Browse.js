
import Header from './Header'

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'; 
import useNowPlayingMovies from '../hooks/useNowPlayingMovies ';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTvShows from '../hooks/useTvShows';
import GPTSearh from './GPTSearh';
import { useSelector } from 'react-redux';



 

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)



  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShows();

 
  return (
    <div><Header/>
    {
      showGptSearch ? ( <GPTSearh/> ) :(
      <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
     )
}
    </div>
    

    
  )
}

export default Browse