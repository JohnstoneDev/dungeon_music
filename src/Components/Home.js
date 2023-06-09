import { motion } from 'framer-motion'

import { Events } from './Events'; 


export const Home = () => {
	
	return (
		<div className="flex flex-col gap-4 m-4 p-4">
			<h1 className='font-headings'> Happening Soon :</h1>
			<motion.div  animate={{ opacity: 1 }}>
					<Events />
			</motion.div>
		</div>
	)
}