import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => (
	<nav className="nav">
		<NavLink
			to="/"
			exact
			activeClassName="active"
		>Current Temperature</NavLink>
		<NavLink
			to="/forecast"
			activeClassName="active"
		>Five Day Forecast</NavLink>
	</nav>
);