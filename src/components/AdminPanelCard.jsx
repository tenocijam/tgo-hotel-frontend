import React from "react";

const AdminPanelCard = ({ icon, mainTitle = "12", title = "Total", lightColor, darkColor }) => {
	return (
		<>
			<div className={`${lightColor} p-6 w-fit rounded-[20px]`}>
				<div className="flex justify-start items-center">
					<div className={`rounded-full p-3 w-fit ${darkColor}`}>{icon}</div>
					<h2 className="text-5xl font-bold ml-4">{mainTitle}</h2>
				</div>
				<p className="text-2xl font-medium mt-6">{title}</p>
			</div>
		</>
	);
};

export default AdminPanelCard;
