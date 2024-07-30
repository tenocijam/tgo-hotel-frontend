import React from "react";

const AmountCard = ({title, amount}) => {
	return (
		<div className="flex justify-between bg-white px-4 py-2 rounded-full  mt-6 border-cardbg border-4 items-center">
			<h6 className="text-xl font-semibold">{title}</h6>
			<h5 className="text-2xl font-bold">${amount}</h5>
		</div>
	);
};

export default AmountCard;
