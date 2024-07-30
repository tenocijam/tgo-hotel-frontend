import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import GuestCounter from "./GuestCounter";

const RoomBookingDetailCard = ({roomId}) => {
	const defaultRoom = {
		id: crypto.randomUUID(),
        roomId: roomId,
		adults: 1,
		children: 0,
	};
	const [roomsBooking, setRoomsBooking] = useState(() => {
        const localValue = localStorage.getItem("ROOMS")

        if (localValue == null)
            return [defaultRoom]
        else
            return JSON.parse(localValue);
    });
	const [deleteBtnVisibility, setDeleteBtnVisibility] = useState(false);

	useEffect(() => {
		localStorage.setItem("ROOMS", JSON.stringify(roomsBooking));
	}, [roomsBooking]);

	function addRoom(e) {
		e.preventDefault();

		if (roomsBooking.length >= 1 && roomsBooking.length < 4) {
			setRoomsBooking((prevState) => {
				return [...prevState, { ...defaultRoom, id: crypto.randomUUID() }];
			}, []);
		} else {
			alert("Cannot add more than 4 rooms in a single booking.");
		}
	}

	function deleteRoom(id) {
		if (roomsBooking.length > 1) {
			setRoomsBooking((prevState) => {
				return prevState.filter((room) => room.id != id);
			}, []);
		} else {
			alert("There should be atleast one room");
		}
	}

	function updateRoom(id, type, value) {
		setRoomsBooking((prevState) =>
			prevState.map((room) => (room.id === id ? { ...room, [type]: value, roomId: roomId } : room))
		);
	}
	console.log("ROOMS:", roomsBooking);

	return (
		<>
			<div className="flex justify-between items-baseline">
				<h3 className="text-2xl font-bold">Rooms</h3>
				<p className="underline cursor-pointer" onClick={addRoom}>
					Add room
				</p>
			</div>
			{roomsBooking.map((room, index) => (
				<div
					key={room.id}
					className="bg-cardbg p-6 mt-4 rounded-[20px] shadow-md"
					onMouseEnter={() => {
						setDeleteBtnVisibility(true);
					}}
					onMouseLeave={() => {
						setDeleteBtnVisibility(false);
					}}
				>
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-bold">Room {index + 1}</h2>

						<TiDelete
							className="text-3xl text-red-500 cursor-pointer"
							onClick={() => deleteRoom(room.id)}
						/>
					</div>

					<GuestCounter
						key="Adults"
						title="Adults"
						count={room.adults}
                        roomId={roomId}
						onCountChange={(value) => updateRoom(room.id, "adults", value)}
					/>
					<GuestCounter
						key="Children"
						title="Children"
						count={room.children}
                        roomId={roomId}
						onCountChange={(value) => updateRoom(room.id, "children", value)}
					/>
				</div>
			))}
		</>
	);
};

export default RoomBookingDetailCard;
