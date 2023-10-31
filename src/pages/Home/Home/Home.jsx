import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import KnowUs from '../Gallery/KnowUs';
import DownloadApp from '../DownloadApp/DownloadApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-32'>
            <Services></Services>
            </div>
            <div className='mt-32'>
            <KnowUs></KnowUs>
            </div>
            <div className='mt-32'>
            <DownloadApp></DownloadApp>
            </div>
        </div>
    );
};

export default Home;