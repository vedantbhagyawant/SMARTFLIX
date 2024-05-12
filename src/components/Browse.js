
import Header from './Header'
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
// import usePopularMovies from '../hooks/useUpcomingMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies ';
// import useTopRatedMovies from '../hooks/useTopRatedMovies copy';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTvShows from '../hooks/useTvShows';

// import useUpcomingMovies from '../hooks/useUpcomingMovies';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShows();

 
  return (
    <div><Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
    

    
  )
}

export default Browse