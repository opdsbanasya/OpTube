import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useVideo from '../hooks/useVideo';

const Search = ({ search }) => {

    const navigate = useNavigate();

    const videoId = search?.id?.videoId;
    const { title, description, thumbnails, channelTitle } = search?.snippet;

    // const { isSidebarDisplay } = useSelector(store => store.header);


    const handleWatchNavigate = (videoId) => {
        navigate("/watch?v=" + videoId, { state: {videoId: videoId} });
    }

    return (
        <div className={` w-full flex cursor-pointer gap-5`} onClick={()=> handleWatchNavigate(videoId)}>
            <div className={`w-[40%]  rounded-md`} >
                <img className={`${videoId ? "w-full rounded-md" : "w-[40%] rounded-full mx-auto"} `} alt={title} src={thumbnails?.medium?.url} />
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