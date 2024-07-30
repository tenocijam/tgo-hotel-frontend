import axios from "axios";
import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import Hero from "../components/Hero";
import Button from "../components/Button";

const AdminRooms = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getRooms = async () => {
			try {
				const res = await axios.get("/api/rooms");
				const data = await res.data;
				// console.log("DATA", data);

				setRooms(data);
				setLoading(false);
			} catch (error) {
				console.error(error.message);
			} finally {
				// setLoading(false);
				// console.log(rooms);
			}
		};

		getRooms();
	}, []);

	return (
		<>
			<Hero title="All Rooms & Suits" />

			<div className="mt-8 w-full flex justify-center">
				<Button text="Add new room" to="/admin/add-room" />
			</div>

			<div className="flex flex-wrap gap-4 justify-evenly gap-y-8 mt-8">
				{loading ? (
					<h1>Loading...</h1>
				) : rooms.length != 0 ? (
					<>
						{rooms.map((room) => (
							<RoomCard key={room._id} room={room} isAdmin={true} />
						))}
					</>
				) : (
					<h1 className="text-red-700">Error fetching rooms/suits details</h1>
				)}
			</div>
		</>
	);
};

export default AdminRooms;
