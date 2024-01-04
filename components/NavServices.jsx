import React from 'react';
import { Services_Links } from '@/constants';
import Image from 'next/image';

function NavServices({ onCategorySelect, activeKey }) {
  const handleCategoryClick = (categoryKey) => {
    if (onCategorySelect) {
      onCategorySelect(categoryKey);
    }
  };

  return (
    <div className='your-div-class flex items-center justify-center mx-auto z-30 max-w-[1440px]'>
      <nav className="flex items-center justify-center z-30 px-10 py-5 drop-shadow-xl max-w-[1440px] ">
        <ul className="flex flex-col NPC:flex-row justify-center items-center text-xl italic font-extrabold uppercase text-DG font-SB leading-normal gap-3">
          {Services_Links.map((link) => (
            <li key={link.key} className={`hover:bg-White flex justify-center items-center mx-1 clip_2 bg-Yl  ${activeKey === link.key ? 'active-tab' : ''}`}>
              <a onClick={() => handleCategoryClick(link.key)} className="flex justify-center items-center block cursor-pointer py-4 px-8 transition-all whitespace-nowrap w-full">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavServices;
