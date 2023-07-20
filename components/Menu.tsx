'use client'

import { closeMenu, openMenu, selectApp } from "@/store/features/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { FC, useState } from "react";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const { isMenuOpen } = useAppSelector(selectApp)
  // const dispatch = useAppDispatch();

  const handleOpenMenu = () => {
    // dispatch(openMenu)
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    // dispatch(closeMenu);
    setMenuOpen(false);
  };

  return (<>
    <div className={isMenuOpen ? 'hidden' : 'block'}><BurgerButton onClick={handleOpenMenu} /></div>
    <div className={`absolute top-0 left-0 w-screen h-screen py-14 
    px-16 bg-[#535353] opacity-[0.99] mix-blend-multiply 
    ${isMenuOpen ? 'block' : 'hidden'}`}>

    </div>
    <div className={`absolute top-0 left-0 flex justify-between w-screen h-screen py-14 px-28 
    ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div>
        <ul>
          <li className="text-white text-7xl mb-4"><Link href={'/'}>Home</Link></li>
          <li className="text-white text-7xl mb-4"><Link href={'/aboutus'}>About Us</Link></li>
          <li className="text-white text-7xl mb-4"><Link href={'/services'}>Services</Link></li>
          <li className="text-white text-7xl mb-4"><Link href={'/experience'}>Experience</Link></li>
          <li className="text-white text-7xl mb-4"><Link href={'/contactus'}>Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <div className="flex flex-row-reverse">
          <div className="cursor-pointer" onClick={handleCloseMenu}>
            <CloseButton />
          </div>
        </div>
      </div>
    </div>
  </>);
};

const CloseButton = () => {
  return (<span className="text-xs text-white">CLOSE X</span>);
};

const Burger = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path d="M18.9 3.5001H2.09998V2.1001H18.9V3.5001Z" fill="white"/>
      <path d="M18.9 11.2001H2.09998V9.8001H18.9V11.2001Z" fill="white"/>
      <path d="M2.09998 18.9001H18.9V17.5001H2.09998V18.9001Z" fill="white"/>
    </svg>
  )
}

const BurgerButton: FC<{
  onClick: () => void
}> = ({onClick}) => {
  return (<button onClick={onClick}>
    <Burger />
  </button>);
}

export default Menu;