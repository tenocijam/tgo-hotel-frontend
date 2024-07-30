import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
	return (
		<>
			<ToastContainer />
			<AdminNavbar />

			<Outlet />
			<MyFooter />
		</>
	);
};

export default AdminLayout;
