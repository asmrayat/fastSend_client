import React from 'react';
import img1 from '../../../assets/img1.png';


const KnowUs = () => {
    return (
        <div className='lg:mt-52' data-aos="fade-up">

            <div className='lg:flex w-full'>
                <div className='lg:w-1/2'>
                    <img className='lg:h-[700px]' src={img1} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='lg:w-1/2 flex items-center'>
                    <div>
                        <h1 className='font-bold text-5xl text-center lg:text-start'>Know <span className='font-bold text-[#ea5a53]'>us</span></h1>
                        <p className='text-lg lg:mt-10 p-5 lg:p-0 text-center lg:text-start'>Experience convenience at its best with our versatile delivery solutions. From swift transportation options to prompt and reliable deliveries, we are dedicated to providing you with seamless service every time. Explore how we make your life easier.</p>
                        <div className='flex flex-col items-center lg:items-start'>
                        <button className="btn bg-[#ea5a53] text-white hover:bg-black mt-5 ">Check our blogs</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowUs;