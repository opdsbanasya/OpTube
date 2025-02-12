import React from 'react';
import ytLogo from "../assets/yt-logo.webp";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from 'react-icons/io';
import { PiDotsThreeVertical } from 'react-icons/pi';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/headerSlice';

const Header = () => {

    const dispatch = useDispatch();
    const handleSidebar = () => {
        dispatch(toggleSidebar());
    }

    return (
        <header className='w-full h-[10vh] flex items-center justify-between gap-2 px-5 pr-10'>
            <div className='w-3/12 flex gap-4'>
                <FiMenu className='text-xl cursor-pointer' 
                    onClick={() =>handleSidebar()}
                />
                <img alt="YouTube" src={ytLogo} className='w-28 object-cover cursor-pointer'/>
            </div>
            <div className='w-6/12 flex items-center'>
                <input type='text' placeholder='Search' className='w-8/12 px-4 py-2  border rounded-l-full outline-none ' />
                <button className='px-4 py-[11px] text-lg border rounded-r-full outline-none bg-gray-50'><IoIosSearch /></button>
            </div>
            <div className='w-1/12 flex justify-end gap-4 text-xl' >
                <PiDotsThreeVertical />
                <FaUserCircle />
            </div>
        </header>
    )
}

export default Header