import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { hideSidebar } from '../../store/headerSlice';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { LiaDownloadSolid } from 'react-icons/lia';
import { PiDotsThreeBold, PiShareFat } from 'react-icons/pi';

const WatchPage = () => {

  const { state } = useLocation() || {};
  console.log(state);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideSidebar());
  })

  const { id, snippet, contentDetails, statistics } = state;
  const { publishedAt, channelId, title, description, channelTitle, tags, } = snippet;
  const { viewCount, likeCount, commentCount } = statistics

  return (
    <section className='w-full min-h-screen flex pl-5 pr-10 gap-8'>
      <div className='w-[70%]'>
        <div className='w-full h-[70vh] '>
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referRerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className='w-full h-full rounded-lg'
          ></iframe>
        </div>
        <div className='w-full h-fit py-5 space-y-5'>
          <h4 className='text-xl font-semibold'>{title}</h4>
          <div className='flex items-center justify-between'>
            <div className='w-fit flex items-center gap-8'>
              <img src='' alt='c' className='w-[5%]' />
              <h6>{channelTitle}</h6>
              <p>subcribers</p>
              <button className='w-[10%]'>Subscribe</button>
            </div>
            <div className='flex space-x-5'>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center gap-2'><FiThumbsUp />Like<FiThumbsDown /></span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center gap-2'><PiShareFat /> Share</span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center gap-2'><LiaDownloadSolid /> Download</span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center'><PiDotsThreeBold /></span>
            </div>
          </div>
          <div>
            {description}
          </div>
        </div>
        <div></div>
      </div>
      <div className='bg-blue-200 w-[30%]'>

      </div>
    </section>
  )
}

export default WatchPage