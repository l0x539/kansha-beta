import { FC, MouseEventHandler, ReactNode } from "react";

const Button: FC<{
  children: ReactNode;
  type?: 'primary' | 'secondary';
  size?: 'base' | 'xl';
  icon?: boolean;
  notFixedWidth?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
}> = ({
  children,
  type = 'primary',
  onClick,
  size = 'normal',
  notFixedWidth = false,
  icon = false
}) => {

  if (icon) return (
    <button className={`relative ${notFixedWidth ? '' : 'w-32'} h-9 
  border-solid border-2 border-white rounded-full 
  ${type === 'secondary' ? 'text-white hover:text-black' : 'text-black hover:text-white'} 
  flex justify-center items-center 
  ${type === 'secondary' ? 'bg-black hover:bg-white' : 'bg-white hover:bg-black'} 
  transition-all duration-400
  ${size === 'xl' ? 'px-5 py-5 font-semibold' : ''}
  `} onClick={onClick}>
    <span className="absolute w-full h-full flex justify-center items-center">
      {children}
    </span>
  </button>
  );
  return (<button className={`${notFixedWidth ? '' : 'w-32'} h-9 
  border-solid border-2 border-white rounded-3xl 
  ${type === 'secondary' ? 'text-white hover:text-black' : 'text-black hover:text-white'} 
  flex justify-center items-center 
  ${type === 'secondary' ? 'bg-black hover:bg-white' : 'bg-white hover:bg-black'} 
  transition-all duration-400
  ${size === 'xl' ? 'px-8 py-5 font-semibold' : ''}
  `} onClick={onClick}>
    {children}
  </button>);
};

export default Button;