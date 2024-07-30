import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { toast } from "react-toastify";
import axios from "axios";

const BookingsListing = () => {
	const [rooms, setRooms] = useState();
    const [bookings, setBookings] = useState();
	const [loading, setLoading] = useState(true);
    const [roomNameLoading, setRoomNameLoading] = useState(true);
    const [roomName, setRoomName] = useState()

	useEffect(() => {
		async function fetchBookings() {
			try {
				const res = await axios.get("/api/bookings");
				const data = res.data;
				setBookings(data);
                // fetchRooms();
				setLoading(false);
				console.log(data);
			} catch (error) {
				toast.error("Something went wrong");
				console.log(error.message);
			}
		}

        async function fetchRooms() {
            try {
                const res = await axios.get("/api/rooms/");
                const data = res.data;

                setRooms(data);
                console.log(data);

            } catch (error) {
                console.log(error.message)
            }
        }

		fetchBookings();
	}, []);

    function getRoomName(id) {
        // console.log(id);
        let data = "";
        async function getData () {
            const res = await axios.get(`/api/rooms/${id}`)
            data = res.data
            // setRoomName(data.name)
            setRoomNameLoading(false)
            console.log("NAME", data.name);
            return data.name;
        }

        getData();
        return data.name;
    }

	return (
		<>
			{loading ? (
				<h1>Fetching bookings...</h1>
			) : (
				<div className="overflow-x-auto mt-10">
					<Table striped className="text-black">
						<Table.Head className="text-lg capitalize">
							<Table.HeadCell>Name</Table.HeadCell>
							<Table.HeadCell>Email</Table.HeadCell>
							<Table.HeadCell>Check-in Date</Table.HeadCell>
							<Table.HeadCell>Check-out Date</Table.HeadCell>
							<Table.HeadCell>Rooms</Table.HeadCell>
							<Table.HeadCell>Total Cost</Table.HeadCell>
						</Table.Head>
						<Table.Body className="divide-y text-lg">
							{bookings.map((booking) => (
								<Table.Row key={booking._id} className="bg-white dark:border-black dark:bg-black">
									<Table.Cell>{booking.username}</Table.Cell>
									<Table.Cell>{booking.email}</Table.Cell>
									<Table.Cell>{booking.checkInDate.split("T")[0]}</Table.Cell>
									<Table.Cell>{booking.checkOutDate.split("T")[0]}</Table.Cell>
									<Table.Cell>
										{booking.rooms.map((r, index) => (
                                            <div key={r._id} className="mb-4">
                                                <p>Room {index + 1}:</p>
                                                <p>{r.adults} adults, {r.children} children</p>
                                            </div>
                                        ))}
									</Table.Cell>
									<Table.Cell>${booking.totalCost}</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</div>
			)}
		</>
	);
};

export default BookingsListing;
