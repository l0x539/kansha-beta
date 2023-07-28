import { FC, ReactNode } from "react";
import {motion} from 'framer-motion';

const Popup: FC<{
  side?: 'top' | 'bottom';
  children: ReactNode;
  open?: boolean
}> = ({
  side = 'bottom',
  children,
  open = false
}) => {
  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: '200%',
    },
  }
  
  return (<motion.div variants={variants}
  animate={open ? 'open': 'closed'} className={`${open? 'visible' : 'hidden'} transition-all w-full flex justify-center h-0`}>
      <div className={`absolute 2xl:max-w-7xl ${side === 'top' ? 'top-9' : 'bottom-9'} mx-16 rounded-3xl bg-[#151515] text-white 2xl:w-screen`}>
        {children}
      </div>
    </motion.div>
  );
};

export default Popup;