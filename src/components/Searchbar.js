import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

export default function Searchbar({ onSubmit }) {
	const [searchTerm, setsearchTerm] = useState('');

	const handleInputChange = (e) => {
// 		console.log(e.target.value);
		setsearchTerm(e.target.value);
	};

	const onKeyPress = (e) => {
		if (e.key === 'Enter') {
			onSubmit(searchTerm);
		}
	};

	return (
		<Paper elevation={4} style={{ padding: '18px' }}>
			<TextField
				fullWidth
				label='search video'
				value={searchTerm}
				onChange={handleInputChange}
				onKeyPress={onKeyPress}
			></TextField>
		</Paper>
	);
}
