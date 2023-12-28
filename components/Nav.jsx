"use client";
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <nav className="bg-Yl flex items-center justify-between relative z-30 px-10 py-5 drop-shadow-xl mx-auto max-w-[1440px] ">
      <Link href="/" legacyBehavior>
        <a>
          <Image src="/logo.svg" alt="logo" width={233} height={30} />
        </a>
      </Link>

      <ul className={`flex justify-center items-center text-xl italic font-extrabold uppercase text-DG font-SB leading-normal ${isMenuOpen ? "flex-col absolute bg-Yl top-full h-[400px] max-h-screen w-full left-0 gap-3" : "hidden"} NPC:inline-flex NPC:flex-row NPC:items-center NPC:justify-center`}>
        {NAV_LINKS.map((link) => (
                    <li key={link.key} className={`nav-item NPC:px-5 flex justify-center items-center ${currentPath === link.href ? 'active-link' : ''}`}>
                    <Link href={link.href} legacyBehavior>
                      <a className="block cursor-pointer pb-1.5 transition-all whitespace-nowrap w-full">
                        {link.label}
                      </a>
                    </Link>
                  </li>
        ))}
      </ul>

      <div className="hidden tablet:flex tablet:text-lg italic font-extrabold uppercase">
        +1-647-464-2932
      </div>

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
  );
}

export default Nav;
