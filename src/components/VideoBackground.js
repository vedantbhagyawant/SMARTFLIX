
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'



// fetch trailer video && updating the store with trailer data

const VideoBackground = ({MovieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(MovieId);
    





  return (
    <iframe 
    className='w-screen h-screen aspect-video'
    width="560" height="315" src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1"}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}

export default VideoBackground
