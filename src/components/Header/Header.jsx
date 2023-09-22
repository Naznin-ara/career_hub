import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const list =<>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/statistics'>Statistics</NavLink>
     <NavLink to='/applied'>Applied Jobs</NavLink>
     <NavLink to='/blogs'>Blogs</NavLink>
    </>
    return (
        <div className='w-full bg-gray-100'>
             <div className="navbar max-w-screen-xl mx-auto ">
       <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {list}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
       </div>
      <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center gap-6 text-gray-500 font-medium">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary text-white">Apply Now</a>
  </div>
</div>

        </div>
       
    );
};

export default Header;