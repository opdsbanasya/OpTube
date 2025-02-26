import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { hideSidebar } from '../../store/headerSlice';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { LiaDownloadSolid } from 'react-icons/lia';
import { PiDotsThreeBold, PiShareFat } from 'react-icons/pi';
import { toggleExpandDescription } from '../../store/videoSlice';
import CommentPage from './CommentsPage';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [isLiveChat, setIsLiveChat] = useState(false);

  const { isDescriptionShort } = useSelector(store => store?.videoes);

  const { state } = useLocation() || {};
  // console.log(state);

  if (!state) return;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideSidebar());
  })

  const { id, snippet, contentDetails, statistics } = state.videoData;
  const { publishedAt, channelId, title, description, channelTitle, tags, } = snippet;
  const { viewCount, likeCount, commentCount } = statistics
  description.split("\n")

  const handleDescription = () => {
    dispatch(toggleExpandDescription());
  }

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
            allowFullScreen
            className='w-full h-full rounded-lg'
          ></iframe>
        </div>
        <div className='w-full h-fit py-5 space-y-5'>
          <h4 className='text-xl font-semibold'>{title}</h4>
          <div className='flex items-center justify-between'>

            {/* Channel details */}
            <div className='w-fit flex items-center gap-5'>
              <img src='' alt='c' className='w-[5%]' />
              <h6>{channelTitle}</h6>
              <p>30 M</p>
              <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Subscribe</button>
            </div>

            {/* Button */}
            <div className='flex space-x-5'>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 cursor-pointer'><FiThumbsUp />Like<FiThumbsDown /></span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 cursor-pointer'><PiShareFat /> Share</span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 cursor-pointer'><LiaDownloadSolid /> Download</span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer'
                onClick={()=>setIsLiveChat(!isLiveChat)}
              >Live Chat</span>
              <span className='bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer'><PiDotsThreeBold /></span>
            </div>
          </div>
          <div className='bg-gray-200 p-4 rounded-lg'>
            <p>{viewCount} views</p>
            {description.split("\n").map((line, index) => (
              <p className={`${isDescriptionShort && index > 2 && "hidden"} block`} key={index}>{line}</p>
            ))}
            <button className='hover:underline' onClick={() => handleDescription()}>See {isDescriptionShort ? "more" : "less"}</button>
          </div>
        </div>
        <CommentPage videoId={id} />
      </div>
      <div className='bg-zinc-50 w-[30%] rounded-lg overflow-hidden'>
        {isLiveChat && <LiveChat />}
      </div>
    </section>
  )
}

export default WatchPage