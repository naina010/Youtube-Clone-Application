import React from 'react';

import { Paper, Typography } from '@material-ui/core';

export default function VideoFrame({ video }) {
	if (video == null) {
		return (
			<div
				style={{
					fontWeight: 'bolder',
					alignSelf: 'center',
					fontSize: '5rem',
					margin: '3rem',
				}}
			>
				{' '}
				YOUTUBE CLONE{' '}
			</div>
		);
	}

	const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<React.Fragment>
			<Paper elevation={6} style={{ height: '32rem', padding: '1rem' }}>
				<iframe
					frameBorder='0'
					height='100%'
					width='100%'
					title='Video Player'
					src={videoSource}
				/>
			</Paper>
			<Paper elevation={6} style={{ height: '10rem', padding: '1rem' }}>
				<Typography variant='h5'>{video.snippet.title}</Typography>

				<Typography variant='h6'>{video.snippet.channelTitle}</Typography>

				<Typography variant='subtitle2'>{video.snippet.description}</Typography>
			</Paper>
		</React.Fragment>
	);
}
