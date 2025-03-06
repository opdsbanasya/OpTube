import { useState, useEffect } from "react";
import { GOOGLE_API_KEY, VIDEO_API } from "../utils/constant";

const useVideo = (vId) => {
  const [videoData, setVideoData] = useState(null);

  const getVideoData = async () => {
    const data = await fetch(`${VIDEO_API}${vId}&key=${GOOGLE_API_KEY}`);
    const json = await data.json();

    setVideoData(json?.items[0])
  };

  useEffect(()=>{
    getVideoData();
  },[])

  return videoData ? videoData : {};
};

export default useVideo;
