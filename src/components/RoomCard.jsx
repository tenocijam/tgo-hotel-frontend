import React from "react";
import { FaUsers, FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import Button from "./Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room, isAdmin = false }) => {

	const navigate = useNavigate();

	async function deleteRoom() {
		const confirm = window.confirm(`Are you sure you want to delete room: ${room.name}`);

		if (!confirm) return;

		try {
			const res = await axios.delete(`/api/rooms/${room._id}`)
			toast.success(`${room.name} deleted successfully`)
		} catch (error) {
			toast.error("Something went wrong")
			console.log(error.message);
		}
		// console.log(`Deleted room: ${room.name}`)
	}

	return (
		<>
			<div className="max-w-xs bg-white rounded-[20px] shadow-lg dark:bg-gray-800 dark:border-gray-700">
				<a className="drop-shadow-xl">
					<img className="rounded-[20px]" src={room.images[0]} alt="" />
				</a>
				<div className="p-5 place-self-end flex flex-col">
					<div>
						<a>
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
								{room.name}
							</h5>
						</a>
						<div className="flex flex-wrap gap-x-4 gap-y-2 justify-between items-center my-3">
							<div className="flex gap-2 items-center">
								<MdOutlineBedroomParent className="text-base" />
								<p>{room.type.name}</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaUsers className="text-base" />
								<p>Upto {room.maxGuests} guests</p>
							</div>
							<div className="flex gap-2 items-center ">
								<IoEyeSharp className="text-base" />
								<p>{room.view.name}</p>
							</div>
							<div className="flex gap-2 items-center ">
								<FaStar className="text-base text-yellow-500" />
								<p>{room.rating}</p>
							</div>
						</div>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							{room.description}
						</p>
					</div>

					<div className="flex justify-between items-center mt-6">
						<h5 className="text-2xl font-bold">
							${room.costPerNight}
							<span className="text-lg font-semibold pl-1">/night</span>
						</h5>
						{/* <Button text="Book now" filled={true} /> */}
						{isAdmin ? (
							<>
								<a
									href={`/admin/edit-room/${room._id}`}
									className="text-yellow-500 border-yellow-500 border-2 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white"
								>
									Edit
								</a>
								<button
									href={`/admin/rooms/${room._id}`}
									className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700"
									onClick={deleteRoom}
								>
									Delete
								</button>
							</>
						) : (
							<a
								href={`/rooms-suits/${room._id}`}
								className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-hover"
							>
								Book now
							</a>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default RoomCard;
