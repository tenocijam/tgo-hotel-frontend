import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const AdminNavbar = () => {
	const linkClass = ({ isActive }) => (isActive ? "underline" : "");

	return (
		<nav className="py-5 flex flex-col justify-between items-center sm:flex-row">
			<NavLink className="flex flex-shrink-0 items-center mr-4" to="/admin">
				<img className="h-10 w-auto" src="/src/assets/images/logo.svg" alt="TGO Hotel logo" />
				<span className="hidden md:block text-black text-2xl font-bold ml-2">TGO Admin Panel</span>
			</NavLink>
			<div className="flex gap-5 text-xl">
				<NavLink to="admin/rooms" className={linkClass}>
					Rooms
				</NavLink>
				<NavLink to="admin/bookings" className={linkClass}>
					Bookings
				</NavLink>
			</div>

			<Button text="Admin" to="/admin" />
		</nav>
	);
};

export default AdminNavbar;
