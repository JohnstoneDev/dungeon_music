import {
	Routes,
	Route,
} from "react-router-dom";

import { Home } from "./Home"
import { Performers } from './Performers'
import { Venues } from './Venues'

export const Paths = () => {
	return (
		<div className="p-4 m-4 relative">
			<Routes className>
				<Route path="/" element={<Home />}/>
					<Route path="venues" element={<Venues />} />
					<Route path="performers" element={<Performers />} />
			</Routes>
		</div>
	)
}