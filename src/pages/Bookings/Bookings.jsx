import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('fast-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount>0){
                            const remaning = bookings.filter(booking => booking._id !== id);
                            setBookings(remaning);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!'
                              })
                        }
                    })
            }
        })

    }
    return (
        <div>
            <div className='text-center' >
                <h1 className='font-bold text-5xl mt-5'>My<span className='font-bold text-[#ea5a53]'>Bookings</span></h1>
                <p className='text-2xl mt-5'>Total number of order{bookings.length}</p>
            </div>
          
            
            <div className="overflow-x-auto m-5 mb-96">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Image</th>
                            <th>Service name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Cancel</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            ></BookingRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;