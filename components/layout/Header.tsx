import Link from "next/link";
import Logo from "../Logo";
import Menu from "../Menu";
import { COMMING_SOON } from "@/utils/constants";
import { useSearchParams } from 'next/navigation';
import { useCallback } from "react";

const Header = () => {
  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (<header className="fixed top-0 z-80 w-screen px-28 flex justify-between z-[100]">
    <Link href={searchParams.get('demo') && COMMING_SOON ? ('/?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '/'} className="py-12">
      <Logo width={90} height={13} />
    </Link>
    {COMMING_SOON && !searchParams.get('demo') ? <></>: <div className="py-12">
      <Menu />
    </div>}
  </header>);
};

export default Header;