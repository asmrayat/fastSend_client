import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])
    return (
        <div>
            <h2>booking number{bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Cancel</th>
                            <th>Image</th>
                            <th>Service name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            // handleDelete={handleDelete}
                            // handleConfirm ={handleConfirm}
                            ></BookingRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;