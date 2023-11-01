import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div data-aos="fade-up">
            <div className='text-center' >
                <h1 className='font-bold text-5xl '>Our <span className='font-bold text-[#ea5a53]'>Services</span></h1>
                <p className='text-2xl'>Find all of our best services here</p>
            </div>
            <div  className='grid grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                {
                    services.map(service =><ServiceItem
                    key={service._id}
                    item={service}
                    ></ServiceItem>)
                }
                </div>
        </div>
    );
};

export default Services;