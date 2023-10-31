import React from 'react';
import Header from '../pages/Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sheard/Header/Footer/Footer';

const Main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;