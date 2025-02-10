import { CgMediaLive } from "react-icons/cg";
import { FaBookReader, FaUserCircle, FaYoutube } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { IoHelpCircleOutline, IoHomeSharp, IoMusicalNotesOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHistory, MdMovieCreation, MdOutlinedFlag, MdOutlineFeedback, MdOutlinePodcasts, MdSportsCricket, MdSubscriptions } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from "react-icons/si";

export const SIDEBAR_LIST = [
    {
        heading: "",
        children: [
            { id: "yt01", icons: <IoHomeSharp />, name: "Home"},
            { id: "yt02", icons: <SiYoutubeshorts />, name: "Shorts"},
            { id: "yt03", icons: <MdSubscriptions />, name: "Subscription"},
        ],
        id:"pyt01"
    },
    {
        heading: "",
        children: [
            { id: "yt04", icons: <FaUserCircle />, name: "You"},
            { id: "yt05", icons: <MdHistory />, name: "History"}
        ],
        id:"pyt02"
    },
    {
        heading: "Explore",
        children: [
            { id: "yt06", icons: <IoIosTrendingUp />, name: "Trending"},
            { id: "yt07", icons: <RiShoppingBag4Fill />, name: "Shopping"},
            { id: "yt08", icons: <IoMusicalNotesOutline />, name: "Music"},
            { id: "yt09", icons: <MdMovieCreation />, name: "Movies"},
            { id: "yt10", icons: <CgMediaLive />, name: "Live"},
            { id: "yt11", icons: <SiYoutubegaming />, name: "Gaming"},
            { id: "yt12", icons: <PiNewspaperClippingLight />, name: "News "},
            { id: "yt13", icons: <MdSportsCricket />, name: "Sports "},
            { id: "yt14", icons: <FaBookReader />, name: "Courses "},
            { id: "yt15", icons: <MdSportsCricket />, name: "Fasion & Beauty "},
            { id: "yt16", icons: <MdOutlinePodcasts />, name: "Podcasts "},
        ],
        id:"pyt03"
    },
    {
        heading: "More from YouTube",
        children: [
            { id: "yt17", icons: <FaYoutube />, name: "YouTube Premium"},
            { id: "yt18", icons: <SiYoutubemusic />, name: "YouTube Music"},
            { id: "yt19", icons: <SiYoutubekids />, name: "YouTube kids"}
        ],
        id:"pyt04"
    },
    {
        heading: "",
        children: [
            { id: "yt20", icons: <IoSettingsOutline />, name: "Settings"},
            { id: "yt21", icons: <MdOutlinedFlag />, name: "Report History"},
            { id: "yt22", icons: <IoHelpCircleOutline />, name: "Help"},
            { id: "yt23", icons: <MdOutlineFeedback />, name: "Send Feedback"},
        ],
        id:"pyt05"
    },
]