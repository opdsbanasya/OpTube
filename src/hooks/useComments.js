import { useEffect } from "react";
import { COMMENTS_API, GOOGLE_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addComments } from "../store/commentSlice";

const useComments = (videoId) => {

    const dispatch = useDispatch();

    const getComments = async () => {
        const data = await fetch(COMMENTS_API + videoId + "&key="+GOOGLE_API_KEY);
        const json = await data.json();

        dispatch(addComments(json))
    }

    useEffect(()=>{
        getComments();
    }, [])
}

export default useComments;