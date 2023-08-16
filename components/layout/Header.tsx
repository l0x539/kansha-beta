import Link from "next/link";
import Logo from "../Logo";
import Menu from "../Menu";

const Header = () => {
  return (<header className="fixed top-0 z-80 w-screen px-28 flex justify-between z-[100]">
    <Link href={'/'} className="py-12">
      <Logo width={90} height={13} />
    </Link>
    <div className="py-12">
      <Menu />
    </div>
  </header>);
};

export default Header;