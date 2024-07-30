import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, text, filled }) => {
	return (
		<>
			{filled ? (
				<>
					<Link  to={to} className="text-white text-lg bg-primary px-4 py-2 rounded-lg hover:bg-primary-hover">
						{text}
					</Link>
				</>
			) : (
				<>
					<Link  to={to} className="text-primary text-lg border-primary border-2 px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
						{text}
					</Link>
				</>
			)}
		</>
	);
};

export default Button;
