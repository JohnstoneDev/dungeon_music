import { NavLink } from "react-router-dom"


export const Navigation = () => {
	return (
		<nav className="font-headings flex gap-4 justify-around items-center">
			<NavLink to="/" className="active:text-blue-700">
          <h1 className="text-6xl font-headings"> Dungeon Events </h1>
			</NavLink>
			<NavLink to="/venues"> Venues  </NavLink>
			<NavLink to="/performers"> Performers </NavLink>
		</nav>
	)
}