import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import RoomsSuits from "./pages/RoomsSuits";
import SingleRoomSuite, { roomLoader } from "./pages/SingleRoomSuite";
import Booking from "./pages/Booking";
import MakePayment from "./pages/MakePayment";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/Admin";
import AdminRooms from "./pages/AdminRooms";
import AdminEditRoom from "./pages/AdminEditRoom";
import AdminAddRoom from "./pages/AdminAddRoom";
import AdminBookings from "./pages/AdminBookings";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/rooms-suits" element={<RoomsSuits />} />
				<Route path="/rooms-suits/:id" element={<SingleRoomSuite />} loader={roomLoader} />
				<Route path="/booking" element={<Booking />} />
				<Route path="/make-payment" element={<MakePayment />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="/" element={<AdminLayout />}>
				<Route path="/admin" element={<Admin />} />
				<Route path="/admin/rooms" element={<AdminRooms />} />
				<Route path="/admin/edit-room/:id" element={<AdminEditRoom />} loader={roomLoader} />
				<Route path="/admin/add-room/" element={<AdminAddRoom />} />
				<Route path="/admin/bookings" element={<AdminBookings />} />
				<Route path="/admin/about" element={<About />} />
				<Route path="/admin/*" element={<NotFound />} />
			</Route>
		</>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
