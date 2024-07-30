import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const MyFooter = () => {
	return (
		<footer className="bg-green-200 h-24 mt-12 text-center">
			<div className="flex w-full h-full justify-center items-center">
				<h2 className="text-lg font-semibold mr-2">The Grand Oasis Hotel</h2>
				<FaRegCopyright className="mr-2" />
				<h2 className="text-lg font-semibold">2024</h2>
			</div>
		</footer>
	);
};

export default MyFooter;
