import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import AmountCard from "../components/AmountCard";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-toastify";

const MakePayment = () => {
	const navigate = useNavigate();

	const checkin = localStorage.getItem("checkin");
	const checkout = localStorage.getItem("checkout");

	const [roomsBooking, setRoomsBooking] = useState(() => {
		const localValue = localStorage.getItem("ROOMS");

		if (localValue == null) return [];
		else return JSON.parse(localValue);
	});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("Credit-Card");

	
	let totalCost = 0;
	function calculateTotalCost() {
		if (roomsBooking.length != 0) {
			roomsBooking.map((r) => {
				totalCost += r.cost
			})
		}
		console.log("Total cost: $", totalCost);
	}

	calculateTotalCost();

	async function addBooking(e) {
		e.preventDefault();

		const bookedRooms = roomsBooking?.map((r) => {
			return {
				roomId: r.roomId,
				adults: r.adults,
				children: r.children,
				cost: r.cost,
			};
		});

		const bookingData = {
			username: name,
			email,
			paymentMethod,
			checkInDate: localStorage.getItem("checkin"),
			checkOutDate: localStorage.getItem("checkout"),
			rooms: bookedRooms,
			totalCost
		};

		bookedRooms != [] && (await axios.post("/api/bookings", bookingData));

		toast.success("Booking successfull");
	}

	if (roomsBooking.length != 0) {
		return (
			<>
				<Hero title="Make Payment" />

				<section className="">
					<div className="container m-auto py-10 px-6">
						<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
							<form onSubmit={addBooking}>
								<h3 className="text-2xl mb-5 font-bold">Customer Details</h3>

								<div className="mb-4">
									<label className="block text-gray-700 font-bold mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="border rounded w-full py-2 px-3 mb-2"
										placeholder="eg. John Doe"
										required
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
								</div>

								<div className="mb-4">
									<label
										htmlFor="contact_email"
										className="block text-gray-700 font-bold mb-2"
									>
										Contact Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="border rounded w-full py-2 px-3"
										placeholder="Email address to recieve confirmation mail"
										required
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
								<h3 className="text-2xl mb-5 font-bold mt-10">Payment Details</h3>

								<div className="mb-4">
									<label
										htmlFor="paymentType"
										className="block text-gray-700 font-bold mb-2"
									>
										Payment Method
									</label>
									<select
										id="paymentMethod"
										name="paymentMethod"
										className="border rounded w-full py-2 px-3"
										required
										value={paymentMethod}
										onChange={(e) => {
											setPaymentMethod(e.target.value);
										}}
									>
										<option value="Credit-Card">Credit-Card</option>
										<option value="UPI">UPI</option>
										<option value="Net-Banking">Net-Banking</option>
									</select>
								</div>

								<div className="mt-8">
									<button
										className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-hover text-xl font-bold w-full focus:outline-none focus:shadow-outline"
										type="submit"
									>
										Pay ${totalCost}
									</button>
								</div>
							</form>

							{/* <!-- Sidebar --> */}
							<aside>
								{/* <!-- Booking summary --> */}

								<div className="bg-cardbg p-6 mt-4 rounded-[20px] shadow-md">
									<h2 className="text-xl font-bold">Summary</h2>
									<p>Check-in: {checkin}</p>
									<p>Check-out: {checkout}</p>
									{roomsBooking?.map((room, index) => (
										<div key={room.id} className="mt-6">
											<h2 className="text-lg font-bold mb-2">
												Room {index + 1}
											</h2>
											<p>Room type: {room.roomName}</p>
											<p>Adult: {room.adults}</p>
											<p>Children: {room.children}</p>
											<p>Cost: ${room.cost}</p>
										</div>
										
									))}
								</div>

								<div className="text-center w-full mt-6">
									<Button to="/booking" text="Edit" />
								</div>

								<AmountCard title="Total cost" amount={totalCost} />
							</aside>
						</div>
					</div>
				</section>
			</>
		);
	} else {
		// return navigate("/booking");
		return <h1>Add some rooms first</h1>;
	}
};

export default MakePayment;
