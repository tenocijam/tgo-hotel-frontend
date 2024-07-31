import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";
import Button from "./Button";

const RoomsListing = () => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	// filtering logic start
	let filters = ["Single", "Double", "Suite"];
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [filteredItems, setFilteredItems] = useState(rooms);

	const handleFilterButtonClick = (selectedCategory) => {
		if (selectedFilters.includes(selectedCategory)) {
			let filters = selectedFilters.filter((el) => el !== selectedCategory);
			setSelectedFilters(filters);
		} else {
			setSelectedFilters([...selectedFilters, selectedCategory]);
		}
	};

	useEffect(() => {
		filterItems();
	}, [selectedFilters]);

	const filterItems = () => {
		if (selectedFilters.length > 0) {
			let tempItems = selectedFilters.map((selectedCategory) => {
				let temp = rooms.filter((item) => item.type.name === selectedCategory);
				return temp;
			});
			setFilteredItems(tempItems.flat());
		} else {
			setFilteredItems([...rooms]);
		}
	};

	// filtering logic end

	useEffect(() => {
		const getRooms = async () => {
			try {
				const res = await axios.get("https://tgo-hotel-api.onrender.com/rooms");
				const data = await res.data;
				console.log("DATA", data);

				setRooms(data);
				setFilteredItems(data);
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
			<div className="flex justify-center my-8 gap-4">
				{filters.map((category, idx) => (
					<button
						onClick={() => handleFilterButtonClick(category)}
						className={`text-black text-base border-[#726DA8] border-2 px-4 py-2 rounded-full hover:bg-[#726DA8] hover:text-white hover:border-[#726DA8] ${
							selectedFilters?.includes(category)
								? "bg-[#726DA8] border-[#726DA8] text-white"
								: ""
						}`}
						key={`filters-${idx}`}
					>
						{category}
					</button>
				))}
			</div>
			<div className="flex flex-wrap gap-4 justify-evenly gap-y-8">
				{loading ? (
					<h1>Loading...</h1>
				) : rooms.length != 0 ? (
					<>
						{filteredItems.map((room) => (
							<RoomCard key={room._id} room={room} />
						))}
					</>
				) : (
					<h1 className="text-red-700">No rooms/suits to display</h1>
				)}
			</div>
		</>
	);
};

export default RoomsListing;
