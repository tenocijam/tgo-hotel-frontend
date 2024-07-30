import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter";

const MainLayout = () => {
	return (
		<>
			<ToastContainer />
			<Navbar />
			<Outlet />
			<MyFooter />

		</>
	);
};

export default MainLayout;
