import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-neutral '>
             <footer className="max-w-screen-xl mx-auto flex justify-between items-center p-10 text-neutral-content">
          
          <nav className='flex flex-col '> 
            <header className="footer-title">Services</header> 
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav> 
          <nav className='flex flex-col '>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav> 
          <nav className='flex flex-col '>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>

        </div>
       
    );
};

export default Footer;