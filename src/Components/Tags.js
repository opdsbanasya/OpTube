import React from 'react'
import { TAG_LIST } from '../utils/constant'

const Tags = () => {
  return (
    <section className='min-w-full flex relative' >
        <div className='py-5 flex items-center gap-3 '>
        {TAG_LIST.map((tag, index) => (
            <span key={index} className='px-3 py-1 text-sm bg-gray-100 rounded-md font-medium'>{tag}</span>
        ))}
        </div>
    </section>
  )
}

export default Tags