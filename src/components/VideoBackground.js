
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'



// fetch trailer video && updating the store with trailer data

const VideoBackground = ({MovieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(MovieId);
    





  return (
    <iframe 
    className='w-screen  aspect-video'
     src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&rel=0"}  title="YouTube video player" ></iframe>
  )
}

export default VideoBackground
