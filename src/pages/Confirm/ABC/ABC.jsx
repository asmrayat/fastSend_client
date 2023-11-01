//ABC mean ambulance,bike,car
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const ABC = () => {
    const services = useLoaderData();

    const { title, img } = services;

    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const city = form.city.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const date = form.date.value;

        const order = { img, name, email, city, address, phone,ServiceDate:date, serviceName: title };
        console.log(order);
        

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
            
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire(
                        'Your Booking is confirm',
                        'Check my booking for more information',
                        'success'
                      )
                }
            })
            form.reset();
            

    }
    return (
        <div>
            <div className='text-center mt-10' >
                <h1 className='font-bold text-5xl '>{title} <span className='font-bold text-[#ea5a53]'>Services</span></h1>
                <p className='text-2xl mt-3'>Please fill up the form</p>
            </div>
            <div>
                <form className='p-20' onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive your delivery.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name='name' placeholder="Name" className="input input-bordered w-full" required />
                            </div>

                            <div className="sm:col-span-3">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" name='email' disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" required />
                            </div>

                            <div className="sm:col-span-3">
                                <label className="label">
                                    <span className="label-text">Select Your City</span>
                                </label>
                                <select name='city' className="select select-bordered w-full " required>
                                    <option disabled selected>City List</option>
                                    <option>Sylhet</option>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                    <option>Khulna</option>
                                    <option>Rajshahi</option>
                                    <option>Mymensingh</option>
                                    <option>Cumilla</option>
                                    <option>Rangpur</option>
                                    <option>Barisal</option>
                                </select>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' placeholder="date" className="input input-bordered w-full" required />
                            </div>

                            <div className="col-span-full">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full" required />
                            </div>

                            <div className="sm:col-span-3">
                                <label className="label">
                                    <span className="label-text">Your Phone Number</span>
                                </label>
                                <input type="text" name='phone' placeholder="Number" className="input input-bordered w-full" required />
                            </div>
                            <div className="sm:col-span-3 flex justify-center gap-10 mt-7">
                                <input  className="btn text-white bg-[#18a018] hover:bg-[#136613]" type="submit" value="Confirm" />
                                <button className="btn text-white bg-[#d02525] hover:bg-[#a71d1d]">Cancel</button>
                            </div>


                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ABC;