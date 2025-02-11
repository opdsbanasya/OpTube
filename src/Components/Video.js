import React from 'react'

const Video = ({ video }) => {

  const { snippet, statistics } = video;
  const { publishedAt, channelId, title, description, thumbnails, channelTitle, tags, categoryId, defaultLanguage, localized } = snippet;
  return (
    <div className='w-[30%] flex flex-col'>
      <img className='w-full rounded-md' alt={title} src={thumbnails?.maxres?.url} />
      <section className='flex py-2 gap-4'>
        {/* <img alt={channelTitle} src={''} /> */}
        {/* <div className='w-20 h-12 bg-slate-200 rounded-full'></div> */}
        <div>
          <p className='font-semibold'>{title.length >= 72 ? title.substr(0, 72) : title} </p>
          <p className='flex text-sm gap-2'>
            <span>{channelTitle}</span>
            <span> • {Math.round(statistics?.viewCount / 1000000, 2)}M views</span>
            {/* <span>{publishedAt}</span> */}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Video