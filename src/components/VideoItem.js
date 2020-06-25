import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export default function VideoItem({ video, onVideoSelect }) {
	return (
		<Grid item xs={8}>
			<Paper
				onClick={() => onVideoSelect(video)}
				style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
			>
				<img
					src={video.snippet.thumbnails.medium.url}
					alt='Thumbnail'
					style={{ width: '100%' }}
				/>
			</Paper>
			<Paper>
				<Typography variant='h6'>{video.snippet.title}</Typography>
				<Typography variant='subtitle1'>
					{video.snippet.channelTitle}
				</Typography>
			</Paper>
		</Grid>
	);
}
