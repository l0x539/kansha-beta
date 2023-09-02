import { FC, ReactNode } from "react";

const ScopeButton: FC<{
  children: ReactNode;
  className?: string;
  number: number;
}> = ({children, number, className = ''}) => {
  return (<button className={`group fixed left-1/2 top-1/2 bg-transparent cursor-pointer h-[calc(100/16*1rem)] w-[calc(100/16*1rem)] ${['animate-[float_6s_ease-in-out_infinite_0ms]', 'animate-[float_6s_ease-in-out_infinite_400ms]',
  'animate-[float_6s_ease-in-out_infinite_800ms]', 
  'animate-[float_6s_ease-in-out_infinite_1200ms]', 
  'animate-[float_6s_ease-in-out_infinite_1600ms]'][Math.floor(Math.random() * 5)]} ${className}`}>
    <div>
      <span className='absolute flex justify-center top-1/2 left-1/2 backdrop-blur-sm rounded-full w-[calc(95/16*1rem)] h-[calc(95/16*1rem)] -translate-1/2 opacity-100'>
        <span className="absolute text-white -bottom-16 w-28">
          {children}
        </span>
      </span>
      <div className='absolute left-0 top-0 right-0 bottom-0 translate-0 opacity-100'>
        <span className='absolute left-1/2 top-1/2 rounded-full cursor-pointer text-white -translate-1/2 flex justify-center items-center transition-all duration-1000 ease w-[calc(95/16*1rem)] h-[calc(95/16*1rem)] text-xl'>{number}</span>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)]'></i>
        <i className='absolute left-1/2 top-1/2 rounded-full border border-solid border-[#D5D0CA] h-[calc(100/16*1rem)] w-[calc(100/16*1rem)] -translate-1/2 scale-110 group-hover:animate-ping'></i>
      </div>
    </div>
  </button>);
};

export default ScopeButton;