import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Video = ({ video }) => {

  const { isSidebarDisplay } = useSelector(store => store.header);

  const navigate = useNavigate();
  const { snippet, statistics, id } = video;
  const { publishedAt, channelId, title, description, thumbnails, channelTitle, tags, categoryId, defaultLanguage, localized } = snippet;

  // console.log(video);
  

  const handleWatchNavigate =(video) => {
    navigate("/watch?v="+id, {state: {videoData: video}});
  }

  return (
    <div className={`${!isSidebarDisplay && "w-[22%]"} w-[30%] flex flex-col cursor-pointer`}
      onClick={() => handleWatchNavigate(video)} 
    >
      <img className='w-full rounded-md' alt={title} src={thumbnails?.maxres?.url || thumbnails?.medium?.url} />
      <section className='flex py-2 gap-4'>
        {/* <img alt={channelTitle} src={''} /> */}
        {/* <div className='w-20 h-12 bg-slate-200 rounded-full'></div> */}
        <div>
          <p className='font-semibold'>{title.length >= 72 ? title.substr(0, 72) : title} </p>
          <p className='flex text-sm gap-2'>
            <span>{channelTitle}</span>
            <span> • {Math.round(statistics?.viewCount / 1000000, 2)}M views</span>
            {/* <span>{publishedAt}</span> */}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Video