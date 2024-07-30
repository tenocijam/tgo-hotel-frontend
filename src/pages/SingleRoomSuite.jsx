import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import { FaUsers, FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import Hero from "../components/Hero";
import RoomBookingDetailCard from "../components/RoomBookingDetailCard";
import AmountCard from "../components/AmountCard";
import Button from "../components/Button";

const SingleRoomSuite = () => {
	const { id } = useParams();
	const room = useLoaderData();

	return (
		<>
			<Hero title={room.name} />

			<section className="">
				<div className="container m-auto py-10 px-6">
					<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
						<main>
							{/* <div className="bg-[url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg')]"></div> */}
							<img
								className="bg-black rounded-[20px] shadow-md text-center md:text-left w-full h-[500px] bg-center bg-cover"
								src={room.images[0]}
							></img>

							<div className="bg-white p-8 rounded-[20px] shadow-md mt-6">
								<h2 className="text-black text-4xl font-bold mb-8">About</h2>

								<p className="mb-6 text-xl">{room.description}</p>

								<div className="flex  flex-wrap gap-x-4 gap-y-2 justify-start items-start my-3 mx-16 text-xl">
									<div className="flex gap-2 items-center">
										<MdOutlineBedroomParent className="text-xl" />
										<p>{room.type.name}</p>
									</div>
									<div className="flex gap-2 items-center">
										<FaUsers className="text-xl" />
										<p>Upto {room.maxGuests} guests</p>
									</div>
									<div className="flex gap-2 items-center ">
										<IoEyeSharp className="text-xl" />
										<p>{room.view.name}</p>
									</div>
									<div className="flex gap-2 items-center ">
										<FaStar className="text-xl text-yellow-500" />
										<p>{room.rating}</p>
									</div>
								</div>

								<h3 className="mt-16 text-black text-3xl font-bold mb-8">Amenities</h3>
								{room.amenities.map((amenity) => (
									<p key={amenity._id} className="mb-4 text-xl">
										{amenity.name}
									</p>
								))}
							</div>
						</main>

						{/* <!-- Sidebar --> */}
						<aside>
							{/* <!-- Booking info --> */}

							{/* <RoomBookingDetailCard roomId={room._id} /> */}

							{/* <!-- Costs --> */}
							<AmountCard title="Cost per night" amount={room.costPerNight} />

							<div className="mt-6 w-full text-center">
								<Button to="/booking" text="Book now" filled={true} />
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

const roomLoader = async ({ params }) => {
	const res = await fetch(`https://tgo-hotel-api.onrender.com/rooms/${params.id}`);
	const data = res.json();

	return data;
};

export { SingleRoomSuite as default, roomLoader };
