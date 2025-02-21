import React, { useEffect, useState } from 'react';
import ytLogo from "../assets/yt-logo.webp";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from 'react-icons/io';
import { PiDotsThreeVertical } from 'react-icons/pi';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/headerSlice';
import { YT_SUGGESSIONS_API } from '../utils/constant';
import { cacheSuggestions } from '../store/searchSlice';

const Header = () => {

    const [searchQuery, setSearchSQuery] = useState("");
    const [suggestions, setSuggessions] = useState([]);
    const [showSuggessions, setShowSuggessions] = useState(false);

    const dispatch = useDispatch();

    const { search } = useSelector(store => store);
    // console.log(search);


    const handleSidebar = () => {
        dispatch(toggleSidebar());
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search[searchQuery]) {
                setSuggessions(search[searchQuery])
            } else {
                getSuggessions()
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])

    const getSuggessions = async () => {
        console.log(searchQuery);
        const data = await fetch(YT_SUGGESSIONS_API + searchQuery);
        const json = await data.json();

        setSuggessions(json[1]);

        dispatch(cacheSuggestions({
            [searchQuery]: json[1]
        }))
    }
    return (
        <header className='w-full h-[10vh] flex items-center justify-between gap-2 px-5 pr-10'>
            <div className='w-3/12 flex gap-4'>
                <FiMenu className='text-xl cursor-pointer'
                    onClick={() => handleSidebar()}
                />
                <img alt="YouTube" src={ytLogo} className='w-28 object-cover cursor-pointer' />
            </div>
            <div className='w-6/12 relative'>
                <div className='w-full flex items-center'>
                    <input type='text' placeholder='Search' className='w-8/12 px-4 py-2  border rounded-l-full outline-none '
                        onChange={(e) => setSearchSQuery(e.target.value)}
                        onFocus={() => setShowSuggessions(true)}
                        onBlur={() => setShowSuggessions(false)}
                    />
                    <button className='px-4 py-[11px] text-lg border rounded-r-full outline-none bg-gray-50'><IoIosSearch /></button>
                </div>
                {showSuggessions && suggestions.length != 0 && <div className='w-8/12 absolute top-14 z-10 bg-white border border-gray-200 rounded-md'>
                    <ul className=''>
                        {suggestions.map(sug => <li key={sug} className='flex items-center gap-2 px-4 py-1 hover:bg-gray-100 cursor-default'><IoIosSearch className='text-lg' /> {sug}</li>)}
                    </ul>
                </div>}
            </div>
            <div className='w-1/12 flex justify-end gap-4 text-xl' >
                <PiDotsThreeVertical />
                <FaUserCircle />
            </div>
        </header>
    )
}

export default Header