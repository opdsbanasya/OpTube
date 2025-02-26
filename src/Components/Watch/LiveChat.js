import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveChat } from '../../store/liveChatSlice';
import { genarateRandomChats, generaterandomName } from '../../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const { chats } = useSelector(store => store?.chat)

    const [inChat, setInChat] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addLiveChat({
                name: generaterandomName(),
                message: genarateRandomChats(20)
            }))
        }, 1500)

        return () => {
            return clearInterval(interval);
        }
    }, [])

    const sendChat = () => {
        dispatch(addLiveChat({
            name: "Dharm Singh",
            message: inChat,
        }));
        setInChat("")
    }

    return (
        <div className='w-full h-[70vh] flex flex-col-reverse rounded-lg gap-2'>
            <div className='w-full h-10'>
                <input value={inChat} type='text' className='w-9/12 h-full px-3 py-1 outline-none border border-gray-400 rounded-md mr-5'
                    onChange={(e)=>setInChat(e.target.value)}
                />
                <button className='px-2 py-1 bg-blue-200 rounded-md' onClick={()=>sendChat()}>Send</button>
            </div>
            <div className='w-full flex flex-col-reverse  bg-zinc-100 px-5 py-3 gap-4 overflow-y-scroll'>
                {chats && chats.map((userChat, index) => (
                    <div key={index} className='flex items-center gap-3 '>
                        <FaUserCircle className='text-2xl' />
                        <span className='text-sm font-semibold'>{userChat?.name}</span>
                        <span className='text-sm'>{userChat?.message}</span>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default LiveChat