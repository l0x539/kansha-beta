import Link from "next/link";
import ScopeButton from "../ScopeButton";
import FooterContent from "../FooterContent";

const ServicesPage = () => {
  return (<>
      <div className="">
        <ScopeButton className='-ml-[42rem] -mt-64' >
          1
        </ScopeButton>
        <ScopeButton className='-ml-64 -mt-28' >
          2
        </ScopeButton>
        <ScopeButton className='ml-96 -mt-60' >
          3
        </ScopeButton>
        <ScopeButton className='-ml-[38rem] mt-20' >
          4
        </ScopeButton>
        <ScopeButton className='-ml-20 mt-36' >
          5
        </ScopeButton>
        <Link href={'/services/our-method'}>
          <ScopeButton className='ml-64 mt-16' >
            6
          </ScopeButton>
        </Link>
        <FooterContent />
      </div>
    </>
  );
};

export default ServicesPage;