import {
	Routes,
	Route
} from "react-router-dom"; 



import { Home } from "./Home"

export const Paths = () => {
	return (
		<div className="p-4 m-4 relative">
			<Routes className>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	)
}