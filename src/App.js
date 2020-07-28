import React, { useState, useEffect } from 'react'
import Months from './components/Months/Months'
import { BASE_API_URL } from './constants/api';

export default function App() {
	let [error, setError] = useState(null)
	let [isLoaded, setIsLoaded] = useState(false)
	let [data, setData] = useState([])

	useEffect(() => {
		fetch(`${BASE_API_URL}api/task0/users`)
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setData(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	const groupedData = data.reduce((acc, user) => {
		acc[new Date(user.dob).getMonth()].users.push(user.firstName);
		return acc;
	},
		[...Array(12)].map((j, i) => ({
			month: new Date(0, i).toLocaleString('en-EN', { month: 'short' }),
			users: []
		}))
	);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className='container'>
				{<Months
					userPerMonth={groupedData}
				/>}
			</div>
		);
	}
}