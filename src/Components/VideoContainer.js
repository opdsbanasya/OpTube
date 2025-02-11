import React from 'react'
import useVideoList from '../hooks/useVideoList'
import { useSelector } from 'react-redux';
import Video from "./Video";

const VideoContainer = () => {

  useVideoList();

  const { videoList } = useSelector(store => store?.videoes);
  console.log(videoList);
  if(!videoList) return null;

  return (
    <div className='w-full flex flex-wrap gap-10'>
      {videoList.map(video => (
        <Video key={video?.id} video={video}/>
      ))}
    </div>
  )
}

export default VideoContainer