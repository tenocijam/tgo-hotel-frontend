import React from "react";
import Hero from "../components/Hero";
import { FaWifi, FaDesktop, FaSwimmingPool, FaSpa } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import CheckInOut from "../components/CheckInOut";

const Home = () => {
	return (
		<>
			<Hero
				title="The Grand Oasis"
				subtitle="Experience Luxury and Tranquility in Every Stay"
			/>
			<div className="flex justify-center -mt-16">
				<CheckInOut />
			</div>
			<h2 className="text-5xl text-center mt-10">Facilities</h2>

			<div className="flex flex-wrap gap-x-6 gap-y-6 text-xl mt-8 items-center justify-evenly">
				<div className="flex items-center">
					<FaWifi className="mr-6 text-3xl" />
					<div className="flex flex-col">
						<h3 className="font-bold">Free Wi-Fi</h3>
						<p>High-speed internet access throughout the hotel</p>
					</div>
				</div>
				<div className="flex items-center">
					<FaDesktop className="mr-6 text-3xl" />
					<div className="flex flex-col">
						<h3 className="font-bold">24/7 Front Desk</h3>
						<p>Always ready to assist you with any needs or inquiries</p>
					</div>
				</div>
				<div className="flex items-center">
					<FaSwimmingPool className="mr-6 text-3xl" />
					<div className="flex flex-col">
						<h3 className="font-bold">Swimming Pool</h3>
						<p>A large, heated outdoor pool with a beautiful view</p>
					</div>
				</div>
				<div className="flex items-center">
					<IoIosFitness className="mr-6 text-3xl" />
					<div className="flex flex-col">
						<h3 className="font-bold">Fitness Center</h3>
						<p>Fully equipped with the latest exercise machines</p>
					</div>
				</div>
				<div className="flex items-center">
					<FaSpa className="mr-6 text-3xl" />
					<div className="flex flex-col">
						<h3 className="font-bold">Spa and Wellness Center</h3>
						<p>Offering a range of relaxing treatments and massages</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
