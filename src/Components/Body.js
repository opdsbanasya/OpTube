import { useDispatch, useSelector } from "react-redux";
import Tags from "./Tags";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { toggleSidebar } from "../store/headerSlice";

const Body = () => {

  const dispatch = useDispatch();

  const { isSidebarDisplay } = useSelector(store => store.header);
  useEffect(()=>{
    dispatch(toggleSidebar());
  }, [])

  return <main className={`w-10/12 ${!isSidebarDisplay && "w-full mx-auto px-0"} min-h-screen px-3`}>
    <Tags />
    <VideoContainer />
  </main>
}

export default Body;