import HomePage from '@/components/gui/HomePage';
import { FC, ReactNode } from 'react';

export default function Home() {
  return (
    <div>
      <Bubble className='-translate-x-24' >
        1
      </Bubble>
      <Bubble className='-translate-x-12 -translate-y-16' >
        2
      </Bubble>
      <Bubble className='translate-x-12 translate-y-16' >
        3
      </Bubble>
    </div>
  )
};

const Bubble: FC<{
  children: ReactNode;
  className?: string;
}> = ({children, className = ''}) => {
  return (<button className={`fixed left-1/2 top-1/2 bg-transparent cursor-pointer h-[calc(100/16*1rem)] w-[calc(100/16*1rem)] ${className}`}>
    <div>
      <span className='absolute top-1/2 left-1/2 blur-3xl rounded-full w-[calc(95/16*1rem)] h-[calc(95/16*1rem)] -translate-1/2 opacity-100'></span>
      <div className='absolute left-0 top-0 right-0 bottom-0 translate-0 opacity-100'>
        <span className='absolute left-1/2 top-1/2 rounded-full cursor-pointer text-white -translate-1/2 flex justify-center items-center transition-all duration-1000 ease w-[calc(95/16*1rem)] h-[calc(95/16*1rem)] text-2xl'>{children}</span>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)]'></i>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)] -translate-1/2 scale-110'></i>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)]'></i>
      </div>
    </div>
  </button>);
}