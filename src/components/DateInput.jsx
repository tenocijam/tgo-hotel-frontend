import { Datepicker } from "flowbite-react";
import React, { useEffect, useState } from "react";

const DateInput = () => {
	// const storedCheckin = localStorage.getItem("checkin");
	// const initialCheckinDate = storedCheckin ? new Date(storedCheckin) : new Date();

	// if (!storedCheckin) {
	// 	localStorage.setItem("checkin", initialCheckinDate.toISOString().split("T")[0]);
	// }

	const [selectedCheckInDate, setSelectedCheckInDate] = useState(localStorage.getItem("checkin"));
	const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(localStorage.getItem("checkout"));

	const handleCheckInChange = (e) => {
		setSelectedCheckInDate(e.target.value);

		// let date = new Date(e.target.value)
		// const options = { day: '2-digit', month: 'long', year: 'numeric' };

		// let fd = date.toLocaleDateString('en-GB', options);

		localStorage.setItem("checkin", e.target.value);
		// console.log(fd);
	};

	const handleCheckOutChange = (e) => {
		setSelectedCheckOutDate(e.target.value);
		localStorage.setItem("checkout", e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			<div className="flex justify-center gap-4 mb-6 mt-6">
				<div>
					<h5 className="text-lg font-bold mb-2">Check-in</h5>
					<input
						type="date"
						id="checkin"
						value={selectedCheckInDate}
						name="checkin"
						onChange={handleCheckInChange}
					/>
				</div>

				<div>
					<h5 className="text-lg font-bold mb-2">Check-out</h5>
					<input
						type="date"
						id="checkout"
						value={selectedCheckOutDate}
						name="checkout"
						onChange={handleCheckOutChange}
					/>
				</div>
			</div>
		</>
	);
};

export default DateInput;
