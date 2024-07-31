import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AdminPanelCard from "../components/AdminPanelCard";
import { IconContext } from "react-icons";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { RiSparklingFill } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";

const Admin = () => {
	const [totalBookings, setTotalBookings] = useState(10);
	const [totalRooms, setTotalRooms] = useState(10);
	const [totalAmenities, setTotalAmenities] = useState(10);
	const [totalViews, setTotalViews] = useState(10);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getDetails() {
			try {
				let res = await axios.get("https://tgo-hotel-api.onrender.com/rooms");
				let data = res.data;
				setTotalRooms(data.length);

				res = await axios.get("https://tgo-hotel-api.onrender.com/bookings");
				data = res.data;
				setTotalBookings(data.length);

				res = await axios.get("https://tgo-hotel-api.onrender.com/amenities");
				data = res.data;
				setTotalAmenities(data.length);

				res = await axios.get("https://tgo-hotel-api.onrender.com/views");
				data = res.data;
				setTotalViews(data.length);
			} catch (error) {
				toast.error("Something went wrong while fetching details");
			} finally {
				setLoading(false);
			}
		}

		getDetails();
	}, []);

	return (
		<>
			<Hero title="Admin Panel" />

			{loading ? (
				<h1>Loading data...</h1>
			) : (
				<IconContext.Provider value={{ size: "2.5rem" }}>
					<div className="flex justify-evenly g-2 items-center mt-8">
						<AdminPanelCard
							icon={<FaRegAddressCard />}
							mainTitle={totalBookings}
							title="Total Bookings"
							lightColor="bg-cyan-200"
							darkColor="bg-cyan-300"
						/>

						<AdminPanelCard
							icon={<MdOutlineBedroomParent />}
							mainTitle={totalRooms}
							title="Total Rooms"
							lightColor="bg-indigo-200"
							darkColor="bg-indigo-300"
						/>

						<AdminPanelCard
							icon={<RiSparklingFill />}
							mainTitle={totalAmenities}
							title="Total Amenities"
							lightColor="bg-orange-200"
							darkColor="bg-orange-300"
						/>

						<AdminPanelCard
							icon={<IoEyeSharp />}
							mainTitle={totalViews}
							title="Total View Types"
							lightColor="bg-sky-200"
							darkColor="bg-sky-300"
						/>
					</div>
				</IconContext.Provider>
			)}
		</>
	);
};

export default Admin;
