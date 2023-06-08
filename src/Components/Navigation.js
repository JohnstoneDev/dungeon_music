import { NavLink } from "react-router-dom"


export const Navigation = () => {
	return (
		<nav 
			className
			="font-headings grid grid-cols-2 gap-4 items-center justify-between space-y-5 p-2">
			<NavLink to="/" className="active:text-blue-700">
          <h1 className="text-6xl font-headings"> Dungeon Events </h1>
			</NavLink>
			<div className="flex items-center justify-around">
				<NavLink to="/venues"> Venues  </NavLink>
				<NavLink to="/performers"> Performers </NavLink>
			</div>
		</nav>
	)
}