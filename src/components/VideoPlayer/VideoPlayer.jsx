import React, { useRef } from 'react';
import './VideoPlayer.css';
import videoFile from '../../assets/fitLife_video.mp4'; // Replace with your video file path

const VideoPlayer = ({playState , setPlayState}) => {

    const player = useRef(null);

    const closeVideo = (e) => {
        if(player.current === e.target){   // If we click outside the video then only close the video
            setPlayState(false);
        }
    }
    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player}   // To close the video when we click outside the video  we are using
        onClick={closeVideo}>
            <video src={videoFile} autoPlay muted controls/>
        </div>
    );
}

export default VideoPlayer;
