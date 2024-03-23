import { Link, NavLink } from "react-router-dom";
import MainBtn from "../others/MainBtn";

const Nav = () => {
    const link = <>
        <li><NavLink to='' className={({ isActive }) => isActive ? 'bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text font-medium text-transparent p-0' : 'text-[#757575] p-0 font-medium'}>Statistics</NavLink></li>
        <li><NavLink to='' className={({ isActive }) => isActive ? 'bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text font-medium text-transparent p-0' : 'text-[#757575] p-0 font-medium'}>Applied Jobs</NavLink></li>
        <li><NavLink to='' className={({ isActive }) => isActive ? 'bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text p-0 font-medium text-transparent' : 'text-[#757575] p-0 font-medium'}>Blog</NavLink></li>
    </>
    return (
        <nav className="bg-[#E8E8E8]">
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <Link to='/' className="text=[#1A1919] text-3xl font-extrabold">CareerHub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <MainBtn btnName={'Star Applying'}></MainBtn>
                </div>
            </div>
        </nav>
    );
};

export default Nav;