import React from "react";
import Hero from "../components/Hero";

const About = () => {
	return (
		<>
			<Hero title="About Us" />
			<div className="bg-white w-4/6 p-6 m-auto rounded-[20px] shadow-md mt-6 text-xl">
				<p>
					Welcome to The Grand Oasis, your ultimate destination for luxury and comfort.
					Nestled in the heart of a bustling city, The Grand Oasis offers a serene escape
					from the daily grind, combining modern amenities with unparalleled hospitality.
					Whether you're here for business or leisure, our dedicated staff ensures your
					stay is memorable and delightful.
				</p>
                <br></br>
				<p>
					At The Grand Oasis, we pride ourselves on delivering exceptional service and a
					warm, welcoming atmosphere. Our meticulously designed rooms and suites,
					exquisite dining options, and state-of-the-art facilities cater to all your
					needs, making your stay with us truly unforgettable.
				</p>
			</div>
		</>
	);
};

export default About;
