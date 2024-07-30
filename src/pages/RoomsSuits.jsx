import React from "react";
import Hero from "../components/Hero";
import RoomsListing from "../components/RoomsListing";

const RoomsSuits = () => {
	return (
		<>
			<Hero title="Rooms & Suits" />
			<div className="flex gap-4 justify-center my-10">
				<div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-primary py-1.5 px-3 font-sans text-base font-bold text-white">
					<span className="">All</span>
				</div>
				<div className="relative grid select-none items-center whitespace-nowrap rounded-full border-black border-2 py-1.5 px-3 font-sans text-base text-black">
					<span className="">Single</span>
				</div>
				<div className="relative grid select-none items-center whitespace-nowrap rounded-full border-black border-2 py-1.5 px-3 font-sans text-base text-black">
					<span className="">Double</span>
				</div>
				<div className="relative grid select-none items-center whitespace-nowrap rounded-full border-black border-2 py-1.5 px-3 font-sans text-base text-black">
					<span className="">Suite</span>
				</div>
			</div>
            <RoomsListing />
			
		</>
	);
};

export default RoomsSuits;
