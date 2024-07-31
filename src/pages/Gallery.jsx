import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import { toast } from "react-toastify";

const Gallery = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getRooms() {
			try {
				const res = await axios.get("https://tgo-hotel-api.onrender.com/rooms");
				const data = res.data;
                
				setRooms(data);
				setLoading(false);
			} catch (error) {
				toast.error("Something went wrong while fetching images");
			}
		}

		getRooms();
	}, []);

	return (
		<>
			<Hero title="Gallery" />
			{loading ? (
				<h1>Loading images...</h1>
			) : (
				<div className="flex flex-wrap gap-6 justify-evenly mt-8">
					{rooms.map((r) => (
							<img
								className="rounded-[20px] shadow-md text-center md:text-left w-[500px] h-[500px] bg-center bg-cover"
								src={r.images[0]}
							/>
					))}
				</div>
			)}
		</>
	);
};

export default Gallery;

