import React from 'react';
import img3 from '../../../assets/img3.png';
import { Link } from 'react-router-dom';

const DownloadApp = () => {
    return (
        <div className='lg:mt-52' data-aos="fade-up">

            <div className='lg:flex w-full'>

                <div data-aos="fade-left" data-aos-duration="1000" className='lg:w-1/2 flex items-center'>
                    <div>
                        <h1 className='font-bold text-5xl text-center '>Download Our <span className='font-bold text-[#ea5a53]'>App</span></h1>
                        <p className='text-lg lg:mt-10 p-5 lg:p-0 text-center'>Optimize your delivery experience – download our app today and unlock a world of convenience at your fingertips!</p>
                        <div className='flex justify-center gap-3 mt-5'>
                            <Link to="https://play.google.com/" target="_blank">
                            <img className='h-14' src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="" />
                            </Link>
                            <Link to="https://www.apple.com/app-store/" target="_blank">
                            <img className='h-14' src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="" />
                            </Link>
                           
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img className='lg:h-[700px] object-cover ' src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;