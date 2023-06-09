import { motion } from 'framer-motion'
import { useContext, useState } from 'react'

import { ApplicationContext, Loading } from '../App'

function DisplayPerformer({ performer }){
	const { image, image_attribution, num_upcoming_events, type,  short_name } = performer;
	const defaultImage = 'https://seatgeek.com/images/performers-landscape/perta-band-be4800/690199/huge.jpg'

	return (
		<motion.div
			layoutScroll
			initial={{ opacity: 0, scale: 0.5, x : 1, y : 0 }}
			animate={{ opacity: 0.2, scale: 1 , x: 0  , y: 15 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1 }}
			className
				='p-2 m-2 bg-gradient-to-br rounded-lg shadow-xl from-blue-50 via-blue-200 to-blue-300
				 cursor-default flex flex-col font-semibold
				'>
				<img src={image || defaultImage } alt={image_attribution} className='rounded object-contain' />
				<div className='flex flex-col'>
					<h2 className='font-headings text-3xl tracking-wider pb-2 pt-2 mb-2'>
						Performer : { short_name }
					</h2>
					<h3> Type : {type.toUpperCase()}</h3>
					<span > { num_upcoming_events} Upcoming Events</span>
				</div>
		</motion.div>
	)
}

function List({ performers }){

	return (
		<motion.div
		className='desktop:grid desktop:grid-cols-4 tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col
	gap-16'>
				{
					performers.map((performer) => <DisplayPerformer key={performer.id} performer={performer} />)
				}
		</motion.div>
	)
}


export const Performers = () => {
	const { performers } = useContext(ApplicationContext).performers;
	const [ loading, setLoading ] = useState(true);

	setTimeout(() => {
		setLoading(false);
	},3000)

	return (
		<motion.div>
			<h2 className='font-headings ml-4 text-3xl tracking-wider'> Explore Performers </h2>
			{ loading ? <Loading /> : <List performers={performers} /> }
		</motion.div>
	)
}