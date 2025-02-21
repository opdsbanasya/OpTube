import React, { useState } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

const Comment = ({ commentData }) => {

    const [showReplies, setShowReplies] = useState(false);

    const { replies } = commentData?.replies ? commentData : {};

    const { topLevelComment, totalReplyCount, canReply } = commentData?.snippet ? commentData.snippet : {};

    const { authorProfileImageUrl, textDisplay, authorDisplayName, likeCount, authorChannelUrl, authorChannelId, publishedAt, updatedAt } = topLevelComment?.snippet ? topLevelComment.snippet : commentData?.snippet;

    return (
        <div className='flex flex-row justify-between'>
            <div className='flex gap-5 py-4'>
                {authorProfileImageUrl && <img className='size-10 rounded-full items-center cursor-pointer' alt="author pic" src={authorProfileImageUrl} />}
                <div className='space-y-2'>
                    <p className='font-semibold text-sm cursor-pointer'>{authorDisplayName}</p>
                    <p className='text-sm'>{textDisplay}</p>
                    <p className='flex items-center gap-3 text-sm'>
                        <BiLike className='size-7 text-lg hover:bg-gray-200 p-1 cursor-pointer rounded-full' />
                        {likeCount}
                        <BiDislike className='size-7 text-lg hover:bg-gray-200 p-1 cursor-pointer rounded-full' />
                    </p>
                    {totalReplyCount > 0 && <p className='flex items-center font-semibold text-blue-600 cursor-pointer'
                        onClick={()=> setShowReplies(!showReplies)}
                    >
                        <MdKeyboardArrowDown className='text-xl' /> 
                        Replies: {totalReplyCount}
                    </p>}
                    {showReplies && replies && replies?.comments.map(reply => <Comment key={reply.id} commentData={reply} />)}
                </div>
            </div>
            <PiDotsThreeVerticalBold className='cursor-pointer' />

        </div>
    )
}

export default Comment;