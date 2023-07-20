import Image from "next/image";
import { ComponentProps, FC } from "react";

const Logo: FC<Omit<ComponentProps<typeof Image>, 'src' | 'alt'>> = (props) => {
  return (<Image {...props} alt="Kansha Header Logo" src={'/assets/images/Logo.png'} />);
};

export default Logo;