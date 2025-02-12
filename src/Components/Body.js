import { useSelector } from "react-redux";
import Tags from "./Tags";
import VideoContainer from "./VideoContainer";

const Body = () => {

  const { isSidebarDisplay } = useSelector(store => store.header);

  return <main className={`w-10/12 ${!isSidebarDisplay && "w-full ml-20 px-0"} min-h-screen px-3 py-5 `}>
    <Tags />
    <VideoContainer />
  </main>
}

export default Body;