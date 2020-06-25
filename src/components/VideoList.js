import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

export default function VideoList({ videos, onVideoSelect }) {

	const listOfVideos = videos.map((video) => (
		<VideoItem
			onVideoSelect={onVideoSelect}
			key={video.id.videoId}
			video={video}
		/>
	));

	return (
		<Grid container spacing={1}>
			{listOfVideos}
		</Grid>
	);
}
