import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {

    const renderedList = props.videos.map((video) => {
        return <VideoItem 
                    key={video.id.videoId} 
                    onVideoSelect={props.onVideoSelect} 
                    video={video}
                />;
    })
    // now has props.video which is the list of videos passed in from search results
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;