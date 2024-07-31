import React, { useState } from "react";

const GuestCounter = ({ title, count, onCountChange }) => {
	const [counter, setCounter] = useState(count);

	function addCount() {
		if (counter < 5) {
			const newCount = counter + 1;
			setCounter(newCount);
			onCountChange(newCount);
		}
	}

	function subtractCount() {
		if ((title == "Adults" && counter > 1) || (title == "Children" && counter > 0)) {
			const newCount = counter - 1;
			setCounter(newCount);
			onCountChange(newCount);
		}
	}

	return (
		<>
			<div className="flex justify-between items-center mt-4">
				<p className="my-2 font-semibold">{title}:</p>
				<div className="flex gap-4 justify-between items-center">
					<button
						className="rounded-full bg-white text-black px-5 py-3 text-xl"
						onClick={() => {
							subtractCount();
						}}
					>
						-
					</button>
					<p className="font-bold text-xl">{counter}</p>
					<button
						className="rounded-full bg-white text-black px-5 py-3 text-xl"
						onClick={() => {
							addCount();
						}}
					>
						+
					</button>
				</div>
			</div>
		</>
	);
};

export default GuestCounter;
