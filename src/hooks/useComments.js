import { useEffect } from "react";
import { COMMENTS_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addComments } from "../store/commentSlice";

const useComments = (videoId) => {

    const dispatch = useDispatch();

    const getComments = async () => {
        const data = await fetch(COMMENTS_API);
        const json = await data.json();

        console.log(json);
        
        dispatch(addComments(json))
    }

    useEffect(()=>{
        getComments();
    }, [])
}

export default useComments;