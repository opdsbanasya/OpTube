import React from 'react'
import { SIDEBAR_LIST } from '../utils/constant'
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const { isSidebarDisplay } = useSelector(store => store.header);

  return isSidebarDisplay ? (
    <aside className='w-2/12 min-h-screen px-3'>
      {
        SIDEBAR_LIST.map(sidebarElem => (
          <section key={sidebarElem?.id} className='py-2 border-b-2 border-gray-200'>
            <h3 className='text-lg font-semibold px-3'>{sidebarElem?.heading}</h3>
            <section className='space-y-0'>
              {sidebarElem?.children.map(child => (
                <div key={child?.id} className='flex items-center py-2 px-3 hover:bg-gray-200 gap-3 rounded-lg cursor-pointer'>
                  {child?.icons}
                  <h5>{child?.name}</h5>
                </div>
              ))}
            </section>
          </section>
        ))
      }

    </aside>
  ) : null;
}

export default Sidebar