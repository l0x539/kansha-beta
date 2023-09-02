'use client'

import Link from "next/link";
import ScopeButton from "../ScopeButton";
import FooterContent from "../FooterContent";
import { updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch } from "@/store/hooks";
import { useCallback, useEffect } from "react";
import { COMMING_SOON } from "@/utils/constants";
import { useSearchParams } from "next/navigation";

const ServicesPage = () => {
  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (<>
      <div className="">
        <Link href={'/services/discovery' + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
          <ScopeButton number={1} className='-ml-[32vw] -mt-[32vh]' >
            Discovery
          </ScopeButton>
        </Link>
        <Link href={'/services/development' + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
          <ScopeButton number={2} className='-ml-[15vw] -mt-[13vh]' >
            MVP Development
          </ScopeButton>
        </Link>
        <Link href={'/services/team' + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
          <ScopeButton number={3} className='ml-[18vw] -mt-[33vh]' >
            Product Team
          </ScopeButton>
        </Link>
        <Link href={'/services/design' + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
          <ScopeButton number={4} className='-ml-[33vw] mt-[2vh]' >
            Product Design
          </ScopeButton>
        </Link>
        <Link href={'/services/services' + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
          <ScopeButton number={5} className='-ml-[5vw] mt-[12vh]' >
            All services
          </ScopeButton>
        </Link>
        <Link href={'/services/our-method' + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
          <ScopeButton number={6} className='ml-[15vw] mt-[5vh]' >
            Our method
          </ScopeButton>
        </Link>
        <FooterContent />
      </div>
    </>
  );
};

export default ServicesPage;