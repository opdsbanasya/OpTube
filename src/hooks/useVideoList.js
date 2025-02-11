import { useEffect } from "react";
import { YT_API_LINK } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addVideoes } from "../store/videoSlice";

export const useVideoList = () => {

    const dispatch = useDispatch();

    const getVideoes = async () => {
        const data = await fetch(YT_API_LINK);
        const json = await data.json();

        console.log(json);

        dispatch(addVideoes(json.items));

    }

    useEffect(() => {
        console.log("fetch: ");

        getVideoes();
    }, [])
}

export default useVideoList;