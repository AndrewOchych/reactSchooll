import React, { useState, useEffect } from 'react'
import Months from './Months'

export default function App() {
	let [error, setError] = useState(null)
	let [isLoaded, setIsLoaded] = useState(false)
	let [data, setData] = useState([])


	useEffect(() => {
		fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
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


	const groupMonths = data.reduce((acc, key) => {
		acc[new Date(key.dob).getMonth()].users.push(key);
		return acc;
	},
		[...Array(12)].map((key, i) => ({
			month: new Date(0, i).toLocaleString('ru-RU', { month: 'long' }),
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
				{<Months groupMonths={groupMonths} />}
			</div>
		);
	}
}