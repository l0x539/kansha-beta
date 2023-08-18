'use client'

import Link from "next/link";
import ScopeButton from "../ScopeButton";
import FooterContent from "../FooterContent";
import { updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

const ServicesPage = () => {
  return (<>
      <div className="">
        <Link href={'/services/discovery'}>
          <ScopeButton number={1} className='-ml-[32vw] -mt-[32vh]' >
            Discovery
          </ScopeButton>
        </Link>
        <Link href={'/services/development'}>
          <ScopeButton number={2} className='-ml-[15vw] -mt-[13vh]' >
            MVP Development
          </ScopeButton>
        </Link>
        <Link href={'/services/team'}>
          <ScopeButton number={3} className='ml-[18vw] -mt-[33vh]' >
            Product Team
          </ScopeButton>
        </Link>
        <Link href={'/services/design'}>
          <ScopeButton number={4} className='-ml-[33vw] mt-[2vh]' >
            Product Design
          </ScopeButton>
        </Link>
        <Link href={'/services/services'}>
          <ScopeButton number={5} className='-ml-[5vw] mt-[12vh]' >
            All services
          </ScopeButton>
        </Link>
        <Link href={'/services/our-method'}>
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