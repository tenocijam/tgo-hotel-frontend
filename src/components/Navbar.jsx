import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
	const linkClass = ({ isActive }) => (isActive ? "underline" : "");

	return (
		<nav className="py-5 flex flex-col justify-between items-center sm:flex-row">
			<NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
				<img className="h-10 w-auto" src="https://tgo.sidharthh.in/assets/logo-fqf7z_eh.svg" alt="TGO Hotel logo" />
				<span className="hidden md:block text-black text-2xl font-bold ml-2">TGO</span>
			</NavLink>
			<div className="flex gap-5 text-xl">
				<NavLink to="/" className={linkClass}>
					Home
				</NavLink>
				<NavLink to="/rooms-suits" className={linkClass}>
					Rooms & Suits
				</NavLink>
				<NavLink to="/booking" className={linkClass}>
					Booking
				</NavLink>
				<NavLink to="/gallery" className={linkClass}>
					Gallery
				</NavLink>
				<NavLink to="/contact" className={linkClass}>
					Contact
				</NavLink>
				<NavLink to="/about" className={linkClass}>
					About
				</NavLink>
			</div>

			<Button text="Login/Sign up" to="/login" />
		</nav>
	);
};

export default Navbar;
