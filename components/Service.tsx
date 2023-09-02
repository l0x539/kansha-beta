'use client'
import { updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch } from "@/store/hooks";
import { useSpring } from "@react-spring/web";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { Next } from "./Icons";
import { COMMING_SOON } from "@/utils/constants";

const SERVICES = {
  discovery: 0,
  development: 1,
  team: 2,
  design: 3,
  services: 4,
}

const Service = () => {
  
  return (<div className="w-screen h-[50vh] flex justify-center mt-80 overflow-x-hidden">
    <div className="ml-72 w-96">
      <Carousel />
    </div>
  </div>);
};

const Carousel= () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateView(7));
  }, [dispatch]);

  const router = useRouter();
  const {
    slug
  } = useParams() as {
    slug: 'discovery' | 'development' | 'team' | 'design' | 'services';
  };

  const defaultSelected = SERVICES[slug];

  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const onNextButton = () => {
    router.push(`/services/${Object.keys(SERVICES)[(defaultSelected + 1) % 5] + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}`)
  }

  return (<>
    <div className="flex relative">
      <Pan current={0} selected={defaultSelected}>
        <h3 className="text-5xl text-white mb-6">Discovery</h3>
        <p className="w-96 text-lg text-white mb-16">
        The Discovery Phase is an awesome service that combines UX and tech research, prototype creation, and development roadmap - all to give your future MVP the best shot at success! Discover tech challenges early and get ready for smooth development! 
        </p>
      </Pan>
      <Pan current={1} selected={defaultSelected}>
        <h3 className="text-4xl text-white mb-6">MVP Development</h3>
        <p className="w-96 text-lg text-white mb-16">
        The Discovery Phase is an awesome service that combines UX and tech research, prototype creation, and development roadmap – all to give your future MVP the best shot at success! Discover tech challenges early and get ready for smooth development! 
        </p>
      </Pan>
      <Pan current={2} selected={defaultSelected}>
        <h3 className="text-5xl text-white mb-6">Product Team</h3>
        <p className="w-96 text-lg text-white mb-16">
        The Discovery Phase is an awesome service that combines UX and tech research, prototype creation, and development roadmap - all to give your future MVP the best shot at success! Discover tech challenges early and get ready for smooth development! 
        </p>
      </Pan>
      <Pan current={3} selected={defaultSelected}>
        <h3 className="text-5xl text-white mb-6">Product Design</h3>
        <p className="w-96 text-lg text-white mb-16">
        The Discovery Phase is an awesome service that combines UX and tech research, prototype creation, and development roadmap - all to give your future MVP the best shot at success! Discover tech challenges early and get ready for smooth development! 
        </p>
      </Pan>
      <Pan current={4} selected={defaultSelected}>
        <h3 className="text-5xl text-white mb-6">All services</h3>
        <p className="w-96 text-lg text-white mb-16">
        The Discovery Phase is an awesome service that combines UX and tech research, prototype creation, and development roadmap - all to give your future MVP the best shot at success! Discover tech challenges early and get ready for smooth development! 
        </p>
      </Pan>
    </div>
    <div>
      <ul className="relative -bottom-72 inline-flex gap-3.5">
        {[0, 1, 2, 3, 4].map((number) => (
          <SelectButton onClick={() => {
            router.push(`/services/${Object.keys(SERVICES)[number] + (searchParams.get('demo') && COMMING_SOON ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}`)
          }} key={number} active={number === defaultSelected}>{number+1}</SelectButton>
        ))}
        <li onClick={onNextButton} className="flex cursor-pointer items-center rounded-full">
          <Next />
        </li>
      </ul>
    </div>
  </>);
};

const Pan: FC<{
  current: number;
  selected: number;
  children: ReactNode;
}> = ({
  current,
  selected,
  children
}) => {
  return (<div className={`
  absolute left-0 transition-all duration-1000 top-0 ${selected === current ? 'translate-x-0' : selected > current ? `translate-x-[-${100*(current+1)}vw]` : `translate-x-[${100*(current+1)}vw]`}`}>
    {children}
  </div>);
};

export const SelectButton: FC<{
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
}> = ({
  children,
  active = false,
  onClick
}) => {
  return (
    <>
      <li onClick={onClick} className="group w-12 h-12 hover:cursor-pointer select-none">
        <div  className={`absolute w-12 h-12 flex justify-center items-center rounded-full border group-hover:bg-[#5E5E5E] group-hover:border-transparent ${active ? 'bg-[#5E5E5E] text-white border-transparent' : 'bg-transparent text-[#2E2E2E] border-[#959595]'}  mix-blend-difference shadow-[0px_2.2926828861236572px_2.2926828861236572px_0px_rgba(0,0,0,0.25)_inset] backdrop-opacity-70`}></div>
        <div className={`absolute w-12 h-12 flex justify-center items-center group-hover:text-white ${active ? 'text-white' : 'text-[#2E2E2E]'} text-base font-gothic font-light`}>{children}</div>
      </li>
    </>
  );
}

export default Service;