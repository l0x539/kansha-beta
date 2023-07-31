import { FC, ReactNode } from "react";

const ScopeButton: FC<{
  children: ReactNode;
  className?: string;
}> = ({children, className = ''}) => {
  return (<button className={`group fixed left-1/2 top-1/2 bg-transparent cursor-pointer h-[calc(100/16*1rem)] w-[calc(100/16*1rem)] ${['animate-[float_6s_ease-in-out_infinite_100ms]', 'animate-[float_6s_ease-in-out_infinite_200ms]',
  'animate-[float_6s_ease-in-out_infinite_400ms]', 
  'animate-[float_6s_ease-in-out_infinite_600ms]', 
  'animate-[float_6s_ease-in-out_infinite_800ms]'][Math.floor(Math.random() * 5)]} ${className}`}>
    <div>
      <span className='absolute top-1/2 left-1/2 backdrop-blur-sm rounded-full w-[calc(95/16*1rem)] h-[calc(95/16*1rem)] -translate-1/2 opacity-100'></span>
      <div className='absolute left-0 top-0 right-0 bottom-0 translate-0 opacity-100'>
        <span className='absolute left-1/2 top-1/2 rounded-full cursor-pointer text-white -translate-1/2 flex justify-center items-center transition-all duration-1000 ease w-[calc(95/16*1rem)] h-[calc(95/16*1rem)] text-2xl'>{children}</span>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)]'></i>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)] -translate-1/2 scale-110 group-hover:animate-ping'></i>
      </div>
    </div>
  </button>);
};

export default ScopeButton;