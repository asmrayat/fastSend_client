import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ item }) => {
    const {_id,service_id, title, img } = item;
    return (
        <Link to={`/booking/${service_id}`}>
            <div className='mt-20' data-aos="zoom-out" data-aos-duration="1000">
                <div className="card w-[170px] h-[156px] lg:w-[270px] lg:h-[200px] rounded-lg border border-[#c9c9c9] ">
                    <div className="flex items-center w-[170px] h-[156px]  lg:w-[270px] lg:h-[256px] card-body rounded-lg hover:bg-[#ea5b532c]">
                        <img className='object-cover w-[80px] h-[80px]' src={img} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-xl">{title}</h2>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceItem;