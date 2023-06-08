import { useContext, useState } from 'react'

import { ApplicationContext, Loading } from '../App'
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

	const [ loading, setLoading ] = useState(true);

	setTimeout(() => {
		setLoading(false)
	},2000)

	return (
		<>
			{ loading ? <Loading /> : <EventList events={events}/>}
		</>
	)
}