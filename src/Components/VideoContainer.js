import React from 'react'
import useVideoList from '../hooks/useVideoList'
import { useSelector } from 'react-redux';
import Video from "./Video";

const VideoContainer = () => {

  const { isSidebarDisplay } = useSelector(store => store.header);

  useVideoList();

  const { videoList } = useSelector(store => store?.videoes);

  if(!videoList) return null;

  return (
    <div className={`w-fit flex flex-wrap gap-5 ${!isSidebarDisplay && "-mr-10 ml-10"}`}>
      {videoList.map(video => (
        <Video key={video?.id} video={video}/>
      ))}
    </div>
  )
}

export default VideoContainer