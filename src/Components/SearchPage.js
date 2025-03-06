import React from 'react';
import Tags from "./Tags"
import useSearch from '../hooks/useSearch';
import { useSelector } from 'react-redux';
import Search from './Search';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

    const {state} = useLocation() || {};
    useSearch(state?.sQuery);

    const { searchData } = useSelector(store => store?.search)

    const { items } = searchData;
    if(!items) return;

    return (
        <section className='w-fit mx-auto'>
            <Tags />
            <div className='w-full space-y-5'>
                {items && items.map(item => {
                    return (item?.id?.videoId || item?.id?.channelId) && <Search key={item?.id?.videoId || item?.id?.channelId} search={item}/>
                })}
            </div>
            
        </section>
    )
}

export default SearchPage