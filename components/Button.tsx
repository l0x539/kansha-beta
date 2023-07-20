import { FC, ReactNode } from "react";

const Button: FC<{
  children: ReactNode;
  type?: 'primary' | 'secondary'
}> = ({
  children,
  type = 'primary'
}) => {
  return (<button className={`w-32 h-9 
  border-solid border-2 border-white rounded-3xl 
  ${type === 'secondary' ? 'text-white hover:text-black' : 'text-black hover:text-white'} 
  flex justify-center items-center 
  ${type === 'secondary' ? 'bg-black hover:bg-white' : 'bg-white hover:bg-black'} 
  transition-all duration-400
  `}>
    {children}
  </button>);
};

export default Button;