
import { useContext, useState } from 'react'
import { motion } from 'framer-motion'

import { ApplicationContext } from '../App'
import { Loading } from '../App';

function DisplayVenue({ venue }){
	const { timezone, name, extended_address, num_upcoming_events,  url, capacity } = venue
	return (
		<motion.div
			layoutScroll
			initial={{ opacity: 0, scale: 0.5, x : 1, y : 0 }}
			animate={{ opacity: 0.2, scale: 1 , x: 0  , y: 15 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1 }}
			className
				='p-6 m-4 bg-gradient-to-br rounded-lg shadow-lg from-blue-50 via-blue-200 to-blue-300
				 cursor-default flex flex-col font-semibold gap-6
				'>
			<h1
				className
				='font-headings tracking-widest text-3xl border-cyan-400 border-b-4 w-3/4
				'>
				 {name}
			</h1>
			<div>
				<p>Timezone : {timezone}</p>
				<p>Address : {extended_address}</p>
			</div>
			<div>
				<p>Upcoming Events : {num_upcoming_events}</p>
				<p>Capacity : {capacity}</p>
				<button
					className='border rounded p-2 bg-gradient border-none hover:text-white
					hover:bg-gray-600 hover:animate-pulse'>
					<a href={url} target="_blank" rel='noreferrer'> Venue Info </a>
				</button>
			</div>
		</motion.div>
	)
}

function List({ venues }){

	return (
		<motion.div
			className='desktop:grid desktop:grid-cols-3 tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col
		'>
			{
				venues.map((venue) => <DisplayVenue key={venue.id} venue={venue} />)
			}
		</motion.div>
	)
}

export function Venues(){
	const [ loading, setLoading ] = useState(true);
	const { venues } = useContext(ApplicationContext).venues;

	setTimeout(() => {
		setLoading(false);
	},3000)

	return (
		<motion.div>
				<h2 className='font-headings ml-4 text-3xl tracking-wider'> Explore Venues </h2>
				{ loading ? <Loading /> : <List venues={venues}/>}
		</motion.div>
	)
}