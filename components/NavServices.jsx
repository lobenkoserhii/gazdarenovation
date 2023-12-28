import React, { useState } from 'react';
import { Services_Links } from '@/constants';
import Image from 'next/image';


function NavServices({ onCategorySelect, activeKey }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (categoryKey) => {
    if (onCategorySelect) {
      onCategorySelect(categoryKey);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className='absolute top-[44rem] left-0 right-0 mx-auto z-30 max-w-[1440px]'>
      <nav className="flex items-center justify-center z-30 px-10 py-5 drop-shadow-xl max-w-[1440px]">
        <ul className={`flex justify-center items-center text-xl italic font-extrabold uppercase text-DG font-SB leading-normal ${isMenuOpen ? 'flex-col absolute bg-Yl top-full h-[400px] max-h-screen w-full left-0 gap-3' : 'hidden'} NPC:inline-flex NPC:flex-row NPC:items-center NPC:justify-center`}>
          {Services_Links.map((link) => (
            <li key={link.key} className={`hover:bg-White NPC:px-5 flex justify-center items-center mx-1 clip_2 bg-Yl ${activeKey === link.key ? 'active-tab' : ''}`}>
              <a onClick={() => handleCategoryClick(link.key)} className="flex justify-center items-center block cursor-pointer py-4 px-8 transition-all whitespace-nowrap w-full">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {isMenuOpen ? (
          <div onClick={() => setIsMenuOpen(false)} className="NPC:hidden">
            <Image src="/close.svg" alt="close" width={32} height={32} />
          </div>
        ) : (
          <div onClick={() => setIsMenuOpen(true)} className="NPC:hidden">
            <Image src="/menu.svg" alt="menu" width={32} height={32} />
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavServices;
