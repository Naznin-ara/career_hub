import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
       <div className='w-full min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
          
            
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default Root;