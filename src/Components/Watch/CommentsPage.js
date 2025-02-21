import React from 'react'
import useComments from '../../hooks/useComments';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const CommentPage = ({ videoId }) => {

  useComments(videoId);

  const { comment } = useSelector(store => store);

  if (!comment) return;

  const { items } = comment;

  return (
    <div className='min-h-20 px-4 py-2 mb-5 rounded-lg'>
      <h3 className='text-xl font-semibold'>Comments</h3>
      {items && items.map(elem => <Comment key={elem.id} commentData={elem} />)}
    </div>
  )
}

export default CommentPage;