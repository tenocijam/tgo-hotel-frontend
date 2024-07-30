import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";
import GuestCounter from "./GuestCounter";
import axios from "axios";
import Button from "./Button";
import DateInput from "./DateInput";

const BookingRoomCard = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	const [defaultBookingRoom, setDefaultBookingRoom] = useState({
		bookingRoomId: crypto.randomUUID(),
		roomId: "roomId",
		roomName: "",
		adults: 1,
		children: 0,
		cost: 0,
	});

	const [bookingRooms, setBookingRooms] = useState(() => {
		const localValue = localStorage.getItem("ROOMS");

		if (localValue == null) return [];
		else return JSON.parse(localValue);
	});

	const [roomType, setRoomType] = useState("");

	useEffect(() => {
		localStorage.setItem("ROOMS", JSON.stringify(bookingRooms));
	}, [bookingRooms]);

	useEffect(() => {
		async function fetchRooms() {
			try {
				const res = await axios.get("/api/rooms");
				const data = res.data;
				console.log("ROOMS API: ", data);
				setRooms(data);
				setDefaultBookingRoom(() => ({
					...defaultBookingRoom,
					roomId: data[0]._id,
					roomName: data[0].name,
					cost: data[0].costPerNight,
				}));
				setLoading(false);
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchRooms();
	}, []);

	function addRoom(e) {
		e.preventDefault();

		console.log("LENGTH:", bookingRooms.length);

		let roomId = "";
		let roomName = "";

		if (!loading) {
			roomId = rooms[0].roomId;
			roomName = rooms[0].roomName;
		}

		if (bookingRooms.length >= 0 && bookingRooms.length < 4) {
			setBookingRooms((prevState) => {
				return [
					...prevState,
					{ ...defaultBookingRoom, bookingRoomId: crypto.randomUUID() },
				];
			}, []);
		} else {
			toast.error("Cannot add more than 4 rooms in a single booking.");
		}
	}

	function deleteRoom(id) {
		if (bookingRooms.length > 1) {
			setBookingRooms((prevState) => {
				return prevState.filter((room) => room.bookingRoomId != id);
			}, []);
		} else {
			toast.error("There should be atleast one room")
			// alert("There should be atleast one room");
		}
	}

	function updateRoom(bookingRoomId, type, value) {
		setBookingRooms((prevState) =>
			prevState.map((room) =>
				room.bookingRoomId === bookingRoomId ? { ...room, [type]: value } : room
			)
		);
	}
	console.log("ROOMS:", bookingRooms);

	return (
		<>
			<div className="flex gap-4 items-baseline mt-8">
				<h2 className="text-3xl font-bold">Rooms</h2>
				<p className="underline cursor-pointer hover:text-primary" onClick={addRoom}>
					Add room
				</p>
			</div>
			<DateInput />
			<div className="flex gap-4 flex-wrap justify-evenly">
				{bookingRooms.map((bookingRoom, index) => (
					<div
						key={bookingRoom.bookingRoomId}
						className="bg-cardbg p-6 mt-4 rounded-[20px] shadow-m w-80"
					>
						<div className="flex justify-between items-center">
							<h2 className="text-xl font-bold">Room {index + 1}</h2>

							<TiDelete
								className="text-3xl text-red-500 cursor-pointer"
								onClick={() => deleteRoom(bookingRoom.bookingRoomId)}
							/>
						</div>

						<form className="flex justify-between items-center mt-6">
							<label
								htmlFor={bookingRoom.bookingRoomId}
								className="block text-black font-bold mb-2"
							>
								Room Type
							</label>
							<select
								id={bookingRoom.bookingRoomId}
								name={bookingRoom.bookingRoomId}
								className="border rounded py-2 px-3"
								required
								value={bookingRoom.roomName}
								onChange={(e) => {
									const selectedRoom = rooms.find(
										(r) => r.name === e.target.value
									);
									const roomId = selectedRoom ? selectedRoom._id : "";
									const roomCost = selectedRoom ? selectedRoom.costPerNight : "";
									updateRoom(
										bookingRoom.bookingRoomId,
										"roomName",
										e.target.value
									);
									updateRoom(bookingRoom.bookingRoomId, "roomId", roomId);
									updateRoom(bookingRoom.bookingRoomId, "cost", roomCost);
								}}
								disabled={loading}
							>
								{loading ? (
									<option>Loading...</option> // Show a loading message
								) : (
									rooms.map((room) => (
										<option key={room._id} id={room._id} value={room.name}>
											{room.name}
										</option>
									))
								)}
							</select>
						</form>

						<GuestCounter
							key="Adults"
							title="Adults"
							count={bookingRoom.adults}
							roomId="roomId"
							onCountChange={(value) =>
								updateRoom(bookingRoom.bookingRoomId, "adults", value)
							}
						/>
						<GuestCounter
							key="Children"
							title="Children"
							count={bookingRoom.children}
							roomId="roomId"
							onCountChange={(value) =>
								updateRoom(bookingRoom.bookingRoomId, "children", value)
							}
						/>
					</div>
				))}
			</div>
			{bookingRooms.length != 0 && (
				<div className="w-full text-center my-10">
					<Button to="/make-payment" text="Make payment" filled={true} />
				</div>
			)}
		</>
	);
};

export default BookingRoomCard;
