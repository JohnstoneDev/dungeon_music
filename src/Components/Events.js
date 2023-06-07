import { useContext, useEffect } from 'react'

import { ApplicationContext } from '../App'
import { EventList } from './EventList'

export const NoData = () => {
	return (
		<>
			<h1> No Data Available </h1>
		</>
	)
}

export const Events = () => {
	const { events } = useContext(ApplicationContext).events;

	console.log(events);

	useEffect(() => {

	},[events])

	return (
		<>
			{
				events.length > 0 ? <EventList event={events[0]}/> : <NoData />
			}
		</>
	)
}