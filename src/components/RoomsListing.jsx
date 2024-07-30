import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";

const RoomsListing = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getRooms = async () => {
			try {
				const res = await axios.get("https://tgo-hotel-api.onrender.com/rooms");
				const data = await res.data;
				console.log("DATA", data);

				setRooms(data);
				setLoading(false);
			} catch (error) {
				console.error(error.message);
			} finally {
				// setLoading(false);
				console.log(rooms);
			}
		};

		getRooms();
	}, []);

	return (
		<>
			<div className="flex flex-wrap gap-4 justify-evenly gap-y-8">
				{loading ? (
					<h1>Loading...</h1>
				) : rooms.length != 0 ? (
					<>
						{rooms.map((room) => (
							<RoomCard key={room._id} room={room} />
						))}
					</>
				) : (
					<h1 className="text-red-700">Error fetching rooms/suits details</h1>
				)}
			</div>
		</>
	);
};

export default RoomsListing;
