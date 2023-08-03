'use client'

import { closeMenu, openMenu, selectApp } from "@/store/features/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  return (<>
    <div className="visible xl:hidden"><MenuMobile /></div>
    <div className="hidden xl:visible xl:block"><MenuDesktop /></div>
  </>);
};

const MenuDesktop = () => {
  return (<ul className="flex text-white">
    <li>
      <HeaderLink href="/services">
        Services
      </HeaderLink>
    </li>
    <li className="ml-14">
      <HeaderLink href="/culture">
        Culture
      </HeaderLink>
    </li>
    <li className="ml-14">
      <HeaderLink href="/partners">
        Partners
      </HeaderLink>
    </li>
    <li className="ml-14">
      <HeaderLink href="/contact">
        Contact
      </HeaderLink>
    </li>
  </ul>);
};

const HeaderLink: FC<{
  href: string;
  children: ReactNode;
  active?: boolean;
}> = ({
  href,
  children,
  active = false
}) => {
  return (<Link className={`uppercase ${active ? 'font-bold' : ''} text-sm hover:font-bold transition-all`} href={href}>{children}</Link>);
}

const MenuMobile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const { isMenuOpen } = useAppSelector(selectApp)
  // const dispatch = useAppDispatch();

  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: '200%',
    },
  }

  const menuVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  const handleOpenMenu = () => {
    // dispatch(openMenu)
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    // dispatch(closeMenu);
    setMenuOpen(false);
  };

  return (<>
    <motion.div
      variants={menuVariants}
      animate={isMenuOpen ? 'closed' : 'open'}
      className={isMenuOpen ? 'hidden' : 'block'}
    >
      <BurgerButton onClick={handleOpenMenu} />
    </motion.div>
    <motion.div
      variants={menuVariants}
      animate={isMenuOpen ? 'open' : 'closed'}
      className={`absolute top-0 left-0 w-screen h-screen py-14 
      px-16 bg-[#535353] opacity-[0.99] mix-blend-multiply 
      ${isMenuOpen ? 'block' : 'hidden'}`}
    >

    </motion.div>
    <div className={`absolute top-0 left-0 flex justify-between w-screen h-screen py-14 px-14 xl:px-28 
    ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div>
        <ul>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0}}
          >
            <NavLink href={'/'}>
              Home
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.1}}
          >
            <NavLink href={'/aboutus'}>
              About Us
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.2}}
          >
            <NavLink href={'/services'}>
              Services
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.3}}
          >
            <NavLink href={'/experience'}>
              Experience
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.4}}
          >
            <NavLink href={'/contactus'}>
              Contact Us
            </NavLink>
          </motion.li>
        </ul>
      </div>
      <div>
        <motion.div
          variants={menuVariants}
          animate={isMenuOpen ? 'open' : 'closed'}
          className="flex flex-row-reverse"
        >
          <div className="cursor-pointer" onClick={handleCloseMenu}>
            <CloseButton />
          </div>
        </motion.div>
      </div>
    </div>
  </>);
};

const NavLink: FC<{
  href: string;
  children: ReactNode;
}> = ({ href, children }) => {
  return (
    <div className="flex text-white text-4xl xl:text-7xl mb-4 group">
      <Link href={href}>
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-white"></span>
      </Link>
    </div>
  );
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