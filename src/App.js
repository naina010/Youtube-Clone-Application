import React, { useState } from 'react';

import Searchbar from './components/Searchbar';
import VideoFrame from './components/VideoFrame';
import VideoList from './components/VideoList';

import YoutubeApi from './api/YoutubeApi';

import { Grid } from '@material-ui/core';

export default function App() {
	const [Videos, setVideos] = useState([]);
	const [CurrentVideo, setCurrentVideo] = useState(null);

	async function handleSubmit(searchTerm) {
		const {
			data: { items: Videos },
		} = await YoutubeApi.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: { YOUR_API_KEY },
				q: searchTerm,
			},
		});

		setVideos(Videos);
		setCurrentVideo(Videos[0]);
		// console.log(Videos)
	}

	return (
		<Grid style={{ justifyContent: 'center' }} container spacing={8}>
			<Grid item xs={12}>
				<Searchbar onSubmit={handleSubmit} />
			</Grid>
			<Grid item xs={8}>
				<VideoFrame video={CurrentVideo} />
			</Grid>
			<Grid item xs={4}>
				<VideoList videos={Videos} onVideoSelect={setCurrentVideo} />
			</Grid>
		</Grid>
	);
}
