import React from "react";

const Hero = ({ title, subtitle }) => {
	return (
		<div className="text-center bg-[url('/src/assets/images/hotel.jpg')] bg-center bg-cover w-full h-[500px] rounded-3xl">
			<div className="bg-[rgba(0,0,0,0.3)] rounded-3xl w-full h-full flex flex-col items-center justify-center text-white">
				<h1 className="text-7xl font-serif font-bold">{title}</h1>
                {subtitle && <p className="text-2xl mt-4 font-sans font-medium italic">{subtitle}</p>}
			</div>
		</div>
	);
};

export default Hero;
