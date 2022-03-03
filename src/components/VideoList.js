import React from "react";
import VideoItem from "./VideoItem";

// ({videos}) = (props.videos)
const VideoList = ({ videos, selectedVideo, onVideoSelect }) => {
	const renderedList = videos
		.filter(video => video !== selectedVideo)
		.map(video => {
			return (
				<VideoItem
					key={video.id.videoId}
					onVideoSelect={onVideoSelect}
					video={video}
				/>
			);
		});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
