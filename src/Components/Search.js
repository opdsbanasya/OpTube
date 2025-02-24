import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = ({ search }) => {

    const videoId = search?.id?.videoId;
    const { title, description, thumbnails, channelTitle } = search?.snippet;

    const { isSidebarDisplay } = useSelector(store => store.header);

    const navigate = useNavigate();

    // const handleWatchNavigate = (search) => {
    //     navigate("/watch?v=" + id, { state: search });
    // }

    return (
        <div className={` w-full flex cursor-pointer gap-5`}>
            <div className={`w-[40%]  rounded-md`} >
                <img className={`${videoId ? "w-full  rounded-md" : "w-[40%] rounded-full mx-auto" } `} alt={title} src={thumbnails?.medium?.url} />
            </div>
            <section className='w-[55%] space-y-2'>
                <p className='font-semibold'>{title}</p>
                <p>{channelTitle}</p>
                <p className='text-xs '>{description.length > 110 && description.substr(0, 110) + "..."}</p>
            </section>
        </div>
    )
}

export default Search;