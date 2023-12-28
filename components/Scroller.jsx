"use client"
import React, { useEffect, useRef } from 'react';

const Scroller = ({ text = "" }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller__inner");

      for (let i = 0; i < 100; i++) {
        scrollerInner.appendChild(createItem(text));
      }
    }

    function createItem(content) {
      const item = document.createElement('span');
      item.textContent = content + " ";
      item.classList.add("inline-block", "mr-4", "whitespace-nowrap");
      return item;
    }
  }, [text]);

  const scrollerClasses = `w-full overflow-hidden relative text-Yl italic text-[120px] font-extrabold font-SB ExtraBold uppercase leading-[85px] $"}`;

  return (
    <div className={scrollerClasses} ref={scrollerRef}>
      <div className="scroller__inner flex">
      </div>
    </div>
  );
};

export default Scroller;



