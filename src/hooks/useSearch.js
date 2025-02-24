import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY, SEARCH_API } from "../utils/constant"
import { useEffect } from "react";
import { addSearchData } from "../store/searchSlice";

const useSearch = (query) => {
    console.log(query);
    const dispatch = useDispatch();

    const getSearchData = async () => {
        const data = await fetch(SEARCH_API + query + "&key=" + GOOGLE_API_KEY);
        const json = await data.json();

        console.log(json);
        
        dispatch(addSearchData(json))
        
    }

    useEffect(()=>{
        getSearchData();
    }, [])
}

export default useSearch;