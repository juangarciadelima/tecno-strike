import Videoclipe from './video.mp4'
import ReactPlayer from 'react-player'




export function Video() { 
    return <div className="btn"> 
        <ReactPlayer url="https://www.youtube.com/watch?v=wzpEXwHzijI&t=93s" muted={true} playing={true} loop={true} volume={false} muted={true} width="100%"/></div>
}