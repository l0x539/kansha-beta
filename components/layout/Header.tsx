import Link from "next/link";
import Logo from "../Logo";
import Menu from "../Menu";
import { COMING_SOON } from "@/utils/constants";
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useState } from "react";
import { Close } from "../Icons";

const Header = () => {
  const searchParams  = useSearchParams();
  const pathname  = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (<header className="fixed top-0 z-80 w-screen px-28 flex justify-between z-[100]">
    <Link href={searchParams.get('demo') && COMING_SOON ? ((pathname.startsWith('/services/') && pathname !== '/services/our-method' ? '/services?' : '/?') + createQueryString('demo', `${searchParams.get('demo')}`)) : (pathname.startsWith('/services/') && pathname !== '/services/our-method' ? '/services' : '/')} className="py-12">
      {(pathname.startsWith('/services/') && pathname !== '/services/our-method') ? 
      <CloseServices /> :
      <div className="animate-fade-in"><Logo width={90} height={13} /></div>}
    </Link>
    {(COMING_SOON && !searchParams.get('demo')) || ((pathname.startsWith('/services/') && pathname !== '/services/our-method')) ? <></>: <div className="py-12">
      <Menu />
    </div>}
  </header>);
};

const CloseServices = () => {
  const [hovered, setHovered] = useState(false);

  return <div onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} className="animate-fade-in">
    <Close hovered={hovered} />
  </div>
}

export default Header;