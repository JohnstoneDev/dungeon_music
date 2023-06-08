import { useContext, useEffect, useState } from 'react'

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

	const loadTimeout = setTimeout(() => {
		setLoading(false)
	},50)

	useEffect(() => {
		return clearTimeout(loadTimeout);
	},[events, loadTimeout])

	return (
		<>
			{ loading ? <Loading className="text-4xl"/> : <EventList events={events}/>}
		</>
	)
}