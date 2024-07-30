import React, { useEffect, useState } from "react";
import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import axios from "axios";
import { toast } from "react-toastify";

const AdminAddRoom = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);

	const roomTypes = ["Single", "Double", "Suite"];
	const [roomName, setRoomName] = useState("");
	const [roomType, setRoomType] = useState("Single");
	const [roomDescription, setRoomDescription] = useState("");
	const [roomMaxGuests, setRoomMaxGuests] = useState();
	const [allViews, setAllViews] = useState([]);
	const [roomView, setRoomView] = useState("");
	const [roomCost, setRoomCost] = useState();
	const [allAmenities, setAllAmenities] = useState([]);
	const [roomAmenities, setRoomAmenities] = useState([]);

	const [roomSize, setRoomSize] = useState();

	useEffect(() => {
		async function fetchFromApi() {
			let res = await axios.get("/api/amenities");
			const amenities = res.data;
			setAllAmenities(amenities);
            setRoomAmenities([amenities[0].name])

			res = await axios.get("/api/views");
			const views = res.data;
			setAllViews(views);
            setRoomView(views[0].name)

			setLoading(false);
		}

		fetchFromApi();
	}, []);

	function changeRoomAmenities(e) {
		if (e.target.checked) {
			setRoomAmenities((prevValues) => {
				return [...prevValues, e.target.value];
			});
		} else {
			setRoomAmenities((prevValues) => {
				return prevValues.filter((a) => a != e.target.value);
			});
		}
	}

	async function addRoom(e) {
		e.preventDefault();

		const newRoom = {
			name: roomName,
			description: roomDescription,
			images: ["https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg"],
			size: roomSize,
			type: roomType,
			view: roomView,
			rating: 4.9,
			maxGuests: roomMaxGuests,
			amenities: roomAmenities,
			costPerNight: roomCost,
		};

		console.log(newRoom)

		try {
			const res = await axios.post(`/api/rooms/`, newRoom);
			console.log(newRoom);
			toast.success(`Room: ${newRoom.name} added successfully`);
			return navigate("/admin/rooms");
		} catch (error) {
            toast.error(`Something went wrong`);
			console.log(error.message);
		}
	}

	return (
		<>
			<Hero title={`New room: ${roomName}`} />
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<section className="bg-indigo-50">
					<div className="container m-auto max-w-2xl py-24">
						<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-[20px] m-4 md:m-0">
							<form onSubmit={addRoom} method="PUT">
								<h2 className="text-3xl text-center font-semibold mb-6">Details</h2>
								<div className="mb-4">
									<label className="block text-gray-700 font-bold mb-2">
										Room Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={roomName}
										className="border rounded w-full py-2 px-3 mb-2"
										onChange={(e) => setRoomName(e.target.value)}
										required
									/>
								</div>

								<div className="mb-4">
									<label
										htmlFor="description"
										className="block text-gray-700 font-bold mb-2"
									>
										Description
									</label>
									<textarea
										id="description"
										name="description"
										value={roomDescription}
										className="border rounded w-full py-2 px-3"
										rows="4"
										onChange={(e) => setRoomDescription(e.target.value)}
                                        required
									></textarea>
								</div>

								<div className="mb-4">
									<label
										htmlFor="type"
										className="block text-gray-700 font-bold mb-2"
									>
										Room Type
									</label>
									<select
										id="type"
										name="type"
										value={roomType}
										className="border rounded w-full py-2 px-3"
										onChange={(e) => setRoomType(e.target.value)}
										required
									>
										<option value="Single">Single</option>
										<option value="Double">Double</option>
										<option value="Suite">Suite</option>
									</select>
								</div>

								<div className="mb-4">
									<label
										htmlFor="type"
										className="block text-gray-700 font-bold mb-2"
									>
										Room View
									</label>
									<select
										id="view"
										name="view"
										className="border rounded w-full py-2 px-3"
										required
										value={roomView}
										onChange={(e) => setRoomView(e.target.value)}
									>
										{allViews.map((v) => (
											<option key={v._id} value={v.name}>
												{v.name}
											</option>
										))}
									</select>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 font-bold mb-2">
										Amenities
									</label>
									<div className="flex flex-wrap gap-2 justify-start">
										{allAmenities.map((amenity) => (
											<>
												<div key={amenity._id}>
													<label
														htmlFor="amenity"
														id={amenity._id}
														name={amenity.name}
													>
														{amenity.name}
													</label>
													<input
														key={amenity._id}
														type="checkbox"
														className="ml-4 mr-4"
														value={amenity.name}
														onChange={(e) => changeRoomAmenities(e)}
														checked={roomAmenities.includes(
															amenity.name
														)}
													/>
												</div>
											</>
										))}
									</div>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 font-bold mb-2">
										Maximum Guests
									</label>
									<input
										type="number"
										id="maxGuests"
										name="maxGuests"
										min="1"
										max="10"
										value={roomMaxGuests}
										className="border rounded w-full py-2 px-3 mb-2"
										required
										onChange={(e) => setRoomMaxGuests(e.target.value)}
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 font-bold mb-2">
										Room Size
									</label>
									<input
										type="number"
										id="size"
										name="size"
										value={roomSize}
										className="border rounded w-full py-2 px-3 mb-2"
										required
										onChange={(e) => setRoomSize(e.target.value)}
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 font-bold mb-2">
										Room Cost Per Night
									</label>
									<input
										type="number"
										id="cost"
										name="cost"
										value={roomCost}
										className="border rounded w-full py-2 px-3 mb-2"
										required
										onChange={(e) => setRoomCost(e.target.value)}
									/>
								</div>

								<div>
									<button
										className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
										type="submit"
									>
										Add room
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default AdminAddRoom;
