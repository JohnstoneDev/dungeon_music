import { motion, AnimatePresence } from "framer-motion";

const DisplayEvent = ({ event }) => {
	const { type, venue, datetime_utc, performers, url, title } = event;
	const { state, name, country } = venue;

	const formatDate = new Date(datetime_utc).toLocaleDateString();

	return (
		<motion.div
			layoutScroll
			initial={{ opacity: 0, scale: 0.5, x : 1, y : 0 }}
			animate={{ opacity: 0.2, scale: 1 , x: 0  , y: 15 }}
			transition={{ duration: 1 }}
			whileHover={{
				scale: 1.1,
				transition: { duration: 1 },
			}}
			whileTap={{ scale: 0.9 }}
			whileInView={{ opacity: 1 }}
			className
				="rounded-lg flex flex-col shadow-xl shadow-gray-400 w-full m-2 p-2 h-full gap-2 bg-gradient-to-bl
				from-blue-50 via-blue-200 to-blue-300 cursor-pointer min-h-fit min-w-fit hover:-translate-y-3
				relative">

				<img src={performers[0]["image"]} alt="" className="rounded-md object-cover "/>
				<section className=" w-full grid gap-4 items-center justify-around p-0">
					<div>
						<h2 className="font-headings">{title}</h2>
						<div className="flex items-center space-x-4 justify-between">
								<h6>{type}</h6>
							<span className="font-bold text-base">{formatDate} </span>
						</div>

						<div className="flex items-center space-x-4 justify-between">
								<h6>{country}</h6>
							<span>{state} </span>
						</div>
						<a href={url} alt={name} target="_blank" rel="noreferrer" className="underline text-amber-700 animate-pulse">Get Tickets</a>
					</div>
			</section>
		</motion.div>
	)
}


export const EventList = ({ events }) => {

	return (
		<motion.div
			layout
			animate={{ x: 1 }}
			transition={{ ease: "easeIn", duration: 1, delay : 0.5 }}
			className="space-x-3 space-y-4 gap-8 min-h-screen p-2 items-center justify-around
			desktop:grid desktop:grid-cols-[repeat(3,400px)] tablet:grid tablet:grid-cols-2 relative scroll-smooth">
			<AnimatePresence>
				{
					events.map((event) => {
						return <DisplayEvent key={event.id} event={event} />
					})
				}
			</AnimatePresence>
		</motion.div>
	)
}
